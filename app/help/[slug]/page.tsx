import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import {
  helpArticleBySlugQuery,
  helpArticleSlugsQuery,
  helpCategoriesQuery,
} from "@/sanity/lib/queries";
import { Body } from "@/components/PortableTextRenderer";
import { HelpNav } from "@/components/HelpNav";
import { ArticleToc } from "@/components/ArticleToc";
import { extractToc } from "@/lib/toc";

// Static export: pre-render one page per known slug at build time; unknown
// slugs 404 (no server to render them on demand). Content refreshes when the
// Sanity webhook triggers a rebuild.
export const dynamicParams = false;

type Article = {
  title: string;
  excerpt?: string;
  updatedAt?: string;
  body?: unknown;
  category?: { title?: string; slug?: string };
};

type NavCategory = {
  _id: string;
  title: string;
  slug: string;
  articles?: { _id: string; title: string; slug: string }[];
};

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(helpArticleSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await sanityFetch<Article | null>(helpArticleBySlugQuery, { slug }, null);
  if (!article) return { title: "Help · Runwayz" };
  return {
    title: `${article.title} · Help · Runwayz`,
    description: article.excerpt,
  };
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, categories] = await Promise.all([
    sanityFetch<Article | null>(helpArticleBySlugQuery, { slug }, null),
    sanityFetch<NavCategory[]>(helpCategoriesQuery),
  ]);

  if (!article) notFound();

  const toc = extractToc(article.body);

  return (
    <div className="lg:grid lg:grid-cols-[210px_minmax(0,1fr)_190px] lg:gap-10">
      <aside className="mb-10 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
        <HelpNav categories={categories} currentSlug={slug} />
      </aside>

      <article data-pagefind-body className="min-w-0 max-w-2xl">
        {article.category?.title && (
          <p className="text-xs uppercase tracking-widest text-fg3">{article.category.title}</p>
        )}
        <h1 className="mt-2 text-[2.2rem] font-semibold tracking-tight">{article.title}</h1>
        {article.excerpt && <p className="mt-3 text-lg text-fg2">{article.excerpt}</p>}

        <div className="mt-8">
          <Body value={article.body} />
        </div>

        {article.updatedAt && (
          <p data-pagefind-ignore className="mt-12 border-t border-border pt-6 text-sm text-fg3">
            Last updated {new Date(article.updatedAt).toLocaleDateString()}
          </p>
        )}
      </article>

      <aside className="mt-10 hidden lg:mt-0 lg:block lg:sticky lg:top-24 lg:self-start">
        <ArticleToc items={toc} />
      </aside>
    </div>
  );
}

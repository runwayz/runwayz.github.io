import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import {
  helpArticleByAudienceSlugQuery,
  helpArticleParamsQuery,
  helpCategoriesByAudienceQuery,
} from "@/sanity/lib/queries";
import { Body } from "@/components/PortableTextRenderer";
import { HelpNav } from "@/components/HelpNav";
import { ArticleToc } from "@/components/ArticleToc";
import { extractToc } from "@/lib/toc";
import { AUDIENCES, isAudience } from "@/lib/help";

// Static export: pre-render one page per known (audience, slug); unknown ones
// 404. Content refreshes when the Sanity webhook triggers a rebuild.
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
  const rows = await sanityFetch<{ slug: string; audience: string }[]>(helpArticleParamsQuery);
  return rows
    .filter((r) => r.slug && isAudience(r.audience))
    .map((r) => ({ audience: r.audience, slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string; slug: string }>;
}): Promise<Metadata> {
  const { audience, slug } = await params;
  const article = await sanityFetch<Article | null>(
    helpArticleByAudienceSlugQuery,
    { audience, slug },
    null,
  );
  if (!article) return { title: "Help · Runwayz" };
  return { title: `${article.title} · Help · Runwayz`, description: article.excerpt };
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ audience: string; slug: string }>;
}) {
  const { audience, slug } = await params;
  if (!isAudience(audience)) notFound();

  const [article, categories] = await Promise.all([
    sanityFetch<Article | null>(helpArticleByAudienceSlugQuery, { audience, slug }, null),
    sanityFetch<NavCategory[]>(helpCategoriesByAudienceQuery, { audience }),
  ]);

  if (!article) notFound();

  const toc = extractToc(article.body);

  return (
    <div className="lg:grid lg:grid-cols-[210px_minmax(0,1fr)_190px] lg:gap-10">
      <aside className="mb-10 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
        <HelpNav audience={audience} categories={categories} currentSlug={slug} />
      </aside>

      <article data-pagefind-body className="min-w-0 max-w-2xl">
        <nav className="text-xs uppercase tracking-widest text-fg3">
          <Link href={`/help/${audience}`} className="hover:text-fg1">
            {AUDIENCES[audience].label}
          </Link>
          {article.category?.title && <span> · {article.category.title}</span>}
        </nav>
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

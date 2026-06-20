import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { helpCategoriesByAudienceQuery } from "@/sanity/lib/queries";
import { AUDIENCES, AUDIENCE_SLUGS, isAudience } from "@/lib/help";

// Static export: one section page per known audience; anything else 404s.
export const dynamicParams = false;

type Article = { _id: string; title: string; slug: string; excerpt?: string };
type Category = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  articles?: Article[];
};

export function generateStaticParams() {
  return AUDIENCE_SLUGS.map((audience) => ({ audience }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string }>;
}): Promise<Metadata> {
  const { audience } = await params;
  if (!isAudience(audience)) return { title: "Help · Runwayz" };
  return { title: `${AUDIENCES[audience].title} · Runwayz` };
}

export default async function HelpAudienceIndex({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience } = await params;
  if (!isAudience(audience)) notFound();
  const meta = AUDIENCES[audience];

  const categories = await sanityFetch<Category[]>(helpCategoriesByAudienceQuery, { audience });
  const withArticles = categories.filter((c) => (c.articles?.length ?? 0) > 0);

  return (
    <div className="mx-auto max-w-3xl">
      <Link href="/help" className="text-sm text-fg3 hover:text-fg1">
        ← Help home
      </Link>
      <h1 className="mt-4 text-[2.7rem] font-semibold tracking-tight">{meta.title}</h1>
      <p className="mt-3 text-fg2">{meta.blurb}</p>

      {withArticles.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="mt-12 space-y-12">
          {withArticles.map((cat) => (
            <section key={cat._id}>
              <h2 className="text-xl font-semibold tracking-tight">{cat.title}</h2>
              {cat.description && <p className="mt-1 text-sm text-fg3">{cat.description}</p>}
              <ul className="mt-4 space-y-3">
                {cat.articles!.map((a) => (
                  <li key={a._id}>
                    <Link href={`/help/${audience}/${a.slug}`} className="group block">
                      <span className="font-medium text-fg1 group-hover:text-accent group-hover:underline">
                        {a.title}
                      </span>
                      {a.excerpt && <span className="mt-0.5 block text-sm text-fg2">{a.excerpt}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <p className="mt-12 border-t border-border pt-8 text-sm text-fg2">
        Still stuck? Email{" "}
        <a href="mailto:hello@runwayz.com" className="font-medium text-accent underline underline-offset-2">
          hello@runwayz.com
        </a>
        .
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-fg3">
      No articles in this section yet. Add a Help Category (with this audience) and
      a Help Article in{" "}
      <Link href="/studio" className="underline">
        Sanity Studio
      </Link>
      .
    </div>
  );
}

import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";
import { helpCategoriesQuery } from "@/sanity/lib/queries";
import { HelpSearch } from "@/components/HelpSearch";

export const metadata = { title: "Help Center · Runwayz" };

type Article = { _id: string; title: string; slug: string; excerpt?: string };
type Category = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  articles?: Article[];
};

export default async function HelpIndex() {
  const categories = await sanityFetch<Category[]>(helpCategoriesQuery);
  const withArticles = categories.filter((c) => (c.articles?.length ?? 0) > 0);

  return (
    <div>
      <h1 className="text-[2.7rem] font-semibold tracking-tight">Help Center</h1>
      <p className="mt-3 max-w-3xl text-fg2">
        Guides and answers for getting the most out of Runwayz.
      </p>

      <div className="mt-8 max-w-2xl">
        <HelpSearch />
      </div>

      {withArticles.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {withArticles.map((cat) => (
            <section key={cat._id}>
              <h2 className="text-xl font-semibold tracking-tight">{cat.title}</h2>
              {cat.description && <p className="mt-1 text-sm text-fg3">{cat.description}</p>}
              <ul className="mt-4 space-y-3">
                {cat.articles!.map((a) => (
                  <li key={a._id}>
                    <Link href={`/help/${a.slug}`} className="group block">
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
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-fg3">
      No help articles yet. Add a Help Category and Help Article in{" "}
      <Link href="/studio" className="underline">
        Sanity Studio
      </Link>
      .
    </div>
  );
}

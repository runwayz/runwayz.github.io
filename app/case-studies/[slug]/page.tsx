import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { caseStudyBySlugQuery, caseStudySlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Body } from "@/components/PortableTextRenderer";
import type { SanityImageSource } from "@sanity/image-url";

export const revalidate = 60;

type CaseStudy = {
  title: string;
  client: string;
  summary?: string;
  logo?: SanityImageSource;
  metrics?: { value: string; label: string }[];
  body?: unknown;
};

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(caseStudySlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await sanityFetch<CaseStudy | null>(caseStudyBySlugQuery, { slug }, null);

  if (!study) notFound();

  return (
    <article>
      <header className="border-b border-border pb-10">
        {study.logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={urlFor(study.logo).width(160).fit("max").url()}
            alt={study.client}
            className="h-12 object-contain"
          />
        )}
        <p className="mt-6 text-sm uppercase tracking-widest text-fg3">{study.client}</p>
        <h1 className="mt-2 max-w-3xl text-[2.7rem] font-semibold tracking-tight">{study.title}</h1>
        {study.summary && <p className="mt-4 max-w-2xl text-lg text-fg2">{study.summary}</p>}

        {study.metrics && study.metrics.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {study.metrics.map((m, i) => (
              <div key={i}>
                <dt className="text-3xl font-semibold tracking-tight">{m.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-fg3">{m.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <div className="mx-auto mt-10 max-w-2xl">
        <Body value={study.body} />
      </div>
    </article>
  );
}

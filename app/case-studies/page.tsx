import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";
import { caseStudiesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

export const metadata = { title: "Case Studies · Runwayz" };
export const revalidate = 60;

type CaseStudy = {
  _id: string;
  title: string;
  slug: string;
  client: string;
  summary?: string;
  logo?: SanityImageSource;
  metrics?: { value: string; label: string }[];
};

export default async function CaseStudiesIndex() {
  const studies = await sanityFetch<CaseStudy[]>(caseStudiesQuery);

  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight">Case Studies</h1>
      <p className="mt-3 text-gray-600">How teams win with us.</p>

      {studies.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
          No case studies yet. Add one in{" "}
          <Link href="/studio" className="underline">
            Sanity Studio
          </Link>
          .
        </div>
      ) : (
        <div className="mt-10 grid gap-6">
          {studies.map((study) => (
            <Link
              key={study._id}
              href={`/case-studies/${study.slug}`}
              className="group flex items-center gap-6 rounded-2xl border border-gray-100 p-6 hover:border-gray-300"
            >
              {study.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={urlFor(study.logo).width(120).height(120).fit("max").url()}
                  alt={study.client}
                  className="h-12 w-12 shrink-0 object-contain"
                />
              )}
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wide text-gray-400">{study.client}</p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight group-hover:underline">
                  {study.title}
                </h2>
                {study.summary && <p className="mt-1 text-sm text-gray-600">{study.summary}</p>}
              </div>
              {study.metrics?.[0] && (
                <div className="hidden shrink-0 text-right sm:block">
                  <div className="text-2xl font-semibold">{study.metrics[0].value}</div>
                  <div className="text-xs uppercase tracking-wide text-gray-400">
                    {study.metrics[0].label}
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

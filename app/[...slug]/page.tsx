import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { pageByPathQuery, pageParamsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PageTemplate } from "@/components/PageTemplate";
import { Body } from "@/components/PortableTextRenderer";
import type { SanityImageSource } from "@sanity/image-url";

// Static export: pre-render one page per published "page" document at build
// time; unknown paths 404. Content refreshes when the Sanity webhook triggers
// a rebuild.
export const dynamicParams = false;

// Paths and namespaces owned by hand-built routes. Schema validation blocks
// editors from picking these; this filter is the backstop that keeps a bad
// document from colliding with a real route in the static export.
const STATIC_PATHS = new Set([
  "associations",
  "blog",
  "case-studies",
  "contact",
  "education",
  "employers",
  "help",
  "platform",
  "privacy",
  "studio",
  "style-guide",
  "talent",
  "terms",
  "unions",
  "unions-associations",
  "workforce-boards",
  "platform/partners",
  "platform/talent",
  "help/talent",
  "help/partners",
]);
const OWNED_NAMESPACES = new Set(["blog", "case-studies", "help", "studio"]);

type Page = {
  title: string;
  eyebrow?: string;
  description?: string;
  heroImage?: SanityImageSource;
  body?: unknown;
  showClosingCta?: boolean;
};

// Splits the catch-all segments into (parent, slug). Pages are at most two
// levels deep: /<parent route>/<slug> or /<slug>.
function pathParams(segments: string[]) {
  if (segments.length === 1) return { parent: "", slug: segments[0] };
  if (segments.length === 2) return { parent: segments[0], slug: segments[1] };
  return null;
}

export async function generateStaticParams() {
  const rows = await sanityFetch<{ slug: string; parent?: string | null }[]>(pageParamsQuery);
  const params = rows
    .map((r) => (r.parent ? [r.parent, r.slug] : [r.slug]))
    .filter((segments) => !STATIC_PATHS.has(segments.join("/")) && !OWNED_NAMESPACES.has(segments[0]))
    .map((segments) => ({ slug: segments }));
  // `output: export` fails the build when a dynamic route has zero params
  // ("missing generateStaticParams"). With no published pages yet, emit one
  // placeholder param; no such document exists, so the component notFound()s
  // and the path just renders 404 content. Keeps the deploy green either way.
  return params.length > 0 ? params : [{ slug: ["__placeholder"] }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = pathParams(slug);
  if (!path) return { title: "Runwayz" };
  const page = await sanityFetch<Page | null>(pageByPathQuery, path, null);
  if (!page) return { title: "Runwayz" };
  return { title: `${page.title} · Runwayz`, description: page.description };
}

export default async function StandardPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = pathParams(slug);
  if (!path) notFound();

  const page = await sanityFetch<Page | null>(pageByPathQuery, path, null);
  if (!page) notFound();

  return (
    <PageTemplate
      eyebrow={page.eyebrow ?? ""}
      title={page.title}
      subtitle={page.description ?? ""}
      image={page.heroImage ? urlFor(page.heroImage).width(2400).fit("max").url() : undefined}
      scrim={page.heroImage ? "dark" : undefined}
      closingCta={page.showClosingCta !== false}
    >
      {page.body ? (
        <section className="mt-6 max-w-3xl">
          <Body value={page.body} />
        </section>
      ) : null}
    </PageTemplate>
  );
}

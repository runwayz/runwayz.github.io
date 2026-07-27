import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { pageByPathQuery, pageParamsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PageTemplate } from "@/components/PageTemplate";
import { Body } from "@/components/PortableTextRenderer";
import { ProtectedPage } from "@/components/ProtectedPage";
import { sealPagePayload } from "@/lib/pageCrypto";
import { STATIC_PATHS, OWNED_NAMESPACES } from "@/lib/reservedPaths";
import type { SanityImageSource } from "@sanity/image-url";

// Static export: pre-render one page per published "page" document at build
// time; unknown paths 404. Content refreshes when the Sanity webhook triggers
// a rebuild.
export const dynamicParams = false;

// Paths and namespaces owned by hand-built routes (lib/reservedPaths.ts,
// shared with the Studio validation). Schema validation blocks editors from
// picking these; this filter is the backstop that keeps a bad document from
// colliding with a real route in the static export.
const RESERVED_PATHS = new Set(STATIC_PATHS);
const RESERVED_NAMESPACES = new Set(OWNED_NAMESPACES);

type Page = {
  title: string;
  eyebrow?: string;
  description?: string;
  heroImage?: SanityImageSource;
  body?: unknown;
  showClosingCta?: boolean;
  protected?: boolean;
  password?: string;
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
    .filter((segments) => !RESERVED_PATHS.has(segments.join("/")) && !RESERVED_NAMESPACES.has(segments[0]))
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
  // Protected pages keep their title and description out of the static HTML.
  if (page.protected) return { title: "Protected page · Runwayz", robots: { index: false } };
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

  // Protected page: encrypt the whole payload at build time with the password
  // from Sanity, and ship ONLY ciphertext plus the unlock form. Nothing from
  // the page (not even the title) may be rendered here, or it would land in
  // the static HTML and the RSC payload in plain text.
  if (page.protected && page.password) {
    const sealed = await sealPagePayload(
      {
        title: page.title,
        eyebrow: page.eyebrow,
        description: page.description,
        heroImageUrl: page.heroImage
          ? urlFor(page.heroImage).width(2400).fit("max").url()
          : undefined,
        body: page.body,
        showClosingCta: page.showClosingCta !== false,
      },
      page.password,
    );
    return <ProtectedPage sealed={sealed} storageKey={[path.parent, path.slug].filter(Boolean).join("/")} />;
  }

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

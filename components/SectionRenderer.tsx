import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";
import { Body } from "@/components/PortableTextRenderer";

// Renders the `sections` page-builder field (sanity/schemas/sections.ts).
// One component per block type; layout and styling are fixed here so editors
// compose pages without ever producing off-brand markup. Works in both server
// components (app/[...slug]) and the client (ProtectedPage).

type SectionBase = { _type: string; _key: string; eyebrow?: string; heading?: string };
type SanityImage = SanityImageSource & { alt?: string };

function img(source: SanityImage | undefined, width: number) {
  return source ? urlFor(source).width(width).fit("max").auto("format").url() : "";
}

// Standard section header: eyebrow + full-width H2 (content headline rule).
function SectionHeader({ eyebrow, heading }: { eyebrow?: string; heading?: string }) {
  if (!eyebrow && !heading) return null;
  return (
    <>
      {eyebrow && (
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">{eyebrow}</p>
      )}
      {heading && (
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">{heading}</h2>
      )}
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
function RichTextSection({ s }: { s: SectionBase & { body?: unknown } }) {
  return (
    <>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} />
      <div className="max-w-3xl [&>*:first-child]:mt-0 mt-4">
        <Body value={s.body} />
      </div>
    </>
  );
}

function SplitSection({
  s,
}: {
  s: SectionBase & { body?: unknown; image?: SanityImage; imageSide?: string };
}) {
  const image = (
    <img
      src={img(s.image, 1200)}
      alt={s.image?.alt || ""}
      className="w-full rounded-2xl border border-border"
    />
  );
  return (
    <>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} />
      <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
        {s.imageSide === "left" ? image : null}
        <div className="min-w-0 [&>*:first-child]:mt-0">
          <Body value={s.body} />
        </div>
        {s.imageSide === "left" ? null : image}
      </div>
    </>
  );
}

function FeatureGridSection({
  s,
}: {
  s: SectionBase & {
    columns?: number;
    items?: { _key: string; title?: string; body?: string; image?: SanityImage }[];
  };
}) {
  const cols = s.columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} />
      <div className={`mt-10 grid gap-6 ${cols}`}>
        {(s.items ?? []).map((item) => (
          <div key={item._key} className="rounded-2xl border border-border bg-surface p-6">
            {item.image && (
              <img
                src={img(item.image, 800)}
                alt={item.image.alt || ""}
                className="mb-4 w-full rounded-xl"
              />
            )}
            <h3 className="text-xl font-bold tracking-tight text-fg1">{item.title}</h3>
            {item.body && <p className="mt-2 text-sm leading-[1.55] text-fg2">{item.body}</p>}
          </div>
        ))}
      </div>
    </>
  );
}

function StatBandSection({
  s,
}: {
  s: SectionBase & { stats?: { _key: string; value?: string; label?: string }[] };
}) {
  const stats = s.stats ?? [];
  const cols = ["", "md:grid-cols-1", "md:grid-cols-2", "md:grid-cols-3", "md:grid-cols-4"][
    stats.length
  ] || "md:grid-cols-4";
  return (
    <>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} />
      <div className={`mt-10 grid grid-cols-2 gap-6 ${cols}`}>
        {stats.map((stat) => (
          <div key={stat._key} className="rounded-2xl border border-border bg-surface p-6 text-center">
            <p className="text-4xl font-bold tracking-tight text-accent">{stat.value}</p>
            <p className="mt-2 text-sm text-fg2">{stat.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function LogoWallSection({
  s,
}: {
  s: SectionBase & { logos?: (SanityImage & { _key: string })[] };
}) {
  return (
    <>
      <SectionHeader eyebrow={s.eyebrow} heading={s.heading} />
      <div className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-8">
        {(s.logos ?? []).map((logo) => (
          <img
            key={logo._key}
            src={img(logo, 400)}
            alt={logo.alt || ""}
            className="h-10 w-auto"
          />
        ))}
      </div>
    </>
  );
}

function QuoteSection({ s }: { s: SectionBase & { quote?: string; attribution?: string } }) {
  return (
    <figure className="mx-auto max-w-3xl">
      <blockquote className="text-2xl font-medium leading-snug tracking-tight text-fg1">
        “{s.quote}”
      </blockquote>
      {s.attribution && (
        <figcaption className="mt-3 text-sm uppercase tracking-wide text-fg3">
          {s.attribution}
        </figcaption>
      )}
    </figure>
  );
}

function CtaBandSection({
  s,
}: {
  s: SectionBase & { body?: string; buttonLabel?: string; buttonHref?: string };
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-10 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-fg1">{s.heading}</h2>
      {s.body && <p className="mx-auto mt-3 max-w-3xl text-fg2">{s.body}</p>}
      <div className="mt-6 flex justify-center">
        <a
          href={s.buttonHref}
          className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
        >
          {s.buttonLabel}
        </a>
      </div>
    </div>
  );
}
/* eslint-enable @next/next/no-img-element */

export function Sections({ value }: { value?: unknown }) {
  const sections = (value as SectionBase[] | undefined | null) ?? [];
  if (!sections.length) return null;
  return (
    <>
      {sections.map((s) => (
        <section key={s._key} className="mt-16 border-t border-border pt-12">
          {s._type === "sectionRichText" && <RichTextSection s={s} />}
          {s._type === "sectionSplit" && <SplitSection s={s} />}
          {s._type === "sectionFeatureGrid" && <FeatureGridSection s={s} />}
          {s._type === "sectionStatBand" && <StatBandSection s={s} />}
          {s._type === "sectionLogoWall" && <LogoWallSection s={s} />}
          {s._type === "sectionQuote" && <QuoteSection s={s} />}
          {s._type === "sectionCtaBand" && <CtaBandSection s={s} />}
        </section>
      ))}
    </>
  );
}

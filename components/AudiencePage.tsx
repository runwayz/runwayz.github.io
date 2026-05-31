import Link from "next/link";

type Point = { title: string; body: string };

export type AudiencePageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  points: Point[];
  ctaLabel?: string;
  ctaHref?: string;
};

// Shared template for the audience landing pages (Talent + each "Who we serve"
// segment). Uses Art Deco v2 semantic tokens + Cabin type scale.
export function AudiencePage({
  eyebrow,
  title,
  subtitle,
  points,
  ctaLabel = "Get a demo",
  ctaHref = "/contact",
}: AudiencePageProps) {
  return (
    <div className="py-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl text-[2.7rem] font-bold tracking-tight text-fg1 sm:text-[3.6rem]">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-[1.55] text-fg2">{subtitle}</p>

      <div className="mt-8">
        <Link
          href={ctaHref}
          className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
        >
          {ctaLabel}
        </Link>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <h2 className="font-semibold text-fg1">{p.title}</h2>
            <p className="mt-2 text-sm text-fg2">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-dashed border-border px-8 py-12 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
          Roughed in
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg1">
          This page is a placeholder
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-fg2">
          Tailored messaging, proof points, and a {ctaLabel.toLowerCase()} flow
          for this audience come next.
        </p>
      </div>
    </div>
  );
}

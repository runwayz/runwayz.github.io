import Image from "next/image";

type Scrim = "none" | "dark" | "warm";

type HeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  /** CTA button(s) for the hero. */
  children?: React.ReactNode;
  /** Background image src. When omitted, renders a text-only hero. */
  image?: string;
  /** Legibility scrim over the image (image heroes only). */
  scrim?: Scrim;
};

const SCRIM: Record<Scrim, string> = {
  none: "",
  dark: "bg-gradient-to-r from-black/55 via-black/20 to-transparent",
  warm: "bg-gradient-to-r from-[#e17248]/55 via-[#e17248]/15 to-transparent",
};

// Shared hero for every top-level page. One source of truth for text widths,
// spacing, heights, and the full-bleed image treatment so heroes stay identical.
export function Hero({ eyebrow, title, subtitle, children, image, scrim = "none" }: HeroProps) {
  // Text-only hero (no background image).
  if (!image) {
    return (
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-[2.7rem] font-bold tracking-tight text-fg1 sm:text-[3.6rem]">
          {title}
        </h1>
        <p className="subheading mt-6 max-w-xl text-fg2">{subtitle}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    );
  }

  // Full-bleed image hero.
  return (
    <section className="relative left-1/2 -mt-12 w-screen -translate-x-1/2 overflow-hidden">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-top" />
      {scrim !== "none" ? (
        <div aria-hidden className={`pointer-events-none absolute inset-0 z-[1] ${SCRIM[scrim]}`} />
      ) : null}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/2 bg-gradient-to-b from-page/0 to-page"
      />
      <div className="relative z-[2] mx-auto min-h-[520px] w-full max-w-6xl px-6 pb-28 pt-20 sm:min-h-[860px] sm:pt-28">
        <div className="max-w-3xl [text-shadow:0_1px_18px_rgba(0,0,0,0.55)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F5ECD7]/90">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-[2.7rem] font-bold tracking-tight text-[#F5ECD7] sm:text-[3.6rem]">
            {title}
          </h1>
          {/* Tablet and below: subhead + CTA sit in a frosted panel for legibility.
              lg and up: plain cream text directly over the image. */}
          <div className="mt-6 max-w-xl rounded-2xl border border-border bg-surface/90 p-6 backdrop-blur-sm [text-shadow:none] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:[text-shadow:0_1px_18px_rgba(0,0,0,0.55)]">
            <p className="subheading text-fg2 lg:text-[#F5ECD7]">{subtitle}</p>
            {children ? <div className="mt-6 lg:[text-shadow:none]">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

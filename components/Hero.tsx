import Image from "next/image";

type Scrim = "none" | "dark" | "warm";
type HeroSize = "default" | "compact";

type HeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  /** CTA button(s) for the hero. */
  children?: React.ReactNode;
  /** Background image src. When omitted, renders a text-only hero. */
  image?: string;
  /** Legibility scrim over the image (default-size image heroes only). */
  scrim?: Scrim;
  /** "compact" is the CMS standard-page variant: half height, and a built-in
      theme-aware fog treatment so editors can upload raw photos with no
      designed-in gradients. Text-only heroes are unaffected. */
  size?: HeroSize;
};

// Scrims strengthen on lg+ (where the copy sits directly over the image; below
// lg the subhead/CTA are in the frosted panel). `none` still gets a desktop wash.
const SCRIM: Record<Scrim, string> = {
  none: "lg:bg-gradient-to-r lg:from-black/45 lg:via-black/15 lg:to-transparent",
  dark: "bg-gradient-to-r from-black/55 via-black/20 to-transparent lg:from-black/65 lg:via-black/30",
  warm: "bg-gradient-to-r from-[#e17248]/55 via-[#e17248]/15 to-transparent lg:from-[#e17248]/70 lg:via-[#e17248]/25",
};

// Shared hero for every top-level page. One source of truth for text widths,
// spacing, heights, and the full-bleed image treatment so heroes stay identical.
export function Hero({ eyebrow, title, subtitle, children, image, scrim = "none", size = "default" }: HeroProps) {
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

  // Compact image hero (CMS standard pages): half height, with a built-in fog
  // treatment that works with ANY raw photo in both themes. The image stays
  // strongest top-right; a page-colored wash covers the text area and the
  // bottom melts into the page background (`page` token: cream in light mode,
  // dark in dark mode). Because the text sits on the wash, it uses the normal
  // fg tokens instead of the fixed cream-over-scrim of the default hero.
  if (size === "compact") {
    return (
      <section className="relative left-1/2 -mt-12 w-screen -translate-x-1/2 overflow-hidden">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-top" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-page via-page/75 to-page/15"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-16 bg-gradient-to-b from-page/70 to-page/0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-2/3 bg-gradient-to-b from-page/0 via-page/60 to-page"
        />
        <div className="relative z-[2] mx-auto min-h-[260px] w-full max-w-6xl px-6 pb-16 pt-12 sm:min-h-[430px] sm:pt-16">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-[2.7rem] font-bold tracking-tight text-fg1 sm:text-[3.6rem]">
              {title}
            </h1>
            <p className="subheading mt-6 max-w-xl text-fg2">{subtitle}</p>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </div>
      </section>
    );
  }

  // Full-bleed image hero (hand-built pages).
  return (
    <section className="relative left-1/2 -mt-12 w-screen -translate-x-1/2 overflow-hidden">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-top" />
      <div aria-hidden className={`pointer-events-none absolute inset-0 z-[1] ${SCRIM[scrim]}`} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/2 bg-gradient-to-b from-page/0 to-page"
      />
      <div className="relative z-[2] mx-auto min-h-[520px] w-full max-w-6xl px-6 pb-28 pt-12 sm:min-h-[860px] sm:pt-20">
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

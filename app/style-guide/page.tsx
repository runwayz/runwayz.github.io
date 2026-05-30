import { readdirSync } from "fs";
import { join } from "path";

export const metadata = {
  title: "Brand Book · Runwayz",
  robots: { index: false, follow: false },
};

// Living style guide — auto-loads any posters dropped in /public/brand/vibe.
function vibePosters(): string[] {
  try {
    return readdirSync(join(process.cwd(), "public/brand/vibe"))
      .filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
      .sort();
  } catch {
    return [];
  }
}

const SEMANTIC = [
  { role: "Page background", v: "--bg-page", light: "#FAF4E6", dark: "#141A28" },
  { role: "Surface (cards)", v: "--bg-surface", light: "#FFFFFF", dark: "#1B2232" },
  { role: "Raised", v: "--bg-raised", light: "#FFFBF0", dark: "#272D3C" },
  { role: "Hero", v: "--bg-hero", light: "#F5ECD7", dark: "#0C1018" },
  { role: "Border", v: "--border", light: "#DDE0E7", dark: "#272D3C" },
  { role: "Text — primary", v: "--fg1", light: "#1F2430", dark: "#F5ECD7" },
  { role: "Text — secondary", v: "--fg2", light: "#4A5264", dark: "#DDE0E7" },
  { role: "Text — tertiary", v: "--fg3", light: "#6E7688", dark: "#7A8294" },
  { role: "Accent (interactive)", v: "--accent", light: "#14609F", dark: "#7DB8E4" },
  { role: "Success", v: "--success", light: "#1F6C52", dark: "#5CB394" },
  { role: "Warning", v: "--warning", light: "#A86A10", dark: "#F4A02C" },
  { role: "Danger", v: "--danger", light: "#B63A2A", dark: "#E87666" },
];

// Poster accents — one per composition (decorative).
const POSTER_ACCENTS = [
  { name: "Cream", hex: "#F5ECD7", fg: "#1F2430" },
  { name: "Jade", hex: "#2F8F6E", fg: "#FFFFFF" },
  { name: "Jet Blue", hex: "#1E88D6", fg: "#FFFFFF" },
  { name: "Tangerine", hex: "#F4A02C", fg: "#1F2430" },
  { name: "Sunset", hex: "#F26A3A", fg: "#1F2430" },
  { name: "Brick", hex: "#B63A2A", fg: "#FFFFFF" },
];

function Section({
  n,
  title,
  desc,
  children,
}: {
  n: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-12">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
        {n}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg1">{title}</h2>
      {desc && <p className="mt-2 max-w-2xl text-fg2">{desc}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Sample({ mode, children }: { mode: "light" | "dark"; children: React.ReactNode }) {
  return (
    <div className={`${mode} rounded-xl border border-border bg-page p-6`}>
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
        {mode}
      </p>
      {children}
    </div>
  );
}

export default function StyleGuidePage() {
  const posters = vibePosters();

  return (
    <div className="py-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
        Living brand book
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-fg1 sm:text-5xl">
        Runwayz style guide
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-[1.55] text-fg2">
        Every token, type style, and component — rendered live. Color rows show
        both modes side by side; everything else follows the current mode (toggle
        is in the footer). Built on the Art Deco v2 design tokens.
      </p>

      {/* Logo */}
      <Section n="01" title="Logo" desc="Full lockup, light and dark backgrounds.">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* eslint-disable @next/next/no-img-element */}
          <div className="light flex items-center justify-center rounded-xl border border-border bg-page p-10">
            <img src="/brand/runwayz-logo-light.svg" alt="Runwayz logo (light)" className="h-10 w-auto" />
          </div>
          <div className="dark flex items-center justify-center rounded-xl border border-border bg-page p-10">
            <img src="/brand/runwayz-logo-dark.svg" alt="Runwayz logo (dark)" className="h-10 w-auto" />
          </div>
          {/* eslint-enable @next/next/no-img-element */}
        </div>
      </Section>

      {/* Vibe */}
      <Section
        n="02"
        title="Vibe / posters"
        desc="The brand in the wild: bold display headline (one word italicized), real trade photography, a single accent chip per composition, money-forward copy, and the Runwayz lockup."
      >
        {posters.length === 0 ? (
          <p className="text-fg3">Drop posters into /public/brand/vibe to see them here.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {posters.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={p}
                src={`/brand/vibe/${p}`}
                alt={p}
                className="w-full rounded-xl border border-border"
              />
            ))}
          </div>
        )}
      </Section>

      {/* Color — semantic */}
      <Section
        n="03"
        title="Semantic color tokens"
        desc="These swap automatically by mode. Left swatch = light, right = dark. All pass WCAG AA on the surfaces they appear on."
      >
        <div className="overflow-hidden rounded-xl border border-border">
          {SEMANTIC.map((t) => (
            <div
              key={t.v}
              className="flex items-center gap-4 border-b border-border px-4 py-3 last:border-b-0"
            >
              <div className="flex gap-2">
                <div className="light">
                  <div
                    className="h-10 w-10 rounded-md border border-border"
                    style={{ background: `var(${t.v})` }}
                  />
                </div>
                <div className="dark">
                  <div
                    className="h-10 w-10 rounded-md border border-border"
                    style={{ background: `var(${t.v})` }}
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-fg1">{t.role}</p>
                <p className="font-mono text-xs text-fg3">
                  {t.v} · {t.light} / {t.dark}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Color — poster accents */}
      <Section
        n="04"
        title="Poster accents"
        desc="Decorative — one per composition. Lives in the chip, never as a card border stripe."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {POSTER_ACCENTS.map((a) => (
            <div key={a.name} className="overflow-hidden rounded-lg border border-border">
              <div
                className="flex h-20 items-end p-2 text-xs font-semibold"
                style={{ background: a.hex, color: a.fg }}
              >
                {a.name}
              </div>
              <div className="bg-surface px-2 py-1 font-mono text-[10px] text-fg3">
                {a.hex}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section
        n="05"
        title="Typography — Cabin"
        desc="Humanist sans in the Gill Sans tradition. Weight tops out at 700, so 700 handles display (the spec's 900 isn't available in Cabin)."
      >
        <div className="space-y-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-fg3">Display · 700 · -0.02em</p>
            <p className="text-5xl font-bold tracking-tight text-fg1">Build something real.</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-fg3">Heading 1 · 700</p>
            <p className="text-4xl font-bold tracking-tight text-fg1">Real work. Real pay.</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-fg3">Heading 2 · 700</p>
            <p className="text-2xl font-bold tracking-tight text-fg1">The basics</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-fg3">Eyebrow · 700 · 0.16em · UPPER</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg2">Section 01</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-fg3">Body · 400 · 1.55</p>
            <p className="max-w-xl text-base leading-[1.55] text-fg1">
              Plumbers make an average of $120K per year. Just saying.
            </p>
          </div>
        </div>
      </Section>

      {/* Components */}
      <Section n="06" title="Components" desc="Built from the semantic tokens — try the footer toggle to see dark.">
        <div className="space-y-10">
          {/* Buttons */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Buttons</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90">
                Continue
              </button>
              <button className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg1 hover:bg-raised">
                Back
              </button>
              <button className="rounded-full px-5 py-2.5 text-sm font-medium text-accent hover:underline">
                Skip for now
              </button>
              <button className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast opacity-50" disabled>
                Disabled
              </button>
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
              Tags — flat, 4px radius, one accent each
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Carpentry", ...POSTER_ACCENTS[0] },
                { label: "Plumber", ...POSTER_ACCENTS[1] },
                { label: "Welder", ...POSTER_ACCENTS[2] },
                { label: "HVAC", ...POSTER_ACCENTS[3] },
                { label: "Electrician", ...POSTER_ACCENTS[5] },
              ].map((t) => (
                <span
                  key={t.label}
                  className="rounded-sm px-2.5 py-1 text-xs font-semibold"
                  style={{ background: t.hex, color: t.fg }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* Inputs */}
          <div className="max-w-sm">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Form inputs</p>
            <label className="block text-sm font-medium text-fg1">Full name</label>
            <input
              placeholder="Charlie D."
              className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg1 placeholder:text-fg-placeholder focus:border-accent focus:outline-none"
            />
            <p className="mt-1 text-xs text-fg3">We use this to prioritize jobs near you.</p>

            <label className="mt-4 block text-sm font-medium text-fg1">Zip code</label>
            <input
              defaultValue="9999"
              className="mt-1 w-full rounded-lg border border-danger bg-surface px-3 py-2 text-sm text-fg1 focus:outline-none"
            />
            <p className="mt-1 text-xs text-danger">Zip must be 5 digits.</p>
          </div>

          {/* Status callouts */}
          <div className="max-w-md space-y-2">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Status</p>
            {[
              { c: "text-success", t: "Saved. Your profile is live." },
              { c: "text-warning", t: "Heads up. Certification expires in 14 days." },
              { c: "text-danger", t: "Can't save. Zip is invalid." },
              { c: "text-accent", t: "Tip. Add a project showcase to boost visibility 2×." },
            ].map((s) => (
              <div key={s.t} className="rounded-lg border border-border bg-surface px-3 py-2 text-sm">
                <span className={`font-semibold ${s.c}`}>●</span>{" "}
                <span className="text-fg1">{s.t}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Side by side */}
      <Section n="07" title="Light / dark side by side" desc="The same card composition in both modes.">
        <div className="grid gap-6 md:grid-cols-2">
          {(["light", "dark"] as const).map((mode) => (
            <Sample key={mode} mode={mode}>
              <div className="rounded-xl border border-border bg-surface p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">For Talent</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-fg1">Find your next opportunity</h3>
                <p className="mt-2 text-sm text-fg2">
                  Training, credentials, and jobs — surfaced through the people you trust.
                </p>
                <button className="mt-4 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-contrast">
                  Get started
                </button>
              </div>
            </Sample>
          ))}
        </div>
      </Section>
    </div>
  );
}

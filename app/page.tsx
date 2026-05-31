import Link from "next/link";
import Image from "next/image";
import { SERVE_GROUPS } from "@/lib/nav";

const SEGMENTS = SERVE_GROUPS.flatMap((g) => g.items);

export default function Home() {
  return (
    <div>
      {/* Full-bleed hero. Image + content share one grid cell (col/row-start-1),
          so the section grows to whichever is taller — the image shows at full
          natural height (no crop; its own transparency fades into the page),
          with the headline + panels overlaid on top. */}
      <section className="relative left-1/2 -mt-12 grid w-screen -translate-x-1/2">
        <Image
          src="/brand/hero.png"
          alt=""
          width={1900}
          height={1815}
          priority
          sizes="100vw"
          className="col-start-1 row-start-1 h-auto w-full self-start"
        />
        <div className="col-start-1 row-start-1 mx-auto w-full max-w-6xl self-start px-6 pb-16 pt-20 sm:pt-28">
          <div className="max-w-2xl [text-shadow:0_1px_18px_rgba(0,0,0,0.55)]">
            <h1 className="text-[2.7rem] font-bold tracking-tight text-[#F5ECD7] sm:text-[3.6rem]">
              Find your path.
              <br />
              Build your future.
            </h1>
            <p className="subheading mt-5 max-w-xl text-[#F5ECD7]/90">
              Runwayz helps your career take off.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 [text-shadow:none]">
              <Link
                href="/talent"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
              >
                For individuals
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#F5ECD7]/50 px-5 py-2.5 text-sm font-medium text-[#F5ECD7] hover:bg-white/10"
              >
                Get a demo
              </Link>
            </div>
          </div>

          {/* Two panels — 60px below the CTA buttons, sitting on top of the hero */}
          <div className="relative z-10 mt-[60px] grid gap-6 md:grid-cols-2">
            <Link
              href="/talent"
              className="group rounded-2xl border border-border bg-surface p-8 hover:border-accent"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
                For Talent
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg1">
                Find your next opportunity
              </h2>
              <p className="mt-2 text-fg2">
                Training, credentials, and jobs — surfaced through the union,
                program, or school you already belong to.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
                Explore for talent →
              </span>
            </Link>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
                For Organizations
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg1">
                Bring mobility to your people
              </h2>
              <p className="mt-2 text-fg2">Bring Runwayz to the people you serve:</p>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SEGMENTS.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-fg1 hover:bg-raised"
                  >
                    {s.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

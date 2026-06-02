import Link from "next/link";
import Image from "next/image";
import { SERVE_GROUPS } from "@/lib/nav";
import { TicketRotator } from "@/components/TicketRotator";

const SEGMENTS = SERVE_GROUPS.flatMap((g) => g.items);

const TALENT_STEPS = [
  {
    title: "See your Potential",
    body: "Not sure what careers are right for you? Runwayz helps you explore and refine your self-understanding through our Career Matchmaker (swipe right on careers you like), and see personalized recommendations on good fits.",
  },
  {
    title: "Believe your Potential",
    body: "See the gaps you'd need to close to get a job in a field you're interested in; get help finding good certification providers and guidance on how to proceed; build your profile up to have the strongest possible application.",
  },
  {
    title: "Achieve your Potential",
    body: "Apply, get opportunities: apprenticeships, internships, jobs, and union memberships. Keep advancing certifications and skills to level up.",
  },
];

const PARTNER_CRITERIA = [
  'High-Earning Potential Career Pathways, not just "jobs"',
  "Guarded from AI Disruption, due to strong technical skill requirements and required certifications",
  "Accessible entry points for required certifications or education",
];

// Partner logos render on white chips so full-color logos stay legible in both
// light and dark mode. Add more by giving a partner a `logo` path.
const PARTNERS: { name: string; logo: string }[] = [
  { name: "United Brotherhood of Carpenters", logo: "/brand/partners/carpenters-union.png" },
  { name: "Chemical Coaters Association International", logo: "/brand/partners/chemical-coaters.png" },
  { name: "NCCTE", logo: "/brand/partners/nccte.png" },
  { name: "San Antonio", logo: "/brand/partners/san-antonio.png" },
  { name: "Build Chicago", logo: "/brand/partners/build-chicago.png" },
  { name: "Howard County", logo: "/brand/partners/howard-county.png" },
  { name: "Chicago Hope Academy", logo: "/brand/partners/chicago-hope-academy.png" },
];

export default function Home() {
  return (
    <div>
      {/* Full-bleed hero. Image is a cover background sized to the content (so no
          empty gap below); object-top keeps the subject + red overlay in view.
          A bottom gradient (from-page/0 → to-page) fades the image into the page
          color — cream in light, midnight in dark — starting above the panels and
          progressing to solid by the bottom. The fade sits behind the panels. */}
      <section className="relative left-1/2 -mt-12 w-screen -translate-x-1/2 overflow-hidden">
        <Image
          src="/brand/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-2/3 bg-gradient-to-b from-page/0 to-page"
        />
        <div className="relative z-[2] flex w-full flex-col">
          <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-20 sm:pt-28">
            <div className="max-w-2xl [text-shadow:0_1px_18px_rgba(0,0,0,0.55)]">
              <h1 className="headline-xl text-[#F5ECD7]">
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
                  Training, credentials, and jobs, surfaced through the union,
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
                <p className="mt-2 text-fg2">
                  Bring Runwayz to the people you serve:
                </p>
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
        </div>
      </section>

      {/* Featured partners — full-bleed row; logos on white chips so they stay
          bright in dark mode. Sized ~30% larger than the default chip. */}
      <section className="relative left-1/2 -mt-[50px] w-screen -translate-x-1/2 py-12">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
          Featured partners
        </p>
        <div className="mx-auto mt-6 flex max-w-7xl flex-wrap items-center justify-center gap-5 px-6">
          {PARTNERS.map((p) => (
            <div
              key={p.logo}
              className="flex h-28 w-60 items-center justify-center rounded-xl border border-border bg-white p-5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-[4.5rem] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* For Talent */}
      <section className="border-t border-border py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
          For Talent
        </p>
        <div className="mt-4 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-fg1 sm:text-4xl">
              It&apos;s a scary time to enter the workforce. But you don&apos;t
              have to figure it all out alone.
            </h2>
            <p className="mt-4 max-w-xl text-fg2">
              &ldquo;What do you want to do when you grow up?&rdquo; was always an
              intimidating thing to be asked. But now, it feels even bigger. If
              you&apos;re thinking about your future and wondering
              what jobs will be safe from disruption by AI, or wondering which
              jobs can help you achieve your life and income goals...Runwayz is
              here to help.
            </p>
          </div>
          <div className="lg:pt-1">
            <TicketRotator />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TALENT_STEPS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-lg font-bold tracking-tight text-fg1">{s.title}</h3>
              <p className="mt-2 text-sm leading-[1.55] text-fg2">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/talent"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Get Runwayz
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg1 hover:bg-raised"
          >
            Take the Career Quiz
          </Link>
        </div>
      </section>

      {/* For Partners */}
      <section className="border-t border-border py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
          For Partners
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg1 sm:text-4xl">
          Runwayz partners with trade unions, trade associations, and employers
          in fields that provide future-proof careers for workers to help you
          recruit.
        </h2>
        <p className="mt-4 max-w-2xl text-fg2">
          Let Runwayz help you recruit the next generation of talent to join your
          union or association, or to fill open roles in your organization.
          Runwayz prioritizes partnerships with organizations in fields with
          roles that align to the Runwayz Mission:
        </p>
        <ul className="mt-6 max-w-3xl space-y-3">
          {PARTNER_CRITERIA.map((c) => (
            <li key={c} className="flex gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
              </svg>
              <span className="text-fg2">{c}</span>
            </li>
          ))}
        </ul>

        {/* Partner spotlights (placeholder) */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex aspect-[16/9] items-center justify-center rounded-2xl border border-border bg-fg3/10 text-sm font-medium text-fg3"
            >
              Partner spotlight
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <p className="text-fg2">Interested in supercharging your recruiting?</p>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Become a Runwayz Partner
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-border py-16">
        <p className="text-fg3">Helping young professionals &ldquo;get a job&rdquo; isn&apos;t enough.</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1 sm:text-4xl">
          Our mission is to build the careers (and livelihoods) of a bright
          future.
        </h2>
        <p className="mt-4 max-w-2xl text-fg2">
          The Runwayz mission is to help bridging early-career talent explore the
          wide range of careers they could pursue, see the pathways that will
          help them maximizing their lifetime income and quality of life, and
          systematically help them close gaps to enable them to advance.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg1 hover:bg-raised"
          >
            Learn about the Runwayz Project
          </Link>
        </div>
      </section>
    </div>
  );
}

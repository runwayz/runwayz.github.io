import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";

export const metadata = { title: "For Talent · Runwayz" };

const CRITERIA = [
  {
    title: "Future-proof",
    body: "Resilient to AI disruption, with tangible, skills-based certifications.",
  },
  {
    title: "High-income potential",
    body: "We prioritize connecting you to high-income career paths, not dead-end jobs.",
  },
  {
    title: "Cost-accessible",
    body: "Cost-accessible entry points for the education and certifications you'll need.",
  },
];

type Stage = { n: string; state: string; name: string; lead: string; bullets: string[] };

const STAGES: Stage[] = [
  {
    n: "01",
    state: "Interested",
    name: "Discover Pathways",
    lead: "There's a wide world of possible career paths — likely some you've never thought of. Runwayz helps you explore them all.",
    bullets: [
      "Browse and explore career paths you may never have heard of.",
      "Build a profile around your interests, working style, and life goals.",
      "Get sharper recommendations for paths that fit you the more you explore.",
    ],
  },
  {
    n: "02",
    state: "Pursuing",
    name: "Strengthen your Skills",
    lead: "Runwayz shows you the steps between where you are today and where you'd need to be to land a job in a specific path — and helps you close the gap, systematically.",
    bullets: [
      "See the required certifications, education, and requirements for each role.",
      "Build out your portfolio of projects (and get recommendations).",
      "Get help from the Runwayz coach to write a resume that positions your unique story.",
      "Log work-based learning hours directly inside Runwayz.",
    ],
  },
  {
    n: "03",
    state: "Advancing",
    name: "Gain Real Experience",
    lead: "Once you've found a path you want to explore more deeply, Runwayz helps you take the first step — connecting you with jobs and apprenticeships directly in the platform.",
    bullets: [
      "Find and apply to real, active opportunities in your desired career paths.",
      "Join Early Access Talent Pools to show interest and see requirements before a role opens — and close any gaps early.",
      "Apply to our partner trade unions in the skilled trades, directly through Runwayz.",
    ],
  },
];

export default function TalentPage() {
  return (
    <div>
      <Hero
        image="/brand/talent-hero-gold-4.png"
        scrim="warm"
        eyebrow="Early-Career Talent"
        title="We know the future feels uncertain. But your future doesn't have to."
        subtitle="Runwayz helps you build a future-proof career and maximize your earning potential, to help you achieve the life you want."
      >
        <div className="flex flex-wrap gap-4">
          <a
            href="https://platform.runwayz.com/talent/signup?step=form"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Create an account
          </a>
          <a
            href="https://platform.runwayz.com/talent/signup"
            className="rounded-full bg-[#e17248] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#e17248]/90"
          >
            Take the Careers Quiz
          </a>
        </div>
      </Hero>

      {/* The fear */}
      <section className="mt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The challenge</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          It was always hard to answer the question, &ldquo;What do you want to
          be when you grow up?&rdquo; Now, we know it&apos;s even harder.
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>
            With the rise of AI, you might be wondering whether the jobs you&apos;re
            interested in will even be there in ten years. Exploring careers can feel
            overwhelming. It&apos;s hard to know where to start, and even harder to feel
            sure that you&apos;re picking the &ldquo;right path&rdquo;, one that
            won&apos;t be disrupted by AI or a changing economy.
          </p>
          <p className="text-lg font-semibold text-fg1">
            But the future is bright. You just have to know where to look.
          </p>
        </div>
      </section>

      {/* What Runwayz does → recommended jobs */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The Runwayz Solution</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          Runwayz helps you explore career pathways and land real opportunities.
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>
            If you&apos;re just starting your career, Runwayz helps you identify
            professional pathways with high earning potential and technical skills that
            are likely to be resilient to AI-driven job disruption. Runwayz helps you
            build your profile and develop skills to make you a strong match for those
            roles; and then connects with real-world opportunities in your preferred
            fields.
          </p>
          <p>
            You can browse and explore every career path on Runwayz, but the Runwayz
            platform prioritizes fields that offer high-income, secure career pathways.
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h3 className="text-xl font-bold tracking-tight text-fg1">
            What careers does Runwayz recommend?
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {CRITERIA.map((c) => (
              <div key={c.title}>
                <div className="flex items-start gap-2">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  <h4 className="font-bold text-fg1">{c.title}</h4>
                </div>
                <p className="mt-1 text-sm text-fg2">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href="https://platform.runwayz.com/talent/signup"
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Take the Career Explorer Quiz
          </a>
          <a
            href="https://platform.runwayz.com/talent/signup?step=form"
            className="text-sm font-medium text-accent hover:underline"
          >
            Or sign up for an account to see open opportunities
          </a>
        </div>
      </section>

      {/* Four stages */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">
          Runwayz is your partner at every step of your professional journey,
          helping you increase your earning potential and job security.
        </h2>
        <div className="mt-12 space-y-12">
          {STAGES.map((s, idx) => (
            <div key={s.n} className="grid items-center gap-8 md:grid-cols-2">
              <div className={idx % 2 === 1 ? "md:order-2" : undefined}>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-accent">{s.n}</span>
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                    {s.state}
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-fg1">
                  {s.name}
                </h3>
                <div className="mt-3 space-y-3 text-fg2">
                  <p>{s.lead}</p>
                  <ul className="list-disc space-y-1 pl-5">
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Grey placeholder for a platform screenshot */}
              <div
                className={`flex aspect-[16/10] items-center justify-center rounded-2xl border border-border bg-fg3/10 text-sm font-medium text-fg3 ${
                  idx % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                Platform screenshot
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote — placeholder, same treatment as the Associations quote */}
      <section className="relative left-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden">
        <Image src="/brand/talent-pullquote.png" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div aria-hidden className="absolute inset-0 bg-black/55" />
        <div className="relative z-[1] mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <figure className="[text-shadow:0_2px_20px_rgba(0,0,0,0.6)]">
            <blockquote className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              &ldquo;[ Pull quote goes here: a short, punchy line from a Runwayz user about finding
              their path. ]&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div
                aria-hidden
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-[10px] font-medium uppercase tracking-wide text-white/80 ring-2 ring-white/30 [text-shadow:none]"
              >
                Photo
              </div>
              <figcaption className="text-left text-sm text-white/90">
                <span className="block font-semibold text-white">First Last</span>
                Title, Organization
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-20 rounded-3xl border border-border bg-surface px-8 py-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">
          You don&apos;t need it all figured out. You just need to start.
        </h2>
        <p className="mt-4 max-w-3xl text-fg2">
          Explore what interests you, build skills that last, and take real steps
          toward work worth doing.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="https://platform.runwayz.com/talent/signup"
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}

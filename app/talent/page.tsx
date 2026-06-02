import Link from "next/link";

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

type Stage = { n: string; name: string; lead: string; bullets: string[] };

const STAGES: Stage[] = [
  {
    n: "01",
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
    name: "Gain Real Experience",
    lead: "Once you've found a path you want to explore more deeply, Runwayz helps you take the first step — connecting you with jobs and apprenticeships directly in the platform.",
    bullets: [
      "Find and apply to real, active opportunities in your desired career paths.",
      "Join Early Access Talent Pools to show interest and see requirements before a role opens — and close any gaps early.",
      "Apply to our partner trade unions in the skilled trades, directly through Runwayz.",
    ],
  },
  {
    n: "04",
    name: "Keep Advancing",
    lead: "Getting a job isn't the finish line; it's just the beginning. Treat work like a game, and every new experience becomes a way to level up.",
    bullets: [
      "Grow your skills, seniority, and income over time.",
      "See recommended next certifications and steps to advance in your field.",
      "Explore adjacent paths when you're ready for a change.",
    ],
  },
];

export default function TalentPage() {
  return (
    <div className="py-8">
      {/* Hero */}
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
        Early-Career Talent
      </p>
      <h1 className="mt-4 max-w-4xl text-[2.7rem] font-bold tracking-tight text-fg1 sm:text-[3.6rem]">
        We know the future feels uncertain. But your future doesn&apos;t have
        to be.
      </h1>
      <p className="subheading mt-6 max-w-2xl text-fg1">
        Build for the life you want, not just the job you want.
      </p>
      <p className="mt-4 max-w-3xl text-lg leading-[1.55] text-fg2">
        If you&apos;re just starting your career, Runwayz helps you identify
        professional pathways with high earning potential and technical skills
        that stay durable and resilient to AI-driven job disruption; build your
        profile and skills to be a strong match for those roles; and connect
        with real-world opportunities to access them.
      </p>
      <div className="mt-8">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
        >
          Get started
        </Link>
      </div>

      {/* Name the fear → what Runwayz prioritizes */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">
          It was always hard to answer the question, &ldquo;What do you want to
          be when you grow up?&rdquo; Now, it&apos;s even harder.
        </h2>
        <div className="mt-4 max-w-2xl space-y-4 text-fg2">
          <p>
            With the rise of AI, you might be wondering whether the jobs
            you&apos;re interested in will even be there in ten years. Exploring
            careers can feel overwhelming — not just figuring out where to start,
            but the weight of the risk that you&apos;ll pick a &ldquo;wrong&rdquo;
            path, one that gets disrupted by AI or a changing economy. But the
            future is bright. You just have to know where to look.
          </p>
          <p>
            You can browse and explore every job and career on Runwayz — but it
            actively points you toward the paths most worth pursuing.
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z"
                clipRule="evenodd"
              />
            </svg>
            Runwayz Recommended
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-fg1">
            Career Paths Runwayz Prioritizes
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {CRITERIA.map((c) => (
              <div key={c.title}>
                <h4 className="font-bold text-fg1">{c.title}</h4>
                <p className="mt-1 text-sm text-fg2">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Take the quiz
          </Link>
        </div>
      </section>

      {/* Four stages */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">
          Runwayz is your partner at every step of your professional journey,
          helping you increase your earning potential and job security.
        </h2>
        <p className="mt-4 max-w-2xl text-fg2">
          You don&apos;t pick a career on day one. You start exploring, build as
          you go, and keep leveling up — for as long as you&apos;re working.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <span className="text-sm font-bold text-accent">{s.n}</span>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-fg1">
                {s.name}
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.55] text-fg2">
                <p>{s.lead}</p>
                <ul className="list-disc space-y-1 pl-5">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-20 rounded-3xl border border-border bg-surface px-8 py-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">
          You don&apos;t need it all figured out. You just need to start.
        </h2>
        <p className="mt-4 max-w-2xl text-fg2">
          Explore what interests you, build skills that last, and take real steps
          toward work worth doing.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}

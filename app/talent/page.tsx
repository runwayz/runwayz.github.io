import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { RecommendedCareers } from "@/components/RecommendedCareers";

export const metadata = { title: "For Talent · Runwayz" };

type Stage = { n: string; state: string; name: string; lead: string; bullets: string[]; img: string };

const STAGES: Stage[] = [
  {
    n: "01",
    state: "Interested",
    name: "Discover Pathways",
    img: "/brand/stage-interest.png",
    lead: "There's a wide world of possible career paths, likely some you've never thought of. Runwayz helps you explore them all.",
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
    img: "/brand/stage-pursue.png",
    lead: "Runwayz shows you the steps between where you are today and where you'd need to be to land a job in a specific path, and helps you close the gap, systematically.",
    bullets: [
      "See the required certifications, education, and requirements for each role.",
      "Build out your portfolio of projects (and get recommendations).",
      "Get help from the Runwayz coach to write a resume that positions your unique story.",
      "Log work-based learning hours directly inside Runwayz.",
    ],
  },
  {
    n: "03",
    state: "Active",
    name: "Gain Real Experience",
    img: "/brand/stage-apply.png",
    lead: "Once you've found a path you want to explore more deeply, Runwayz helps you take the first step, connecting you with jobs and apprenticeships directly in the platform.",
    bullets: [
      "Find and apply to real, active opportunities in your desired career paths.",
      "Join Early Access Talent Pools to show interest and see requirements before a role opens, and close any gaps early.",
      "Apply to our partner trade unions in the skilled trades, directly through Runwayz.",
    ],
  },
];

export default function TalentPage() {
  return (
    <div>
      <Hero
        image="/brand/talent-page-hero.png"
        scrim="warm"
        eyebrow="Early-Career Talent"
        title={<>We know the future feels uncertain. But <em>your</em>&nbsp; future doesn&apos;t have to.</>}
        subtitle="Runwayz helps you build a future-proof career and maximize your earning potential, to help you achieve the life you want."
      >
        <div className="flex flex-wrap gap-4">
          <a
            href="https://app.runwayz.com/talent/signup?step=form"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Create your Account
          </a>
        </div>
      </Hero>

      {/* The fear */}
      <section className="mt-6">
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
            roles, and then connects you with real-world opportunities in your preferred
            fields.
          </p>
          <p>
            You can browse and explore every career path on Runwayz, but the Runwayz
            platform prioritizes fields that offer high-income, secure career pathways.
          </p>
        </div>
        <RecommendedCareers className="mt-8" />
        <div className="mt-8 flex justify-center">
          <a
            href="https://app.runwayz.com/talent/signup?step=form"
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Create your Account
          </a>
        </div>
      </section>

      {/* Four stages */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">
          Runwayz is your partner at every step of your professional journey.
        </h2>
        <div className="mt-12 space-y-20">
          {STAGES.map((s, idx) => (
            <div key={s.n} className="grid items-center gap-10 md:grid-cols-5">
              <div className={`md:col-span-2 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
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
              {/* Platform screenshot for this stage */}
              <Image
                src={s.img}
                alt={`Runwayz ${s.name} screen`}
                width={1200}
                height={793}
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`w-full md:col-span-3 ${idx % 2 === 1 ? "md:order-1" : ""}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote — Devyn Maguire, CEO */}
      <section className="relative left-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden">
        <Image src="/brand/talent-pullquote.png" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div aria-hidden className="absolute inset-0 bg-black/55" />
        <div className="relative z-[1] mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <figure className="[text-shadow:0_2px_20px_rgba(0,0,0,0.6)]">
            <blockquote className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              &ldquo;We want Runwayz to help every person to find the career path that fits their
              interests and maximizes their lifetime earnings.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Image
                src="/brand/devyn.jpg"
                alt="Devyn Maguire"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white/30 [text-shadow:none]"
              />
              <figcaption className="text-left text-sm text-white/90">
                <span className="block font-semibold text-white">Devyn Maguire</span>
                CEO, Runwayz
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
            href="https://app.runwayz.com/talent/signup?step=form"
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Create your Account
          </Link>
        </div>
      </section>
    </div>
  );
}

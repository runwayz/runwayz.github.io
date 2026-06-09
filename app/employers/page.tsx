import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServeCTA } from "@/components/ServeCTA";

export const metadata = { title: "Employers · Runwayz" };

const STEPS = [
  {
    n: "01",
    title: "Post internships and jobs",
    body: "List open internships, apprenticeships, and entry-level roles in minutes. Set your requirements once, and Runwayz surfaces interested, qualified candidates as they engage. Open a role now, or open a Talent Pool to start collecting interest before the role is live.",
  },
  {
    n: "02",
    title: "Reach vetted early-career talent",
    body: "Every candidate on Runwayz has built a profile, explored the field, and shown real engagement. You reach people who genuinely want the work, not just anyone who clicked apply.",
  },
  {
    n: "03",
    title: "Filter on what predicts success",
    body: "See and filter your whole pipeline by region, interests, and indicators of 21st-century skills, so the strongest-fit candidates rise to the top.",
  },
];

const SKILLS = [
  {
    title: "Reliability",
    body: "Consistency in following through: completing the steps they start, showing up, and meeting commitments over time.",
  },
  {
    title: "Curiosity",
    body: "Genuine interest in the field: how deeply a candidate explores, learns, and seeks out new skills on their own.",
  },
  {
    title: "Problem solving",
    body: "How candidates approach challenges, work through gaps in their experience, and apply what they have learned.",
  },
];

const FILTERS = [
  {
    title: "Region",
    body: "Focus on candidates near your job sites, offices, or the regions you are hiring for.",
  },
  {
    title: "Interests",
    body: "Find people genuinely drawn to your field and the kind of work the role involves.",
  },
  {
    title: "21st-century skills",
    body: "Rank by reliability, curiosity, and problem solving, surfaced from real activity on Runwayz.",
  },
];

export default function EmployersPage() {
  return (
    <div className="py-8">
      <Hero
        eyebrow="For employers"
        title="Hire vetted early-career talent, ready to grow with you."
        subtitle="Runwayz helps you post internships and jobs, and reach a pipeline of early-career talent vetted for the skills that actually predict success on the job."
      >
        <Link href="/contact" className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90">
          See a Demo
        </Link>
      </Hero>

      {/* The hiring gap */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The hiring gap</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          A resume tells you where someone has been. It doesn&apos;t tell you who will show up.
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>
            Early-career candidates rarely have long resumes. The traditional signals, like degrees
            and years of experience, screen out capable people and tell you little about how someone
            will actually perform.
          </p>
          <p>
            You end up sorting through noise to find the few who are reliable, curious, and ready to
            solve real problems. Runwayz is built to surface those people.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">How it works</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          Post an opportunity. Reach vetted talent. Hire on the signals that matter.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-surface p-6">
              <span className="text-sm font-bold text-accent">{s.n}</span>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-fg1">{s.title}</h3>
              <p className="mt-2 text-sm leading-[1.55] text-fg2">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond the resume — 21st-century skills */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Beyond the resume</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          Vetted for the skills that actually predict performance.
        </h2>
        <p className="mt-4 max-w-3xl text-fg2">
          Runwayz surfaces signals you cannot get from a resume, built from how candidates explore,
          learn, and engage on the platform. Filter and rank your pipeline by the indicators that
          matter for the role.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                <h3 className="font-bold text-fg1">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-fg2">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Find your fit — filtering */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Find your fit</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          See and filter your whole pipeline by what matters to you.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FILTERS.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-bold text-fg1">{f.title}</h3>
              <p className="mt-2 text-sm text-fg2">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ServeCTA heading="Let's build your early-career pipeline." />
    </div>
  );
}

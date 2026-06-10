import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServeCTA } from "@/components/ServeCTA";

export const metadata = { title: "Institutions & Schools · Runwayz" };

const STUDENT_STEPS = [
  {
    n: "01",
    title: "Explore career pathways",
    body: "Students discover careers they may never have heard of, and see which paths offer strong, durable futures. They build a profile around their interests, working style, and goals, and get sharper recommendations the more they explore.",
  },
  {
    n: "02",
    title: "Build the right skills",
    body: "Runwayz shows the certifications, education, and real-world requirements each path takes, then helps students close the gap with a clear, step-by-step plan.",
  },
  {
    n: "03",
    title: "Apply to real opportunities",
    body: "Students apply to internships, apprenticeships, jobs, and union memberships, directly through Runwayz.",
  },
];

const SCHOOL_BENEFITS = [
  {
    title: "No cost, ever",
    body: "Runwayz is free for high schools and colleges. There is nothing to buy and no budget required.",
  },
  {
    title: "Real career exploration",
    body: "Give students a clear line of sight from the classroom to careers with strong futures.",
  },
  {
    title: "A bridge to employers",
    body: "Connect students to internships, apprenticeships, and jobs from a live network of partners.",
  },
  {
    title: "Outcomes you can show",
    body: "See how students explore, engage, and move toward real opportunities.",
  },
];

export default function EducationPage() {
  return (
    <div>
      <Hero
        image="/brand/schools.png"
        scrim="dark"
        eyebrow="For high schools and colleges"
        title="Workforce readiness for your students. Real visibility into student career outcomes."
        subtitle={
          <>
            Give your students a platform to explore career pathways, build durable skills, and
            apply to real opportunities. <span className="italic">Free forever to high schools.</span>
          </>
        }
      >
        <Link href="/contact" className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90">
          See a Demo
        </Link>
      </Hero>

      {/* For your students */}
      <section className="mt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">For your students</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          From exploring careers to landing the first opportunity.
        </h2>
        <p className="mt-4 max-w-3xl text-fg2">
          Runwayz offers self-paced career exploration and development tools directly to students and
          early-career talent. They move at their own pace, from first curiosity about a field to a
          real application, with guidance built into every step.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STUDENT_STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-surface p-6">
              <span className="text-sm font-bold text-accent">{s.n}</span>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-fg1">{s.title}</h3>
              <p className="mt-2 text-sm leading-[1.55] text-fg2">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For your school */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">For your school</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          A workforce-readiness resource that does the heavy lifting.
        </h2>
        <p className="mt-4 max-w-3xl text-fg2">
          Bring a modern career-readiness platform to your students without adding to your team&apos;s
          workload. Runwayz does the exploring, guiding, and connecting, so your counselors and
          faculty can focus where they are needed most.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SCHOOL_BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                <h3 className="font-bold text-fg1">{b.title}</h3>
              </div>
              <p className="mt-2 text-sm text-fg2">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ServeCTA heading="Bring Runwayz to your students, for free." />
    </div>
  );
}

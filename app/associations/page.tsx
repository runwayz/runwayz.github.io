import Link from "next/link";
import { ServeCTA } from "@/components/ServeCTA";

export const metadata = { title: "Associations · Runwayz" };

type Stat = { value: string; label: string; source?: { label: string; url: string } };

const STATS: Stat[] = [
  {
    value: "1.4M",
    label: "Skilled trades jobs projected to go unfilled in the U.S. by 2030 — about 25% of key trades.",
    source: { label: "Bring Back The Trades", url: "https://bringbackthetrades.org/press-release/new-research-data-reveals-nearly-1-4-million-trades-jobs-25-to-be-open/" },
  },
  {
    value: "$1T",
    label: "Projected annual cost of the skilled-trades shortage to the U.S. economy.",
    source: { label: "JLL (2026)", url: "https://www.jll.com/en-us/newsroom/critical-skilled-trades-shortage-threatens-economic-losses" },
  },
  {
    value: "2 of 5",
    label: "Only two new workers enter the skilled trades for every five who retire.",
    source: { label: "U.S. Dept. of Education (via JLL)", url: "https://www.jll.com/en-us/newsroom/critical-skilled-trades-shortage-threatens-economic-losses" },
  },
  {
    value: "$1.2T",
    label: "Bipartisan Infrastructure Law investment — much of it needing skilled hands.",
    source: { label: "IIJA / ASCE", url: "https://infrastructurereportcard.org/bipartisan-infrastructure-law-breakdown/" },
  },
];

const PILLARS = [
  {
    n: "01",
    title: "Pipeline expansion",
    lead: "Get more young people excited about the trade.",
    body: "Runwayz lives where early talent already does — phones, social, peer signals. We turn your awareness work into thousands of named, engaged candidates whose first real exposure to the industry came through your association. The pipeline grows because of you.",
  },
  {
    n: "02",
    title: "Placement engine",
    lead: "Make training pay off — for the student and the employer.",
    body: "Training programs are full; the question is what happens after. Runwayz builds the structured pathway from graduation to placement at member companies, so your training investment compounds instead of leaking out of the industry.",
  },
  {
    n: "03",
    title: "A member benefit that lands",
    lead: "Something tangible to bring to the next renewal call.",
    body: "Associations are always looking for benefits that justify dues. Runwayz can be packaged as an exclusive member perk — typically a 6-month complimentary trial through our Strategic Partner pilot. Your association looks like it's actively solving the talent shortage, not just talking about it.",
  },
];

const COHORTS = [
  {
    age: "16–18",
    label: "High school",
    lead: "Curious, undecided, online.",
    body: "Sophomores and seniors who haven't bought the four-year story yet. They're open to the trades if someone shows them what the actual life looks like — pay, schedule, ownership, ladder up.",
  },
  {
    age: "18–20",
    label: "Recent grads",
    lead: "Done with school, restless for real.",
    body: "In apprenticeship programs, trade school, community college, or first jobs that aren't fitting. They want hands-on work that pays — and a clear next step. Runwayz routes them.",
  },
  {
    age: "20–22",
    label: "Career re-routers",
    lead: "First job didn't stick. Now what.",
    body: "A few years into retail, food service, or gig work, and ready for something with a future. The window is short before they settle — Runwayz catches them in it and connects them to member companies.",
  },
];

const INCLUDED = [
  { title: "6-month complimentary trial for your members", body: "Real candidates, real placements — not a demo." },
  { title: "Co-branded recruitment campaigns", body: "Your association's name leads. Members get the candidates." },
  { title: "Quarterly pipeline reports", body: "Named candidates, conversion data, placement outcomes — for your board." },
  { title: "Dedicated partner success team", body: "One point of contact. No tickets, no queues." },
];

export default function AssociationsPage() {
  return (
    <div className="py-8">
      {/* Hero */}
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">For trade associations</p>
      <h1 className="mt-4 max-w-3xl text-[2.7rem] font-bold tracking-tight text-fg1 sm:text-[3.6rem]">
        The talent pipeline your members can&apos;t build alone.
      </h1>
      <p className="subheading mt-6 max-w-2xl text-fg2">
        Runwayz reaches early talent in the window before they drift — and routes them to the member
        companies you represent. A workforce solution your association can offer on day one.
      </p>
      <div className="mt-8">
        <Link href="/contact" className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90">
          Get in touch
        </Link>
      </div>

      {/* The shortage */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The shortage</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          Your members are hiring against a tide they didn&apos;t create.
        </h2>
        <div className="mt-4 max-w-2xl space-y-4 text-fg2">
          <p>The trades are losing the early-career race before it starts. Young people get pulled into retail, gig work, and four-year degrees that don&apos;t pay off — while member companies wait for résumés that never arrive.</p>
          <p>Associations have the relationships. The training programs. The advocacy. What&apos;s missing is the engine that finds early talent before they drift, and routes them to the companies you represent.</p>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.value} className="rounded-2xl border border-border bg-surface p-6">
              <dt className="text-4xl font-bold tracking-tight text-accent">{s.value}</dt>
              <dd className="mt-2 text-sm text-fg2">{s.label}</dd>
              {s.source && (
                <a
                  href={s.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-fg3 underline underline-offset-2 hover:text-fg2"
                >
                  Source: {s.source.label}
                </a>
              )}
            </div>
          ))}
        </dl>
      </section>

      {/* What your association gets */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">What your association gets: three things at once.</h2>
        <p className="mt-4 max-w-2xl text-fg2">
          Pipeline growth, member-side placement, and a tangible benefit you can show at your next
          board meeting — layered. Most partners give you one. We think you should have all three.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.n} className="rounded-2xl border border-border bg-surface p-6">
              <span className="text-sm font-bold text-accent">{p.n}</span>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-fg1">{p.title}</h3>
              <p className="mt-2 font-medium text-fg1">{p.lead}</p>
              <p className="mt-2 text-sm text-fg2">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we deliver */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">
          Who we deliver: early talent, caught in the window before they drift.
        </h2>
        <p className="mt-4 max-w-2xl text-fg2">
          Runwayz is built for the moment of choice. We meet candidates in high school, in their
          first year out, in their first job that isn&apos;t sticking — and pull them toward your
          industry.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {COHORTS.map((c) => (
            <div key={c.age} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold tracking-tight text-fg1">{c.age}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">{c.label}</span>
              </div>
              <p className="mt-3 font-medium text-fg1">{c.lead}</p>
              <p className="mt-2 text-sm text-fg2">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The partnership */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Strategic partner pilot</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">An 18-month Strategic Partner pilot.</h2>
        <div className="mt-4 max-w-2xl space-y-4 text-fg2">
          <p>We&apos;re working with a small group of associations to prove out the model in 2026. The partnership is structured so your members carry no risk — and your association carries no implementation lift.</p>
          <p>One conversation. One MOU. A benefit you can announce to members the same week.</p>
        </div>
        <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {INCLUDED.map((p) => (
            <li key={p.title} className="border-l-2 border-accent pl-4">
              <p className="font-semibold text-fg1">{p.title}</p>
              <p className="mt-1 text-sm text-fg2">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Consistent CTA (shared across Who-we-serve pages) */}
      <ServeCTA />
    </div>
  );
}

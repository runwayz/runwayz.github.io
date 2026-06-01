import Link from "next/link";
import { ServeCTA } from "@/components/ServeCTA";

export const metadata = { title: "Unions · Runwayz" };

type Stat = { value: string; label: string; source?: { label: string; url: string } };

const STATS: Stat[] = [
  {
    value: "41%",
    label: "Of the U.S. construction workforce is expected to retire by 2031.",
    source: { label: "NCCER", url: "https://constructioncitizen.com/blog/41-percent-construction-workforce-retiring-2031-industry-needs-get-moving-c3/1802011" },
  },
  {
    value: "16%",
    label: "Of young people say they're very likely to consider a career in the skilled trades.",
    source: { label: "Stanley Black & Decker Makers Index", url: "https://www.prnewswire.com/news-releases/drilling-into-the-skilled-trades-shortage-stanley-black--deckers-inaugural-makers-index-reveals-few-students-likely-to-consider-a-career-in-the-trades-outdated-perceptions-key-drivers-301517854.html" },
  },
  {
    value: "$1.3M",
    label: "Mean increase in lifetime earnings from a unionized career — more than completing college.",
    source: { label: "U.S. DOL / ILR Review", url: "https://www.dol.gov/sites/dolgov/files/general/workcenter/Cumulative-Advantage-Unionized-Career-For-Lifetime-Earnings.pdf" },
  },
  {
    value: "$0",
    label: "Cost to young people Runwayz routes into apprenticeships, via the Runwayz Foundation.",
  },
];

const PILLARS = [
  {
    n: "01",
    title: "Membership growth",
    lead: "More young workers into the trade means more dues-paying members.",
    body: "The strength of a union is its numbers. Runwayz reaches early talent where they already are — phones, social, peer networks — and pulls them toward union pathways instead of dead-end alternatives. Each one we route is a future member, a future steward, a future hand on the next job site.",
  },
  {
    n: "02",
    title: "Apprenticeship intake",
    lead: "Fill your training centers — and the trade behind them.",
    body: "Apprenticeship programs are the heart of how the trade gets passed down. Runwayz makes those programs visible to young people who'd never have heard of them otherwise — and the Runwayz Foundation removes the cost barriers that would stop them from starting. More applicants. Better-matched applicants. Stronger cohorts.",
  },
  {
    n: "03",
    title: "The union as the connector",
    lead: "Not a benefit you hand out — a role you play.",
    body: "Runwayz isn't something the union sells to members. It's something the union helps build — co-designed with your locals, your training directors, your organizers. Your union doesn't get a logo on the platform. It gets a seat at the table for how early talent finds the trade in the first place.",
  },
];

const COHORTS = [
  {
    age: "16–18",
    label: "High school",
    lead: "Curious, undecided, online.",
    body: "Sophomores and seniors who haven't been told the trade is a real option. Once they see the pay, the schedule, the brotherhood and sisterhood of a union local — and the path that runs through your apprenticeship — many of them choose it.",
  },
  {
    age: "18–20",
    label: "Apprenticeship age",
    lead: "Ready for real work, real pay.",
    body: "The classic apprentice cohort. Out of high school, done with college that wasn't fitting, ready to earn while they learn. Runwayz routes them to your apprenticeship intake — and the Foundation covers the upfront costs that would otherwise stop them.",
  },
  {
    age: "20–22",
    label: "Career re-routers",
    lead: "First job didn't stick. Now what.",
    body: "A few years into retail, food service, or gig work, and ready for something with a future and a union behind it. The window is short before they settle. Runwayz catches them in it — and brings them into the trade.",
  },
];

const PARTNERSHIP = [
  { title: "Co-designed rollout in your geography", body: "You tell us where young people are. We meet them there." },
  { title: "Apprenticeship pathways on the platform", body: "Your training centers and intake processes, made visible to the next generation." },
  { title: "Foundation-backed cost removal", body: "The Runwayz Foundation covers gear, transportation, and intake fees for young people who'd otherwise walk away." },
  { title: "Transparent outcomes reporting", body: "Apprenticeship applications, completions, retention — the numbers your locals actually care about." },
];

export default function UnionsPage() {
  return (
    <div className="py-8">
      {/* Hero */}
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">For trade unions</p>
      <h1 className="mt-4 max-w-3xl text-[2.7rem] font-bold tracking-tight text-fg1 sm:text-[3.6rem]">
        The next generation isn&apos;t missing. They&apos;re just not being asked.
      </h1>
      <p className="subheading mt-6 max-w-2xl text-fg2">
        Runwayz brings early talent into the trade — and into the apprenticeships, training
        centers, and union halls that build careers worth having. A partnership your union helps
        shape from day one.
      </p>
      <div className="mt-8">
        <Link href="/contact" className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90">
          Get in touch
        </Link>
      </div>

      {/* The trade gap */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The trade gap</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          The strength of any union is the next generation that joins it.
        </h2>
        <div className="mt-4 max-w-2xl space-y-4 text-fg2">
          <p>For two decades the pipeline into the trades has been quietly drying up. Fewer apprentices. Fewer dues-paying workers. Fewer young hands learning the craft from the ones who built it.</p>
          <p>The trade didn&apos;t lose its value. Young people just stopped hearing about it. Runwayz exists to change that — to make the path into the trade visible, accessible, and easy to start.</p>
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

      {/* What we build together */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">What we build together: three things at once.</h2>
        <p className="mt-4 max-w-2xl text-fg2">
          Membership growth, stronger apprenticeship intake, and a story your union can tell about
          its role in the next generation of the trade — layered. Not a vendor relationship. A
          collaborative build.
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

      {/* Who walks through the door */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">
          Who walks through the door: early talent, caught in the window before they drift.
        </h2>
        <p className="mt-4 max-w-2xl text-fg2">
          Runwayz is built for the moment of choice. We meet young people in high school, in their
          first year out, in their first job that isn&apos;t sticking — and route them toward your
          apprenticeships, your training centers, and the trade.
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
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Founding union partners</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">A collaborative build — not a vendor pitch.</h2>
        <div className="mt-4 max-w-2xl space-y-4 text-fg2">
          <p>We&apos;re not asking unions to adopt a platform. We&apos;re asking a small group of partner unions to help us build the right one — together, in their geography, with their locals and training directors.</p>
          <p>The model is co-design. You shape where Runwayz shows up, which apprenticeship pathways are featured, and how outcomes get measured. The trade decides what its own pipeline looks like.</p>
        </div>
        <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {PARTNERSHIP.map((p) => (
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

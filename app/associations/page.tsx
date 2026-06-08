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

// Mirrored from the Unions page funnel, adapted to member-company hiring.
// (Card copy adapted from Unions — edit freely.)
const LIFECYCLE = [
  {
    org: "Engage",
    state: "Interested",
    action: "Reach people Interested in your trade:",
    quote: "I'm interested in learning more about this trade",
    lead: "Reach the people already curious about your trade.",
    body: "Runwayz gives your member companies a branded home in the content feed for your trade. People exploring the field see general trade education alongside content your members produce, and every one who engages becomes a named candidate in the pipeline instead of an anonymous impression.",
  },
  {
    org: "Nurture",
    state: "Pursuing",
    action: "Nurture people Pursuing your trade:",
    quote: "I'm actively pursuing a career in this field and working to build my skills",
    lead: "Turn curiosity about the trade into real career commitment.",
    body: "As someone keeps engaging, Runwayz serves them deeper content, surfaces opportunities at your member companies, and scores how engaged they are. Your members can see who is just browsing and who is seriously pursuing the trade, and focus on the candidates closest to hiring.",
  },
  {
    org: "Grow",
    state: "Active",
    action: "Recruit people who are Actively Working toward the field:",
    quote: "I'm ready to work; which companies are hiring?",
    lead: "Turn pursuers into hires at your member companies.",
    body: "Runwayz connects ready candidates to open roles at your member companies and tracks them through to placement. Every hire is attributed back to the source, so your association can prove the ROI Runwayz delivers for each member company.",
  },
];

const PILLARS = [
  {
    n: "01",
    title: "Pipeline expansion",
    lead: "Get more young people excited about the trade.",
    body: "Runwayz helps to convert early potential interest in a trade or field, nurture that awareness through targeted content about the trade (including branded content from member organizations), and those interested individuals into trackable, engaged candidates whose first real exposure to the industry came through your association.",
  },
  {
    n: "02",
    title: "A post-training placement engine",
    lead: "Make training pay off, for the student and the employer.",
    body: "Training programs are full; the question is what happens after. Runwayz builds the structured pathway from graduation to placement at member companies, so your training investment compounds instead of leaking out of the industry.",
  },
  {
    n: "03",
    title: "A member benefit that lands",
    lead: "Something tangible to bring to the next renewal call.",
    body: "Associations are always looking for benefits that justify dues. Runwayz can be packaged as an exclusive member perk, typically a 6-month complimentary trial through our Strategic Partner pilot. Your association looks like it's actively solving the talent shortage, not just talking about it.",
  },
];

const GETS = [
  {
    title: "A branded page for your association on Runwayz",
    body: "Build your branded page to recruit new regional member companies, and promote your current member companies associated with your Association to new talent.",
  },
  {
    title: "A 6-month complimentary trial for any member company members",
    body: "Member companies can build a profile, post opportunities, and track interested Talent.",
  },
  {
    title: "Co-branded recruitment campaigns",
    body: "Your association's name leads to help funnel interested talent to appropriate training programs or regional member company opportunities.",
  },
  {
    title: "Quarterly pipeline reports",
    body: "Full visibility into ROI on Runwayz: Track impressions, candidates, conversion data, placement outcomes.",
  },
  {
    title: "Dedicated partner success team",
    body: "Your association gets one dedicated point of contact at Runwayz to help you get the most of out of the partnership.",
  },
];

export default function AssociationsPage() {
  return (
    <div className="py-8">
      {/* Hero */}
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">For trade associations</p>
      <h1 className="mt-4 max-w-4xl text-[2.7rem] font-bold tracking-tight text-fg1 sm:text-[3.6rem]">
        The talent pipeline your members can&apos;t build alone.
      </h1>
      <p className="subheading mt-6 max-w-3xl text-fg2">
        Runwayz helps your association engage early-career talent in your trade, and matches the
        strongest candidates to opportunities at your member companies.
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
          Trade Association&apos;s member companies are facing hiring headwinds that have been
          growing for the past two decades.
        </h2>
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
        <p className="mt-8 max-w-3xl text-fg2">
          Trade Associations provide member companies with legitimacy, brand awareness, training
          programs. But the success of Trade Associations depends on retaining and growing your
          member companies; and their success depends on finding and hiring strong talent.
        </p>
      </section>

      {/* The Runwayz solution — funnel mirrored from Unions */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The Runwayz solution</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          Runwayz helps your member companies engage, nurture, and recruit talent into their
          company, with unparalleled visibility to ROI.
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>
            Runwayz enables Trade Associations to offer your member companies a strong pipeline of
            early-career talent who are interested in their trade, where your member companies can
            reach them, engage with them, and promote opportunities.
          </p>
          <p>
            Runwayz allows each of your member companies to build a brand presence on the platform,
            and track potential candidates through every stage of conversion, from
            &ldquo;Interested&rdquo; to &ldquo;Pursuing&rdquo; to &ldquo;Actively Working,&rdquo;
            allowing them to measure ROI of the Runwayz channel for hiring. Associations can see
            metrics for all early-career talent interacting with your member companies on Runwayz,
            helping you to quantify ROI for each of your member companies.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {LIFECYCLE.map((s) => (
            <div key={s.org} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold tracking-tight text-fg1">{s.org}</h3>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                  {s.state}
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold text-fg1">{s.action}</p>
              <p className="mt-1 text-sm italic text-fg2">&ldquo;{s.quote}&rdquo;</p>
              <p className="mt-4 font-medium text-fg1">{s.lead}</p>
              <p className="mt-2 text-sm text-fg2">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What your association gets */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">What your association gets: three things at once.</h2>
        <p className="mt-4 max-w-3xl text-fg2">
          Pipeline growth, member-side placement, and a tangible benefit you can show at your next
          board meeting, layered. Most partners give you one. We think you should have all three.
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

      {/* Pull quote — CCAI (awaiting copy) */}
      <section className="mt-20 border-t border-border pt-12">
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium tracking-tight text-fg1 sm:text-3xl">
            [ pull quote ]
          </blockquote>
          <figcaption className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
            CCAI
          </figcaption>
        </figure>
      </section>

      {/* Partner with Runwayz */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Strategic partner pilot</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">Partner with Runwayz</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>Adopt Runwayz as a Trade Association to grow your member companies. Sign up for our 18-month strategic partner pilot program.</p>
          <p>Though partnership with Runwayz, your association gains a benefit you can announce to your member companies the same week you sign with Runwayz.</p>
        </div>

        <h3 className="mt-10 text-xl font-bold tracking-tight text-fg1">Your association gets</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {GETS.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-surface p-6">
              <h4 className="font-bold text-fg1">{g.title}</h4>
              <p className="mt-2 text-sm text-fg2">{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Let's talk — shared reusable CTA with a page-specific headline */}
      <ServeCTA
        heading="Grab 20 minutes with our team to transform your member engagement strategy"
        note="Thank you for your interest in Runwayz. Please fill out the form and we will be in touch soon!"
      />
    </div>
  );
}

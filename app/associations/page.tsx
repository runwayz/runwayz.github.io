import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ServeCTA } from "@/components/ServeCTA";

export const metadata = { title: "Associations · Runwayz" };

type Stat = { value: string; label: string; source?: { label: string; url: string } };

const STATS: Stat[] = [
  {
    value: "1.4M",
    label: "Skilled trades jobs projected to go unfilled in the U.S. by 2030, about 25% of key trades.",
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
    label: "Bipartisan Infrastructure Law investment, much of it needing skilled hands.",
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
    action: "Recruit people who are Active in your trade:",
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
    body: "Runwayz helps to convert early potential interest in a trade or field, nurture that awareness through targeted content about the trade (including branded content from member organizations), and turn those interested individuals into trackable, engaged candidates whose first real exposure to the industry came through your association.",
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

type Feature = { title: string; img: string; items: string[]; sub?: { title: string; body: string }[] };

// Feature cards for member-company hiring. Mirrors the Unions "What you get"
// section, adapted from union members to association member companies.
const FEATURES: Feature[] = [
  {
    title: "Build your branded presence",
    img: "/brand/assoc-feature-1.png",
    items: [
      "A whitelabeled, branded page for your association and its member companies; promoted to people exploring your trade on Runwayz.",
    ],
  },
  {
    title: "View and Search Interested Talent",
    img: "/brand/assoc-feature-2.png",
    items: [
      "See everyone who has expressed interest in your trade, and search and filter them by skills, certifications, location, and readiness to surface the strongest candidates for your member companies.",
      "Open full candidate profiles, with project portfolios and verified work-based learning hours, so your members know exactly who they are reaching out to before they do.",
    ],
  },
  {
    title: "Opportunities and recruiting",
    img: "/brand/assoc-feature-3.png",
    items: [
      "Ability for member companies to post “Opportunities” for both open Roles and Training Programs, with two options for collecting applicants:",
    ],
    sub: [
      {
        title: "Open Now",
        body: "For roles and training programs that are open immediately, post the opportunity as “Open Now”. Members review, sort, and filter applicants by requirement, and export easily out of Runwayz for their HR teams.",
      },
      {
        title: "Talent Pools",
        body: "Open a future opportunity to begin collecting applications from interested people before the role formally opens. Runwayz nurtures these leads without drawing on your members’ teams, and helps applicants see and close any gaps in their experience before the opportunity opens.",
      },
    ],
  },
];

// Unified with the Unions "Your union gets" set: same 7 items, same order,
// adapted from union members/locals to association member companies. Slot 5 is
// the audience-specific item (Unions: Foundation cost removal; Associations: trial).
const GETS = [
  {
    title: "A branded page for your association",
    body: "Build your branded page to recruit new member companies, and promote your members and their training programs to new talent.",
  },
  {
    title: "Co-designed rollout in your geography",
    body: "You tell us where young people are, and we meet them there, in the regions and member companies where you need growth most.",
  },
  {
    title: "Training and hiring pathways on the platform",
    body: "Your member companies' open roles and training programs, made visible to the next generation.",
  },
  {
    title: "Co-branded recruitment campaigns",
    body: "Your association's name leads, helping funnel interested talent to your member companies and training programs.",
  },
  {
    title: "A 6-month complimentary trial for any member company",
    body: "Member companies can build a profile, post opportunities, and track interested talent.",
  },
  {
    title: "Quarterly pipeline reports",
    body: "Full visibility into ROI on Runwayz: track impressions, candidates, conversion, and placement outcomes.",
  },
  {
    title: "Dedicated partner success team",
    body: "One dedicated point of contact at Runwayz to help your association get the most out of the partnership.",
  },
];

export default function AssociationsPage() {
  return (
    <div>
      <Hero
        image="/brand/associations2.png"
        eyebrow="For trade associations"
        title="Give your members access to a talent pipeline they couldn't build alone."
        subtitle="Runwayz helps your association engage early-career talent in your trade, and matches the strongest candidates to opportunities at your member companies."
      >
        <Link href="/contact" className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90">
          See a Demo
        </Link>
      </Hero>

      {/* The shortage */}
      <section className="mt-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The shortage</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          Hiring in the skilled trades has gotten harder, and it is impacting your member companies.
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
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              )}
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-3xl text-fg2">
          Trade Associations provide member companies with legitimacy, brand awareness, and training
          programs. But the success of Trade Associations depends on retaining and growing your
          member companies, and their success depends on finding and hiring strong talent.
        </p>
      </section>

      {/* The Runwayz solution — funnel mirrored from Unions */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The Runwayz solution</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          Engage, nurture, and recruit talent, with full visibility into ROI.
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>
            Runwayz enables Trade Associations to offer your member companies a strong pipeline of
            early-career talent who are interested in their trade. On Runwayz, members can reach and
            engage people who have expressed interest in the trade, and promote opportunities to them
            for training and job placements.
          </p>
          <p>
            Runwayz allows each of your member companies to build a brand presence on the platform,
            and track potential candidates through every stage of conversion, from
            &ldquo;Interested&rdquo; to &ldquo;Pursuing&rdquo; to &ldquo;Active,&rdquo;
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

      {/* How it works — feature/screenshot section, mirrored from Unions */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">How it works</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">The best member benefit you can offer: an end-to-end hiring platform.</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>Become a Runwayz partner to put your association and member companies in front of people who are exploring your trade.</p>
          <p>Early-career talent on Runwayz can explore every trade (with our careers explorer, built on the O*Net careers data set). Turn that pool of curious explorers into a real hiring pipeline for your member companies by becoming a partner.</p>
        </div>

        <div className="mt-10 space-y-12">
          {FEATURES.map((f, idx) => (
            <div key={f.title} className="grid items-center gap-8 md:grid-cols-2">
              <div className={idx % 2 === 1 ? "md:order-2" : undefined}>
                <h4 className="text-2xl font-bold tracking-tight text-fg1">{f.title}</h4>
                <div className="mt-3 space-y-3 text-fg2">
                  {f.items.map((it, i) => (
                    <p key={i}>{it}</p>
                  ))}
                </div>
                {f.sub && (
                  <ul className="mt-4 space-y-3">
                    {f.sub.map((s) => (
                      <li key={s.title} className="rounded-lg bg-raised p-3">
                        <p className="text-sm font-semibold text-fg1">{s.title}</p>
                        <p className="mt-1 text-sm text-fg2">{s.body}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Platform screenshot for this feature */}
              <Image
                src={f.img}
                alt={`Runwayz ${f.title} screen`}
                width={2139}
                height={1412}
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`w-full rounded-2xl border border-border ${idx % 2 === 1 ? "md:order-1" : ""}`}
              />
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

      {/* Pull quote — IFCA, full-bleed with background image */}
      <section className="relative left-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden">
        <Image src="/brand/associations-pullquote-3.png" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div aria-hidden className="absolute inset-0 bg-black/55" />
        <div className="relative z-[1] mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <figure className="[text-shadow:0_2px_20px_rgba(0,0,0,0.6)]">
            <blockquote className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              &ldquo;By working with Runwayz, we are helping to introduce a new generation to careers
              in finishing and coating while giving our members new tools to engage with future
              talent.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Image
                src="/brand/anne-goyer.jpg"
                alt="Anne Goyer"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white/30 [text-shadow:none]"
              />
              <figcaption className="text-left text-sm text-white/90">
                <span className="block font-semibold text-white">Anne Goyer</span>
                Executive Director, Industrial Finishing & Coating Association (IFCA)
              </figcaption>
            </div>
            <a
              href="https://www.ccaiweb.com/news/720331/CCAI-Announces-Workforce-Development-Partnership-with-Runwayz.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-medium text-white underline underline-offset-2 hover:text-white/80 [text-shadow:none]"
            >
              Read the announcement
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </figure>
        </div>
      </section>

      {/* Partner with Runwayz */}
      <section className="mt-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Strategic partner pilot</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">Partner with Runwayz</h2>
        <p className="subheading mt-4 max-w-3xl text-fg2">
          Adopt Runwayz as a Trade Association to grow your member companies. Sign up for our
          18-month strategic partner pilot program.
        </p>
        <p className="mt-4 max-w-3xl text-fg2">
          Through partnership with Runwayz, your association gains a benefit you can announce to your
          member companies the same week you sign with Runwayz.
        </p>

        <h3 className="mt-10 text-xl font-bold tracking-tight text-fg1">Your association gets</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {GETS.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                <h4 className="font-bold text-fg1">{g.title}</h4>
              </div>
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

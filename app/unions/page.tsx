import Link from "next/link";
import { Hero } from "@/components/Hero";
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

const LIFECYCLE = [
  {
    org: "Engage",
    state: "Interested",
    action: "Connect with people Interested in your trade:",
    quote: "I'm interested in learning more about this trade",
    lead: "Connect the people already curious about your trade.",
    body: "Runwayz gives your union a branded home in the content feed for your trade. People exploring the field see general trade education alongside content you produce, and every one who engages becomes a named contact in your pipeline instead of an anonymous impression.",
  },
  {
    org: "Nurture",
    state: "Pursuing",
    action: "Nurture people Pursuing your trade:",
    quote: "I'm actively pursuing a career in this field and working to build my skills",
    lead: "Share content to turn curiosity about the trade into real career commitment.",
    body: "As someone keeps engaging, Runwayz serves them deeper content, surfaces your apprenticeship pathways, and scores how engaged they are. You can see who is just browsing and who is seriously pursuing the trade, so your organizers spend their time on the people closest to joining.",
  },
  {
    org: "Grow",
    state: "Advancing",
    action: "Convert people who are Ready for the field:",
    quote: "I'm ready for a training apprenticeship pathway; where do I go from here?",
    lead: "Turn pursuers into active, dues-paying members.",
    body: "Runwayz connects ready candidates to your apprenticeship intake and your locals, then tracks them through to active membership. Every member is attributed back to the source, so you can finally prove how many new members Runwayz helped you recruit.",
  },
];

type Feature = { title: string; items: string[]; sub?: { title: string; body: string }[] };

// Grouped into logical feature cards. Card titles are editorial labels; the body
// copy under each is verbatim from the user's draft.
const FEATURES: Feature[] = [
  {
    title: "Your branded presence",
    items: [
      "A whitelabeled, branded page for your Union; promoted to people looking at your Trade on Runwayz.",
    ],
  },
  {
    title: "Content and marketing",
    items: [
      "A marketing platform for sharing content produced by your union, which are shared to the feeds of everyone who indicated they are “Interested” in or “Pursuing” your trade.",
      "A collaborative marketing partner that helps your union produce compelling “day in the life” content that helps to prepare potential members to really understand what it’s like to work in the trade before they apply (reducing the 90-day churn rate from apprenticeship programs).",
    ],
  },
  {
    title: "Engagement analytics",
    items: [
      "Full visibility into engagements with your content, your brand, and your trade. Track the number of people Interested in and Pursuing your trade, and track interactions with your organization’s content.",
    ],
  },
  {
    title: "Opportunities and recruiting",
    items: [
      "Ability to post “Opportunities” for both open Roles, Training Apprenticeships, with two options for collecting applicants:",
    ],
    sub: [
      {
        title: "Open Now",
        body: "For roles, apprenticeships, and training programs that are open immediately, post your opportunity as “Open Now”. Easily review, sort, and filter applicants by requirement, and export easily out of Runwayz for your HR teams.",
      },
      {
        title: "Talent Pools",
        body: "Open a future opportunity to begin collecting applications from interested people before you formally open the apprenticeship, training program, or role. Runwayz helps you nurture these leads before the opportunity opens, without drawing resources from your internal team, and helps the applicants see (and close) any gaps in their experience proactively before the opportunity opens.",
      },
    ],
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
    <div>
      <Hero
        image="/brand/trade-unions-blue.png"
        scrim="dark"
        eyebrow="For trade unions"
        title="Your next generation of members is out there. Runwayz lets you reach them."
        subtitle="Runwayz helps early talent discover your trade, and gives you the tools to reach them, teach them, and convert the most serious candidates into apprenticeship programs and memberships."
      >
        <Link href="/contact" className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90">
          See a Demo
        </Link>
      </Hero>

      {/* The Runwayz platform: Engage → Nurture → Grow → Measure */}
      <section className="mt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The Runwayz platform</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          Runwayz: Helping Trade Unions engage, nurture, and build new members.
        </h2>
        <p className="mt-4 max-w-3xl text-fg2">
          Runwayz mirrors the path a person takes into a trade. Runwayz offers unions a single
          platform for connecting with people who have expressed an interest in learning about the
          trade.
        </p>
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

        {/* Measure ROI — DRAFT copy with researched figures; edit freely */}
        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h3 className="text-xl font-bold tracking-tight text-fg1">Measure ROI</h3>
          <p className="mt-3 max-w-3xl text-fg2">
            Most unions cannot say what a new member costs to recruit, or where their best members
            came from. Runwayz attributes every member back to the source, so growth becomes a number
            you can defend instead of a guess. And the math is hard to argue with: a union
            construction member pays an average of $1,381 a year in dues and fees, and over a 30-year
            career that is more than $40,000 in lifetime dues from a single member. Recruit even a
            small class each year, with proof of where they came from, and the return compounds for
            decades.
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-4xl font-bold tracking-tight text-accent">$1,381</dt>
              <dd className="mt-2 text-sm text-fg2">
                Average annual dues and fees paid by a union construction member.
              </dd>
              <a
                href="https://ibew.org/does-it-pay-to-work-union-yes-and-heres-proof/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs text-fg3 underline underline-offset-2 hover:text-fg2"
              >
                Source: Midwest Economic Policy Institute (via IBEW)
              </a>
            </div>
            <div>
              <dt className="text-4xl font-bold tracking-tight text-accent">30+ yrs</dt>
              <dd className="mt-2 text-sm text-fg2">
                A skilled-trades career, from apprenticeship through retirement.
              </dd>
            </div>
            <div>
              <dt className="text-4xl font-bold tracking-tight text-accent">$40K+</dt>
              <dd className="mt-2 text-sm text-fg2">
                Lifetime dues value of a single member, attributed to its source by Runwayz.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* How it works — Trade partners */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">How it works</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">Trade partners</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>Become a Runwayz partner to put your union&apos;s content in front of people who are exploring your trade.</p>
          <p>Learners on Runwayz can explore every trade (with our careers explorer, built on the O*Net careers data set). Turn that pool of curious explorers into a real membership pipeline for your union by becoming a partner.</p>
        </div>

        <h3 className="mt-10 text-xl font-bold tracking-tight text-fg1">What you get</h3>
        <div className="mt-8 space-y-12">
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

      {/* The trade gap + ROI — closer */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The trade gap</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          The strength of any union is the next generation that joins it.
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>For two decades the pipeline into the trades has been quietly drying up. Fewer apprentices. Fewer dues-paying workers. Fewer young hands learning the craft from the ones who built it.</p>
          <p>The trade didn&apos;t lose its value, but the culture pushed more students towards a narrow definition of success. Runwayz exists to help connect early-career talent to trades that will offer them great livelihoods.</p>
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

      {/* The partnership */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-fg1">A collaborative build — not a vendor pitch.</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
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
      <ServeCTA heading="Grab 20 minutes with our team to transform your Union's awareness and growth initiatives." />
    </div>
  );
}

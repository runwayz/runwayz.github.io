// The "What careers does Runwayz recommend?" panel. Shared by the Talent page
// and the homepage so the criteria stay in one place.
const CRITERIA = [
  {
    title: "Future-proof",
    body: "Resilient to AI disruption, with tangible, skills-based certifications.",
  },
  {
    title: "High-income potential",
    body: "We prioritize career paths with high income potential and growth, not dead-end jobs.",
  },
  {
    title: "Cost-accessible",
    body: "Cost-accessible entry points for the education and certifications you'll need.",
  },
];

export function RecommendedCareers({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-surface p-6 sm:p-8 ${className}`}>
      <h3 className="text-xl font-bold tracking-tight text-fg1">
        What careers does Runwayz recommend?
      </h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {CRITERIA.map((c) => (
          <div key={c.title}>
            <div className="flex items-start gap-2">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z"
                  clipRule="evenodd"
                />
              </svg>
              <h4 className="font-bold text-fg1">{c.title}</h4>
            </div>
            <p className="mt-2 text-sm text-fg2">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { SERVE_GROUPS } from "@/lib/nav";

const SEGMENTS = SERVE_GROUPS.flatMap((g) => g.items);

export default function Home() {
  return (
    <div className="py-8">
      {/* Hero */}
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
        Workforce mobility, connected
      </p>
      <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-fg1">
        Connecting talent to opportunity — through the organizations they
        already trust.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-[1.55] text-fg2">
        Runwayz is a two-sided platform. For individuals, a clear path to better
        work. For unions, employers, and schools, a way to bring real career
        mobility to the people they serve.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/talent"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
        >
          For individuals
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg1 hover:bg-raised"
        >
          Get a demo
        </Link>
      </div>

      {/* Two sides */}
      <div className="mt-20 grid gap-6 md:grid-cols-2">
        <Link
          href="/talent"
          className="group rounded-2xl border border-border bg-surface p-8 hover:border-accent"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
            For Talent
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg1">
            Find your next opportunity
          </h2>
          <p className="mt-2 text-fg2">
            Training, credentials, and jobs — surfaced through the union,
            program, or school you already belong to.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
            Explore for talent →
          </span>
        </Link>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
            For Organizations
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg1">
            Bring mobility to your people
          </h2>
          <p className="mt-2 text-fg2">
            Bring Runwayz to the people you serve:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SEGMENTS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-fg1 hover:bg-raised"
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

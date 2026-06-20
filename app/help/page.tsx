import Link from "next/link";
import { HelpSearch } from "@/components/HelpSearch";
import { AUDIENCES, AUDIENCE_SLUGS } from "@/lib/help";

export const metadata = { title: "Help Center · Runwayz" };

export default function HelpLanding() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-[2.7rem] font-semibold tracking-tight">How can we help?</h1>
      <p className="mt-3 text-fg2">
        Search the help center, or pick the guide that fits you.
      </p>

      <div className="mt-8">
        <HelpSearch />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {AUDIENCE_SLUGS.map((slug) => {
          const a = AUDIENCES[slug];
          return (
            <Link
              key={slug}
              href={`/help/${slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent"
            >
              <span className="text-xl font-semibold tracking-tight text-fg1 group-hover:text-accent">
                {a.label}
              </span>
              <span className="mt-2 text-sm text-fg2">{a.blurb}</span>
              <span className="mt-6 text-sm font-medium text-accent">
                Browse help →
              </span>
            </Link>
          );
        })}
      </div>

      <p className="mt-12 border-t border-border pt-8 text-fg2">
        Can&apos;t find the answer here? Email us at{" "}
        <a
          href="mailto:hello@runwayz.com"
          className="font-medium text-accent underline underline-offset-2"
        >
          hello@runwayz.com
        </a>
        .
      </p>
    </div>
  );
}

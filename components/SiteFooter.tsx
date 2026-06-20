import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const COLUMNS = [
  {
    heading: "Who we serve",
    links: [
      { label: "Trade Unions", href: "/unions" },
      { label: "Trade Associations", href: "/associations" },
      // { label: "Workforce Boards", href: "/workforce-boards" }, // hidden for now
      { label: "Employers", href: "/employers" },
      { label: "Institutions & Schools", href: "/education" },
      { label: "Talent", href: "/talent" },
    ],
  },
  {
    heading: "Site",
    links: [
      // { label: "Platform", href: "/platform" }, // hidden for now — pages still live at /platform
      { label: "Get a demo", href: "/contact" },
      { label: "Help Center", href: "/help" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
  // Resources (Case Studies + Blog) hidden for the pre-release; restore when ready.
  // {
  //   heading: "Resources",
  //   links: [
  //     { label: "Case Studies", href: "/case-studies" },
  //     { label: "Blog", href: "/blog" },
  //   ],
  // },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center" aria-label="Runwayz home">
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="/brand/runwayz-logo-light.svg"
                alt="Runwayz"
                className="h-6 w-auto dark:hidden"
              />
              <img
                src="/brand/runwayz-logo-dark.svg"
                alt="Runwayz"
                className="hidden h-6 w-auto dark:block"
              />
              {/* eslint-enable @next/next/no-img-element */}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-fg3">
              From Liftoff to Landing
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-wider text-fg3">
                {col.heading}
              </p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-fg2 hover:text-fg1"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-border pt-6 text-sm text-fg3">
          <span>© 2026 Runwayz</span>
          <div className="flex items-center gap-1">
            {/* Discreet link to the living brand book */}
            <Link
              href="/style-guide"
              aria-label="Brand guidelines"
              title="Brand guidelines"
              className="rounded p-1 text-fg3/60 transition-colors hover:text-fg2"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
              </svg>
            </Link>
            {/* Discreet dark-mode toggle */}
            <ThemeToggle subtle />
          </div>
        </div>
      </div>
    </footer>
  );
}

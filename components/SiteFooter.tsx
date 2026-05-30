import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const COLUMNS = [
  {
    heading: "Who we serve",
    links: [
      { label: "Unions & Associations", href: "/unions-associations" },
      { label: "Workforce Boards", href: "/workforce-boards" },
      { label: "Employers", href: "/employers" },
      { label: "Institutions & Schools", href: "/education" },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "Talent", href: "/talent" },
      { label: "Get a demo", href: "/contact" },
    ],
  },
  {
    // Case Studies + Blog live here for now — to be built out next.
    heading: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
    ],
  },
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
              Connecting talent to opportunity through the organizations they
              already trust.
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
          <span>© 2026 Runwayz · Built with Next.js + Sanity</span>
          {/* Discreet dark-mode toggle */}
          <ThemeToggle subtle />
        </div>
      </div>
    </footer>
  );
}

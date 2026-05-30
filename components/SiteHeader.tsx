"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SERVE_GROUPS } from "@/lib/nav";

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Runwayz home">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/brand/runwayz-logo-light.svg"
        alt="Runwayz"
        className="h-7 w-auto dark:hidden"
      />
      <img
        src="/brand/runwayz-logo-dark.svg"
        alt="Runwayz"
        className="hidden h-7 w-auto dark:block"
      />
      {/* eslint-enable @next/next/no-img-element */}
    </Link>
  );
}

export function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-page/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex" ref={wrapRef}>
          <Link
            href="/talent"
            className="rounded-md px-3 py-2 text-sm text-fg2 hover:text-fg1"
          >
            Talent
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-fg2 hover:text-fg1"
              onClick={() => setMegaOpen((o) => !o)}
              aria-expanded={megaOpen}
            >
              Who we serve
              <svg
                className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {megaOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 rounded-2xl border border-border bg-surface p-6 shadow-xl">
                  {SERVE_GROUPS.map((g) => (
                    <div key={g.heading}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-fg3">
                        {g.heading}
                      </p>
                      <ul className="space-y-1">
                        {g.items.map((it) => (
                          <li key={it.href}>
                            <Link
                              href={it.href}
                              className="block rounded-lg px-3 py-2 hover:bg-raised"
                              onClick={() => setMegaOpen(false)}
                            >
                              <span className="block text-sm font-medium text-fg1">
                                {it.label}
                              </span>
                              <span className="block text-xs text-fg3">
                                {it.desc}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="ml-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-contrast hover:bg-accent/90"
          >
            Get a demo
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            className="rounded-md p-2 text-fg2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="border-t border-border md:hidden">
          <div className="space-y-4 px-6 py-4">
            <Link
              href="/talent"
              className="block text-sm font-medium text-fg1"
              onClick={() => setMobileOpen(false)}
            >
              Talent
            </Link>
            {SERVE_GROUPS.map((g) => (
              <div key={g.heading}>
                <p className="text-xs font-semibold uppercase tracking-wider text-fg3">
                  {g.heading}
                </p>
                <ul className="mt-1 space-y-1">
                  {g.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="block py-1 text-sm text-fg2"
                        onClick={() => setMobileOpen(false)}
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact"
              className="block rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-accent-contrast"
              onClick={() => setMobileOpen(false)}
            >
              Get a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

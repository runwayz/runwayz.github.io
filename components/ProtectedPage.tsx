"use client";

import { useEffect, useState, type FormEvent } from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Body } from "@/components/PortableTextRenderer";
import {
  openPagePayload,
  type ProtectedPagePayload,
  type SealedPayload,
} from "@/lib/pageCrypto";

type ProtectedPageProps = {
  sealed: SealedPayload;
  /** Page path, used to remember the password for this tab's session. */
  storageKey: string;
};

// Client half of password protection: receives only ciphertext from the static
// export, asks for the password, and decrypts + renders the page in the
// browser. The password is kept in sessionStorage so a refresh or in-page
// navigation doesn't re-prompt within the same tab.
export function ProtectedPage({ sealed, storageKey }: ProtectedPageProps) {
  const sessionKey = `runwayz:page-password:${storageKey}`;
  const [page, setPage] = useState<ProtectedPagePayload | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  // Silently retry a password already entered this session.
  useEffect(() => {
    const stored = sessionStorage.getItem(sessionKey);
    if (!stored) return;
    openPagePayload(sealed, stored)
      .then(setPage)
      .catch(() => sessionStorage.removeItem(sessionKey));
  }, [sealed, sessionKey]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!password || busy) return;
    setBusy(true);
    setError(false);
    try {
      const payload = await openPagePayload(sealed, password);
      sessionStorage.setItem(sessionKey, password);
      setPage(payload);
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  if (page) {
    return (
      <PageTemplate
        eyebrow={page.eyebrow ?? ""}
        title={page.title}
        subtitle={page.description ?? ""}
        image={page.heroImageUrl}
        scrim={page.heroImageUrl ? "dark" : undefined}
        closingCta={page.showClosingCta !== false}
      >
        {page.body ? (
          <section className="mt-6 max-w-3xl">
            <Body value={page.body} />
          </section>
        ) : null}
      </PageTemplate>
    );
  }

  return (
    <div className="mx-auto max-w-md py-20">
      <div className="rounded-2xl border border-border bg-surface p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
          Protected page
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-fg1">
          This page is password protected
        </h1>
        <p className="mt-2 text-sm text-fg2">Enter the password to view it.</p>

        <form onSubmit={onSubmit} className="mt-6">
          <label htmlFor="page-password" className="block text-sm font-medium text-fg1">
            Password
          </label>
          <input
            id="page-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className={
              error
                ? "mt-1 w-full rounded-lg border border-danger bg-surface px-3 py-2 text-sm text-fg1 focus:outline-none focus:ring-2 focus:ring-danger/30"
                : "mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg1 placeholder:text-fg-placeholder focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            }
          />
          {error && <p className="mt-1 text-xs text-danger">Incorrect password. Try again.</p>}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              disabled={busy}
              className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90 disabled:opacity-60"
            >
              {busy ? "Unlocking…" : "Unlock"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

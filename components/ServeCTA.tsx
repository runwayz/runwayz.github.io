import { HubSpotForm } from "./HubSpotForm";

// The real "talk to us" form, shared as the consistent CTA across every
// Who-we-serve page.
const SERVE_FORM_ID = "158fa7a6-83ac-4a3c-b458-b018d7a5aa73";

export function ServeCTA() {
  return (
    <section className="mt-20 rounded-3xl border border-border bg-surface px-6 py-12 sm:px-10">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
        Let&apos;s talk
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
        Twenty minutes, one real conversation.
      </h2>
      <p className="mt-3 max-w-2xl text-fg2">
        Tell us about your organization and the talent challenges you&apos;re
        seeing this year. We&apos;ll show you what a partnership would look like —
        no slides required.
      </p>
      <div className="mt-8 max-w-xl">
        <HubSpotForm formId={SERVE_FORM_ID} />
      </div>
    </section>
  );
}

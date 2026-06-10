import { HubSpotForm } from "./HubSpotForm";

// The real "talk to us" form, shared as the consistent CTA across every
// Who-we-serve page. Pass `heading` (and optionally `body` / `note`) to give a
// page its own headline; everything falls back to the shared default copy.
const SERVE_FORM_ID = "158fa7a6-83ac-4a3c-b458-b018d7a5aa73";

type ServeCTAProps = {
  heading?: string;
  body?: string;
  note?: string;
};

export function ServeCTA({
  heading = "Twenty minutes, one real conversation.",
  body = "Tell us about your organization and the talent challenges you're seeing this year. We'll show you what a partnership would look like.",
  note,
}: ServeCTAProps = {}) {
  return (
    <section className="mt-20 rounded-3xl border border-border bg-surface px-6 py-12 sm:px-10">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
        Let&apos;s talk
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">{heading}</h2>
      <p className="mt-3 max-w-3xl text-fg2">{body}</p>
      {note && <p className="mt-3 max-w-3xl text-fg2">{note}</p>}
      <div className="mx-auto mt-8 max-w-xl">
        <HubSpotForm formId={SERVE_FORM_ID} />
      </div>
    </section>
  );
}

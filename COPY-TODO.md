# Copy & consistency TODO

Generated from a full audit pass (terminology, typos/readability, cross-page
consistency, placeholders). Items below were **left for review** because they
change meaning, need a decision, or are subjective. The obvious mechanical
fixes (em dashes, agreement errors, missing conjunctions, `Learners`→`talent`,
quiz CTAs) are already applied.

## A. Decisions needed (terminology / structure)

1. ✅ **DONE — Third funnel-stage name unified to "Active"** across talent,
   unions, associations (badges + the "Ready" / "Actively Working" prose).
2. ✅ **DONE — "What you get" reconciled.** Both pages now have the unified
   7-item parallel "gets" list (audience-adapted, slot 5 audience-specific) AND
   a 4-card feature/screenshot section. (Screenshots still use grey placeholders,
   see B.2.)
3. **Org funnel verbs in headlines vary:** home "recruit, nurture, convert, and
   retain"; unions "engage, nurture, and build"; associations "engage, nurture,
   and recruit." Align to canonical **Engage / Nurture / Grow** where these
   summarize the funnel?
4. ✅ **RESOLVED — Career Matchmaker stays** (separate surviving feature; quiz
   removal does not affect it). No change to `page.tsx:12-13` / `platform.ts:33`.
5. **"Runwayz Mission" vs "Runwayz mission"** — capitalization differs within
   `app/page.tsx` (:242 vs :288). Is "Mission" a formal program name or a common
   noun? Standardize.
6. **"the Runwayz Project"** (`app/page.tsx:298`, "Learn about the Runwayz
   Project") appears nowhere else. Distinct program, or should it read "Runwayz"
   / "the Runwayz mission"?
7. **"Industry Employers" vs "Employers"** — contact sidebar (`contact:18`) uses
   "Industry Employers"; everywhere else is "Employers." Pick one.
8. **Hero CTA wording varies:** unions/associations/employers/education say
   **"See a Demo"**; home says **"Get a demo"** (lowercase). Standardize label +
   capitalization.

## B. Placeholders & weak copy

1. **`/workforce-boards` is a stub** on the old `AudiencePage` component, which
   renders a literal "This page is a placeholder / Roughed in" panel
   (`components/AudiencePage.tsx:55-66`). Route is live & indexable though hidden
   from nav. Build out or keep noindexed.
2. **8× "Platform screenshot" grey boxes** — 4 on `app/unions/page.tsx` and 4 on
   `app/associations/page.tsx` (FEATURES cards). Replace with real screenshots
   (talent page already uses real `/brand/stage-*.png`).
3. **Footer dev boilerplate:** `components/SiteFooter.tsx` "Built with Next.js +
   Sanity" — likely remove for production.
4. **`comingSoon` / `discuss` platform features** in `lib/platform.ts` ("Tailored
   applications," "Runwayz score," "Partner network"). Confirm intended
   pre-release visibility (routes live, hidden from footer).
5. **Pilot duration mismatch on associations:** "6-month complimentary trial"
   (`:79, :89`) vs "18-month strategic partner pilot program" (`:255`). Reconcile
   or clarify they're different things.
6. **Commented-out nav** (Workforce Boards, Platform, Resources/Case Studies/Blog)
   in `SiteFooter.tsx` and `lib/nav.ts` — restore when those pages exist.

## C. Verify (real-world facts)

1. **Travis Williams quote** (`unions:301-315`) — confirm attribution + that
   "CMRCC … Central Midwest Carpenters" is the correct org name (photo newly
   added).
2. **Home "Featured partners"** spotlights/logos (`page.tsx:30-54`): IFCA &
   Carpenters look confirmed; verify "San Antonio," "Build Chicago," "Howard
   County" are signed partners vs aspirational.
3. **External signup links** (`platform.runwayz.com/talent/signup?step=form`)
   resolve in production.

## D. Unified "what you get" set (✅ APPLIED — item A.2)

Both lists are now **7 parallel items**, swapping only audience nouns
(union↔association, locals↔member companies, apprenticeships↔training programs).
Adopt the tighter **unions** wording for shared items.

1. A branded page for your {union/association}
2. Co-designed rollout in your geography
3. {Apprenticeship / Training & hiring} pathways on the platform
4. Co-branded recruitment campaigns  *(use unions' tighter wording on both)*
5. **Audience-specific slot:** unions → "Foundation-backed cost removal";
   associations → "6-month complimentary trial for member companies"
6. Quarterly pipeline reports  *(unify: "track impressions, candidates,
   conversion, and {apprenticeship & membership / placement} outcomes")*
7. Dedicated partner success team  *(use unions' wording on both)*

✅ Resolved: associations now also has the **feature/screenshot "What you get"**
section (4 cards, mirrored from unions and adapted to member companies), so both
pages carry both the feature section and the 7-item gets list.

## E. Subjective readability rewrites (optional polish)

Flagged but not applied (preserve-meaning rewrites available on request):
`talent:99-104` (repetitive "Runwayz helps you"), `page.tsx` hero intro double
"wondering" + "…Runwayz" missing space, `unions` ROI paragraph (split the
$40k sentence), `associations:166-173` & `:67` (ROI / "member companies"
repetition), `unions` "day in the life" sentence, `associations:196-199`
("layered." fragment), `page.tsx:234-243` partner headline noun-stack.

---
*Applied automatically this pass: all Talent CTAs → "Create your Account" (quiz
removed) + home quiz CTA; 10 em dashes in copy → commas; subject/verb "are→is"
(unions); "both open Roles, Training Apprenticeships" → "…and…"; missing Oxford
"and" (associations ×2); semicolons → commas (associations); `Learners`→
`Early-career talent` (unions) & `learners`→`students` (nav); "interested
Talent"→lowercase; "towards"→"toward".*

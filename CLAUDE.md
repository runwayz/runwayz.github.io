@AGENTS.md

# Runwayz design system rules

The design system is the source of truth. Tokens live in `app/globals.css` (CSS
variables under `:root`/`.dark`, mapped to Tailwind utilities via `@theme`:
`bg-page`, `bg-surface`, `text-fg1/fg2/fg3`, `text-accent`, `border-border`,
`success`/`warning`/`danger`, plus the `.subheading` component class). The living
brand book is the page at `app/style-guide/page.tsx` (route `/style-guide`).

**Rule 1 — design-token changes are global + documented.** When the user
specifies a change to any design token or global style (a color, type size, the
font, the subheading, spacing, radius, etc.), apply it **globally** — update the
token in `globals.css` and/or every Tailwind class that uses it across the app,
never just one instance — **and** update the brand book page so it reflects the
change. The site and `/style-guide` must always agree.

**Rule 2 — default to canonical classes.** When the user gives a design
recommendation *without* explicitly saying "update the global classes," do not
invent ad-hoc values. Map their intent to the correct existing token/utility/
class from the style guide. Screenshots or descriptions may not translate
perfectly to our classes — translate them to the canonical tokens.

# Standard content-page template (DECIDED — build pending design)

All top-level pages **except the homepage** (talent, employers, workforce-boards,
unions-associations, education, and future ones) share ONE standard page
template, with content variety coming from composable blocks. Agreed
architecture, to be built once the user provides the page design (expected
~2026-05-31):

1. **Route group `app/(pages)/` + shared `layout.tsx`** — provides the standard
   chrome (container, vertical rhythm, closing CTA band) to every page in the
   group automatically. URLs are unaffected (route groups don't appear in the
   path), so `/employers` etc. stay the same.
2. **`PageTemplate` component** — renders the fixed parts (standard hero:
   eyebrow + H1 + `.subheading` + CTA, and a closing CTA section) and drops
   content blocks in between.
3. **`components/blocks/` library** — approved, token-styled blocks (FeatureGrid,
   StatBand, Quote, LogoWall, RichText, FAQ, Split, …). Pages vary by which
   blocks they use, never by bespoke one-off styling.
4. **Generator `npm run new:page <slug> "<Title>" "<Eyebrow>"`** — scaffolds a new
   page in `app/(pages)/` pre-wired to `PageTemplate` + starter blocks, so new
   pages auto-start from the standard.

**Rule:** every new top-level page MUST use `PageTemplate` + blocks from
`components/blocks/` (scaffold via `npm run new:page`); document any new block in
the brand book. The current `AudiencePage` is the prototype that becomes
`PageTemplate`. Do NOT build this until the user shares the design template.

# Runwayz

Marketing site with a web-based CMS. Hand-built pages for full design control,
plus a Sanity-powered **Blog** and **Case Studies** that the team edits in a GUI.
HubSpot forms embed anywhere — including inside article bodies.

- **Front end:** Next.js 16 (App Router) + TypeScript + Tailwind v4
- **CMS:** Sanity (schemas live in `sanity/schemas`, Studio hosted on `*.sanity.studio`; `/studio` also runs locally under `npm run dev`)
- **Hosting:** GitHub Pages (static export — `output: 'export'`). Content is
  fetched from Sanity at **build time**; a Sanity webhook rebuilds the site when
  content changes. No server at runtime, so there is no SSR/ISR.

## Architecture at a glance

| Surface | Where it lives | Who controls design |
|---|---|---|
| Marketing pages | `app/page.tsx`, etc. (hand-coded) | You, in code |
| Blog | `app/blog/` (template) ← `blogPost` content | You, in code |
| Case Studies | `app/case-studies/` (template) ← `caseStudy` content | You, in code |
| Editing GUI | Sanity Studio | Sanity (off-the-shelf) |

Each route queries **only its own `_type`**, so the right template always renders
the right content. Rich text is rendered through `components/PortableTextRenderer.tsx`,
which maps each block (paragraphs, images, pull quotes, HubSpot forms) to your components.

## Local development

The Sanity project already exists — project id **`h0qisgoh`**, dataset
**`production`**. You connect to it; you don't create a new one.

```bash
npm install

# Create .env.local (git-ignored) — copy .env.example and fill in:
#   NEXT_PUBLIC_SANITY_PROJECT_ID=h0qisgoh
#   NEXT_PUBLIC_SANITY_DATASET=production
#   SANITY_API_READ_TOKEN=<Viewer token>     # see "Read token" below
#   NEXT_PUBLIC_HUBSPOT_PORTAL_ID=XXXXXXX     # optional, for forms

npx sanity login             # once, so the CLI can deploy Studio / import data
npm run dev                  # site at :3000, embedded Studio at :3000/studio
```

**Read token.** Content is read with a server-only viewer token (never shipped
to the browser). Create one at **sanity.io/manage → API → Tokens → Add token →
Viewer**, and put it in `.env.local` as `SANITY_API_READ_TOKEN`. The same token
is stored as the `SANITY_API_READ_TOKEN` GitHub Actions secret for production
builds. (A fresh `production` dataset is public, so published reads work without
a token, but the code expects one and it keeps working if the dataset is later
made private.)

> **Heads-up — don't empty a content type.** `/blog/[slug]` and
> `/case-studies/[slug]` are statically generated, so the build **fails if a
> content type has zero published documents**. Always keep at least one
> published `blogPost` and one `caseStudy` in the dataset.

### How the project was first set up (reference — already done)

```bash
npx sanity login
npx sanity init --env=.env.local      # NOTE: the value is required — bare `--env` errors on CLI v5
npx sanity dataset import sanity/seed.ndjson production   # seed: 1 author, 1 post, 1 case study, 6 routes
```

## Deploy the CMS (hosted Studio)

```bash
npx sanity deploy            # publishes Studio to runwayz.sanity.studio
```

Already deployed and live at **https://runwayz.sanity.studio**. Re-run the
command after changing schemas to push the update.

## Editing content (for non-technical users)

Editors never touch code. They work entirely in the hosted Studio:

1. **Go to https://runwayz.sanity.studio** and log in. (First, an admin must
   invite them: **sanity.io/manage → project → Members → Invite** — or share
   access from inside the Studio. The free plan allows a small team; everyone
   needs a free Sanity account, sign-in by Google/GitHub/email.)
2. In the left sidebar pick a content type — **Blog Post** or **Case Study**.
3. **Edit** an existing item by clicking it, or **create** a new one with the
   **+** (pencil) button at the top of the list.
4. Fill in the fields — title, slug (auto-fills from the title), cover image,
   author, and the body. The body is a rich-text editor: headings, bold/italic,
   links, images, pull quotes, and HubSpot forms.
5. Click **Publish** (bottom-right). **This is the important step** — unpublished
   work stays a private *draft* and never appears on the live site.

**When does it show up on the site?** The site is rebuilt from published content.
Publishing fires the Sanity webhook (see *Automatic content updates* below), which
rebuilds the site automatically in ~1–2 minutes. You can also trigger a rebuild
manually (push to `master`, or **Actions → Deploy to GitHub Pages → Run workflow**).

> **Don't delete the last item of a type.** Because pages are statically
> generated, the build fails if **Blog Post** or **Case Study** has zero
> published documents. Always keep at least one of each published.

To **unpublish/hide** an item, open it and use the **⋯ menu → Unpublish** (then
rebuild). Deleting works the same way but is permanent.

### Help Center (`/help`)

The help center is split into two **separately-managed audiences**:

- `/help` — a landing page with search and two buttons (Talent / Organizations).
- `/help/talent` and `/help/partners` — each a self-contained section with its
  own categories and articles. Article URLs are `/help/<audience>/<slug>`.

Edited in Studio like the other content types:

- **Help Category** — a grouping (e.g. "Getting Started"). **Set its `Audience`**
  (Talent or Organizations) — that's what puts the category and all its articles
  in the right section. `order` sets its position. Create these first.
- **Help Article** — the actual article. Pick a **Category** (which determines its
  audience), write the **body**, and Publish. The body's **H2/H3 headings build
  the "On this page" table of contents**, and `Last updated` shows `updatedAt`.

The audience lives on the **category**, so to move content between sections you
change the category's audience (or move the article to a category in the other
section). Each section has a starter "Welcome" article to copy as a template.

**Search** is built by [Pagefind](https://pagefind.app) during deploy (the
`npx pagefind --site out` step in the workflow indexes the published articles).
So search only works on the **built/deployed** site — under `npm run dev` the
search box shows a "not available locally" note. To test it locally, run
`npm run build && npm run search:build` and serve the `out/` directory.

> The don't-empty-a-type rule applies here too: keep at least one published
> **Help Article**, or the build fails.

### Standard pages (CMS-managed marketing pages)

Editors can create whole marketing pages in Studio using the site's standard
page template (`components/PageTemplate.tsx`), rendered by `app/[...slug]`:

- **Page** — the page itself: **Title (H1, required)**, **slug**,
  **header text (eyebrow)**, **page description** (subheading + meta
  description), optional **hero image**, a rich-text **body** (same editor as
  blog posts: headings, images, pull quotes, HubSpot forms), and a toggle for
  the closing CTA band.
- **Route** — a URL parent segment for organizing pages. On a Page, the
  **Parent route** field picks an existing route **or creates a new one
  inline**. The URL becomes `/<route>/<slug>` (e.g. route `employers` + slug
  `construction` → `/employers/construction/`). Leave it empty for a top-level
  URL (`/<slug>`). The hand-built site sections (talent, employers,
  workforce-boards, unions-associations, education, platform) exist as
  **built-in routes**: editors can nest pages under them but cannot edit or
  delete them (they are owned by code — see `lib/builtInRoutes.ts`; add an
  entry there plus a seed line when a new section ships).

Guardrails: the page's **full resolved URL** (parent route slug + page slug)
is validated in Studio against every hand-built path — top-level ones like
`/talent` and `/contact` as well as nested ones like `/platform/partners` —
and the parent routes `blog`, `case-studies`, `help`, and `studio` are
rejected outright (those namespaces belong to other templates). The reserved
lists live in `lib/reservedPaths.ts`, shared by the Studio validation and the
build-time backstop filter — **add new hand-built pages there**. Slugs must be
unique **within the same parent route**. Unlike blog
posts and case studies, having **zero** published Pages is fine — the route
emits a hidden placeholder that renders 404 content, so the build stays green.

`sanity/seed.ndjson` includes seven starter routes: the existing site sections
(talent, employers, workforce-boards, unions-associations, education, platform)
plus about; import it (or just create routes in Studio) to make them pickable.

**Password protection.** Toggle **Password protect this page** on a Page and
set a password. Because the site is a static export, the protection is done by
**encrypting the page at build time** (AES-256-GCM, key derived from the
password): the published files contain only ciphertext plus an unlock form, and
the browser decrypts after the visitor enters the password. Notes:

- The password is a plain field in the dataset, so **anyone with Studio access
  can read it**. Fine for share-with-a-client pages; not for real secrets.
- Changing the password or content takes effect on the **next rebuild**
  (automatic on publish via the webhook).
- Protected pages are excluded from search engines (`noindex`, and their title/
  description stay out of the HTML). Site search never indexes standard pages.
- The password is remembered per browser tab (sessionStorage), so a refresh
  doesn't re-prompt.

## Deploy the site (GitHub Pages)

The repo is `runwayz/runwayz.github.io`, so the site publishes to
`https://runwayz.github.io`. Deploys run via GitHub Actions
(`.github/workflows/deploy.yml`): it builds the static export to `out/` and
publishes it to Pages.

**One-time setup (already configured for this repo):**

1. **Settings → Pages → Build and deployment → Source = GitHub Actions.** ✅
2. **Settings → Secrets and variables → Actions:** ✅
   - **Variables:** `NEXT_PUBLIC_SANITY_PROJECT_ID` (`h0qisgoh`),
     `NEXT_PUBLIC_SANITY_DATASET` (`production`), `NEXT_PUBLIC_SANITY_API_VERSION`
     (`2024-10-01`), and optionally `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`.
   - **Secret:** `SANITY_API_READ_TOKEN` — the server-only viewer token, used at
     build time only; it never reaches the browser.
3. Push to `master` → the workflow builds and deploys. (Also runs on a manual
   dispatch and on the `sanity-publish` webhook below.)

Builds fetch published Sanity content at build time, so the live pages reflect
whatever is published when the workflow runs.

**Go live on a custom domain later:** add a `CNAME` file (or set the domain in
**Settings → Pages**) and point DNS at GitHub. No code changes — the export is
already served from the site root.

### Automatic content updates (Sanity webhook) ✅

Because the site is statically exported, publishing in Sanity triggers a
**rebuild** via a GitHub `repository_dispatch`. This is **configured and live** —
publishing a document rebuilds the site in ~1–2 minutes. The deploy workflow
listens for it (`repository_dispatch: types: [sanity-publish]`).

How it was set up (for reference / if the token ever needs rotating):

1. Created a GitHub fine-grained personal access token with **Contents: read &
   write**, resource owner **`runwayz`** (the org — not your personal account).
2. In Sanity: **Manage → API → Webhooks**, with:
   - **URL:** `https://api.github.com/repos/runwayz/runwayz.github.io/dispatches`
   - **HTTP method:** `POST`
   - **HTTP Headers:**
     `Authorization: Bearer <token>` (note: `Bearer ` then a space — no colon),
     `Accept: application/vnd.github+json`
   - **Trigger on:** Create, Update, Delete (Drafts off)
   - **Projection** (under *Advanced settings*): `{"event_type": "sanity-publish"}`
     — required; GitHub rejects the call without an `event_type`.

To debug a delivery, use the webhook's **⋯ → Attempts log**: `204` = success,
`422` = bad/empty Projection, `401/403` = token/Authorization header.

## Adding a new content type later

1. Add a schema in `sanity/schemas/` and register it in `sanity/schemas/index.ts`.
2. Add a query in `sanity/lib/queries.ts`.
3. Add a route + template under `app/` (copy `app/case-studies/` as a model).

That's the whole pattern — no homebrewed admin, design stays in your hands.

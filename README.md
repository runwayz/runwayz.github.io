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
npx sanity dataset import sanity/seed.ndjson production   # seed: 1 author, 1 post, 1 case study
```

## Deploy the CMS (hosted Studio)

```bash
npx sanity deploy            # publishes Studio to runwayz.sanity.studio
```

Invite the client there (Manage → Members). Free tier = 3 users.

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

### Automatic content updates (Sanity webhook)
Because the site is statically exported, publishing in Sanity must trigger a
**rebuild**. Wire a Sanity webhook to a GitHub `repository_dispatch`:

1. Create a GitHub fine-grained personal access token with **Contents: read &
   write** (or **Actions**) on this repo.
2. In Sanity: **Manage → API → Webhooks → Create webhook**
   - **URL:** `https://api.github.com/repos/runwayz/runwayz.github.io/dispatches`
   - **Method:** `POST`
   - **HTTP Headers:**
     `Authorization: Bearer <token>`,
     `Accept: application/vnd.github+json`
   - **Trigger on:** Create, Update, Delete
   - **Projection / body:** `{ "event_type": "sanity-publish" }`
3. Publishing now fires the `sanity-publish` event, which the deploy workflow
   listens for (`repository_dispatch`) and rebuilds the site (~1–2 min).

## Adding a new content type later

1. Add a schema in `sanity/schemas/` and register it in `sanity/schemas/index.ts`.
2. Add a query in `sanity/lib/queries.ts`.
3. Add a route + template under `app/` (copy `app/case-studies/` as a model).

That's the whole pattern — no homebrewed admin, design stays in your hands.

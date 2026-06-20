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

## One-time setup (you must do this — it needs your Sanity login)

```bash
# 1. Log in and create a Sanity project (opens a browser)
npx sanity login
npx sanity init --env        # writes the project id into .env.local

# 2. Add your HubSpot portal id to .env.local (optional, for forms)
#    NEXT_PUBLIC_HUBSPOT_PORTAL_ID=XXXXXXX

# 3. Run it
npm run dev                  # site at :3000, embedded Studio at :3000/studio
```

> Until a real project id is set, content fetches return empty (the site still
> runs and shows empty states). See `.env.example`.

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

**One-time setup:**

1. **Settings → Pages → Build and deployment → Source = GitHub Actions.**
2. **Settings → Secrets and variables → Actions:**
   - **Variables:** `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`
     (`production`), `NEXT_PUBLIC_SANITY_API_VERSION`, and optionally
     `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`.
   - **Secret:** `SANITY_API_READ_TOKEN` — the server-only viewer token, used at
     build time only; it never reaches the browser.
3. Push to `master`. The workflow builds and deploys.

> Until the Sanity vars/secret are set, the build still succeeds — content
> fetches return empty (blog/case-studies show empty states). The hand-coded
> marketing pages work regardless.

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

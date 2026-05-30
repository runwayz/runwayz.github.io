# Runwayz

Marketing site with a web-based CMS. Hand-built pages for full design control,
plus a Sanity-powered **Blog** and **Case Studies** that the team edits in a GUI.
HubSpot forms embed anywhere — including inside article bodies.

- **Front end:** Next.js 16 (App Router) + TypeScript + Tailwind v4
- **CMS:** Sanity (schemas live in `sanity/schemas`, Studio at `/studio` and hosted on `*.sanity.studio`)
- **Hosting:** Netlify (full Next.js — SSR + on-demand revalidation)

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

## Deploy the site (Netlify)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git** → pick the repo.
3. Set the same env vars from `.env.local` in **Site settings → Environment variables** —
   including `SANITY_API_READ_TOKEN` (the project gates anonymous reads, so the
   server needs a viewer token; it stays server-side and never reaches the browser).
4. Deploy. `netlify.toml` + the Next.js adapter handle the rest.

### Instant content updates (optional)
In Sanity (**API → Webhooks**) add a webhook to your Netlify **build hook** URL so
publishing triggers a rebuild. With ISR (`revalidate = 60`) pages also refresh
automatically within a minute.

## Adding a new content type later

1. Add a schema in `sanity/schemas/` and register it in `sanity/schemas/index.ts`.
2. Add a query in `sanity/lib/queries.ts`.
3. Add a route + template under `app/` (copy `app/case-studies/` as a model).

That's the whole pattern — no homebrewed admin, design stays in your hands.

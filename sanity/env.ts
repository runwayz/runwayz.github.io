// Centralized Sanity environment config. Values come from .env.local —
// see .env.example. Defaults keep `npm run dev`/`build` from crashing before
// a real project is connected (fetches simply return empty until then).
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'

// Default HubSpot portal id (per-form ids are set in the CMS).
export const hubspotPortalId =
  process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || ''

// Server-only viewer token. This project gates anonymous API reads, so
// server-side fetches need it. NOT prefixed NEXT_PUBLIC — never sent to browser.
export const readToken = process.env.SANITY_API_READ_TOKEN || ''

export const isSanityConfigured = projectId !== 'placeholder'

// Single source of truth for URLs owned by hand-built routes in app/. Studio
// validation (sanity/schemas) and the CMS page route (app/[...slug]) both
// check against these lists, so they can never drift apart.
//
// ADD TO THESE LISTS whenever a new hand-built page ships, or a CMS page could
// silently shadow it.

// Top-level URL segments owned by hand-built pages. A Page with no parent
// route can't take one of these slugs.
export const RESERVED_TOP_LEVEL = [
  'associations',
  'blog',
  'case-studies',
  'contact',
  'education',
  'employers',
  'help',
  'platform',
  'privacy',
  'studio',
  'style-guide',
  'talent',
  'terms',
  'unions',
  'unions-associations',
  'workforce-boards',
]

// Hand-built pages that live one level deep. A Page whose parent route + slug
// resolves to one of these full paths is rejected.
export const RESERVED_NESTED = [
  'help/partners',
  'help/talent',
  'platform/partners',
  'platform/talent',
]

// Every path (any depth) owned by a hand-built page.
export const STATIC_PATHS = [...RESERVED_TOP_LEVEL, ...RESERVED_NESTED]

// URL namespaces owned by other templates (app/blog/[slug],
// app/case-studies/[slug], app/help/[audience]/[slug], the embedded Studio).
// No Route may use these as its slug.
export const OWNED_NAMESPACES = ['blog', 'case-studies', 'help', 'studio']

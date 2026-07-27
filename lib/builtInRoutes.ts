// Top-level site sections that exist as hand-built pages in app/. They are
// mirrored into the dataset as `route` documents (stable ids, seeded in
// sanity/seed.ndjson) so editors can nest CMS pages under them, but they are
// OWNED BY CODE: the Studio renders them read-only and strips the
// delete/unpublish actions (see sanity/schemas/route.ts and sanity.config.ts).
//
// Add an entry here (and a matching line in sanity/seed.ndjson) when a new
// hand-built section ships.
export const BUILT_IN_ROUTES = [
  { id: 'route.talent', title: 'Talent', slug: 'talent' },
  { id: 'route.employers', title: 'Employers', slug: 'employers' },
  { id: 'route.workforce-boards', title: 'Workforce Boards', slug: 'workforce-boards' },
  { id: 'route.unions-associations', title: 'Unions & Associations', slug: 'unions-associations' },
  { id: 'route.education', title: 'Education', slug: 'education' },
  { id: 'route.platform', title: 'Platform', slug: 'platform' },
]

export function isBuiltInRoute(documentId: string): boolean {
  const id = documentId.replace(/^drafts\./, '')
  return BUILT_IN_ROUTES.some((r) => r.id === id)
}

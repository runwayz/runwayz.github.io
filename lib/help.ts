// The help center is split into two separately-managed audiences. The slugs are
// the URL segments (/help/<slug>) AND the value stored on each Help Category's
// `audience` field in Sanity — that linkage is what keeps the two sections'
// content separate.

export const AUDIENCES = {
  talent: {
    slug: "talent",
    label: "For Talent",
    title: "Help for Talent",
    blurb: "Exploring careers, applying, and finding placements with Runwayz.",
  },
  partners: {
    slug: "partners",
    label: "For Organizations",
    title: "Help for Organizations",
    blurb: "For Runwayz institutional partners managing programs and talent.",
  },
} as const;

export type AudienceSlug = keyof typeof AUDIENCES;

export const AUDIENCE_SLUGS = Object.keys(AUDIENCES) as AudienceSlug[];

export function isAudience(slug: string): slug is AudienceSlug {
  return slug in AUDIENCES;
}

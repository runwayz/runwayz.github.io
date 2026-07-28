import { defineType, defineField, type SlugValidationContext } from 'sanity'
import { apiVersion } from '../env'
import { RESERVED_TOP_LEVEL, STATIC_PATHS } from '../../lib/reservedPaths'

// Slug uniqueness scoped to the parent route: two pages may share a slug as
// long as they live under different parents (the full URL is what must be
// unique). Sanity's default isUnique is type-wide, which is too strict here.
async function isUniqueWithinParent(slug: string, context: SlugValidationContext) {
  const { document, getClient } = context
  const client = getClient({ apiVersion })
  const id = document?._id.replace(/^drafts\./, '') ?? ''
  const parentRef = (document?.parent as { _ref?: string } | undefined)?._ref ?? null
  const query = parentRef
    ? `!defined(*[_type == "page" && !(_id in [$draft, $published]) && slug.current == $slug && parent._ref == $parentRef][0]._id)`
    : `!defined(*[_type == "page" && !(_id in [$draft, $published]) && slug.current == $slug && !defined(parent)][0]._id)`
  return client.fetch<boolean>(query, { draft: `drafts.${id}`, published: id, slug, parentRef })
}

// A standard marketing page rendered by the standard page template
// (components/PageTemplate.tsx): hero (header text + H1 + description), a
// rich-text body (same editor as blog posts: images, pull quotes, HubSpot
// forms), and an optional closing CTA band. URL is /<parent-route>/<slug>,
// or /<slug> when no parent route is set.
export const page = defineType({
  name: 'page', // <- this _type drives routing to app/[...slug]
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (H1)',
      type: 'string',
      description: 'The page headline, rendered as the H1 in the hero.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'The last URL segment. Full URL: /<parent route>/<slug>, or /<slug> with no parent.',
      options: { source: 'title', maxLength: 96, isUnique: isUniqueWithinParent },
      // The FULL resolved path (parent route slug + page slug) must not shadow
      // a hand-built page: /talent at the top level, /platform/partners one
      // level deep, etc. Lists live in lib/reservedPaths.ts, shared with the
      // build-time filter in app/[...slug].
      validation: (r) =>
        r.required().custom(async (slug, context) => {
          const current = slug?.current
          if (!current) return true
          const parentRef = (context.document?.parent as { _ref?: string } | undefined)?._ref
          if (!parentRef) {
            if (RESERVED_TOP_LEVEL.includes(current)) {
              return `"/${current}" is already a hand-built page on the site. Pick a different slug or set a parent route.`
            }
            return true
          }
          const client = context.getClient({ apiVersion })
          const parentSlug = await client.fetch<string | null>(
            '*[_id in [$id, "drafts." + $id]][0].slug.current',
            { id: parentRef },
          )
          if (parentSlug && STATIC_PATHS.includes(`${parentSlug}/${current}`)) {
            return `"/${parentSlug}/${current}" is already a hand-built page on the site. Pick a different slug.`
          }
          return true
        }),
    }),
    defineField({
      name: 'parent',
      title: 'Parent route',
      type: 'reference',
      to: [{ type: 'route' }],
      description:
        'Where the page lives in the URL, e.g. the "employers" route gives /employers/<slug>. Pick an existing route or create a new one here. Leave empty for a top-level URL.',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Header text (eyebrow)',
      type: 'string',
      description: 'Small uppercase text above the H1, e.g. "For employers".',
    }),
    defineField({
      name: 'description',
      title: 'Page description',
      type: 'text',
      rows: 3,
      description: 'The subheading under the H1. Also used as the meta description.',
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional full-bleed hero background. Omit for a text-only hero.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'Flowing article-style content. Rendered above the sections.',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      description:
        'Designed full-width page sections. Add, reorder, and mix blocks; layout and styling are fixed by the design system.',
      of: [
        { type: 'sectionRichText' },
        { type: 'sectionSplit' },
        { type: 'sectionFeatureGrid' },
        { type: 'sectionStatBand' },
        { type: 'sectionLogoWall' },
        { type: 'sectionQuote' },
        { type: 'sectionCtaBand' },
      ],
    }),
    defineField({
      name: 'showClosingCta',
      title: 'Show closing CTA band',
      type: 'boolean',
      initialValue: true,
      description: 'Renders the standard "See a Demo" band at the bottom of the page.',
    }),
    defineField({
      name: 'protected',
      title: 'Password protect this page',
      type: 'boolean',
      initialValue: false,
      description:
        'Visitors must enter a password to view the page. The content is encrypted in the published site, not just hidden.',
    }),
    defineField({
      name: 'password',
      type: 'string',
      hidden: ({ document }) => !document?.protected,
      description:
        'The password visitors enter. Anyone with Studio access can read it here. Changing it takes effect on the next site rebuild (automatic on publish).',
      validation: (r) =>
        r.custom((value, context) => {
          if (context.document?.protected && !value) {
            return 'A password is required when the page is protected.'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current', parentSlug: 'parent.slug.current', media: 'heroImage' },
    prepare: ({ title, slug, parentSlug, media }) => ({
      title,
      subtitle: '/' + [parentSlug, slug].filter(Boolean).join('/'),
      media,
    }),
  },
})

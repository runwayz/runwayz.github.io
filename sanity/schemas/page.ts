import { defineType, defineField, type SlugValidationContext } from 'sanity'
import { apiVersion } from '../env'

// Top-level URLs already owned by hand-built routes in app/. A Page with no
// parent route can't take one of these slugs or it would shadow a real page.
const RESERVED_TOP_LEVEL = [
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
      validation: (r) =>
        r.required().custom((slug, context) => {
          const current = slug?.current
          const hasParent = Boolean((context.document?.parent as { _ref?: string } | undefined)?._ref)
          if (current && !hasParent && RESERVED_TOP_LEVEL.includes(current)) {
            return `"/${current}" is already a hand-built page on the site. Pick a different slug or set a parent route.`
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
    }),
    defineField({
      name: 'showClosingCta',
      title: 'Show closing CTA band',
      type: 'boolean',
      initialValue: true,
      description: 'Renders the standard "See a Demo" band at the bottom of the page.',
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

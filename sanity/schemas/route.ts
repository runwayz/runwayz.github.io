import { defineType, defineField } from 'sanity'
import { OWNED_NAMESPACES } from '../../lib/reservedPaths'
import { isBuiltInRoute } from '../../lib/builtInRoutes'

// A URL parent segment that standard Pages can nest under, e.g. the route
// "employers" gives pages URLs like /employers/<page-slug>. Editors pick an
// existing route on a Page or create a new one inline from the same field.
// Built-in routes (lib/builtInRoutes.ts) mirror hand-built site sections and
// are read-only here; sanity.config.ts also strips their delete action.
export const route = defineType({
  name: 'route',
  title: 'Route',
  type: 'document',
  readOnly: ({ document }) => isBuiltInRoute(document?._id ?? ''),
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Display name for this URL section (e.g. "Employers").',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'The URL segment pages nest under: "employers" gives /employers/<page-slug>.',
      options: { source: 'title', maxLength: 96 },
      validation: (r) =>
        r.required().custom((slug) => {
          const current = slug?.current
          if (current && OWNED_NAMESPACES.includes(current)) {
            return `"${current}" is reserved by the ${current} template and cannot be used as a parent route.`
          }
          return true
        }),
    }),
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current', id: '_id' },
    prepare: ({ title, slug, id }) => ({
      title,
      subtitle: [slug ? `/${slug}/…` : '', isBuiltInRoute(id ?? '') ? 'built-in' : '']
        .filter(Boolean)
        .join(' · '),
    }),
  },
})

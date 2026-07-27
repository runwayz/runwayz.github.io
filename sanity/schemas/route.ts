import { defineType, defineField } from 'sanity'

// URL namespaces owned by other templates (app/blog/[slug], app/case-studies/
// [slug], app/help/[audience]/[slug], the embedded Studio). Standard pages
// can't nest under these or their URLs would collide with those templates.
const OWNED_NAMESPACES = ['blog', 'case-studies', 'help', 'studio']

// A URL parent segment that standard Pages can nest under, e.g. the route
// "employers" gives pages URLs like /employers/<page-slug>. Editors pick an
// existing route on a Page or create a new one inline from the same field.
export const route = defineType({
  name: 'route',
  title: 'Route',
  type: 'document',
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
    select: { title: 'title', slug: 'slug.current' },
    prepare: ({ title, slug }) => ({ title, subtitle: slug ? `/${slug}/…` : '' }),
  },
})

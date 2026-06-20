import { defineType, defineField } from 'sanity'

export const helpArticle = defineType({
  name: 'helpArticle', // <- this _type drives routing to the help-article template
  title: 'Help Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'helpCategory' }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 2,
      description: 'Short summary shown on the help index and in search results.',
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Lower numbers sort first within the category.',
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
      title: 'Last updated',
      description: 'Shown on the article. Set it when you make a meaningful edit.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    { name: 'manual', title: 'Manual order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category.title' },
  },
})

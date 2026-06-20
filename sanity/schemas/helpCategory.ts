import { defineType, defineField } from 'sanity'

export const helpCategory = defineType({
  name: 'helpCategory', // groups help articles in the /help index + sidebar
  title: 'Help Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'audience',
      title: 'Audience',
      type: 'string',
      description: 'Which help section this category (and its articles) belongs to.',
      options: {
        list: [
          { title: 'Talent', value: 'talent' },
          { title: 'Organizations (Partners)', value: 'partners' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 2,
      description: 'Optional one-liner shown under the category heading.',
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Lower numbers sort first. Leave blank to sort by title.',
    }),
  ],
  orderings: [
    { name: 'manual', title: 'Manual order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', audience: 'audience' },
    prepare: ({ title, audience }) => ({
      title,
      subtitle: audience === 'partners' ? 'Organizations' : audience === 'talent' ? 'Talent' : 'No audience set',
    }),
  },
})

import { defineType, defineField } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy', // <- this _type drives routing to the case-study template
  title: 'Case Study',
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
      name: 'client',
      type: 'string',
      title: 'Client name',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'logo', type: 'image', title: 'Client logo', options: { hotspot: true } }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 3,
      description: 'One-line overview shown on the index.',
    }),
    defineField({
      name: 'metrics',
      title: 'Key results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value', validation: (r) => r.required() },
            { name: 'label', type: 'string', title: 'Label', validation: (r) => r.required() },
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
      validation: (r) => r.min(1).max(4),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'logo' },
  },
})

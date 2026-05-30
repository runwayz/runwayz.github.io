import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost', // <- this _type drives routing to the blog template
  title: 'Blog Post',
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
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the blog index and in previews.',
    }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' },
  },
})

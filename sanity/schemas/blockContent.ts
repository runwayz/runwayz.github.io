import { defineType, defineArrayMember } from 'sanity'

// Shared rich-text body used by every content type. The `of: [...]` list is the
// exact set of blocks an editor is allowed to insert — including a custom pull
// quote and an inline HubSpot form. Add a member here = new option everywhere.
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block', // standard headings, paragraphs, lists, links
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alternative text' }],
    }),
    defineArrayMember({
      type: 'object',
      name: 'pullQuote',
      title: 'Pull Quote',
      fields: [
        { name: 'quote', type: 'text', rows: 3, validation: (r) => r.required() },
        { name: 'attribution', type: 'string' },
      ],
      preview: {
        select: { title: 'quote', subtitle: 'attribution' },
        prepare: ({ title, subtitle }) => ({
          title: `“${title}”`,
          subtitle: subtitle ? `— ${subtitle}` : 'Pull quote',
        }),
      },
    }),
    defineArrayMember({
      type: 'object',
      name: 'hubspotForm',
      title: 'HubSpot Form',
      fields: [
        {
          name: 'formId',
          type: 'string',
          title: 'Form ID',
          description: 'The HubSpot form GUID (Marketing → Forms → Share).',
          validation: (r) => r.required(),
        },
        {
          name: 'portalId',
          type: 'string',
          title: 'Portal ID (optional)',
          description: 'Overrides the site default if set.',
        },
      ],
      preview: {
        select: { title: 'formId' },
        prepare: ({ title }) => ({ title: `HubSpot Form: ${title || '—'}` }),
      },
    }),
  ],
})

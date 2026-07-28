import { defineType, defineArrayMember, type Rule } from 'sanity'

// Shared rich-text body used by every content type. The `of: [...]` list is the
// exact set of blocks an editor is allowed to insert — text (curated styles),
// images with captions, pull quotes, 2-3 column layouts, video embeds, and
// inline HubSpot forms. Add a member here = new option everywhere. Every block
// must have a matching renderer in components/PortableTextRenderer.tsx and an
// entry in the brand book (/style-guide, "CMS body blocks").
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // H1 is reserved for the page title; body headings start at H2.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (r: Rule) =>
                  r.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alternative text' },
        { name: 'caption', type: 'string', title: 'Caption', description: 'Optional caption shown under the image.' },
      ],
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
      name: 'columns',
      title: 'Columns',
      description: 'Side-by-side content. Stacks vertically on mobile.',
      fields: [
        {
          name: 'columns',
          title: 'Columns',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'column',
              title: 'Column',
              fields: [{ name: 'body', title: 'Content', type: 'blockContent' }],
              preview: {
                select: { body: 'body' },
                prepare: ({ body }: { body?: { children?: { text?: string }[] }[] }) => ({
                  title:
                    body?.[0]?.children?.map((c) => c.text).join('') || 'Column',
                }),
              },
            },
          ],
          validation: (r: Rule) => r.min(2).max(3),
        },
      ],
      preview: {
        select: { columns: 'columns' },
        prepare: ({ columns }: { columns?: unknown[] }) => ({
          title: `Columns (${columns?.length ?? 0})`,
        }),
      },
    }),
    defineArrayMember({
      type: 'object',
      name: 'videoEmbed',
      title: 'Video',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'Video URL',
          description: 'A YouTube or Vimeo link.',
          validation: (r: Rule) => r.required(),
        },
        { name: 'caption', type: 'string', title: 'Caption' },
      ],
      preview: {
        select: { title: 'url', subtitle: 'caption' },
        prepare: ({ title, subtitle }) => ({ title: `Video: ${title || '—'}`, subtitle }),
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

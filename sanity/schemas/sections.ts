import { defineType, type Rule } from 'sanity'

// Page-builder section blocks for the `sections` field on Page. Each block is
// a designed, full-width section: editors choose blocks, fill structured
// fields, and reorder freely; layout and styling live in code
// (components/SectionRenderer.tsx). Every block here needs a matching
// renderer there and an entry in the brand book (/style-guide,
// "Page sections"). Register new blocks in sanity/schemas/index.ts AND in the
// `sections` field of sanity/schemas/page.ts.

// Optional standard section header, shared by most blocks.
const headerFields = [
  {
    name: 'eyebrow',
    type: 'string',
    title: 'Eyebrow',
    description: 'Small uppercase text above the heading, e.g. "How it works".',
  },
  { name: 'heading', type: 'string', title: 'Heading' },
]

const imageWithAlt = (name: string, title: string, extra: object = {}) => ({
  name,
  title,
  type: 'image',
  options: { hotspot: true },
  fields: [{ name: 'alt', type: 'string', title: 'Alternative text' }],
  ...extra,
})

export const sectionRichText = defineType({
  name: 'sectionRichText',
  title: 'Rich Text',
  type: 'object',
  fields: [
    ...headerFields,
    { name: 'body', title: 'Content', type: 'blockContent', validation: (r: Rule) => r.required() },
  ],
  preview: {
    select: { title: 'heading', body: 'body' },
    prepare: ({ title, body }: { title?: string; body?: { children?: { text?: string }[] }[] }) => ({
      title: title || body?.[0]?.children?.map((c) => c.text).join('') || 'Rich Text',
      subtitle: 'Rich Text',
    }),
  },
})

export const sectionSplit = defineType({
  name: 'sectionSplit',
  title: 'Split (text + media)',
  type: 'object',
  fields: [
    ...headerFields,
    { name: 'body', title: 'Text', type: 'blockContent', validation: (r: Rule) => r.required() },
    imageWithAlt('image', 'Image', { validation: (r: Rule) => r.required() }),
    {
      name: 'imageSide',
      title: 'Image side',
      type: 'string',
      options: { list: ['left', 'right'], layout: 'radio', direction: 'horizontal' },
      initialValue: 'right',
    },
  ],
  preview: {
    select: { title: 'heading', media: 'image' },
    prepare: ({ title, media }) => ({ title: title || 'Split', subtitle: 'Split (text + media)', media }),
  },
})

export const sectionFeatureGrid = defineType({
  name: 'sectionFeatureGrid',
  title: 'Feature Grid',
  type: 'object',
  fields: [
    ...headerFields,
    {
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: { list: [2, 3], layout: 'radio', direction: 'horizontal' },
      initialValue: 3,
    },
    {
      name: 'items',
      title: 'Features',
      type: 'array',
      validation: (r: Rule) => r.min(1),
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            { name: 'title', type: 'string', validation: (r: Rule) => r.required() },
            { name: 'body', type: 'text', rows: 3 },
            imageWithAlt('image', 'Image (optional)'),
          ],
          preview: { select: { title: 'title', subtitle: 'body', media: 'image' } },
        },
      ],
    },
  ],
  preview: {
    select: { title: 'heading', items: 'items' },
    prepare: ({ title, items }: { title?: string; items?: unknown[] }) => ({
      title: title || 'Feature Grid',
      subtitle: `Feature Grid · ${items?.length ?? 0} items`,
    }),
  },
})

export const sectionStatBand = defineType({
  name: 'sectionStatBand',
  title: 'Stat Band',
  type: 'object',
  fields: [
    ...headerFields,
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      validation: (r: Rule) => r.min(1).max(4),
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            { name: 'value', type: 'string', title: 'Value', description: 'e.g. "3.2x" or "$2M".', validation: (r: Rule) => r.required() },
            { name: 'label', type: 'string', title: 'Label', validation: (r: Rule) => r.required() },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    },
  ],
  preview: {
    select: { title: 'heading', stats: 'stats' },
    prepare: ({ title, stats }: { title?: string; stats?: unknown[] }) => ({
      title: title || 'Stat Band',
      subtitle: `Stat Band · ${stats?.length ?? 0} stats`,
    }),
  },
})

export const sectionLogoWall = defineType({
  name: 'sectionLogoWall',
  title: 'Logo Wall',
  type: 'object',
  fields: [
    ...headerFields,
    {
      name: 'logos',
      title: 'Logos',
      type: 'array',
      validation: (r: Rule) => r.min(1),
      of: [imageWithAlt('logo', 'Logo')],
    },
  ],
  preview: {
    select: { title: 'heading', logos: 'logos' },
    prepare: ({ title, logos }: { title?: string; logos?: unknown[] }) => ({
      title: title || 'Logo Wall',
      subtitle: `Logo Wall · ${logos?.length ?? 0} logos`,
    }),
  },
})

export const sectionQuote = defineType({
  name: 'sectionQuote',
  title: 'Quote',
  type: 'object',
  fields: [
    { name: 'quote', type: 'text', rows: 3, validation: (r: Rule) => r.required() },
    { name: 'attribution', type: 'string' },
  ],
  preview: {
    select: { title: 'quote', subtitle: 'attribution' },
    prepare: ({ title, subtitle }) => ({ title: `“${title}”`, subtitle: subtitle || 'Quote' }),
  },
})

export const sectionCtaBand = defineType({
  name: 'sectionCtaBand',
  title: 'CTA Band',
  type: 'object',
  fields: [
    { name: 'heading', type: 'string', validation: (r: Rule) => r.required() },
    { name: 'body', type: 'text', rows: 2 },
    { name: 'buttonLabel', type: 'string', title: 'Button label', validation: (r: Rule) => r.required() },
    {
      name: 'buttonHref',
      type: 'url',
      title: 'Button link',
      validation: (r: Rule) =>
        r.required().uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
    },
  ],
  preview: {
    select: { title: 'heading', subtitle: 'buttonLabel' },
    prepare: ({ title, subtitle }) => ({ title: title || 'CTA Band', subtitle: `CTA Band · ${subtitle ?? ''}` }),
  },
})

export const sectionTypes = [
  sectionRichText,
  sectionSplit,
  sectionFeatureGrid,
  sectionStatBand,
  sectionLogoWall,
  sectionQuote,
  sectionCtaBand,
]

// The list used by the `sections` array field on Page.
export const SECTION_TYPE_NAMES = sectionTypes.map((t) => t.name)

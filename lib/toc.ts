// Table-of-contents helpers shared by the Portable Text renderer (which stamps
// matching `id`s on headings) and the help article TOC sidebar.

// Plain data module (no "use client") so it imports cleanly into server components.

export type TocItem = { text: string; id: string; level: 2 | 3 }

// Minimal Portable Text block shapes we care about for headings.
type Span = { _type?: string; text?: string }
type Block = { _type?: string; style?: string; children?: Span[] }

/** URL-safe anchor id from heading text. Stable across renders. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // drop punctuation
    .replace(/[\s_-]+/g, '-') // collapse whitespace/underscores to a single dash
    .replace(/^-+|-+$/g, '') // trim leading/trailing dashes
}

/** Concatenated plain text of a Portable Text block's spans. */
export function blockText(block: Block): string {
  return (block?.children ?? [])
    .filter((c) => c?._type === 'span' || typeof c?.text === 'string')
    .map((c) => c.text ?? '')
    .join('')
}

/** Build a TOC from the h2/h3 headings in a Portable Text body. */
export function extractToc(body: unknown): TocItem[] {
  if (!Array.isArray(body)) return []
  const items: TocItem[] = []
  for (const block of body as Block[]) {
    if (block?._type !== 'block') continue
    if (block.style !== 'h2' && block.style !== 'h3') continue
    const text = blockText(block).trim()
    if (!text) continue
    items.push({ text, id: slugify(text), level: block.style === 'h2' ? 2 : 3 })
  }
  return items
}

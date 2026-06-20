import type { TocItem } from '@/lib/toc'

// "On this page" sidebar — anchors to the article's h2/h3 headings (the ids are
// stamped by PortableTextRenderer using the same slugify()).
export function ArticleToc({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null
  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-fg3">On this page</p>
      <ul className="space-y-2 border-l border-border">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'pl-7' : 'pl-4'}>
            <a href={`#${item.id}`} className="-ml-px block border-l border-transparent text-fg2 hover:border-accent hover:text-fg1">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

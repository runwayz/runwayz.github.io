import Link from 'next/link'

type NavArticle = { _id: string; title: string; slug: string }
type NavCategory = { _id: string; title: string; slug: string; articles?: NavArticle[] }

// Left sidebar on help article pages: categories → their articles, current
// article highlighted.
export function HelpNav({
  categories,
  currentSlug,
}: {
  categories: NavCategory[]
  currentSlug?: string
}) {
  return (
    <nav aria-label="Help topics" className="text-sm">
      <Link href="/help" className="mb-6 block text-xs font-semibold uppercase tracking-wide text-fg3 hover:text-fg1">
        ← All help topics
      </Link>
      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat._id}>
            <p className="mb-2 font-semibold text-fg1">{cat.title}</p>
            <ul className="space-y-1.5 border-l border-border">
              {(cat.articles ?? []).map((a) => {
                const active = a.slug === currentSlug
                return (
                  <li key={a._id}>
                    <Link
                      href={`/help/${a.slug}`}
                      aria-current={active ? 'page' : undefined}
                      className={`-ml-px block border-l pl-4 ${
                        active
                          ? 'border-accent font-medium text-fg1'
                          : 'border-transparent text-fg2 hover:border-accent hover:text-fg1'
                      }`}
                    >
                      {a.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
}

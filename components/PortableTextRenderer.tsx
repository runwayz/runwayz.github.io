import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { SanityImageSource } from '@sanity/image-url'
import { urlFor } from '@/sanity/lib/image'
import { slugify, blockText } from '@/lib/toc'
import { HubSpotForm } from './HubSpotForm'

// Privacy-friendly embed URL for a pasted YouTube or Vimeo link; null if the
// URL isn't recognized (the renderer falls back to a plain link).
function videoEmbedSrc(url: string): string | null {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/)
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`
  const vimeo = url.match(/vimeo\.com\/(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`
  return null
}

// Maps each block type from Sanity to YOUR components — this is where the
// "extreme design control" over content lives. A pull quote becomes <PullQuote>,
// not a generic blockquote; an inline form becomes a real HubSpot embed.
const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => (
      <h2 id={slugify(blockText(value))} className="mt-12 scroll-mt-24 text-2xl font-semibold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3 id={slugify(blockText(value))} className="mt-8 scroll-mt-24 text-xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 text-lg font-semibold tracking-tight">{children}</h4>
    ),
    normal: ({ children }) => <p className="mt-5 leading-7 text-fg2">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-accent pl-4 italic text-fg1">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-5 ml-6 list-disc space-y-2 text-fg2">{children}</ul>,
    number: ({ children }) => <ol className="mt-5 ml-6 list-decimal space-y-2 text-fg2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-7">{children}</li>,
    number: ({ children }) => <li className="leading-7">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} className="font-medium text-accent underline underline-offset-2">
        {children}
      </a>
    ),
    underline: ({ children }) => <u className="underline underline-offset-2">{children}</u>,
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlFor(value as SanityImageSource).width(1400).fit('max').auto('format').url()}
          alt={value?.alt || ''}
          className="w-full rounded-xl"
        />
        {value?.caption && (
          <figcaption className="mt-2 text-sm text-fg3">{value.caption}</figcaption>
        )}
      </figure>
    ),
    columns: ({ value }) => {
      const cols: { _key?: string; body?: unknown }[] = value?.columns ?? []
      if (!cols.length) return null
      const grid = cols.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
      return (
        <div className={`my-8 grid gap-x-8 gap-y-2 ${grid}`}>
          {cols.map((col, i) => (
            <div key={col._key ?? i} className="min-w-0 [&>*:first-child]:mt-0">
              <Body value={col.body} />
            </div>
          ))}
        </div>
      )
    },
    videoEmbed: ({ value }) => {
      const src = videoEmbedSrc(value?.url ?? '')
      if (!src) {
        return value?.url ? (
          <p className="mt-5">
            <a href={value.url} className="font-medium text-accent underline underline-offset-2">
              {value.url}
            </a>
          </p>
        ) : null
      }
      return (
        <figure className="my-8">
          <iframe
            src={src}
            title={value?.caption || 'Embedded video'}
            className="aspect-video w-full rounded-xl border border-border"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          {value?.caption && (
            <figcaption className="mt-2 text-sm text-fg3">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
    pullQuote: ({ value }) => (
      <figure className="my-10 border-y border-border py-6">
        <blockquote className="text-2xl font-medium leading-snug tracking-tight text-fg1">
          “{value?.quote}”
        </blockquote>
        {value?.attribution && (
          <figcaption className="mt-3 text-sm uppercase tracking-wide text-fg3">
            — {value.attribution}
          </figcaption>
        )}
      </figure>
    ),
    hubspotForm: ({ value }) => (
      <div className="my-10">
        <HubSpotForm formId={value?.formId} portalId={value?.portalId} />
      </div>
    ),
  },
}

export function Body({ value }: { value: unknown }) {
  if (!value) return null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <PortableText value={value as any} components={components} />
}

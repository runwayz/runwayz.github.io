import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { SanityImageSource } from '@sanity/image-url'
import { urlFor } from '@/sanity/lib/image'
import { slugify, blockText } from '@/lib/toc'
import { HubSpotForm } from './HubSpotForm'

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
    normal: ({ children }) => <p className="mt-5 leading-7 text-fg2">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-accent pl-4 italic text-fg1">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} className="font-medium text-accent underline underline-offset-2">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={urlFor(value as SanityImageSource).width(1400).fit('max').auto('format').url()}
        alt={value?.alt || ''}
        className="my-8 w-full rounded-xl"
      />
    ),
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

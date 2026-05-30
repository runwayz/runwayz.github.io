import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, readToken, isSanityConfigured } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // token-authenticated reads bypass the public CDN
  token: readToken || undefined,
  perspective: 'published', // never surface drafts on the live site
})

// Resilient fetch: never crashes the build/dev server when Sanity isn't
// connected yet — returns the provided fallback instead.
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T = [] as unknown as T,
): Promise<T> {
  if (!isSanityConfigured) return fallback
  try {
    return await client.fetch<T>(query, params)
  } catch (err) {
    console.warn('[sanity] fetch failed:', (err as Error).message)
    return fallback
  }
}

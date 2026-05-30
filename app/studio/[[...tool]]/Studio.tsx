'use client'

import dynamic from 'next/dynamic'

// ssr:false keeps Sanity out of the server build entirely. Allowed here because
// this loader is itself a client component.
const StudioClient = dynamic(() => import('./StudioClient'), { ssr: false })

export function Studio() {
  return <StudioClient />
}

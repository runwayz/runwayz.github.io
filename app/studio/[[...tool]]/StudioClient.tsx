'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

// The actual Studio. Imported only via a client-side dynamic import (ssr:false)
// so the heavy Sanity bundle is never evaluated on the server during build.
export default function StudioClient() {
  return <NextStudio config={config} />
}

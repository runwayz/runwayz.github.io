'use client'

import { useEffect, useRef, useState } from 'react'

// Pagefind ships a prebuilt search UI as static files generated at build time
// (out/pagefind/). We load it on the client and mount it into our container.
// Pagefind's own CSS is namespaced under `.pagefind-ui`, so it won't leak.
//
// The bundle only exists in the built/deployed site (and after a local
// `npm run build && npm run search:build`). Under `npm run dev` it 404s — we
// detect that and show a friendly note instead of erroring.

type PagefindUICtor = new (opts: Record<string, unknown>) => unknown

export function HelpSearch() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'unavailable'>('loading')

  useEffect(() => {
    let cancelled = false
    const BASE = '/pagefind/pagefind-ui'

    // Load Pagefind's CSS (once).
    if (!document.querySelector(`link[href="${BASE}.css"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = `${BASE}.css`
      document.head.appendChild(link)
    }

    const init = () => {
      if (cancelled || !containerRef.current) return
      const Ctor = (window as unknown as { PagefindUI?: PagefindUICtor }).PagefindUI
      if (!Ctor) {
        setStatus('unavailable')
        return
      }
      // eslint-disable-next-line no-new
      new Ctor({
        element: containerRef.current,
        showSubResults: true,
        showImages: false,
        resetStyles: false,
      })
      setStatus('ready')
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${BASE}.js"]`)
    if ((window as unknown as { PagefindUI?: PagefindUICtor }).PagefindUI) {
      init()
    } else if (existing) {
      existing.addEventListener('load', init)
      existing.addEventListener('error', () => setStatus('unavailable'))
    } else {
      const script = document.createElement('script')
      script.src = `${BASE}.js`
      script.onload = init
      script.onerror = () => setStatus('unavailable')
      document.body.appendChild(script)
    }

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div>
      <div ref={containerRef} />
      {status === 'unavailable' && (
        <p className="text-sm text-fg3">
          Search is generated when the site is built, so it isn’t available in local
          development. Browse the topics below.
        </p>
      )}
    </div>
  )
}

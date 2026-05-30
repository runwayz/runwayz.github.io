'use client'

import { useEffect, useId } from 'react'
import { hubspotPortalId } from '@/sanity/env'

declare global {
  interface Window {
    hbspt?: { forms: { create: (opts: Record<string, unknown>) => void } }
  }
}

type Props = {
  formId: string
  portalId?: string
  region?: string
}

const SCRIPT_SRC = 'https://js.hsforms.net/forms/embed/v2.js'

/**
 * Embeds a HubSpot form anywhere — marketing pages or inside blog/case-study
 * bodies. Loads the HubSpot script once and renders the form into a target div.
 */
export function HubSpotForm({ formId, portalId, region = 'na1' }: Props) {
  const targetId = `hubspot-form-${useId().replace(/:/g, '')}`
  const resolvedPortalId = portalId || hubspotPortalId

  useEffect(() => {
    if (!resolvedPortalId || !formId) return

    function createForm() {
      window.hbspt?.forms.create({
        portalId: resolvedPortalId,
        formId,
        region,
        target: `#${targetId}`,
      })
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
    if (existing && window.hbspt) {
      createForm()
      return
    }

    const script = existing ?? document.createElement('script')
    script.src = SCRIPT_SRC
    script.addEventListener('load', createForm)
    if (!existing) document.body.appendChild(script)

    return () => script.removeEventListener('load', createForm)
  }, [formId, resolvedPortalId, region, targetId])

  if (!resolvedPortalId) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-4 text-sm text-gray-500">
        HubSpot form <code>{formId}</code> — set <code>NEXT_PUBLIC_HUBSPOT_PORTAL_ID</code> to render it.
      </div>
    )
  }

  return <div id={targetId} />
}

import { Studio } from './Studio'

// Embedded Studio for local development at http://localhost:3000/studio.
// The client-facing Studio is the hosted one at <project>.sanity.studio
// (deploy with `npx sanity deploy`). In the static export this renders only
// the base shell; `revalidate = 0` lets the catch-all route build without
// pre-rendered sub-paths (the Studio routes itself client-side).
export const metadata = { title: 'Runwayz Studio' }
export const revalidate = 0

export default function StudioPage() {
  return <Studio />
}

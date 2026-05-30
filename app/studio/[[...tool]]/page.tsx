import { Studio } from './Studio'

// Embedded Studio for local development at http://localhost:3000/studio.
// The client-facing Studio is the hosted one at <project>.sanity.studio.
export const metadata = { title: 'Runwayz Studio' }

export default function StudioPage() {
  return <Studio />
}

import { defineCliConfig } from 'sanity/cli'
import { projectId, dataset } from './sanity/env'

// Used by the `sanity` CLI (e.g. `npx sanity deploy`, `npx sanity dataset ...`).
export default defineCliConfig({
  api: { projectId, dataset },
  // Set a stable hostname so the Studio deploys to <studioHost>.sanity.studio.
  studioHost: 'runwayz',
  deployment: { appId: 'kquir0qucpc1rwhyyy9ymv82' },
})

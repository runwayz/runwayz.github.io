import { defineCliConfig } from 'sanity/cli'
import { projectId, dataset } from './sanity/env'

// Used by the `sanity` CLI (e.g. `npx sanity deploy`, `npx sanity dataset ...`).
export default defineCliConfig({
  api: { projectId, dataset },
  // Set a stable hostname so the Studio deploys to <studioHost>.sanity.studio.
  // (On first `sanity deploy` the CLI creates the Studio app and writes its
  // appId back here automatically.)
  studioHost: 'runwayz',
})

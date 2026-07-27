import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { projectId, dataset, apiVersion } from './sanity/env'
import { isBuiltInRoute } from './lib/builtInRoutes'

// Powers both the embedded Studio at /studio (local dev) and the hosted Studio
// deployed to <project>.sanity.studio via `npx sanity deploy`.
export default defineConfig({
  name: 'default',
  title: 'Runwayz',
  projectId,
  dataset,
  // '/studio' for the embedded Next route; the hosted *.sanity.studio deploy
  // sets SANITY_STUDIO_BASEPATH=/ so it mounts at the root.
  basePath: process.env.SANITY_STUDIO_BASEPATH ?? '/studio',
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemaTypes },
  document: {
    // Built-in routes mirror hand-built site sections: editors can nest pages
    // under them, but never delete or replace them (the schema also renders
    // them read-only).
    actions: (prev, context) =>
      context.schemaType === 'route' && isBuiltInRoute(context.documentId ?? '')
        ? prev.filter(
            (action) =>
              action.action !== 'delete' &&
              action.action !== 'unpublish' &&
              action.action !== 'duplicate',
          )
        : prev,
  },
})

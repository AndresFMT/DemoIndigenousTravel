import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
// const apiKey = process.env.SANITY_API_DEPLOY_STUDIO;
const apiKey = process.env.SANITY_API_EDITOR;

export default defineConfig({
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  token: apiKey,

  schema: {
    types: schemaTypes,
  },
})


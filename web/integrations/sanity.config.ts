import {visionTool} from '@sanity/vision'
import {defineConfig, createAuthStore} from 'sanity'
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
  auth: createAuthStore({
    projectId,
    dataset,
    mode: 'replace',
    loginMethod: 'cookie', // "dual" | "cookie" | undefined 
    redirectOnSingle: false,
    providers: [
      {
        name: 'enterprise-sso',
        title: 'My Enterprise SSO',
        url: 'http://localhost:3000/api/login',
      },
    ],
  })
})


import { defineConfig} from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { colorInput } from '@sanity/color-input'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard'

import {media} from 'sanity-plugin-media'

import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

import { schemaTypes } from './schemas'
import { sanityProjectId, sanityDataset } from './environment'
import { myStructure, defaultDocumentNodeResolver } from './structure/deskStructure'

// const apiKey = process.env.SANITY_API_DEPLOY_STUDIO;

export default defineConfig([
  {
    name: 'default',
    basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
    title: 'Studio',
    projectId: sanityProjectId,
    dataset: sanityDataset,
    plugins: [
      deskTool({
        structure: myStructure,
      }),
      colorInput(),
      visionTool(),
      vercelDeployTool(),
    ],
    schema: {
      types: (prev) => {
        return [
          ...schemaTypes,
          ...prev,
        ];
      },
    },
  },
  {
    name: 'home-workspace',
    basePath: '/home-workspace',
    title: 'Home',

    projectId: 'uimvg3pl',
    dataset: 'production',

    plugins: [
      colorInput(),
      deskTool({
        defaultDocumentNode: defaultDocumentNodeResolver,
      }),
      visionTool(),
      dashboardTool({
        widgets: [
          sanityTutorialsWidget(),
          projectUsersWidget(),
          projectInfoWidget(),
        ]
      }),
      unsplashImageAsset(),
      media(),
      vercelDeployTool(),
    ],

    schema: {
      types: (prev) => {
        return [ ...prev];
      },
    },
  },
  {
    name: 'about-workspace',
    basePath: '/about-workspace',
    title: 'about',

    projectId: 'uimvg3pl',
    dataset: 'production',

    plugins: [
      colorInput(),
      deskTool(),
      visionTool(),
      unsplashImageAsset(),
      media(),
      vercelDeployTool(),
    ],

    schema: {
      types: (prev) => {
        return [ ...prev];
      }


    },
  },
  {
    name: 'operator-workspace',
    basePath: '/operator-workspace',
    title: 'operators',

    projectId: 'uimvg3pl',
    dataset: 'production',

    plugins: [
      colorInput(),
      deskTool(),
      visionTool(),
      unsplashImageAsset(),
      media(),
      vercelDeployTool(),
    ],
    schema: {
      types: (prev) => {
        return [...prev];
      },
    },
  },
  {
    name: 'content-workspace',
    basePath: '/content-workspace',
    title: 'All Content',
    projectId: 'uimvg3pl',
    dataset: 'production',
    plugins: [
      colorInput(),
      deskTool(),
      visionTool(),
      unsplashImageAsset(),
      media(),
      vercelDeployTool(),
    ],
    schema: {
      types: (prev) => {
        return [...prev];
      },
    },
  },
])


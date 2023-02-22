import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard"
import {
  schemaHomePage,
  schemaAbout,
  schemaObjects,
  schemaDocuments
} from './schemas'
import { myStructure, defaultDocumentNodeResolver } from './structure/deskStructure'

export default defineConfig([
  {
    name: 'admin-workspace',
    basePath: '/admin-workspace',
    title: 'Admin',

    projectId: 'uimvg3pl',
    dataset: 'production',

    plugins: [
      deskTool({
        structure: myStructure,
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
    ],

    schema: {
      types: (prev) => {
        return [...schemaHomePage, ...prev];
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
    ],

    schema: {
      types: (prev) => {
        return [...schemaHomePage, ...prev];
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
      deskTool(), 
      visionTool(),
      unsplashImageAsset(),
    ],

    schema: {
      types: (prev) => {
        return [...schemaAbout, ...prev];
      }


    },
  },
  {
    name: 'operator-workspace',
    basePath: '/operator-workspace',
    title: 'operators',

    projectId: 'uimvg3pl',
    dataset: 'production',

    plugins: [deskTool(), visionTool(), unsplashImageAsset(),],
    schema: {
      types: () => {
        return [...schemaObjects, ...schemaDocuments];
      },
    },
  },
  {
    name: 'content-workspace',
    basePath: '/content-workspace',
    title: 'content',

    projectId: 'uimvg3pl',
    dataset: 'production',

    plugins: [deskTool(), visionTool(), unsplashImageAsset(),],

    schema: {
      types: schemaAbout,
    },
  },
])

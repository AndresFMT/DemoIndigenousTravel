import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard"
import {media} from 'sanity-plugin-media'
import {
  schemaHomePage,
  schemaAbout,
  schemaDocuments,
  schemaPages,
  accessibleImage,
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
      colorInput(),
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
      media(),
    ],

    schema: {
      types: (prev) => {
        return [
          accessibleImage,
          ...schemaHomePage, 
          ...prev];
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
    ],

    schema: {
      types: (prev) => {
        return [accessibleImage, ...schemaHomePage, ...prev];
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

    plugins: [
      colorInput(), 
      deskTool(), 
      visionTool(), 
      unsplashImageAsset(),
      media(),
    ],
    schema: {
      types: () => {
        return [accessibleImage, ...schemaDocuments];
      },
    },
  },
  {
    name: 'content-workspace',
    basePath: '/content-workspace',
    title: 'Content',

    projectId: 'uimvg3pl',
    dataset: 'production',

    plugins: [
      colorInput(), 
      deskTool(), 
      visionTool(), 
      unsplashImageAsset(),
      media(),
    ],

    schema: {
      types: [accessibleImage, ...schemaPages]
    },
  },
])

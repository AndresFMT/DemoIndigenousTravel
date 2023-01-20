import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,} from "@sanity/dashboard"
import {schemaTypes, schemaTypesAdmin} from './schemas'
import {myStructure, defaultDocumentNodeResolver} from './structure/deskStructure'

export default defineConfig([{
  name: 'admin-workspace',
  basePath: '/admin-workspace',
  title: 'Indigenous Tourism Manitoba Admin',

  projectId: 'uimvg3pl',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
      defaultDocumentNode: defaultDocumentNodeResolver,
    }), 
    visionTool(),
    dashboardTool({ widgets: [
      sanityTutorialsWidget(),
      projectUsersWidget(),
      projectInfoWidget(),
    ]}),
  ],

  schema: {
    types: (prev, context) => {
        console.log(context);
        return [...schemaTypesAdmin, ...prev];
    },
  },
},
{
  name: 'operator-workspace',
  basePath: '/operator-workspace',
  title: 'Operator Workspace',

  projectId: 'uimvg3pl',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
},
])

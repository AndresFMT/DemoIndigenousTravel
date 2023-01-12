import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig([{
  name: 'admin-workspace',
  basePath: '/admin-workspace',
  title: 'Indigenous Tourism Manitoba Admin',

  projectId: 'uimvg3pl',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: (prev, context) => {
        console.log(context);
        return [...schemaTypes, ...prev];
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

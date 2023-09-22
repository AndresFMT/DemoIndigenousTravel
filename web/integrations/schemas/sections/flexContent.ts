import {defineType} from 'sanity'

export default defineType({
  name: 'flexContent',
  title: 'Flex Content',
  type: 'reference',
  to: [
    {type: 'hoopImage'},
    {type: 'richTextContent'},
    {type: 'imageContent'},
  ],
})


import defineType from 'sanity'

export default defineType({
  name: 'flexComponent',
  title: 'Flex Component',
  type: 'reference',
  to: [
    {type: 'hoopImage'},
    {type: 'richTextContent'},
    {type: 'imageContent'},
  ],
})


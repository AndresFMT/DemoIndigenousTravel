import {defineType} from 'sanity'

export default defineType({
  name: 'flexContent',
  title: 'Flex Content',
  type: 'array',
  of: [
    {type: 'flexComponent'},
  ],

})


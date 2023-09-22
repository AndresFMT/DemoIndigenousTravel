import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'flexSection',
  title: 'Flex Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'flexContent' }],
    }),
  ],
});



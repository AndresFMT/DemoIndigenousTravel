import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Simple Title and Body',
  name: 'titleBody',
  type: 'document',
  description: 'Simple Title and Body',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      description: 'Body',
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sectionText',
  title: 'Section Text',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Section text',
      type: 'text',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {...selection }
    },
  },
});


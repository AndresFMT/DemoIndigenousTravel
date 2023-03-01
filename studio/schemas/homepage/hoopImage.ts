import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hoopImage',
  title: 'Hoop Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'flip',
      title: 'Flip Image',
      type: 'boolean',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      media: 'image',
      title: 'image',
    },
    prepare(selection) {
      return { ...selection, title: 'Hoop Image' }
    },
  },
});


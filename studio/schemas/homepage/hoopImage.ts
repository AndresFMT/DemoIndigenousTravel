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
    defineField({
      name: 'alt',
      title: 'Alt',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'headingOverlay',
      title: 'Heading Overlay',
      type: 'string',
    }),
    defineField({
      name: 'textOverlay',
      title: 'Text Overlay',
      type: 'string',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Overlay Background',
      type: 'color',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
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


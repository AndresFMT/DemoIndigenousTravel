import {defineField, defineType} from 'sanity'

/**
  * simple video hero document, don't autoplay videos on mobile
  * @name videoHero
  * @type Object
  */
export default defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
    }),
    defineField({
      name: 'subhead',
      title: 'Subhead',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    }),
    defineField({
      name: 'richText',
      title: 'Rich Text',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare(selection) {
      return {...selection }
    },
  },
});


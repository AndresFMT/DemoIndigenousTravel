import {defineField, defineType} from 'sanity'

/**
  * simple video hero document, don't autoplay videos on mobile
  * @name videoHero
  * @type Object
  */
export default defineType({
  name: 'videoSection',
  title: 'Video Section',
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
      name: 'videoUrl',
      title: 'Video URL',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Placeholder Image',
      type: 'accessibleImage',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      return {...selection }
    },
  },
});


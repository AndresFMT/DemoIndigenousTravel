import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepageHero',
  title: 'Homepage Hero',
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
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'enableCTA',
      title: 'Enable CTA',
      type: 'boolean',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
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


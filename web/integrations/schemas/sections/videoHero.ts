import defineField from "sanity";
import defineType from 'sanity';

/**
  * simple video hero document, don't autoplay videos on mobile
  * @name videoHero
  * @type Object
  */
export default defineType({
  name: 'videoHero',
  title: 'Video Hero',
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
      title: 'Mobile image',
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
    prepare(selection:any) {
      return {...selection }
    },
  },
});


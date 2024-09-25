import defineField from "sanity";
import defineType from 'sanity';

/**
  * simple video hero document, don't autoplay videos on mobile
  * @name videoHero
  * @type Object
  */
export default defineType({
  name: 'imageHero',
  title: 'Image Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'documentTitle',
      title: 'Document Title',
      type: 'string',
      description: 'Document Title, used for CMS only',
    }),
    defineField({
      name: 'kicker',
      title: 'Kicker',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subhead',
      title: 'Subhead',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'accessibleImage',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    }),
  ],

  preview: {
    select: {
      title: 'documentTitle',
      media: 'image',
    },
    prepare(selection:any) {
      return {...selection }
    },
  },
});


import defineField from 'sanity';
import defineType from 'sanity';

/**
  * simple video hero document, don't autoplay videos on mobile
  * @name videoHero
  * @type Object
  */
export default defineType({
  name: 'featuredOperators',
  title: 'Featured Operators',
  type: 'document',
  fields: [
    defineField({
      name: 'documentTitle',
      title: 'Document Title',
      type: 'string',
      description: 'Document Title, used for CMS only',
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
      name: 'operators',
      title: 'Operators',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'operator'},
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'documentTitle',
      media: 'image',
    },
    prepare(selection) {
      return {...selection }
    },
  },
});


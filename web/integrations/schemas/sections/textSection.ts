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
      name: 'textWidth',
      title: 'Text Width',
      type: 'string',
      options: {
        list: [
          {title: 'Xl', value: 'xl'},
          {title: 'Lg', value: 'lg'},
          {title: 'Md', value: 'md'},
          {title: 'Sm', value: 'sm'},
          {title: 'Xs', value: 'xs'},
        ],
      },
    }),
    defineField({
      name: 'richText',
      title: 'Rich Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file',
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


import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'BlockContent',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'homepageHero'}
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare(selection) {
      return {...selection }
    },
  },
});


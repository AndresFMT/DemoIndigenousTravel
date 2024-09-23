import defineField from 'sanity';
import defineType from 'sanity';

export default defineType( {
  name: 'sectionCards',
  title: 'Section Cards',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Cards',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'author'}]},
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare( selection ) {
      return {...selection}
    },
  },
} );

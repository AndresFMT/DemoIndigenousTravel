import {defineField, defineType} from 'sanity';

export default defineType( {
  name: 'sectionCards',
  title: 'Section Cards',
  type: 'document',
  fields: [
    defineField( {
      name: 'title',
      title: 'Title',
      type: 'string'
    } )
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

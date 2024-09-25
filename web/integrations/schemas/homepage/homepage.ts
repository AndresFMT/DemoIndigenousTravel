import defineField from 'sanity';
import defineType from 'sanity';

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
      name: 'sections',
      title: 'Sections',
      type: 'sections'
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare(selection: any) {
      return {...selection }
    },
  },
});



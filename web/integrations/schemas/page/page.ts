import defineField from 'sanity';
import defineType from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'sections',
      title: 'Section List',
      type: 'sections',
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


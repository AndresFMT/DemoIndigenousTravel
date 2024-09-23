import defineField from 'sanity';
import defineType from 'sanity';

export default defineType({
  name: 'sectionVideo',
  title: 'Section Video',
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
      name: 'videoUrl',
      title: 'Section Video URL',
      type: 'string',
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


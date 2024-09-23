import defineField from 'sanity';
import defineType from 'sanity';

export default defineType({
  name: 'imageBreak',
  title: 'Image Break',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title Text',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description Text',
      type: 'string',
    }),
    defineField({
      name: 'background',
      title: 'Background Color',
      type: 'color',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection) {
      return {...selection }
    },
  },
});


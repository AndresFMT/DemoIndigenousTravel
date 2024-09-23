import defineField from 'sanity';
import defineType from 'sanity';

export default defineType({
  name: 'homepageHoopImage',
  title: 'Homepage Hoop Image Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Hoop Images',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'hoopImage' },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection:any) {
      return { ...selection }
    },
  },
});


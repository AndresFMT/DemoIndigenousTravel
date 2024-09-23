import defineField from 'sanity';
import defineType from 'sanity';

export default defineType({
  name: 'missionSection',
  title: 'Mission Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Document Title, used for CMS only',
    }),
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
      name: 'rows',
      title: 'Highlighted Rows',
      type: 'array',
      of: [
        {
          type: 'titleBody',
        },
      ],
    }),
    defineField({
      name: 'regionalImages',
      title: 'Section Content',
      type: 'array',
      of: [
        {
          type: 'accessibleImage',
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {...selection }
    },
  },
});


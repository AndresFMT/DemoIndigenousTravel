import defineField from "sanity";
import defineType from 'sanity';

export default defineType({
  name: 'oldsection',
  title: 'Section',
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
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
    }),
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      initialValue: 'blankSpace',
      options: {
        list: [
          {title: 'Hero', value: 'heroImage'},
          {title: 'Text Content Image Background', value: 'sectionTextImage'},
          {title: 'Text Content', value: 'sectionText'},
          {title: 'Cards Content', value: 'sectionCards'},
          {title: 'Blank Space', value: 'blankSpace'},
        ],
      },
    }),
    defineField({
      name: 'content',
      title: 'Section Content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'sectionImage'},
            {type: 'sectionHeading'},
            {type: 'sectionText'},
            {type: 'sectionVideo'},
            {type: 'hoopImage'},
            {type: 'sectionCard'},
            {type: 'featuredOperators'},
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
    prepare(selection:any) {
      return {...selection }
    },
  },
});


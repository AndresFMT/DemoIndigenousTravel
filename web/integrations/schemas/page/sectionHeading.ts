import defineField from "sanity";
import defineType from 'sanity';

export default defineType({
  name: 'sectionHeading',
  title: 'Section Heading',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingColor',
      title: 'Heading Color',
      type: 'color',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection:any) {
      return {...selection }
    },
  },
});


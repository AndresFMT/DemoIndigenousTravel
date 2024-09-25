import defineField from "sanity";
import defineType from 'sanity';

export default defineType({
  name: 'flexSection',
  title: 'Flex Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'flexContent',
    }),
  ],
});



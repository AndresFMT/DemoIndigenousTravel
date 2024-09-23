import defineField from 'sanity';
import defineType from 'sanity';

export default defineType({
  name: "imageContent",
  title: "Image Content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "accessibleImage",
    }),
  ],
});


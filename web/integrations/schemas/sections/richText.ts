import defineField from 'sanity';
import defineType from 'sanity';

export default defineType({
  name: "richTextContent",
  title: "Rich Text",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});


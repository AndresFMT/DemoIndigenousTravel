import {defineType} from 'sanity';


export default defineType({
  name: "navItem",
  title: "Nav Item",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Href", name: "href", type: "slug",
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    { title: "Icon", name: "icon", type: "image" },
    { title: "Description", name: "description", type: "string" },
  ],
});


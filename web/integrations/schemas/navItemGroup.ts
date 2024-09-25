import defineType from 'sanity';

export default defineType({
  name: "navItemGroup",
  title: "Nav Item Group",
  type: "document",
  fields: [
    { title: "Name", name: "name", type: "string" },
    {
      title: "Nav Items",
      name: "navItems",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "navItem" }],
        },
      ],
    },
  ],
});


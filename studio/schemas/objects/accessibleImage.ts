import { defineType } from 'sanity';

export default defineType({
  name: 'accessibleImage',
  title: 'Accessible Image',
  type: 'object',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Alternative text is required.',
      hidden: ({ document }) => !document?.asset,
      validation: (Rule) => [
        Rule.custom((currentValue, { document }) => {
          if (document?.asset && !currentValue) {
            return 'Alternative text is required.';
          }
          return true;
        }),
      ],
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      hidden: ({ document }) => !document?.asset,
    }
  ]
});


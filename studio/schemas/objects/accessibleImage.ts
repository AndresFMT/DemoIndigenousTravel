import { defineType } from 'sanity';

export default defineType({
    name: 'accessibleImage',
    type: 'object',
    title: 'image field with alt attributes enabled',
    fields: [
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
        description: 'Alternative text is required.',
        hidden: ({ parent }) => !parent?.asset,
        validation: Rule => [
          Rule.required(),
        ],
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
        hidden: ({ parent }) => !parent?.asset,
      }
    ]
});


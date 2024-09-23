import defineField from 'sanity';
import defineType from 'sanity';

export default defineType({
  name: 'accessibleImage',
  title: 'Accessible Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt text',
      description: 'Describe the image.',
      hidden: ({ document }) => !!document?.asset,
      validation: (Rule) => [
        Rule.custom((currentValue, { document }) => {
          if (document?.asset && !currentValue) {
            return 'Alternative text is required.';
          }
          return true;
        }),
      ],
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      hidden: ({ document }) => !!document?.asset,
    }),
    defineField({
      name: 'imageOverlay',
      type: 'color',
      title: 'Image Overlay',
    }),
  ]
});


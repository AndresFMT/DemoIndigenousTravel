import { defineField, defineType } from "sanity";

export default defineType({
  name: 'sectionCard',
  title: 'Section Card',
  type: 'document',
  fields: [
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      initialValue: 'lg',
      options: {
        list: [
          {
            title: 'Large',
            value: 'lg'
          },
          {
            title: 'Small',
            value: 'sm'
          }
        ],
        layout: 'dropdown'
      }
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required(),
      ]
    }),
    defineField({
      name: 'text',
      title: 'Card Text',
      type: 'text',
      validation: Rule => [
        Rule.required(),
      ]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => [
        Rule.required(),
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {...selection}
    },
  },
});

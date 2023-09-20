import { defineType } from 'sanity'

export default defineType({
  name: 'sections',
  title: 'Sections',
  type: 'array',
  of: [
    {
      type: 'section',
    },
  ],
})


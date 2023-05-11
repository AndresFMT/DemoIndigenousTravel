import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text'
    }),
    defineField({
      name: 'facebookLink',
      title: 'Facebook Social Link',
      type: 'url'
    }),
    defineField({
      name: 'instagramLink',
      title: 'Instagram Social Link',
      type: 'url'
    }),
    defineField({
      name: 'linkedinLink',
      title: 'LinkedIn Social Link',
      type: 'url'
    }),
    defineField({
      name: 'twitterLink',
      title: 'Twitter Social Link',
      type: 'url'
    })
  ]
})

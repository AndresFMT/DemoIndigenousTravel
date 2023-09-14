import {defineField, defineType} from 'sanity';
import { EarthAmericasIcon } from '@sanity/icons';

export default defineType({
  name: 'operator',
  title: 'Operator',
  type: 'document',
  icon: EarthAmericasIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Business Name',
      type: 'string',
    }),
    defineField({
      name: 'asset',
      title: 'Business Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'image',
        title: 'Photo',
        type: 'accessibleImage',
        description: 'add image or logo for business',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'location',
      title: 'Location City/Town',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'number',
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      initialValue: 'north',
      options: {
          list: [
            { title: 'North', value: 'north' },
            { title: 'Central', value: 'central' },
            { title: 'South', value: 'south' },
          ],
      },
    }),
    defineField({
        name: 'coordinates',
        title: 'Coordinates',
        type: 'geopoint',
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})

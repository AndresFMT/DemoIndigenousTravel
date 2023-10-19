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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'images',
        title: 'Photos',
        type: 'array',
        of: [{type: 'accessibleImage'}],
        description: 'Priority is from top to bottom',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'number',
    }),
    defineField({
      name: 'email',
      title: 'Business Email',
      type: 'email',
    }),
    defineField({
      name: 'website',
      title: 'Business Website',
      type: 'url',
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
        name: 'coordinates',
        title: 'Coordinates',
        type: 'geopoint',
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
            { title: 'East', value: 'east' },
          ],
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      initialValue: 'accommodation',
      options: {
          list: [
            { title: 'Accommodation', value: 'accommodation' },
            { title: 'Attractions', value: 'attractions' },
            { title: 'Events', value: 'events' },
            { title: 'Outdoors and Adventure', value: 'outdoors-and-adventure' },
            { title: 'Culinary', value: 'culinary' },
            { title: 'Tours and Related Services', value: 'tours' },
            { title: 'Workshops, Arts & Culture', value: 'workshops' },
          ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
})

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({ name: 'city', title: 'City', type: 'string' }),
    defineField({ name: 'state', title: 'State', type: 'string', initialValue: 'TX' }),
    defineField({ name: 'zipCodes', title: 'ZIP Codes (comma separated)', type: 'string' }),
    defineField({ name: 'address', title: 'Store Address (if applicable)', type: 'string' }),
    defineField({ name: 'phone', title: 'Location Phone', type: 'string' }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        { name: 'weekdays', title: 'Mon–Fri', type: 'string' },
        { name: 'saturday', title: 'Saturday', type: 'string' },
        { name: 'sunday', title: 'Sunday', type: 'string' },
      ],
    }),
    defineField({ name: 'hasKiosk', title: '24/7 Drop-Off Kiosk', type: 'boolean', initialValue: false }),
    defineField({ name: 'hasPickup', title: 'Pickup & Delivery Available', type: 'boolean', initialValue: true }),
    defineField({ name: 'googleMapsUrl', title: 'Google Maps URL', type: 'url' }),
    defineField({ name: 'lat', title: 'Latitude', type: 'number' }),
    defineField({ name: 'lng', title: 'Longitude', type: 'number' }),
    defineField({ name: 'active', title: 'Active', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'city', subtitle: 'state' },
    prepare({ title, subtitle }) {
      return { title: `${title}, ${subtitle}` }
    },
  },
})

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({ name: 'author', title: 'Customer Name', type: 'string' }),
    defineField({ name: 'location', title: 'City, TX', type: 'string' }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: { list: [1, 2, 3, 4, 5] },
      initialValue: 5,
    }),
    defineField({ name: 'review', title: 'Review Text', type: 'text' }),
    defineField({
      name: 'service',
      title: 'Service Used',
      type: 'string',
      options: {
        list: ['Dry Cleaning','Laundry Service','Saree Cleaning','Wedding Dress','Pickup & Delivery','Same Day Express'],
      },
    }),
    defineField({ name: 'verified', title: 'Verified Customer', type: 'boolean', initialValue: false }),
    defineField({ name: 'featured', title: 'Show on Homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'date', title: 'Review Date', type: 'date' }),
  ],
  preview: {
    select: { title: 'author', subtitle: 'service' },
  },
})

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    defineField({ name: 'customerName', title: 'Customer Name', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'zipCode', title: 'ZIP Code', type: 'string' }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'string',
      options: {
        list: [
          'Dry Cleaning',
          'Laundry (Wash & Fold)',
          'Saree / Indian Garment Cleaning',
          'Wedding Dress Cleaning',
          'Pickup & Delivery (Multiple Services)',
          'Same Day / Express',
          'Household Items',
          'Alterations',
        ],
      },
    }),
    defineField({ name: 'pickupDate', title: 'Pickup Date', type: 'date' }),
    defineField({ name: 'pickupTime', title: 'Pickup Time', type: 'string' }),
    defineField({ name: 'address', title: 'Pickup Address', type: 'string' }),
    defineField({ name: 'notes', title: 'Notes', type: 'text' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['pending', 'confirmed', 'picked_up', 'cleaning', 'ready', 'delivered', 'cancelled'],
      },
      initialValue: 'pending',
    }),
    defineField({ name: 'depositPaid', title: 'Deposit Paid', type: 'boolean', initialValue: false }),
    defineField({ name: 'totalEstimate', title: 'Total Estimate ($)', type: 'number' }),
    defineField({ name: 'createdAt', title: 'Created At', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'customerName', subtitle: 'service', media: 'status' },
    prepare({ title, subtitle }) {
      return { title: title || 'Unknown', subtitle }
    },
  },
})

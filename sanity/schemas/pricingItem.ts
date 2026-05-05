import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pricingItem',
  title: 'Pricing Item',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Dry Cleaning', 'Laundry', 'Specialty / Saree', 'Household'],
      },
    }),
    defineField({ name: 'itemName', title: 'Item Name', type: 'string' }),
    defineField({ name: 'startingPrice', title: 'Starting Price (e.g. $4.99)', type: 'string' }),
    defineField({ name: 'priceUnit', title: 'Unit (e.g. /lb, each)', type: 'string' }),
    defineField({ name: 'note', title: 'Note (optional)', type: 'string' }),
    defineField({ name: 'sortOrder', title: 'Sort Order', type: 'number', initialValue: 0 }),
    defineField({ name: 'active', title: 'Show on Pricing Page', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'itemName', subtitle: 'startingPrice' },
  },
})

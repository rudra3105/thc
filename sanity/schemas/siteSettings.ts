import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone', title: 'Business Phone', type: 'string', initialValue: '214-348-0666' }),
    defineField({ name: 'email', title: 'Business Email', type: 'string', initialValue: 'info@tophatcleaner.com' }),
    defineField({ name: 'address', title: 'Business Address', type: 'string' }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        { name: 'weekdays', title: 'Mon–Fri', type: 'string', initialValue: '7:00 AM – 7:00 PM' },
        { name: 'saturday', title: 'Saturday', type: 'string', initialValue: '8:00 AM – 6:00 PM' },
        { name: 'sunday', title: 'Sunday', type: 'string', initialValue: '9:00 AM – 5:00 PM' },
      ],
    }),
    defineField({ name: 'minimumOrder', title: 'Minimum Order ($)', type: 'number', initialValue: 45 }),
    defineField({ name: 'subscriptionPrice', title: 'Subscription Price ($)', type: 'number', initialValue: 50 }),
    defineField({ name: 'subscriptionCredit', title: 'Subscription Credit ($)', type: 'number', initialValue: 65 }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'google', title: 'Google Business URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'yelp', title: 'Yelp URL', type: 'url' },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Default Title', type: 'string' },
        { name: 'description', title: 'Default Description', type: 'text' },
        { name: 'ogImage', title: 'OG Image', type: 'image' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})

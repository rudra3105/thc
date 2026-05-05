import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import booking from './sanity/schemas/booking'
import review from './sanity/schemas/review'
import location from './sanity/schemas/location'
import pricingItem from './sanity/schemas/pricingItem'
import siteSettings from './sanity/schemas/siteSettings'

export default defineConfig({
  name: 'top-hat-cleaners',
  title: 'Top Hat Cleaners CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [booking, review, location, pricingItem, siteSettings],
  },
})

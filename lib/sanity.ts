import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ Queries
export const queries = {
  homepage: `*[_type == "homepage"][0]{
    heroHeadline,
    heroSubheadline,
    heroOffer,
    heroCta,
    trustBadges,
    services[]->{name, slug, icon, shortDescription, startingPrice},
    featuredReviews[]->{author, location, rating, review, service},
    seoTitle,
    seoDescription,
  }`,

  allPages: `*[_type == "page"]{
    title,
    slug,
    seoTitle,
    seoDescription,
  }`,

  bookings: `*[_type == "booking"] | order(_createdAt desc){
    _id,
    _createdAt,
    customerName,
    phone,
    email,
    service,
    pickupDate,
    pickupTime,
    address,
    zipCode,
    notes,
    status,
    totalEstimate,
  }`,

  reviews: `*[_type == "review"] | order(_createdAt desc){
    _id,
    author,
    location,
    rating,
    review,
    service,
    verified,
    featured,
  }`,

  services: `*[_type == "service"]{
    _id,
    name,
    slug,
    icon,
    shortDescription,
    fullDescription,
    startingPrice,
    priceUnit,
    heroImage,
    galleryImages,
    features,
    faqs,
    seoTitle,
    seoDescription,
  }`,

  pricingItems: `*[_type == "pricingItem"] | order(category asc, sortOrder asc){
    _id,
    category,
    itemName,
    startingPrice,
    priceUnit,
    note,
    sortOrder,
  }`,

  locations: `*[_type == "location"] | order(city asc){
    _id,
    city,
    state,
    zipCodes,
    address,
    phone,
    hours,
    hasKiosk,
    hasPickup,
    googleMapsUrl,
    lat,
    lng,
  }`,

  siteSettings: `*[_type == "siteSettings"][0]{
    phone,
    email,
    address,
    businessHours,
    socialLinks,
    minimumOrder,
    pickupSchedule,
    subscriptionPrice,
    subscriptionCredit,
  }`,
}

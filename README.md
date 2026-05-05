# Top Hat Cleaners — Next.js Website

Full-stack Next.js 14 codebase for Top Hat Cleaners, DFW's most trusted dry cleaning service.

## Quick Start

1. `cd tophat && npm install`
2. `cp .env.example .env.local` — fill in all values
3. `npm run dev` — starts at http://localhost:3000

## Tech Stack
- **Frontend:** Next.js 14 (App Router, TypeScript)
- **CMS:** Sanity (bookings, reviews, locations, pricing)
- **Payments:** Stripe (subscriptions + deposits)
- **SMS:** Twilio (booking confirmations)
- **Analytics:** GA4 + CallRail
- **Hosting:** Vercel

## Pages Built
- `/` — Homepage (full conversion page)
- `/pickup-delivery` — Pickup & Delivery
- `/prices` — Full Pricing Page
- `/dry-cleaning` — Dry Cleaning service
- `/laundry-service` — Laundry service + household
- `/saree-cleaning-dfw` — Saree & Wedding specialists
- `/same-day-express` — Express service
- `/services` — All services overview
- `/locations` — All DFW locations
- `/locations/[city]` — 18 SEO city pages
- `/reviews` — Customer reviews
- `/about` — About page
- `/contact` — Contact + form
- `/book` — Booking landing page
- `/admin` — Booking dashboard (password protected)
- `/api/bookings` — POST bookings, GET admin
- `/api/stripe-webhook` — Stripe events
- `/api/subscribe` — Subscription checkout

## Setup Steps

### Sanity CMS
```bash
npx sanity init --env .env.local
npx sanity deploy
```
Then add locations, pricing items, and site settings in the Studio.

### Stripe
1. Create a $50/month recurring product
2. Set webhook: `https://yourdomain.com/api/stripe-webhook`
3. Events: `checkout.session.completed`, `customer.subscription.deleted`

### Vercel Deploy
```bash
vercel
# Add all .env.local variables in Vercel dashboard
```

## Admin Panel
Visit `/admin` → enter your `ADMIN_SECRET` → manage all bookings

## Color System
- Blue: `#2F6FDB`
- Magenta: `#C2187A`
- Navy: `#1E2A4A`
- Gradient: `linear-gradient(135deg, #2F6FDB, #C2187A)`

## Business Info
- Phone: 214-348-0666
- Email: info@tophatcleaner.com
- Min pickup order: $45 (card only)
- Schedule: Monday pickup → Thursday delivery, Thursday → Monday
- Subscription: $50/mo → $65 credit

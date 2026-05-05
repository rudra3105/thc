import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-04-22.dahlia',
})

// Client-side Stripe promise (singleton)
let stripePromise: ReturnType<typeof loadStripe>
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

// Price IDs (create these in your Stripe dashboard)
export const STRIPE_PRICES = {
  // Subscription plan: $50/month
  SUBSCRIPTION_MONTHLY: 'price_subscription_monthly_50',
  // Deposit for pickup booking
  PICKUP_DEPOSIT: 'price_pickup_deposit_10',
}

// Create a checkout session for subscription
export async function createSubscriptionSession(customerEmail: string, customerName: string) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    customer_email: customerEmail,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Top Hat Cleaners Monthly Plan',
            description: 'Pay $50/month — Get $65 in cleaning credit every month',
            images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/subscription-plan.jpg`],
          },
          unit_amount: 5000, // $50.00
          recurring: { interval: 'month' },
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
    metadata: {
      customerName,
      type: 'subscription',
    },
  })
  return session
}

// Create a checkout session for booking deposit
export async function createBookingDepositSession(
  bookingId: string,
  customerEmail: string,
  customerName: string,
  service: string
) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    customer_email: customerEmail,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Top Hat Cleaners — ${service}`,
            description: 'Pickup deposit. Final balance due at delivery.',
          },
          unit_amount: 1000, // $10.00 deposit
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}&booking_id=${bookingId}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/book`,
    metadata: {
      bookingId,
      customerName,
      service,
      type: 'booking_deposit',
    },
  })
  return session
}

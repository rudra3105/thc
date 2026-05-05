import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { sanityClient } from '@/lib/sanity'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('Stripe webhook signature failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as any
      const { type, bookingId } = session.metadata || {}

      if (type === 'subscription') {
        // New subscription — record in Sanity
        await sanityClient.create({
          _type: 'subscription',
          stripeSessionId: session.id,
          customerEmail: session.customer_email,
          status: 'active',
          startDate: new Date().toISOString(),
        }).catch(console.error)
      }

      if (type === 'booking_deposit' && bookingId) {
        // Update booking status to confirmed
        await sanityClient.patch(bookingId).set({ status: 'confirmed', depositPaid: true }).commit().catch(console.error)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as any
      // Handle cancellation — update Sanity record
      console.log('Subscription cancelled:', sub.id)
      break
    }

    default:
      console.log('Unhandled event type:', event.type)
  }

  return NextResponse.json({ received: true })
}

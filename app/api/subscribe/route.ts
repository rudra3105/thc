import { NextRequest, NextResponse } from 'next/server'
import { createSubscriptionSession } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()
    if (!email || !name) {
      return NextResponse.json({ error: 'Email and name required' }, { status: 400 })
    }
    const session = await createSubscriptionSession(email, name)
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Subscription session error:', error)
    return NextResponse.json({ error: 'Failed to create subscription session' }, { status: 500 })
  }
}

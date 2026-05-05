import { NextRequest, NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity'
import { sendBookingConfirmationSMS } from '@/lib/twilio'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, zip, service, date, time, address, notes } = body

    // Validate required fields
    if (!name || !phone || !email || !service || !date || !address) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save booking to Sanity
    const booking = await sanityClient.create({
      _type: 'booking',
      customerName: name,
      phone,
      email,
      zipCode: zip,
      service,
      pickupDate: date,
      pickupTime: time,
      address,
      notes: notes || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    })

    // Send SMS confirmation (non-blocking)
    try {
      await sendBookingConfirmationSMS(phone, name, service, date, time)
    } catch (smsErr) {
      console.error('SMS send failed (non-fatal):', smsErr)
    }

    return NextResponse.json({
      success: true,
      bookingId: booking._id,
      message: 'Booking created successfully',
    })
  } catch (error) {
    console.error('Booking creation error:', error)
    return NextResponse.json({ error: 'Failed to create booking. Please call 214-348-0666.' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  // Admin endpoint — check secret header
  const secret = req.headers.get('x-admin-secret')
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const bookings = await sanityClient.fetch(`
      *[_type == "booking"] | order(createdAt desc) [0...100] {
        _id, customerName, phone, email, service,
        pickupDate, pickupTime, address, zipCode,
        notes, status, createdAt
      }
    `)
    return NextResponse.json({ bookings })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }
}

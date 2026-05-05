import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
)

const FROM_NUMBER = process.env.TWILIO_PHONE_NUMBER!
const BUSINESS_PHONE = `+1${process.env.NEXT_PUBLIC_BUSINESS_PHONE!}`

export async function sendBookingConfirmationSMS(
  to: string,
  customerName: string,
  service: string,
  pickupDate: string,
  pickupTime: string
) {
  const formattedTo = to.startsWith('+1') ? to : `+1${to.replace(/\D/g, '')}`

  // SMS to customer
  await client.messages.create({
    body: `Hi ${customerName}! Your Top Hat Cleaners pickup is confirmed ✅\n\nService: ${service}\nPickup: ${pickupDate} (${pickupTime})\n\nQuestions? Call/WhatsApp 214-348-0666\n\nThank you for choosing Top Hat Cleaners!`,
    from: FROM_NUMBER,
    to: formattedTo,
  })

  // Internal alert to business
  await client.messages.create({
    body: `🔔 NEW BOOKING\nName: ${customerName}\nService: ${service}\nDate: ${pickupDate} ${pickupTime}\nPhone: ${to}`,
    from: FROM_NUMBER,
    to: BUSINESS_PHONE,
  })
}

export async function sendOrderReadySMS(to: string, customerName: string) {
  const formattedTo = to.startsWith('+1') ? to : `+1${to.replace(/\D/g, '')}`
  await client.messages.create({
    body: `Hi ${customerName}! Great news — your garments are cleaned and ready 👕✨\n\nDelivery is scheduled for today. Stay tuned!\n\nTop Hat Cleaners | 214-348-0666`,
    from: FROM_NUMBER,
    to: formattedTo,
  })
}

export async function sendDeliveryConfirmationSMS(to: string, customerName: string) {
  const formattedTo = to.startsWith('+1') ? to : `+1${to.replace(/\D/g, '')}`
  await client.messages.create({
    body: `Hi ${customerName}! Your order has been delivered 📦\n\nWe hope everything looks perfect. Please rate us on Google — it means the world to us!\n\nTop Hat Cleaners | 214-348-0666`,
    from: FROM_NUMBER,
    to: formattedTo,
  })
}

export async function sendPickupReminderSMS(to: string, customerName: string, pickupDate: string) {
  const formattedTo = to.startsWith('+1') ? to : `+1${to.replace(/\D/g, '')}`
  await client.messages.create({
    body: `Hi ${customerName}! Reminder: Top Hat Cleaners pickup is scheduled for tomorrow (${pickupDate}) 🚐\n\nPlease have your garments ready by the door.\n\nCall 214-348-0666 to reschedule.`,
    from: FROM_NUMBER,
    to: formattedTo,
  })
}

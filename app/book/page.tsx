'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, Phone } from 'lucide-react'
import toast from 'react-hot-toast'
import type { Metadata } from 'next'

const SERVICES = [
  'Dry Cleaning',
  'Laundry (Wash & Fold)',
  'Saree / Indian Garment Cleaning',
  'Wedding Dress Cleaning',
  'Pickup & Delivery (Multiple Services)',
  'Same Day / Express',
  'Household Items (Comforters, Bedding)',
  'Alterations',
]

const TIME_SLOTS = [
  'Morning (8AM–12PM)',
  'Afternoon (12PM–5PM)',
  'Evening (5PM–8PM)',
]

const inp: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1.5px solid rgba(30,42,74,0.18)',
  borderRadius: 9,
  fontSize: 14,
  color: '#1E2A4A',
  fontFamily: 'DM Sans, sans-serif',
  background: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
}

const lbl: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: '#1E2A4A',
  marginBottom: 5,
  fontFamily: 'DM Sans, sans-serif',
}

export default function BookPage() {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', zip: '',
    service: '', date: '', time: TIME_SLOTS[0],
    address: '', notes: '', agreeToTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Valid email required'
    if (!form.zip.trim() || form.zip.length < 5) e.zip = 'Valid ZIP required'
    if (!form.service) e.service = 'Please select a service'
    if (!form.date) e.date = 'Please select a date'
    if (!form.address.trim()) e.address = 'Address is required'
    if (!form.agreeToTerms) e.agreeToTerms = 'Please agree to terms'
    return e
  }

  const handleSubmit = async () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setLoading(true)
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('failed')
      setStep('success')
      toast.success('Pickup scheduled successfully!')
    } catch {
      toast.error('Something went wrong. Please call 214-348-0666.')
    } finally {
      setLoading(false)
    }
  }

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(ev => { const n = { ...ev }; delete n[field]; return n })
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <>
      <style>{`
        @media (min-width: 640px) { .book-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 960px) { .book-layout { grid-template-columns: 380px 1fr !important; } }
      `}</style>

      <section style={{ background: '#F5F7FA', padding: '40px 0 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>

          {/* Page header */}
          <div style={{ marginBottom: 32 }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: '#2F6FDB', display: 'block', marginBottom: 8 }}>
              Pickup Booking
            </span>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#1E2A4A', lineHeight: 1.15, marginBottom: 10 }}>
              Schedule Your Free Pickup
            </h1>
            <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.7 }}>
              Book in 60 seconds. We pick up, clean, and deliver back to your door.
            </p>
          </div>

          <div
            className="book-layout"
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 28, alignItems: 'start' }}
          >

            {/* LEFT — Info sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Info card */}
              <div style={{ background: '#1E2A4A', borderRadius: 16, padding: '24px 22px' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: '#fff', marginBottom: 16 }}>
                  What to Expect
                </h2>
                {[
                  { icon: '🚐', text: 'Free pickup at your door (min $45 order)' },
                  { icon: '📅', text: 'Monday & Thursday pickup routes' },
                  { icon: '📱', text: 'SMS confirmation within minutes' },
                  { icon: '💳', text: 'Card payment only' },
                  { icon: '🎉', text: '$10 off first order — code: 10FREE' },
                  { icon: '👗', text: 'Saree & delicate garment specialists' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 16, lineHeight: 1 }}>{item.icon}</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.78)', lineHeight: 1.5, fontFamily: 'DM Sans, sans-serif' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Call card */}
              <div style={{ background: '#fff', borderRadius: 14, padding: '20px 22px', border: '1px solid rgba(30,42,74,0.08)' }}>
                <p style={{ fontWeight: 600, fontSize: 14, color: '#1E2A4A', marginBottom: 10, fontFamily: 'DM Sans, sans-serif' }}>
                  Prefer to call?
                </p>
                <a href="tel:2143480666" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: '#2F6FDB', color: '#fff',
                  padding: '13px', borderRadius: 9,
                  fontSize: 15, fontWeight: 700, textDecoration: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                }}>
                  <Phone size={16} /> 214-348-0666
                </a>
                <p style={{ fontSize: 11, color: '#9ca3af', textAlign: 'center', marginTop: 8, fontFamily: 'DM Sans, sans-serif' }}>
                  Mon–Sat 7AM–7PM · Sun 9AM–5PM
                </p>
              </div>
            </div>

            {/* RIGHT — Form */}
            {step === 'success' ? (
              <div style={{ background: '#fff', borderRadius: 16, padding: '40px 32px', textAlign: 'center', border: '1px solid rgba(30,42,74,0.08)' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(22,163,74,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle size={36} style={{ color: '#16a34a' }} />
                </div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, color: '#1E2A4A', marginBottom: 10 }}>
                  Pickup Confirmed! ✅
                </h2>
                <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 6 }}>
                  Thank you, <strong>{form.name}</strong>! Your pickup for <strong>{form.service}</strong> is booked.
                </p>
                <p style={{ fontWeight: 700, fontSize: 16, color: '#1E2A4A', marginBottom: 4 }}>
                  {new Date(form.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </p>
                <p style={{ color: '#6b7280', marginBottom: 20, fontSize: 14 }}>{form.time}</p>
                <p style={{ color: '#9ca3af', fontSize: 13, marginBottom: 28 }}>
                  SMS confirmation sent to {form.phone}. We&apos;ll call to confirm. Minimum $45.
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => setStep('form')} style={{ background: '#2F6FDB', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: 9, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                    Book Another
                  </button>
                  <a href="tel:2143480666" style={{ background: 'transparent', color: '#2F6FDB', border: '2px solid #2F6FDB', padding: '10px 24px', borderRadius: 9, fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                    Call Us
                  </a>
                </div>
              </div>
            ) : (
              <div style={{ background: '#fff', borderRadius: 16, padding: '28px 24px', border: '1px solid rgba(30,42,74,0.08)', boxShadow: '0 4px 24px rgba(30,42,74,0.07)' }}>

                {/* Offer badge */}
                <div style={{ background: 'rgba(47,111,219,0.08)', border: '1px solid rgba(47,111,219,0.2)', borderRadius: 8, padding: '10px 14px', fontSize: 13, fontWeight: 500, color: '#2F6FDB', marginBottom: 22, fontFamily: 'DM Sans, sans-serif' }}>
                  🎉 First order? Use code <strong>10FREE</strong> for $10 off!
                </div>

                {/* Name */}
                <div style={{ marginBottom: 14 }}>
                  <label style={lbl}>Full Name *</label>
                  <input style={inp} value={form.name} onChange={set('name')} placeholder="John Smith" />
                  {errors.name && <p style={{ fontSize: 11, color: '#dc2626', marginTop: 3 }}>{errors.name}</p>}
                </div>

                {/* Phone + Email */}
                <div className="book-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={lbl}>Phone *</label>
                    <input style={inp} type="tel" value={form.phone} onChange={set('phone')} placeholder="214-000-0000" />
                    {errors.phone && <p style={{ fontSize: 11, color: '#dc2626', marginTop: 3 }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label style={lbl}>Email *</label>
                    <input style={inp} type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
                    {errors.email && <p style={{ fontSize: 11, color: '#dc2626', marginTop: 3 }}>{errors.email}</p>}
                  </div>
                </div>

                {/* ZIP + Service */}
                <div className="book-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={lbl}>ZIP Code *</label>
                    <input style={inp} value={form.zip} onChange={set('zip')} placeholder="75034" maxLength={5} />
                    {errors.zip && <p style={{ fontSize: 11, color: '#dc2626', marginTop: 3 }}>{errors.zip}</p>}
                  </div>
                  <div>
                    <label style={lbl}>Service *</label>
                    <select style={inp} value={form.service} onChange={set('service')}>
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p style={{ fontSize: 11, color: '#dc2626', marginTop: 3 }}>{errors.service}</p>}
                  </div>
                </div>

                {/* Date + Time */}
                <div className="book-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={lbl}>Pickup Date *</label>
                    <input style={inp} type="date" value={form.date} onChange={set('date')} min={minDate} />
                    {errors.date && <p style={{ fontSize: 11, color: '#dc2626', marginTop: 3 }}>{errors.date}</p>}
                  </div>
                  <div>
                    <label style={lbl}>Preferred Time</label>
                    <select style={inp} value={form.time} onChange={set('time')}>
                      {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div style={{ marginBottom: 14 }}>
                  <label style={lbl}>Pickup Address *</label>
                  <input style={inp} value={form.address} onChange={set('address')} placeholder="123 Main St, Frisco TX 75034" />
                  {errors.address && <p style={{ fontSize: 11, color: '#dc2626', marginTop: 3 }}>{errors.address}</p>}
                </div>

                {/* Notes */}
                <div style={{ marginBottom: 16 }}>
                  <label style={lbl}>Special Notes (optional)</label>
                  <textarea style={{ ...inp, resize: 'none' }} rows={2} value={form.notes} onChange={set('notes')} placeholder="Special instructions, gate codes, etc." />
                </div>

                {/* Terms */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
                  <input
                    type="checkbox"
                    id="book-terms"
                    checked={form.agreeToTerms}
                    onChange={e => {
                      setForm(f => ({ ...f, agreeToTerms: e.target.checked }))
                      if (errors.agreeToTerms) setErrors(ev => { const n = { ...ev }; delete n.agreeToTerms; return n })
                    }}
                    style={{ marginTop: 2, width: 16, height: 16, accentColor: '#2F6FDB', flexShrink: 0 }}
                  />
                  <label htmlFor="book-terms" style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.5, fontFamily: 'DM Sans, sans-serif' }}>
                    I agree that minimum order is $45, payment is card-only, and Top Hat Cleaners may contact me via SMS/call.
                  </label>
                </div>
                {errors.agreeToTerms && <p style={{ fontSize: 11, color: '#dc2626', marginBottom: 12 }}>{errors.agreeToTerms}</p>}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    width: '100%',
                    background: loading ? '#9ca3af' : '#2F6FDB',
                    color: '#fff',
                    border: 'none',
                    padding: '15px',
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: 'DM Sans, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    marginTop: 18,
                    transition: 'background 0.2s',
                  }}
                >
                  {loading
                    ? <><Loader2 size={16} /> Processing...</>
                    : '✅ Confirm Pickup — Book Now'
                  }
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

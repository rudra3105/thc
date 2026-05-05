'use client'

import { useState, useEffect } from 'react'
import { X, CheckCircle, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedService?: string
}

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

const input: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  border: '1.5px solid rgba(30,42,74,0.18)',
  borderRadius: 9,
  fontSize: 14,
  color: '#1E2A4A',
  fontFamily: 'DM Sans, sans-serif',
  background: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
}

const label: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: '#1E2A4A',
  marginBottom: 5,
  fontFamily: 'DM Sans, sans-serif',
}

const errStyle: React.CSSProperties = {
  fontSize: 11,
  color: '#dc2626',
  marginTop: 3,
}

export default function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [loading, setLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', zip: '',
    service: preselectedService || '',
    date: '', time: TIME_SLOTS[0], address: '', notes: '',
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

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
      toast.success('Pickup scheduled!')
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

  // Two-column row helper — collapses to single on mobile
  const row2: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: 12,
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: isMobile ? 'flex-end' : 'center',
        justifyContent: 'center',
        padding: isMobile ? 0 : 16,
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        background: '#fff',
        width: '100%',
        maxWidth: isMobile ? '100%' : 560,
        maxHeight: isMobile ? '95vh' : '92vh',
        borderRadius: isMobile ? '20px 20px 0 0' : 20,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
      }}>

        {/* ── MODAL HEADER ── */}
        <div style={{
          background: '#1E2A4A',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg,#2F6FDB,#C2187A)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16,
            }}>📦</div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: 'DM Sans, sans-serif' }}>
                Schedule Your Pickup
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, fontFamily: 'DM Sans, sans-serif' }}>
                Free pickup · Min $45 · Card only
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: 'none', borderRadius: 8,
              width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#fff',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* ── SCROLLABLE BODY ── */}
        <div style={{ overflowY: 'auto', flex: 1 }}>

          {step === 'success' ? (
            /* SUCCESS STATE */
            <div style={{ padding: 32, textAlign: 'center' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'rgba(22,163,74,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <CheckCircle size={36} style={{ color: '#16a34a' }} />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#1E2A4A', marginBottom: 8 }}>
                Pickup Confirmed! ✅
              </h3>
              <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 6 }}>
                Thank you, {form.name}! Your <strong>{form.service}</strong> pickup is booked for
              </p>
              <p style={{ fontWeight: 700, fontSize: 16, color: '#1E2A4A', marginBottom: 4 }}>
                {new Date(form.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
              <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 20 }}>{form.time}</p>
              <p style={{ color: '#9ca3af', fontSize: 13, marginBottom: 24 }}>
                A confirmation SMS is on its way to {form.phone}. We&apos;ll call to confirm. Minimum $45.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={onClose}
                  style={{ background: '#2F6FDB', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: 9, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Done
                </button>
                <a href="tel:2143480666" style={{ background: 'transparent', color: '#2F6FDB', border: '2px solid #2F6FDB', padding: '10px 24px', borderRadius: 9, fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  Call Us
                </a>
              </div>
            </div>
          ) : (
            /* FORM */
            <div style={{ padding: isMobile ? '16px' : '24px' }}>

              {/* Offer badge */}
              <div style={{
                background: 'rgba(47,111,219,0.08)',
                border: '1px solid rgba(47,111,219,0.2)',
                borderRadius: 9,
                padding: '10px 14px',
                fontSize: 13, fontWeight: 500, color: '#2F6FDB',
                marginBottom: 20,
                fontFamily: 'DM Sans, sans-serif',
              }}>
                🎉 First order? Use code <strong>10FREE</strong> for $10 off!
              </div>

              {/* Row 1: Name (full width) */}
              <div style={{ marginBottom: 12 }}>
                <label style={label}>Full Name *</label>
                <input style={input} value={form.name} onChange={set('name')} placeholder="John Smith" />
                {errors.name && <p style={errStyle}>{errors.name}</p>}
              </div>

              {/* Row 2: Phone + Email */}
              <div style={{ ...row2, marginBottom: 12 }}>
                <div>
                  <label style={label}>Phone *</label>
                  <input style={input} type="tel" value={form.phone} onChange={set('phone')} placeholder="214-000-0000" />
                  {errors.phone && <p style={errStyle}>{errors.phone}</p>}
                </div>
                <div>
                  <label style={label}>Email *</label>
                  <input style={input} type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
                  {errors.email && <p style={errStyle}>{errors.email}</p>}
                </div>
              </div>

              {/* Row 3: ZIP + Service */}
              <div style={{ ...row2, marginBottom: 12 }}>
                <div>
                  <label style={label}>ZIP Code *</label>
                  <input style={input} value={form.zip} onChange={set('zip')} placeholder="75034" maxLength={5} />
                  {errors.zip && <p style={errStyle}>{errors.zip}</p>}
                </div>
                <div>
                  <label style={label}>Service *</label>
                  <select style={input} value={form.service} onChange={set('service')}>
                    <option value="">Select service...</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p style={errStyle}>{errors.service}</p>}
                </div>
              </div>

              {/* Row 4: Date + Time */}
              <div style={{ ...row2, marginBottom: 12 }}>
                <div>
                  <label style={label}>Pickup Date *</label>
                  <input style={input} type="date" value={form.date} onChange={set('date')} min={minDate} />
                  {errors.date && <p style={errStyle}>{errors.date}</p>}
                </div>
                <div>
                  <label style={label}>Preferred Time</label>
                  <select style={input} value={form.time} onChange={set('time')}>
                    {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 5: Address (full width) */}
              <div style={{ marginBottom: 12 }}>
                <label style={label}>Pickup Address *</label>
                <input style={input} value={form.address} onChange={set('address')} placeholder="123 Main St, Frisco TX 75034" />
                {errors.address && <p style={errStyle}>{errors.address}</p>}
              </div>

              {/* Row 6: Notes */}
              <div style={{ marginBottom: 16 }}>
                <label style={label}>Special Notes (optional)</label>
                <textarea
                  style={{ ...input, resize: 'none' }}
                  rows={2}
                  value={form.notes}
                  onChange={set('notes')}
                  placeholder="Special care instructions, gate codes, etc."
                />
              </div>

              {/* Terms */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 4 }}>
                <input
                  type="checkbox"
                  id="modal-terms"
                  checked={form.agreeToTerms}
                  onChange={e => {
                    setForm(f => ({ ...f, agreeToTerms: e.target.checked }))
                    if (errors.agreeToTerms) setErrors(ev => { const n = { ...ev }; delete n.agreeToTerms; return n })
                  }}
                  style={{ marginTop: 2, width: 16, height: 16, accentColor: '#2F6FDB', flexShrink: 0 }}
                />
                <label htmlFor="modal-terms" style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.5, fontFamily: 'DM Sans, sans-serif' }}>
                  I agree that minimum order is $45, payment is card-only, and Top Hat Cleaners may contact me via SMS/call.
                </label>
              </div>
              {errors.agreeToTerms && <p style={{ ...errStyle, marginBottom: 12 }}>{errors.agreeToTerms}</p>}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  width: '100%',
                  background: loading ? '#9ca3af' : '#2F6FDB',
                  color: '#fff',
                  border: 'none',
                  padding: '14px',
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontFamily: 'DM Sans, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  marginTop: 16,
                  transition: 'background 0.2s',
                }}
              >
                {loading
                  ? <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Processing...</>
                  : '✅ Confirm Pickup — Book Now'
                }
              </button>

              <p style={{ textAlign: 'center', fontSize: 12, color: '#9ca3af', marginTop: 10, fontFamily: 'DM Sans, sans-serif' }}>
                Or call/WhatsApp:{' '}
                <a href="tel:2143480666" style={{ color: '#2F6FDB', fontWeight: 600, textDecoration: 'none' }}>214-348-0666</a>
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}

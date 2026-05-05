'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call — connect to your CRM or email
    await new Promise(r => setTimeout(r, 1000))
    toast.success('Message sent! We\'ll respond within 24 hours.')
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setLoading(false)
  }

  return (
    <>
      <section style={{ background: '#fff', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', marginBottom: '3rem' }}>
            <span className="section-label">Get In Touch</span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', lineHeight: '1.1', marginBottom: '1rem' }}>
              Contact Top Hat Cleaners
            </h1>
            <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
              Have questions? Need a quote? Ready to book? We&apos;re here to help — call, email, or fill out the form below.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
            {/* Contact Info */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '2rem' }}>
                {[
                  { icon: <Phone size={18} />, title: 'Phone / WhatsApp', val: '214-348-0666', href: 'tel:2143480666' },
                  { icon: <Mail size={18} />, title: 'Email', val: 'info@tophatcleaner.com', href: 'mailto:info@tophatcleaner.com' },
                  { icon: <MapPin size={18} />, title: 'Service Area', val: 'Dallas–Fort Worth, TX', href: undefined },
                  { icon: <Clock size={18} />, title: 'Business Hours', val: 'Mon–Sat 7AM–7PM · Sun 9AM–5PM', href: undefined },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', minWidth: '40px', borderRadius: '10px', background: 'rgba(47,111,219,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>{item.title}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontWeight: '600', fontSize: '15px', color: 'var(--navy)', textDecoration: 'none' }}>{item.val}</a>
                      ) : (
                        <div style={{ fontWeight: '600', fontSize: '15px', color: 'var(--navy)' }}>{item.val}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <BookButton label="📦 Book a Pickup Online" variant="primary" className="w-full justify-center" />
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Smith" required />
                </div>
                <div>
                  <label className="form-label">Phone</label>
                  <input className="form-input" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="214-000-0000" />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Email *</label>
                  <input className="form-input" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@email.com" required />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Subject</label>
                  <select className="form-input" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                    <option value="">Select a topic...</option>
                    <option>Book a Pickup</option>
                    <option>Saree / Indian Garment Inquiry</option>
                    <option>Pricing Question</option>
                    <option>Track My Order</option>
                    <option>Monthly Subscription</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Message *</label>
                  <textarea className="form-input" rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="How can we help you?" required />
                </div>
              </div>
              <button type="submit" className="btn-primary w-full justify-center" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '10px', textAlign: 'center' }}>
                For fastest response, call or WhatsApp: <a href="tel:2143480666" style={{ color: 'var(--blue)', fontWeight: '600' }}>214-348-0666</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { RefreshCw, Phone, Mail, MapPin, Calendar, Package } from 'lucide-react'

interface Booking {
  _id: string
  customerName: string
  phone: string
  email: string
  service: string
  pickupDate: string
  pickupTime: string
  address: string
  zipCode: string
  notes: string
  status: string
  createdAt: string
}

const STATUS_COLORS: Record<string, string> = {
  pending: 'badge-yellow',
  confirmed: 'badge-blue',
  picked_up: 'badge-blue',
  cleaning: 'badge-blue',
  ready: 'badge-green',
  delivered: 'badge-green',
  cancelled: 'badge-red',
}

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [authed, setAuthed] = useState(false)
  const [secret, setSecret] = useState('')
  const [filter, setFilter] = useState('all')

  const fetchBookings = async (s: string) => {
    setLoading(true)
    try {
      const res = await fetch('/api/bookings', { headers: { 'x-admin-secret': s } })
      if (!res.ok) throw new Error('Unauthorized')
      const data = await res.json()
      setBookings(data.bookings || [])
      setAuthed(true)
    } catch {
      alert('Invalid admin secret')
    } finally {
      setLoading(false)
    }
  }

  const filtered = filter === 'all' ? bookings : bookings.filter(b => b.status === filter)

  const statusCounts = bookings.reduce((acc, b) => {
    acc[b.status] = (acc[b.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--gray)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', width: '100%', maxWidth: '400px', boxShadow: '0 8px 32px rgba(30,42,74,0.12)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: '20px', color: '#fff', fontWeight: '800' }}>T</div>
            <h1 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.4rem', color: 'var(--navy)' }}>Admin Panel</h1>
            <p style={{ color: '#6b7280', fontSize: '13px', marginTop: '4px' }}>Top Hat Cleaners</p>
          </div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>Admin Secret</label>
          <input
            type="password"
            className="form-input"
            value={secret}
            onChange={e => setSecret(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && fetchBookings(secret)}
            placeholder="Enter admin secret"
            style={{ marginBottom: '12px' }}
          />
          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => fetchBookings(secret)}>
            Sign In
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--gray)' }}>
      {/* Header */}
      <div style={{ background: 'var(--navy)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '16px' }}>T</div>
          <div>
            <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px' }}>Top Hat Cleaners</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Admin Panel</div>
          </div>
        </div>
        <button onClick={() => fetchBookings(secret)} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}>
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '12px', marginBottom: '24px' }}>
          {[
            { label: 'Total Bookings', val: bookings.length, color: 'var(--blue)' },
            { label: 'Pending', val: statusCounts.pending || 0, color: '#d97706' },
            { label: 'Confirmed', val: statusCounts.confirmed || 0, color: 'var(--blue)' },
            { label: 'Delivered', val: statusCounts.delivered || 0, color: '#16a34a' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '1.2rem', border: '1px solid rgba(30,42,74,0.08)', textAlign: 'center' }}>
              <div style={{ fontWeight: '800', fontSize: '2rem', fontFamily: 'Playfair Display,serif', color: s.color }}>{s.val}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {['all', 'pending', 'confirmed', 'cleaning', 'ready', 'delivered', 'cancelled'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', border: 'none',
                background: filter === f ? 'var(--blue)' : '#fff',
                color: filter === f ? '#fff' : 'var(--navy)',
              }}
            >
              {f.charAt(0).toUpperCase() + f.slice(1).replace('_', ' ')}
              {f !== 'all' && statusCounts[f] ? ` (${statusCounts[f]})` : ''}
            </button>
          ))}
        </div>

        {/* Bookings Table */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#6b7280' }}>Loading bookings...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', background: '#fff', borderRadius: '14px', color: '#6b7280' }}>No bookings found</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filtered.map(b => (
              <div key={b._id} style={{ background: '#fff', borderRadius: '12px', padding: '1.2rem', border: '1px solid rgba(30,42,74,0.08)', display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '16px', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontWeight: '700', fontSize: '15px', color: 'var(--navy)' }}>{b.customerName}</span>
                    <span className={`badge ${STATUS_COLORS[b.status] || 'badge-blue'}`}>{b.status.replace('_', ' ')}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a href={`tel:${b.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: 'var(--blue)', textDecoration: 'none' }}>
                      <Phone size={12} />{b.phone}
                    </a>
                    <a href={`mailto:${b.email}`} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#6b7280', textDecoration: 'none' }}>
                      <Mail size={12} />{b.email}
                    </a>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: 'var(--navy)', fontWeight: '500', marginBottom: '4px' }}>
                    <Package size={12} style={{ color: 'var(--blue)' }} /> {b.service}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                    <Calendar size={12} /> {b.pickupDate} · {b.pickupTime}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#6b7280' }}>
                    <MapPin size={12} /> {b.address}
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                  {new Date(b.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

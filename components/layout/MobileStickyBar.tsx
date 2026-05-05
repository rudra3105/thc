'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'
import BookingModal from '@/components/booking/BookingModal'

export default function MobileStickyBar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        zIndex: 50,
        background: '#2F6FDB',
        padding: '10px 14px',
        display: 'flex',
        gap: 10,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.18)',
      }}
        className="mobile-sticky"
      >
        <button
          onClick={() => setOpen(true)}
          style={{
            flex: 1,
            background: '#fff',
            color: '#2F6FDB',
            border: 'none',
            borderRadius: 9,
            padding: '12px',
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          📦 Book Pickup
        </button>
        <a
          href="tel:2143480666"
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.15)',
            color: '#fff',
            border: '1.5px solid rgba(255,255,255,0.35)',
            borderRadius: 9,
            padding: '12px',
            fontWeight: 600,
            fontSize: 14,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          <Phone size={15} />
          Call Now
        </a>
      </div>

      <BookingModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

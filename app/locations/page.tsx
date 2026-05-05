import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'
import ZipChecker from '@/components/ui/ZipChecker'

export const metadata: Metadata = {
  title: 'Dry Cleaning Locations in Dallas–Fort Worth | Top Hat Cleaners',
  description: 'Top Hat Cleaners serves 18+ cities across DFW including Frisco, Plano, Flower Mound, Southlake, Keller, Grapevine, Irving, and more. Free pickup & delivery.',
}

const LOCATIONS = [
  { city: 'Frisco', state: 'TX', zips: '75033, 75034, 75035', hasKiosk: true, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Frisco+TX' },
  { city: 'Plano', state: 'TX', zips: '75024, 75025, 75093, 75094', hasKiosk: true, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Plano+TX' },
  { city: 'Flower Mound', state: 'TX', zips: '75022, 75028', hasKiosk: true, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Flower+Mound+TX' },
  { city: 'Southlake', state: 'TX', zips: '76092', hasKiosk: false, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Southlake+TX' },
  { city: 'Grapevine', state: 'TX', zips: '76051, 76099', hasKiosk: true, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Grapevine+TX' },
  { city: 'Keller', state: 'TX', zips: '76248, 76262', hasKiosk: false, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Keller+TX' },
  { city: 'Roanoke', state: 'TX', zips: '76262', hasKiosk: false, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Roanoke+TX' },
  { city: 'Trophy Club', state: 'TX', zips: '76262', hasKiosk: false, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Trophy+Club+TX' },
  { city: 'Coppell', state: 'TX', zips: '75019, 75099', hasKiosk: true, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Coppell+TX' },
  { city: 'Irving', state: 'TX', zips: '75038, 75039, 75063', hasKiosk: true, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Irving+TX' },
  { city: 'Lewisville', state: 'TX', zips: '75056, 75065, 75067', hasKiosk: false, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Lewisville+TX' },
  { city: 'Allen', state: 'TX', zips: '75002, 75013', hasKiosk: false, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Allen+TX' },
  { city: 'McKinney', state: 'TX', zips: '75069, 75070, 75071', hasKiosk: false, hasPickup: true, mapUrl: 'https://maps.google.com/?q=McKinney+TX' },
  { city: 'The Colony', state: 'TX', zips: '75056', hasKiosk: false, hasPickup: true, mapUrl: 'https://maps.google.com/?q=The+Colony+TX' },
  { city: 'Carrollton', state: 'TX', zips: '75006, 75007, 75010', hasKiosk: true, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Carrollton+TX' },
  { city: 'Dallas', state: 'TX', zips: '75201, 75225, 75230, 75240', hasKiosk: true, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Dallas+TX' },
  { city: 'Fort Worth', state: 'TX', zips: '76101, 76107, 76109', hasKiosk: true, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Fort+Worth+TX' },
  { city: 'Arlington', state: 'TX', zips: '76001, 76010, 76017', hasKiosk: false, hasPickup: true, mapUrl: 'https://maps.google.com/?q=Arlington+TX' },
]

export default function LocationsPage() {
  return (
    <>
      <section style={{ background: '#fff', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '2.5rem' }}>
            <span className="section-label">Service Area</span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', lineHeight: '1.1', marginBottom: '1rem' }}>
              Dry Cleaning &amp; Laundry Pickup Across{' '}
              <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Dallas–Fort Worth
              </span>
            </h1>
            <p style={{ color: '#6b7280', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              18+ locations and service areas across DFW. We bring professional dry cleaning and laundry service straight to your door — no store visit required.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--navy)', marginBottom: '8px' }}>Check if we serve your ZIP code:</p>
              <ZipChecker />
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            {[['18+', 'Cities Served'], ['24/7', 'Drop-Off Kiosks'], ['Free', 'Pickup & Delivery'], ['$45', 'Minimum Order']].map(([val, lbl], i) => (
              <div key={i} style={{ background: 'var(--gray)', borderRadius: '12px', padding: '1rem 1.5rem', border: '1px solid rgba(30,42,74,0.08)' }}>
                <div style={{ fontWeight: '800', fontSize: '1.5rem', fontFamily: 'Playfair Display,serif', color: 'var(--blue)' }}>{val}</div>
                <div style={{ fontSize: '13px', color: '#6b7280' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS GRID */}
      <section style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '2rem' }}>All Service Locations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '16px' }}>
            {LOCATIONS.map((loc, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '1.4rem', border: '1px solid rgba(30,42,74,0.08)', boxShadow: '0 2px 10px rgba(30,42,74,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div>
                    <h3 style={{ fontWeight: '700', fontSize: '16px', color: 'var(--navy)', fontFamily: 'Playfair Display,serif' }}>{loc.city}, {loc.state}</h3>
                    <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>ZIP: {loc.zips}</p>
                  </div>
                  <MapPin size={18} style={{ color: 'var(--blue)', minWidth: 18 }} />
                </div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  {loc.hasPickup && <span className="badge badge-blue">🚐 Pickup</span>}
                  {loc.hasKiosk && <span className="badge badge-green">🕒 24/7 Kiosk</span>}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, textAlign: 'center', padding: '8px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', color: 'var(--blue)', background: 'rgba(47,111,219,0.08)', border: '1px solid rgba(47,111,219,0.2)', textDecoration: 'none' }}>
                    📍 Get Directions
                  </a>
                  <BookButton label="Book" variant="primary" className="flex-1 text-center text-xs py-2 px-3" size="sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>Pickup Schedule</h2>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Structured routes serving all DFW cities</p>
              <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '10px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ background: 'var(--navy)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', color: '#fff', fontSize: '13px' }}>Pickup Day</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', color: '#fff', fontSize: '13px' }}>Delivery Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: 'var(--gray)' }}>
                    <td style={{ padding: '12px 16px', fontSize: '14px', color: 'var(--navy)' }}>📅 Monday Pickup</td>
                    <td style={{ padding: '12px 16px', fontSize: '14px', color: 'var(--blue)', fontWeight: '600' }}>📦 Thursday Delivery</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', fontSize: '14px', color: 'var(--navy)' }}>📅 Thursday Pickup</td>
                    <td style={{ padding: '12px 16px', fontSize: '14px', color: 'var(--blue)', fontWeight: '600' }}>📦 Monday Delivery</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>Service Hours</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[['Monday–Friday', '7:00 AM – 7:00 PM'], ['Saturday', '8:00 AM – 6:00 PM'], ['Sunday', '9:00 AM – 5:00 PM'], ['24/7 Kiosks', 'Available at select locations']].map(([day, hours], i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '8px', background: 'var(--gray)', border: '1px solid rgba(30,42,74,0.08)' }}>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--navy)' }}>{day}</span>
                    <span style={{ fontSize: '14px', color: 'var(--blue)', fontWeight: '600' }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontFamily: 'Playfair Display,serif', color: '#fff', marginBottom: '1rem' }}>Serving Your Neighborhood</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>Book your first pickup today — $10 off with code 10FREE.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookButton label="📦 Book Pickup Now" variant="primary" size="lg" />
            <a href="tel:2143480666" className="btn-outline-white" style={{ fontSize: '15px', padding: '16px 28px' }}>☎️ 214-348-0666</a>
          </div>
        </div>
      </section>
    </>
  )
}

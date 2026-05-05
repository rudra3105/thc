import type { Metadata } from 'next'
import BookButton from '@/components/ui/BookButton'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'Same-Day Dry Cleaning Express Service in DFW | Top Hat Cleaners',
  description: 'Same-day dry cleaning and express laundry service across Dallas–Fort Worth. Drop off before 10AM, pick up by 6PM. Call 214-348-0666.',
}

const FAQS = [
  { q: 'What is the cutoff time for same-day service?', a: 'Drop off or schedule by 10AM for same-day service at select locations. Call 214-348-0666 to confirm availability.' },
  { q: 'Is same-day pickup & delivery available?', a: 'Same-day pickup depends on route availability. Call before booking to confirm. Most areas have next-day express options.' },
  { q: 'Is there an extra charge for express service?', a: 'Express services may carry a small surcharge. Call 214-348-0666 for pricing based on your location and order.' },
  { q: 'What services are available same-day?', a: 'Dry cleaning, shirts, and laundry are available for same-day service. Sarees and specialty garments may need 48 hours.' },
]

export default function SameDayPage() {
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: '4rem 0 3rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '5px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', background: 'var(--gradient)', color: '#fff', marginBottom: '1.2rem' }}>
            ⚡ FASTEST CLEANING IN DFW
          </div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontFamily: 'Playfair Display,serif', color: '#fff', lineHeight: '1.1', marginBottom: '1rem' }}>
            Same-Day &amp; Express Dry Cleaning in Dallas–Fort Worth
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '2rem' }}>
            Drop off before 10AM — pick up by 6PM. When you need it fast, we deliver.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:2143480666" className="btn-gradient" style={{ fontSize: '15px', padding: '16px 28px' }}>
              ☎️ Call Now — 214-348-0666
            </a>
            <BookButton label="📦 Book Express" variant="primary" size="lg" />
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px', marginBottom: '3rem' }}>
            {[
              { icon: '⏰', title: 'Drop Off by 10AM', desc: 'Ready by 6PM same day at select locations.' },
              { icon: '📞', title: 'Call First', desc: 'Always confirm availability — call 214-348-0666.' },
              { icon: '⚡', title: 'Express Turnaround', desc: '24–48 hour express for most garments.' },
              { icon: '🚐', title: 'Express Pickup', desc: 'Rush pickup available in select DFW areas.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--gray)', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(30,42,74,0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>{item.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '14px', color: 'var(--navy)', marginBottom: '6px' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--navy)', borderRadius: '20px', padding: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display,serif', color: '#fff', marginBottom: '1rem', fontSize: '1.6rem' }}>Need It Fast? Call Us Directly</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Same-day availability varies by location and time. Our team can confirm your slot and arrange the fastest possible service.
            </p>
            <a href="tel:2143480666" style={{ display: 'inline-block', background: 'var(--gradient)', color: '#fff', fontWeight: '700', fontSize: '1.1rem', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none' }}>
              ☎️ 214-348-0666
            </a>
          </div>

          <h2 style={{ fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1.5rem' }}>FAQ</h2>
          <FAQ items={FAQS} />
        </div>
      </section>
    </>
  )
}

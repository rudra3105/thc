import type { Metadata } from 'next'
import Link from 'next/link'
import { Star } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'

export const metadata: Metadata = {
  title: 'Customer Reviews | Top Hat Cleaners DFW — 4.8+ Google Rating',
  description: 'See what 500+ customers say about Top Hat Cleaners. Best dry cleaning and laundry pickup in Dallas–Fort Worth. Real reviews from real customers.',
}

const REVIEWS = [
  { name: 'Sarah M.', loc: 'Frisco TX', rating: 5, service: 'Dry Cleaning', date: 'March 2025', text: 'Super convenient pickup and delivery. My dry cleaning always comes back perfect — pressed beautifully. Never going to another cleaner!' },
  { name: 'Priya S.', loc: 'Plano TX', rating: 5, service: 'Saree Cleaning', date: 'February 2025', text: 'Best saree cleaning service in DFW. My wedding Kanjivaram saree looked brand new. The zari was absolutely stunning. Highly recommend!' },
  { name: 'James R.', loc: 'Flower Mound TX', rating: 5, service: 'Laundry Service', date: 'April 2025', text: 'Saves me 5 hours every week. The monthly subscription plan is the best value in DFW. Always on time, always perfect.' },
  { name: 'Anita K.', loc: 'Southlake TX', rating: 5, service: 'Saree Cleaning', date: 'January 2025', text: 'Trusted them with my mother\'s 40-year-old Banarasi saree. They returned it in pristine condition. Cannot recommend enough!' },
  { name: 'Michael T.', loc: 'Keller TX', rating: 5, service: 'Dry Cleaning', date: 'March 2025', text: 'Professional, reliable, and on time every single pickup. My suits always come back perfectly pressed. Worth every dollar.' },
  { name: 'Deepa M.', loc: 'Irving TX', rating: 5, service: 'Bridal Lehenga', date: 'December 2024', text: 'My daughter\'s wedding lehenga was cleaned and pressed to perfection. The team handled the heavy embroidery so carefully.' },
  { name: 'Robert L.', loc: 'Grapevine TX', rating: 5, service: 'Pickup & Delivery', date: 'February 2025', text: 'The pickup and delivery service is a game changer. Never have to drive to a cleaner again. Highly recommended for DFW families.' },
  { name: 'Nisha P.', loc: 'Coppell TX', rating: 5, service: 'Saree Cleaning', date: 'March 2025', text: 'Amazing care for my silk sarees. The colors are bright, the drape is perfect, and they rolled it properly. Will never go elsewhere.' },
  { name: 'Chris B.', loc: 'Lewisville TX', rating: 5, service: 'Laundry Service', date: 'January 2025', text: 'Used the monthly plan for 6 months now. Best decision ever. Saves time and money — my family does 3x the laundry for less.' },
  { name: 'Rekha V.', loc: 'Allen TX', rating: 5, service: 'Saree Cleaning', date: 'April 2025', text: 'I send all my sarees here — regular, festival, and bridal. Every single one comes back looking gorgeous. Genuinely the best.' },
  { name: 'Jason H.', loc: 'Carrollton TX', rating: 5, service: 'Dry Cleaning', date: 'March 2025', text: 'Fast, reliable, and my clothes always look great. The app booking is easy and the driver is always on time. 5 stars.' },
  { name: 'Sunita A.', loc: 'McKinney TX', rating: 5, service: 'Wedding Dress', date: 'November 2024', text: 'They cleaned my wedding dress beautifully. I was nervous but they handled it with such professionalism. Truly exceptional service.' },
]

export default function ReviewsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--gray)', padding: '4rem 0 3rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Customer Reviews</span>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>
            What DFW Customers Say About Top Hat Cleaners
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ color: '#f59e0b', fontSize: '24px' }}>★★★★★</span>
            <span style={{ fontWeight: '800', fontSize: '1.3rem', fontFamily: 'Playfair Display,serif', color: 'var(--navy)' }}>4.8+</span>
            <span style={{ color: '#6b7280' }}>· 500+ verified Google reviews</span>
          </div>
          <p style={{ color: '#6b7280', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
            Real reviews from real DFW customers. Dry cleaning, laundry, saree care, and more.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookButton label="📦 Book Pickup" variant="primary" />
            <a href="https://g.page/r/tophatcleaners/review" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '14px' }}>
              ⭐ Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: 'var(--navy)', padding: '24px 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {[['⭐', '4.8+', 'Google Rating'], ['👕', '500+', 'Reviews'], ['✅', '99%', 'Satisfied Customers'], ['📍', '18+', 'DFW Cities']].map(([icon, val, lbl], i) => (
            <div key={i} style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '22px', marginBottom: '2px' }}>{icon}</div>
              <div style={{ fontWeight: '800', fontSize: '1.4rem', fontFamily: 'Playfair Display,serif', color: 'var(--blue)' }}>{val}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS GRID */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '20px' }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{ background: 'var(--gray)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(30,42,74,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: 'var(--navy)' }}>{r.name}</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>{r.loc} · {r.date}</div>
                  </div>
                  <span className="badge badge-blue" style={{ fontSize: '11px' }}>{r.service}</span>
                </div>
                <div style={{ color: '#f59e0b', fontSize: '14px', marginBottom: '8px' }}>{'★'.repeat(r.rating)}</div>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.7', fontStyle: 'italic' }}>&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontFamily: 'Playfair Display,serif', color: '#fff', marginBottom: '1rem' }}>
            Join 500+ Happy DFW Customers
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>Book your first pickup today — $10 off with code 10FREE.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookButton label="📦 Book Pickup" variant="primary" size="lg" />
            <a href="tel:2143480666" className="btn-outline-white" style={{ padding: '16px 28px', fontSize: '15px' }}>☎️ 214-348-0666</a>
          </div>
        </div>
      </section>
    </>
  )
}

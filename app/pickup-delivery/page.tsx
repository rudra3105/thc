import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Truck, Clock, MapPin } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'
import FAQ from '@/components/ui/FAQ'
import { PICKUP_SCHEDULE, DRY_CLEANING_PRICES, LAUNDRY_PRICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: "Dry Cleaning Pickup & Delivery Near You in Dallas-Fort Worth",
  description: "Schedule dry cleaning & laundry pickup near you in DFW. Free pickup available. Saree specialists. Same-day options. Book online in seconds.",
}

const FAQS = [
  { q: 'Is pickup really free?', a: 'Yes! Pickup and delivery is free with a minimum order of $45. Our driver comes straight to your door.' },
  { q: 'What is the minimum order?', a: 'Minimum order for pickup & delivery service is $45. Payment is card only — no cash.' },
  { q: 'What is the pickup schedule?', a: 'We run Monday→Thursday and Thursday→Monday routes. Same-day pickup available in select areas if booked before 2PM.' },
  { q: 'Do you clean sarees via pickup?', a: 'Absolutely! Saree and Indian garment pickup is one of our most popular services. All types handled with expert care.' },
  { q: 'Can I schedule recurring pickup?', a: 'Yes! Our $50/month plan gives you $65 in cleaning credit every month with priority routes. Perfect for weekly laundry.' },
]

export default function PickupDeliveryPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: '#fff', paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', fontSize: '12px', fontWeight: '600', color: 'var(--blue)', background: 'rgba(47,111,219,0.08)', border: '1px solid rgba(47,111,219,0.2)', padding: '5px 12px', borderRadius: '50px', marginBottom: '1.2rem' }}>
                ⭐ DFW&apos;s Most Reliable Service
              </div>
              <h1 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', lineHeight: '1.1', marginBottom: '1rem' }}>
                DFW&apos;s Most Reliable Dry Cleaning{' '}
                <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Pickup &amp; Delivery
                </span>
              </h1>
              <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Join thousands of Dallas-Fort Worth customers who stopped driving to the cleaners. We pick up, clean, and deliver — including laundry, dry cleaning, and expert saree care.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <BookButton label="📦 Schedule Pickup Now" variant="primary" size="lg" />
                <a href="tel:2143480666" className="btn-outline" style={{ fontSize: '14px' }}>☎️ 214-348-0666</a>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['⭐ 4.8+ Google Rating', '👕 50,000+ Garments', '🚚 Free Pickup', '📍 17+ Locations', '⚡ Same-Day Options'].map((t, i) => (
                  <span key={i} className="trust-pill" style={{ fontSize: '12px' }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', height: '420px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(30,42,74,0.18)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=85"
                  alt="Dry cleaning pickup and delivery service DFW"
                  fill style={{ objectFit: 'cover' }} priority
                />
              </div>
              <div style={{ position: 'absolute', top: '-12px', right: '-12px', background: '#fff', borderRadius: '12px', padding: '12px 16px', boxShadow: '0 4px 20px rgba(30,42,74,0.15)' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--navy)' }}>🎁 First Order</div>
                <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--blue)', fontFamily: 'Playfair Display,serif' }}>$10 OFF</div>
                <div style={{ fontSize: '11px', color: '#6b7280' }}>Code: 10FREE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <div className="urgency-strip">
        🚚 Pickup routes fill fast — Book before 2PM to secure your slot today!
      </div>

      {/* HOW IT WORKS + SCHEDULE */}
      <section style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div>
              <span className="section-label">Simple Process</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1.5rem' }}>How It Works</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { n: '1', title: 'Schedule Online', desc: 'Book in seconds. Choose your service, date & time window. No account needed.' },
                  { n: '2', title: 'Leave Clothes Ready', desc: 'Have your garments in a bag at your door, or hand them to our driver.' },
                  { n: '3', title: 'We Clean, Inspect & Press', desc: 'Professional cleaning at our facilities. Every garment inspected before return.' },
                  { n: '4', title: 'Delivered Fresh', desc: 'Clean, pressed, and packaged — delivered back to your door.' },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#fff', borderRadius: '12px', padding: '1.2rem', border: '1px solid rgba(30,42,74,0.08)' }}>
                    <div className="step-number" style={{ fontSize: '14px', width: '36px', height: '36px', minWidth: '36px' }}>{step.n}</div>
                    <div>
                      <h4 style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)', marginBottom: '4px' }}>{step.title}</h4>
                      <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="section-label">Pickup Schedule</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1.5rem' }}>Structured Routes for Reliable Service</h2>
              <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(30,42,74,0.08)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--navy)' }}>
                      <th style={{ padding: '14px 18px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#fff' }}>Pickup Day</th>
                      <th style={{ padding: '14px 18px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#fff' }}>Delivery Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PICKUP_SCHEDULE.map((row, i) => (
                      <tr key={i} style={{ borderBottom: i === 0 ? '1px solid rgba(30,42,74,0.08)' : 'none', background: i % 2 === 1 ? 'var(--gray)' : '#fff' }}>
                        <td style={{ padding: '14px 18px', fontSize: '14px', color: 'var(--navy)' }}>📅 {row.pickup} Pickup</td>
                        <td style={{ padding: '14px 18px', fontSize: '14px', color: 'var(--blue)', fontWeight: '600' }}>📦 {row.delivery} Delivery</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '1.2rem', border: '1px solid rgba(30,42,74,0.08)', marginBottom: '1.5rem' }}>
                <h4 style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)', marginBottom: '8px' }}>Minimum Order & Payment</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {['Minimum order: $45', 'Payment: Card only (no cash)', 'Free pickup with qualifying order'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#4b5563' }}>
                      <CheckCircle size={13} style={{ color: 'var(--blue)', minWidth: 13 }} />{item}
                    </div>
                  ))}
                </div>
              </div>
              <BookButton label="📦 Schedule Pickup Now" variant="primary" className="w-full justify-center" />
            </div>
          </div>
        </div>
      </section>

      {/* IMAGES ROW */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label">Real Operations</span>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)' }}>See How We Handle Your Clothes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '16px', marginBottom: '1rem' }}>
            {[
              { img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80', label: 'Pickup at Customer Home' },
              { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', label: 'Garment Inspection' },
              { img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80', label: 'Professional Cleaning' },
              { img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80', label: 'Clean Packaging & Delivery' },
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative', height: '200px', borderRadius: '12px', overflow: 'hidden' }}>
                <Image src={item.img} alt={item.label} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,42,74,0.3)' }} />
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', color: '#fff', fontSize: '12px', fontWeight: '600' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#9ca3af' }}>✔ Real operations · ✔ Real team · ✔ Real results — This is not a marketplace</p>
        </div>
      </section>

      {/* SUBSCRIPTION */}
      <section style={{ background: 'var(--navy)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>Most Popular</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontFamily: 'Playfair Display,serif', color: '#fff', marginBottom: '1rem' }}>Monthly Plan — Best Value</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Most customers choose the monthly plan to save 30% and get priority pickup routes. No scheduling stress every week.
              </p>
              {['Save ~30% every month', 'No scheduling every time', 'Priority routes', 'Works for all services', 'Minimum 3 months'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>
                  <CheckCircle size={14} style={{ color: 'var(--blue)' }} />{item}
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '2.5rem', textAlign: 'center', border: '2px solid rgba(47,111,219,0.3)' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: '900', fontFamily: 'Playfair Display,serif', color: 'var(--blue)' }}>$50<span style={{ fontSize: '1.2rem', fontWeight: '400' }}>/mo</span></div>
              <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)', margin: '.3rem 0 1.5rem' }}>→ Get $65 Credit Every Month</div>
              <BookButton label="Start Monthly Plan" variant="gradient" className="w-full justify-center" />
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '1rem' }}>Minimum 3 months · Cancel anytime after</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label">Transparent Pricing</span>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '.8rem' }}>Starting Prices</h2>
            <p style={{ color: '#6b7280' }}>Most customers spend $25–$60 per order</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <div>
              <h3 style={{ fontWeight: '700', fontSize: '15px', color: 'var(--navy)', marginBottom: '12px' }}>Dry Cleaning</h3>
              <table className="pricing-table" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <tbody>
                  {DRY_CLEANING_PRICES.slice(0, 4).map((row, i) => (<tr key={i}><td>{row.item}</td><td>{row.price}</td></tr>))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 style={{ fontWeight: '700', fontSize: '15px', color: 'var(--navy)', marginBottom: '12px' }}>Laundry</h3>
              <table className="pricing-table" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <tbody>
                  {LAUNDRY_PRICES.slice(0, 4).map((row, i) => (<tr key={i}><td>{row.item}</td><td>{row.price}</td></tr>))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/prices" className="btn-primary">View Full Pricing</Link>
            <BookButton label="Schedule Pickup" variant="outline" />
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '.8rem' }}>Areas We Serve Across DFW</h2>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Doorstep pickup across all major Dallas-Fort Worth neighborhoods</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '12px' }}>
            {['Frisco (75033, 75034)', 'Plano (75024, 75093)', 'Flower Mound (75028)', 'Southlake (76092)', 'Keller', 'Grapevine (76051)', 'Roanoke / Trophy Club', 'Coppell', 'Irving', 'Lewisville (75067)', 'Arlington', 'Dallas & Fort Worth'].map((city, i) => (
              <div key={i} style={{ background: 'var(--gray)', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', fontWeight: '500', color: 'var(--navy)', border: '1px solid rgba(30,42,74,0.08)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={13} style={{ color: 'var(--blue)' }} />{city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontFamily: 'Playfair Display,serif', color: '#fff', marginBottom: '1rem' }}>Stop Driving to the Cleaners</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '1.05rem' }}>Join thousands of DFW customers using our pickup & delivery service.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookButton label="📦 Schedule Pickup Now" variant="primary" size="lg" />
            <a href="tel:2143480666" className="btn-outline-white" style={{ fontSize: '15px', padding: '16px 28px' }}>☎️ 214-348-0666</a>
          </div>
        </div>
      </section>
    </>
  )
}

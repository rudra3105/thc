import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'
import FAQ from '@/components/ui/FAQ'
import { DRY_CLEANING_PRICES, LAUNDRY_PRICES, SPECIALTY_PRICES, PICKUP_SCHEDULE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pricing | Dry Cleaning & Laundry Services in Dallas–Fort Worth',
  description: 'Simple, transparent pricing for dry cleaning, laundry, saree care, and pickup & delivery across Dallas–Fort Worth. Save more with our $50/month plan.',
}

const FAQS = [
  { q: 'Are these final prices?', a: 'No. These are starting prices. Final cost depends on garment type and condition after inspection.' },
  { q: 'Do you offer pickup and delivery?', a: 'Yes, across DFW with a minimum order of $45. Pickup and delivery is free.' },
  { q: 'Do you clean sarees and Indian clothes?', a: 'Yes. Saree and Indian garment care is one of our specialties, including delicate and embroidered garments.' },
  { q: 'How does the $50 subscription work?', a: 'You pay $50 monthly and receive $65 in cleaning credit (minimum 3 months). Works for all eligible services.' },
  { q: 'How much is dry cleaning near me in DFW?', a: 'Most everyday garments start between $4.99–$14.99. Complex or delicate garments may cost more.' },
]

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span className="section-label">Transparent Pricing</span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', lineHeight: '1.1', marginBottom: '1rem' }}>
              Dry Cleaning &amp; Laundry Pricing in Dallas–Fort Worth
            </h1>
            <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Simple, transparent pricing. No surprises. Premium care for everyday clothes and delicate garments.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem' }}>
              {['✔ No hidden fees', '✔ Free pickup (min. $45)', '✔ Fast turnaround', '✔ Delicate garment specialists'].map((t, i) => (
                <span key={i} className="trust-pill" style={{ fontSize: '12px' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <BookButton label="📦 Book Free Pickup" variant="primary" />
              <a href="tel:2143480666" className="btn-outline" style={{ fontSize: '14px' }}>☎️ 214-348-0666</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE IMAGES */}
      <section style={{ background: 'var(--gray)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '16px' }}>
            {[
              { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', label: 'Dry Cleaning', sub: 'From $4.99' },
              { img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80', label: 'Wash & Fold', sub: 'From $2.49/lb' },
              { img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80', label: 'Saree Cleaning', sub: 'From $24.99' },
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative', height: '180px', borderRadius: '12px', overflow: 'hidden' }}>
                <Image src={item.img} alt={item.label} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,42,74,0.5)' }} />
                <div style={{ position: 'absolute', bottom: '12px', left: '12px' }}>
                  <div style={{ color: '#fff', fontWeight: '700', fontSize: '14px' }}>{item.label}</div>
                  <div style={{ color: 'var(--blue)', fontWeight: '800', fontSize: '16px', fontFamily: 'Playfair Display,serif' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRY CLEANING + LAUNDRY */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <span className="section-label">Dry Cleaning</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>Dry Cleaning Prices in DFW</h2>
              <table className="pricing-table" style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '1rem' }}>
                <thead><tr><th>Item</th><th>Starting From</th></tr></thead>
                <tbody>{DRY_CLEANING_PRICES.map((row, i) => (<tr key={i}><td>{row.item}</td><td>{row.price}</td></tr>))}</tbody>
              </table>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '1rem' }}>⚠️ Final price depends on fabric, stains, lining, or special care.</p>
              <Link href="/dry-cleaning" className="btn-outline" style={{ fontSize: '13px' }}>About Dry Cleaning →</Link>
            </div>
            <div>
              <span className="section-label">Laundry</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>Laundry (Wash & Fold) Pricing</h2>
              <table className="pricing-table" style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '1rem' }}>
                <thead><tr><th>Service</th><th>Starting From</th></tr></thead>
                <tbody>{LAUNDRY_PRICES.map((row, i) => (<tr key={i}><td>{row.item}</td><td>{row.price}</td></tr>))}</tbody>
              </table>
              <Link href="/laundry-service" className="btn-outline" style={{ fontSize: '13px' }}>Explore Laundry Service →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTY */}
      <section style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div>
              <span className="section-label">High-Value Services</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>Specialty Garment Pricing</h2>
              <p style={{ color: '#6b7280', fontSize: '.9rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>Sarees, wedding wear & designer garments receive expert handling and care.</p>
              <table className="pricing-table" style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                <thead><tr><th>Item</th><th>Starting From</th></tr></thead>
                <tbody>{SPECIALTY_PRICES.map((row, i) => (<tr key={i}><td>{row.item}</td><td>{row.price}</td></tr>))}</tbody>
              </table>
              <BookButton label="Get Specialty Quote" variant="gradient" service="Saree / Indian Garment Cleaning" />
            </div>
            <div>
              <h3 style={{ fontWeight: '700', fontSize: '15px', color: 'var(--navy)', marginBottom: '12px' }}>Why Prices Are "Starting From"</h3>
              <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.7', marginBottom: '1rem' }}>Some garments require additional care based on:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
                {['Silk, wool & delicate fabrics', 'Heavy stains or odor removal', 'Embroidery, zari, beading', 'Designer or wedding garments', 'Oversized household items'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#4b5563' }}>
                    <CheckCircle size={13} style={{ color: 'var(--blue)', minWidth: 13 }} />{item}
                  </div>
                ))}
              </div>
              <div style={{ position: 'relative', height: '220px', borderRadius: '12px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80" alt="Saree specialist pricing" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Best Value</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '2rem' }}>Monthly Plan — Most Popular</h2>
            <div style={{ background: 'var(--navy)', borderRadius: '20px', padding: '2.5rem', border: '2px solid rgba(47,111,219,0.3)' }}>
              <div style={{ display: 'inline-block', padding: '5px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', background: 'var(--gradient)', color: '#fff', marginBottom: '1.2rem' }}>🔥 SAVE 30% EVERY MONTH</div>
              <div style={{ fontSize: '3.5rem', fontWeight: '900', fontFamily: 'Playfair Display,serif', color: 'var(--blue)' }}>$50<span style={{ fontSize: '1.2rem', fontWeight: '400' }}>/mo</span></div>
              <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)', margin: '.3rem 0 .5rem' }}>→ Get <span style={{ color: 'var(--blue)' }}>$65</span> Cleaning Credit Monthly</div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginBottom: '1.8rem' }}>Pay $50 · Get $65 credit · Save every month · Min 3 months</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '2rem', textAlign: 'left' }}>
                {['Works for all services', 'Priority pickup routes', 'Perfect for families & professionals', 'Pickup included', 'Predictable monthly budget', 'Cancel anytime after 3 months'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                    <CheckCircle size={13} style={{ color: 'var(--blue)', minWidth: 13 }} />{f}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <BookButton label="Start $50 Subscription" variant="gradient" />
                <BookButton label="Add to Pickup Order" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PICKUP INFO */}
      <section style={{ background: 'var(--gray)', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1.5rem', textAlign: 'center' }}>Pickup & Delivery Across Dallas–Fort Worth</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '16px', maxWidth: '700px', margin: '0 auto 2rem' }}>
            {[{ icon: '🚐', title: 'Free Pickup', sub: 'Minimum $45 order' }, { icon: '💳', title: 'Card Payment Only', sub: 'Secure processing' }, { icon: '📅', title: 'Mon → Thu & Thu → Mon', sub: 'Reliable schedule' }].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '1.2rem', textAlign: 'center', border: '1px solid rgba(30,42,74,0.08)' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>{item.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/pickup-delivery" className="btn-outline" style={{ fontSize: '14px' }}>Learn About Pickup & Delivery →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <FAQ items={FAQS} className="max-w-3xl" />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--blue)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontFamily: 'Playfair Display,serif', color: '#fff', marginBottom: '1rem' }}>Clean Smarter. Save More. Stress Less.</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1.05rem' }}>Stop worrying about laundry and dry cleaning.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookButton label="📦 Book Pickup" variant="primary" size="lg" style={{ background: '#fff', color: 'var(--blue)' }} />
            <BookButton label="💰 Start Subscription" variant="gradient" size="lg" />
            <a href="tel:2143480666" className="btn-outline-white" style={{ fontSize: '15px', padding: '16px 24px' }}>☎️ 214-348-0666</a>
          </div>
        </div>
      </section>
    </>
  )
}

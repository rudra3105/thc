import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'
import FAQ from '@/components/ui/FAQ'
import { LAUNDRY_PRICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Laundry Service in Dallas–Fort Worth | Wash & Fold Pickup & Delivery',
  description: 'Professional wash & fold laundry service in DFW with free pickup & delivery. Starting at $2.49/lb. Comforters, bedding, household items. Call 214-348-0666.',
}

const FAQS = [
  { q: 'How is wash & fold priced?', a: 'Wash & fold is priced by weight, starting at $2.49/lb. Individual laundered shirts are $3.99 each.' },
  { q: 'Do you pick up laundry from my home?', a: 'Yes! Free pickup across DFW with a minimum $45 order. Book online or call 214-348-0666.' },
  { q: 'Do you separate darks from lights?', a: 'Absolutely. We sort by color, fabric type, and wash temperature to protect every garment.' },
  { q: 'Can you wash comforters and bedding?', a: 'Yes. We clean comforters, blankets, sheets, duvet covers, pillows, and all household items.' },
  { q: 'How long does laundry service take?', a: 'Standard: 2 business days. Express: same-day or next-day at select locations.' },
  { q: 'Do you fold the laundry?', a: 'Yes — professionally folded, sorted by garment type, and packaged neatly for easy putting away.' },
]

export default function LaundryPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Laundry Service DFW</span>
              <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', lineHeight: '1.1', marginBottom: '1rem' }}>
                Professional{' '}
                <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Wash &amp; Fold
                </span>{' '}Laundry Service in DFW
              </h1>
              <p style={{ color: '#4b5563', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                Stop spending 5+ hours a week on laundry. We pick it up dirty, wash, dry, fold, and deliver it back fresh — all for $2.49/lb.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '2rem' }}>
                {['Starting at $2.49/lb — pay only for what you send', 'Free pickup & delivery (min $45)', 'Sorted, washed, dried, and folded', 'Comforters, bedding & household items welcome', 'Hypoallergenic detergent option available'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#4b5563' }}>
                    <CheckCircle size={14} style={{ color: 'var(--blue)', minWidth: 14 }} />{item}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <BookButton label="📦 Schedule Laundry Pickup" variant="primary" service="Laundry (Wash & Fold)" />
                <a href="tel:2143480666" className="btn-outline" style={{ fontSize: '14px' }}>☎️ 214-348-0666</a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ position: 'relative', height: '280px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(30,42,74,0.15)' }}>
                <Image src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=700&q=85" alt="Professional laundry wash and fold DFW" fill style={{ objectFit: 'cover' }} priority />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ position: 'relative', height: '150px', borderRadius: '12px', overflow: 'hidden' }}>
                  <Image src="https://images.unsplash.com/photo-1521656958802-24c7ce11d0a1?w=400&q=80" alt="Folded laundry stacks" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'relative', height: '150px', borderRadius: '12px', overflow: 'hidden' }}>
                  <Image src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80" alt="Clean laundry delivery" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIME SAVED */}
      <section style={{ background: 'var(--blue)', padding: '40px 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {[['⏰', '5–7 hrs/week', 'Time Saved'], ['💰', '$2.49/lb', 'Starting Price'], ['📦', '$45 min', 'Free Pickup'], ['⚡', '2–3 days', 'Turnaround']].map(([icon, val, lbl], i) => (
            <div key={i} style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '28px', marginBottom: '4px' }}>{icon}</div>
              <div style={{ fontWeight: '700', fontSize: '18px', fontFamily: 'Playfair Display,serif' }}>{val}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE WASH */}
      <section style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label">What We Handle</span>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)' }}>All Your Laundry Needs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
            {[
              { icon: '👕', title: 'Everyday Clothes', items: ['T-shirts & casualwear', 'Jeans & pants', 'Underwear & socks'] },
              { icon: '🛏️', title: 'Bedding & Linens', items: ['Sheets & pillowcases', 'Duvet & quilt covers', 'Mattress pads'] },
              { icon: '🛋️', title: 'Heavy Items', items: ['Comforters (all sizes)', 'Blankets & throws', 'Pillows'] },
              { icon: '🏠', title: 'Household', items: ['Curtains', 'Tablecloths', 'Cloth napkins'] },
            ].map((cat, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '1.4rem', border: '1px solid rgba(30,42,74,0.08)' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{cat.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '14px', color: 'var(--navy)', marginBottom: '8px' }}>{cat.title}</h3>
                {cat.items.map((item, j) => (
                  <div key={j} style={{ fontSize: '13px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--blue)', fontSize: '16px' }}>·</span>{item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS IMAGES */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Process</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1.5rem' }}>How Laundry Service Works</h2>
              {[
                { n: '1', title: 'Schedule Pickup', desc: 'Book online. We come to your door.' },
                { n: '2', title: 'Sort & Wash', desc: 'Sorted by color, fabric & temperature. Washed with care.' },
                { n: '3', title: 'Dry & Fold', desc: 'Dried to correct temps. Folded neatly by garment type.' },
                { n: '4', title: 'Delivered Fresh', desc: 'Clean, folded, packaged — back at your door.' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '16px', alignItems: 'flex-start' }}>
                  <div className="step-number" style={{ fontSize: '14px', width: '36px', height: '36px', minWidth: '36px' }}>{step.n}</div>
                  <div>
                    <h4 style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)', marginBottom: '3px' }}>{step.title}</h4>
                    <p style={{ fontSize: '13px', color: '#6b7280' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ position: 'relative', height: '240px', borderRadius: '14px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1521656958802-24c7ce11d0a1?w=600&q=80" alt="Professional folded laundry" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'relative', height: '200px', borderRadius: '14px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80" alt="Laundry wash process" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="household" style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <span className="section-label">Pricing</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1.2rem' }}>Laundry Service Prices</h2>
              <table className="pricing-table" style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                <thead><tr><th>Service</th><th>Starting From</th></tr></thead>
                <tbody>{LAUNDRY_PRICES.map((row, i) => (<tr key={i}><td>{row.item}{row.note && <span style={{ color: '#9ca3af', fontSize: '11px', display: 'block' }}>{row.note}</span>}</td><td>{row.price}</td></tr>))}</tbody>
              </table>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '1.5rem' }}>Minimum $45 order for pickup & delivery. Card payment only.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/prices" className="btn-primary" style={{ fontSize: '14px' }}>Full Pricing Page</Link>
                <BookButton label="Book Laundry Pickup" variant="outline" service="Laundry (Wash & Fold)" />
              </div>
            </div>
            <div style={{ background: 'var(--navy)', borderRadius: '16px', padding: '2rem', color: '#fff' }}>
              <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>💡 Save More With Monthly Plan</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Pay $50/month → Get $65 in cleaning credit. Most families save 30% or more every month.
              </p>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', fontFamily: 'Playfair Display,serif', color: 'var(--blue)', marginBottom: '.5rem' }}>$50/mo</div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem' }}>→ Receive $65 credit monthly</div>
              <BookButton label="Start Monthly Plan" variant="gradient" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontFamily: 'Playfair Display,serif', color: '#fff', marginBottom: '1rem' }}>Reclaim Your Weekends</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>Let us handle the laundry while you do what matters most.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookButton label="📦 Book Laundry Pickup" variant="primary" size="lg" />
            <a href="tel:2143480666" className="btn-outline-white" style={{ fontSize: '15px', padding: '16px 28px' }}>☎️ 214-348-0666</a>
          </div>
        </div>
      </section>
    </>
  )
}

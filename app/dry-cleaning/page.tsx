import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'
import FAQ from '@/components/ui/FAQ'
import { DRY_CLEANING_PRICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Dry Cleaning in Dallas–Fort Worth | Top Hat Cleaners',
  description: 'Professional dry cleaning in DFW. Free pickup & delivery. Expert care for suits, dresses, coats & delicate fabrics. Starting at $4.99. Call 214-348-0666.',
}

const FAQS = [
  { q: 'How long does dry cleaning take?', a: 'Standard is 2–3 business days. Same-day available if dropped off before 10AM at select locations.' },
  { q: 'Do you offer pickup for dry cleaning?', a: 'Yes! Free pickup across DFW with a minimum $45 order. Book online or call 214-348-0666.' },
  { q: 'Can you remove tough stains?', a: 'We pre-treat all stains and have success with most. Some stains (oil, ink, old stains) may be permanent — we\'ll let you know before cleaning.' },
  { q: 'Is dry cleaning safe for delicate fabrics?', a: 'Yes. We use fabric-specific solvents for silk, wool, cashmere, and other delicate materials.' },
  { q: 'Do you clean suits and formal wear?', a: 'Absolutely. Suits, tuxedos, formal dresses, coats, and blazers are our most common services.' },
]

export default function DryCleaningPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Professional Dry Cleaning</span>
              <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', lineHeight: '1.1', marginBottom: '1rem' }}>
                Professional Dry Cleaning in{' '}
                <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Dallas–Fort Worth
                </span>
              </h1>
              <p style={{ color: '#4b5563', lineHeight: '1.75', marginBottom: '1.5rem', fontSize: '1rem' }}>
                Expert dry cleaning for every garment type. Suits, dresses, coats, and delicate fabrics — cleaned to perfection and delivered to your door.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '2rem' }}>
                {['Free pickup & delivery (min $45)', 'Starting at $4.99 per shirt', 'Fabric-safe solvents for all materials', 'Same-day available at select locations', 'Expert pressing and packaging'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#4b5563' }}>
                    <CheckCircle size={14} style={{ color: 'var(--blue)', minWidth: 14 }} />{item}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <BookButton label="📦 Book Dry Cleaning Pickup" variant="primary" service="Dry Cleaning" />
                <a href="tel:2143480666" className="btn-outline" style={{ fontSize: '14px' }}>☎️ 214-348-0666</a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ position: 'relative', height: '280px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(30,42,74,0.15)' }}>
                <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85" alt="Professional dry cleaning Dallas Fort Worth" fill style={{ objectFit: 'cover' }} priority />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ position: 'relative', height: '160px', borderRadius: '12px', overflow: 'hidden' }}>
                  <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80" alt="Suits dry cleaning" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'relative', height: '160px', borderRadius: '12px', overflow: 'hidden' }}>
                  <Image src="https://images.unsplash.com/photo-1448387473223-5c37445527e7?w=400&q=80" alt="Pressed clean garments" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE BENEFITS */}
      <section style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label">What We Clean</span>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)' }}>Every Garment Type, Handled with Care</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '12px', marginBottom: '2.5rem' }}>
            {[['👔', 'Shirts & Blouses'], ['👗', 'Dresses'], ['🧥', 'Suits & Blazers'], ['🥼', 'Coats & Jackets'], ['👘', 'Silk & Delicates'], ['🎩', 'Formal Wear'], ['🧣', 'Ties & Scarves'], ['👒', 'Sweaters & Knits']].map(([icon, label], i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '1.2rem', textAlign: 'center', border: '1px solid rgba(30,42,74,0.08)' }}>
                <div style={{ fontSize: '28px', marginBottom: '6px' }}>{icon}</div>
                <div style={{ fontWeight: '600', fontSize: '13px', color: 'var(--navy)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS + IMAGE */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Process</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1.5rem' }}>How We Dry Clean</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { n: '1', title: 'Pre-Treatment', desc: 'Every stain is pre-treated with the right solvent before the main cleaning cycle.' },
                  { n: '2', title: 'Fabric Assessment', desc: 'We identify fabric type, color stability, and any special care requirements.' },
                  { n: '3', title: 'Dry Cleaning Cycle', desc: 'Cleaned in professional machines with fabric-appropriate solvents. No harsh chemicals.' },
                  { n: '4', title: 'Press & Finish', desc: 'Expert pressing on industrial equipment. Every garment inspected for quality before packaging.' },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div className="step-number" style={{ fontSize: '14px', width: '36px', height: '36px', minWidth: '36px' }}>{step.n}</div>
                    <div>
                      <h4 style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)', marginBottom: '3px' }}>{step.title}</h4>
                      <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', height: '420px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(30,42,74,0.12)' }}>
              <Image src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=700&q=85" alt="Dry cleaning process Dallas" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div>
              <span className="section-label">Pricing</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>Dry Cleaning Prices in DFW</h2>
              <table className="pricing-table" style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                <thead><tr><th>Item</th><th>Starting From</th></tr></thead>
                <tbody>{DRY_CLEANING_PRICES.map((row, i) => (<tr key={i}><td>{row.item}</td><td>{row.price}</td></tr>))}</tbody>
              </table>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '1.5rem' }}>⚠️ Starting prices. Final cost depends on fabric, condition & stains.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/prices" className="btn-primary" style={{ fontSize: '14px' }}>View All Pricing</Link>
                <BookButton label="Book Now" variant="outline" service="Dry Cleaning" />
              </div>
            </div>
            <div>
              <div style={{ background: 'var(--navy)', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontWeight: '700', fontSize: '16px', color: '#fff', marginBottom: '1rem' }}>vs. Other Cleaners in DFW</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '8px 10px', color: 'rgba(255,255,255,0.6)', fontWeight: '500' }}>Feature</th>
                      <th style={{ textAlign: 'center', padding: '8px 10px', color: 'var(--blue)', fontWeight: '700' }}>Top Hat</th>
                      <th style={{ textAlign: 'center', padding: '8px 10px', color: 'rgba(255,255,255,0.6)', fontWeight: '500' }}>Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[['Free Pickup & Delivery', '✅', '⚠️'], ['Saree Specialists', '✅', '❌'], ['Same-Day Option', '✅', '⚠️'], ['18+ DFW Locations', '✅', '⚠️'], ['Monthly Plan', '✅', '❌']].map((row, i) => (
                      <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <td style={{ padding: '9px 10px', color: 'rgba(255,255,255,0.75)' }}>{row[0]}</td>
                        <td style={{ padding: '9px 10px', textAlign: 'center', fontSize: '16px' }}>{row[1]}</td>
                        <td style={{ padding: '9px 10px', textAlign: 'center', fontSize: '16px' }}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAREE UPSELL */}
      <section style={{ background: 'var(--navy)', padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display,serif', color: '#fff', fontSize: '1.5rem', marginBottom: '.5rem' }}>Also Need Saree or Indian Garment Care?</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px' }}>We&apos;re DFW&apos;s leading saree specialists — same pickup, same driver.</p>
            </div>
            <BookButton label="Book Saree Cleaning" variant="gradient" service="Saree / Indian Garment Cleaning" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <FAQ items={FAQS} />
          <div style={{ marginTop: '2rem', display: 'flex', gap: '12px' }}>
            <BookButton label="Book Dry Cleaning Pickup" variant="primary" service="Dry Cleaning" />
            <a href="tel:2143480666" className="btn-outline" style={{ fontSize: '14px' }}>☎️ 214-348-0666</a>
          </div>
        </div>
      </section>
    </>
  )
}

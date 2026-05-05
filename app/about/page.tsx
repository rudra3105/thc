import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'

export const metadata: Metadata = {
  title: 'About Top Hat Cleaners | DFW Dry Cleaning & Laundry Experts',
  description: 'Learn about Top Hat Cleaners — DFW\'s most trusted dry cleaning and laundry service. 18+ locations, 50,000+ garments cleaned, saree specialists.',
}

export default function AboutPage() {
  return (
    <>
      <section style={{ background: '#fff', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <span className="section-label">Our Story</span>
              <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', lineHeight: '1.1', marginBottom: '1rem' }}>
                DFW&apos;s Most Trusted Dry Cleaning &amp; Laundry Service
              </h1>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1rem' }}>
                Top Hat Cleaners was founded with a simple belief: everyone deserves premium garment care without the hassle. We built a network across Dallas–Fort Worth that brings the cleaners to you — not the other way around.
              </p>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                What started as a small operation has grown to 18+ service areas, 50,000+ garments cleaned, and a specialization that very few dry cleaners in DFW can match — expert care for sarees, Indian wedding garments, and delicate fabrics.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['18+ cities across Dallas–Fort Worth', '50,000+ garments cleaned', '4.8+ Google rating from 500+ reviews', 'Specialists in saree & Indian garment care', '24/7 drop-off kiosks at select locations'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#4b5563' }}>
                    <CheckCircle size={14} style={{ color: 'var(--blue)', minWidth: 14 }} />{item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', height: '420px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(30,42,74,0.15)' }}>
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85" alt="Top Hat Cleaners DFW team" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          {/* Values */}
          <div style={{ background: 'var(--gray)', borderRadius: '20px', padding: '3rem', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '2rem', textAlign: 'center' }}>Our Values</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px' }}>
              {[
                { icon: '🎯', title: 'Precision', desc: 'Every garment is inspected, pre-treated, and finished to the highest standard.' },
                { icon: '🤝', title: 'Trust', desc: 'We treat your clothes as if they were our own — with care, honesty, and accountability.' },
                { icon: '🚀', title: 'Convenience', desc: 'Your time is valuable. We built our entire model around saving you hours every week.' },
                { icon: '💎', title: 'Expertise', desc: 'Especially for sarees and delicate garments — skills built over thousands of garments.' },
              ].map((v, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(30,42,74,0.08)', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '10px' }}>{v.icon}</div>
                  <h3 style={{ fontWeight: '700', fontSize: '15px', color: 'var(--navy)', marginBottom: '6px' }}>{v.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '20px', marginBottom: '4rem' }}>
            {[['50,000+', 'Garments Cleaned'], ['4.8+', 'Google Rating'], ['18+', 'DFW Cities'], ['500+', 'Customer Reviews'], ['24/7', 'Kiosk Drop-Off'], ['$50', 'Monthly Plan']].map(([val, lbl], i) => (
              <div key={i} style={{ background: 'var(--navy)', borderRadius: '14px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontWeight: '800', fontSize: '2rem', fontFamily: 'Playfair Display,serif', color: 'var(--blue)' }}>{val}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>{lbl}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>Ready to Try DFW&apos;s Best?</h2>
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>$10 off your first order with code 10FREE</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <BookButton label="📦 Book Pickup" variant="primary" size="lg" />
              <Link href="/reviews" className="btn-outline">Read Our Reviews</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

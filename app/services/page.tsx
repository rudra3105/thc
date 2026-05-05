import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import BookButton from '@/components/ui/BookButton'

export const metadata: Metadata = {
  title: 'All Services | Top Hat Cleaners DFW',
  description: 'Dry cleaning, laundry, saree care, pickup & delivery, same-day express, alterations — all services from Top Hat Cleaners across Dallas–Fort Worth.',
}

const SERVICES = [
  {
    name: 'Dry Cleaning', href: '/dry-cleaning', icon: '👔',
    desc: 'Expert dry cleaning for suits, dresses, coats, and delicate fabrics. Starting at $4.99.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    cta: 'Learn About Dry Cleaning',
  },
  {
    name: 'Laundry (Wash & Fold)', href: '/laundry-service', icon: '🧺',
    desc: 'Professional wash & fold — save 5+ hours per week. Starting at $2.49/lb.',
    img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&q=80',
    cta: 'Learn About Laundry',
  },
  {
    name: 'Pickup & Delivery', href: '/pickup-delivery', icon: '🚐',
    desc: 'Free pickup from your door across DFW. Monday & Thursday routes. Minimum $45.',
    img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=500&q=80',
    cta: 'Schedule Pickup',
    highlight: true,
  },
  {
    name: 'Saree & Wedding Care', href: '/saree-cleaning-dfw', icon: '👗',
    desc: "DFW's specialists in silk sarees, zari, bridal garments & wedding wear. Sarees from $18.",
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80',
    cta: 'Explore Saree Cleaning',
    hot: true,
  },
  {
    name: 'Same Day / Express', href: '/same-day-express', icon: '⚡',
    desc: 'Drop off before 10AM, pick up by 6PM at select locations. Call to confirm.',
    img: 'https://images.unsplash.com/photo-1448387473223-5c37445527e7?w=500&q=80',
    cta: 'Call for Same Day',
  },
  {
    name: 'Household Items', href: '/laundry-service#household', icon: '🏠',
    desc: 'Comforters, blankets, bedding, curtains & large items. Professional care.',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
    cta: 'Learn More',
  },
  {
    name: 'Alterations', href: '/services#alterations', icon: '✂️',
    desc: 'Hemming, taking in, letting out, zipper repair & garment tailoring.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    cta: 'Get Alterations Quote',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section style={{ background: '#fff', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <span className="section-label">All Services</span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', lineHeight: '1.1', marginBottom: '1rem' }}>
              Complete Garment Care Services in DFW
            </h1>
            <p style={{ color: '#6b7280', lineHeight: '1.75' }}>
              From everyday laundry to delicate sarees — expert care for every garment type, delivered to your door.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>
            {SERVICES.map((svc, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(30,42,74,0.08)', boxShadow: '0 2px 12px rgba(30,42,74,0.06)' }}>
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image src={svc.img} alt={svc.name} fill style={{ objectFit: 'cover' }} />
                  {svc.hot && (
                    <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--gradient)', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '50px' }}>
                      HIGH VALUE 🔥
                    </div>
                  )}
                  {svc.highlight && (
                    <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--blue)', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '50px' }}>
                      FREE ⭐
                    </div>
                  )}
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '28px' }}>{svc.icon}</div>
                </div>
                <div style={{ padding: '1.4rem' }}>
                  <h2 style={{ fontWeight: '700', fontSize: '16px', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '8px' }}>{svc.name}</h2>
                  <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6', marginBottom: '14px' }}>{svc.desc}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Link href={svc.href} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '9px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', color: 'var(--blue)', background: 'rgba(47,111,219,0.08)', border: '1px solid rgba(47,111,219,0.2)', textDecoration: 'none' }}>
                      {svc.cta} →
                    </Link>
                    <BookButton label="Book" variant="primary" size="sm" service={svc.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alterations section */}
      <section id="alterations" style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <span className="section-label">Alterations</span>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>Garment Alterations & Tailoring</h2>
            <p style={{ color: '#4b5563', lineHeight: '1.75', marginBottom: '1.5rem' }}>
              Need a hem shortened, a waist taken in, or a zipper replaced? Our skilled tailors handle all common alterations. Pricing is by quote after inspection.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="tel:2143480666" className="btn-primary">☎️ Call for Alterations Quote</a>
              <BookButton label="Schedule Pickup" variant="outline" service="Alterations" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontFamily: 'Playfair Display,serif', color: '#fff', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>Book your first pickup — $10 off with code 10FREE</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookButton label="📦 Book Free Pickup" variant="primary" size="lg" />
            <Link href="/prices" className="btn-outline-white" style={{ fontSize: '15px', padding: '16px 28px' }}>💰 View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}

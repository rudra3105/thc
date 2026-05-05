import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, CheckCircle } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'
import { DFW_CITIES } from '@/lib/constants'

interface Props {
  params: Promise<{ city: string }>
}

function getCityData(slug: string) {
  return DFW_CITIES.find(c => c.city.toLowerCase().replace(/\s+/g, '-') === slug)
}

function slugToTitle(slug: string) {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const cityData = getCityData(slug)
  const cityName = cityData ? cityData.city : slugToTitle(slug)
  return {
    title: `Dry Cleaning & Laundry Pickup in ${cityName}, TX | Top Hat Cleaners`,
    description: `Professional dry cleaning and laundry pickup & delivery in ${cityName}, TX. Saree specialists. Free pickup min $45. Call 214-348-0666.`,
  }
}

export async function generateStaticParams() {
  return DFW_CITIES.map(c => ({ city: c.city.toLowerCase().replace(/\s+/g, '-') }))
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params
  const cityData = getCityData(slug)
  const cityName = cityData ? cityData.city : slugToTitle(slug)
  const zips = cityData?.zips || []

  const otherCities = DFW_CITIES.filter(c => c.city !== cityName).slice(0, 8)

  return (
    <>
      {/* HERO */}
      <section style={{ background: '#fff', padding: '4rem 0 3rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: 700, marginBottom: '2rem' }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: '#2F6FDB', display: 'block', marginBottom: 8 }}>
              Serving {cityName}, TX
            </span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontFamily: 'Playfair Display,serif', color: '#1E2A4A', lineHeight: 1.1, marginBottom: '1rem' }}>
              Dry Cleaning &amp; Laundry Pickup in{' '}
              <span style={{ background: 'linear-gradient(135deg,#2F6FDB,#C2187A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {cityName}, TX
              </span>
            </h1>
            <p style={{ color: '#4b5563', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: 15 }}>
              Top Hat Cleaners brings professional dry cleaning and laundry service directly to {cityName} residents. Free pickup from your door — no store visit needed.
            </p>
            {zips.length > 0 && (
              <p style={{ color: '#6b7280', fontSize: 14, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={14} style={{ color: '#2F6FDB', minWidth: 14 }} />
                Serving ZIP codes: {zips.join(', ')}
              </p>
            )}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <BookButton label={`📦 Book Pickup in ${cityName}`} variant="primary" />
              <a href="tel:2143480666" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'transparent', color: '#2F6FDB', border: '2px solid #2F6FDB', padding: '12px 20px', borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
                ☎️ 214-348-0666
              </a>
            </div>
          </div>

          {/* Services grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14, marginBottom: '3rem' }}>
            {[
              { icon: '👔', title: 'Dry Cleaning', href: '/dry-cleaning', desc: 'From $4.99' },
              { icon: '🧺', title: 'Wash & Fold', href: '/laundry-service', desc: 'From $2.49/lb' },
              { icon: '👗', title: 'Saree Cleaning', href: '/saree-cleaning-dfw', desc: 'From $18' },
              { icon: '⚡', title: 'Same-Day', href: '/same-day-express', desc: 'Call to confirm' },
            ].map((svc, i) => (
              <Link key={i} href={svc.href} style={{ background: '#F5F7FA', borderRadius: 12, padding: '1.2rem', border: '1px solid rgba(30,42,74,0.08)', textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: 26, marginBottom: 7 }}>{svc.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#1E2A4A', marginBottom: 3 }}>{svc.title}</div>
                <div style={{ fontSize: 12, color: '#2F6FDB', fontWeight: 600 }}>{svc.desc}</div>
              </Link>
            ))}
          </div>

          {/* Why us card */}
          <div style={{ background: '#1E2A4A', borderRadius: 20, padding: '2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>
                  Why {cityName} Residents Choose Top Hat
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {[
                    `Free pickup from ${cityName} homes`,
                    'Monday & Thursday delivery routes',
                    'Saree & Indian garment specialists',
                    '4.8+ Google rating · 500+ reviews',
                    '$10 off first order — code: 10FREE',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 14, color: 'rgba(255,255,255,0.80)', fontFamily: 'DM Sans, sans-serif' }}>
                      <CheckCircle size={14} style={{ color: '#2F6FDB', minWidth: 14 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 800, fontSize: '3rem', fontFamily: 'Playfair Display,serif', color: '#2F6FDB', marginBottom: 4 }}>$45</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', fontSize: 13, fontFamily: 'DM Sans, sans-serif' }}>
                  Minimum pickup order · Card only
                </div>
                <BookButton label={`Book ${cityName} Pickup`} variant="gradient" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section style={{ background: '#F5F7FA', padding: '40px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>
            Other cities we serve near {cityName}:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
            {otherCities.map((c, i) => (
              <Link
                key={i}
                href={`/locations/${c.city.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ padding: '7px 14px', borderRadius: 50, fontSize: 12, fontWeight: 500, background: '#fff', color: '#1E2A4A', border: '1px solid rgba(30,42,74,0.10)', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}
              >
                📍 {c.city}
              </Link>
            ))}
            <Link href="/locations" style={{ padding: '7px 14px', borderRadius: 50, fontSize: 12, fontWeight: 600, background: '#2F6FDB', color: '#fff', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
              View All →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

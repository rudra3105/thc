import Link from 'next/link'
import Image from 'next/image'

const SERVICES = [
  { label: 'Dry Cleaning', href: '/dry-cleaning' },
  { label: 'Laundry (Wash & Fold)', href: '/laundry-service' },
  { label: 'Pickup & Delivery', href: '/pickup-delivery' },
  { label: 'Saree & Wedding Care', href: '/saree-cleaning-dfw' },
  { label: 'Same Day / Express', href: '/same-day-express' },
  { label: 'Household Items', href: '/laundry-service#household' },
  { label: 'Alterations', href: '/services#alterations' },
]

const CITIES = [
  { label: 'Frisco', href: '/locations/frisco' },
  { label: 'Plano', href: '/locations/plano' },
  { label: 'Flower Mound', href: '/locations/flower-mound' },
  { label: 'Southlake', href: '/locations/southlake' },
  { label: 'Grapevine', href: '/locations/grapevine' },
  { label: 'Keller', href: '/locations/keller' },
  { label: 'Irving', href: '/locations/irving' },
  { label: 'Lewisville', href: '/locations/lewisville' },
]

const COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'All Locations', href: '/locations' },
  { label: 'Pricing', href: '/prices' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        /* All links inside footer get white color — overrides browser defaults */
        footer.site-footer a {
          color: rgba(255,255,255,0.72);
          text-decoration: none;
          font-size: 13px;
          line-height: 1.5;
          display: block;
          margin-bottom: 10px;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.15s;
        }
        footer.site-footer a:hover { color: #ffffff; }

        /* Accent links (View All, Learn more) */
        footer.site-footer a.ft-accent { color: #7dd3fc; font-weight: 600; }
        footer.site-footer a.ft-accent:hover { color: #bae6fd; }

        /* Book button inside footer overrides the generic rule */
        footer.site-footer a.ft-book-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #2F6FDB;
          color: #ffffff;
          padding: 10px 18px;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 0;
        }
        footer.site-footer a.ft-book-btn:hover { background: #2560c8; color: #fff; }

        /* Contact row links */
        footer.site-footer a.ft-contact {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        /* Bottom phone link */
        footer.site-footer a.ft-bottom-phone {
          display: inline;
          margin-bottom: 0;
          font-size: 13px;
          font-weight: 600;
          color: #7dd3fc;
        }
        footer.site-footer a.ft-bottom-phone:hover { color: #bae6fd; }

        /* Responsive grid */
        .ft-grid {
          display: grid;
          grid-template-columns: 260px 1fr 1fr 1fr;
          gap: 40px 32px;
          margin-bottom: 48px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .ft-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 540px) {
          .ft-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="site-footer" style={{ background: '#1E2A4A', fontFamily: 'DM Sans, sans-serif' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 28px 0' }}>

          <div className="ft-grid">

            {/* COL 1 — Brand */}
            <div>
              <Link href="/" style={{ display: 'inline-block', marginBottom: 16 }}>
                <Image
                  src="/logo.png"
                  alt="Top Hat Cleaners"
                  width={150}
                  height={50}
                  style={{ objectFit: 'contain', height: 46, width: 'auto', filter: 'brightness(0) invert(1)' }}
                />
              </Link>

              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.58)', lineHeight: 1.8, marginBottom: 20 }}>
                Dallas–Fort Worth&apos;s most trusted dry cleaning &amp; laundry. 18+ locations. Free pickup &amp; delivery. Saree specialists.
              </p>

              <div style={{ marginBottom: 22 }}>
                <a href="tel:2143480666" className="ft-contact">
                  <span>📞</span> 214-348-0666
                </a>
                <a href="mailto:info@tophatcleaner.com" className="ft-contact">
                  <span>✉️</span> info@tophatcleaner.com
                </a>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>📍</span> Dallas–Fort Worth, TX
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>🕒</span> Mon–Sat 7AM–7PM · Sun 9AM–5PM
                </p>
              </div>

              <Link href="/book" className="ft-book-btn">
                📦 Book Free Pickup
              </Link>
            </div>

            {/* COL 2 — Services */}
            <div>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 16, margin: '0 0 16px' }}>Services</p>
              {SERVICES.map(l => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
            </div>

            {/* COL 3 — Locations */}
            <div>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: 14, margin: '0 0 16px' }}>DFW Locations</p>
              {CITIES.map(l => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
              <Link href="/locations" className="ft-accent">View All Cities →</Link>
            </div>

            {/* COL 4 — Company */}
            <div>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: 14, margin: '0 0 16px' }}>Company</p>
              {COMPANY.map(l => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}

              {/* Subscription box */}
              <div style={{
                marginTop: 18,
                background: 'rgba(47,111,219,0.18)',
                border: '1px solid rgba(47,111,219,0.35)',
                borderRadius: 10,
                padding: '14px 16px',
              }}>
                <p style={{ fontWeight: 700, fontSize: 13, color: '#fff', margin: '0 0 5px' }}>💰 Monthly Plan</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 8px' }}>
                  Pay $50/mo → Get $65 cleaning credit
                </p>
                <Link href="/prices" className="ft-accent" style={{ fontSize: 12, marginBottom: 0 }}>Learn more →</Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.09)',
            padding: '18px 0',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.36)', margin: 0 }}>
              © {year} Top Hat Cleaners. All rights reserved. Serving Dallas–Fort Worth, TX.
            </p>
            <a href="tel:2143480666" className="ft-bottom-phone">☎️ 214-348-0666</a>
          </div>
        </div>
      </footer>
    </>
  )
}

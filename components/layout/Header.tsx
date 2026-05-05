'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Package } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Pickup & Delivery ⭐', href: '/pickup-delivery', highlight: true },
  { label: 'Prices', href: '/prices' },
  { label: 'Locations', href: '/locations' },
  { label: 'Saree & Wedding 🔥', href: '/saree-cleaning-dfw', hot: true },
  { label: 'Same Day', href: '/same-day-express' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const SERVICES_DROPDOWN = [
  { label: '👔 Dry Cleaning', href: '/dry-cleaning' },
  { label: '🧺 Laundry Service', href: '/laundry-service' },
  { label: '🚐 Pickup & Delivery', href: '/pickup-delivery' },
  { label: '⚡ Same Day Express', href: '/same-day-express' },
  { label: '🏠 Household Items', href: '/laundry-service#household' },
  { label: '✂️ Alterations', href: '/services#alterations' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1100)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <>
      <style>{`
        .hdr-link {
          padding: 7px 10px; border-radius: 7px; font-size: 13px;
          font-family: 'DM Sans', sans-serif; text-decoration: none;
          white-space: nowrap; color: #1E2A4A; font-weight: 400;
          transition: color 0.15s, background 0.15s;
          display: inline-block;
        }
        .hdr-link:hover { color: #2F6FDB; background: rgba(47,111,219,0.07); }
        .hdr-link.hl { color: #2F6FDB; font-weight: 600; }
        .hdr-link.hot { color: #C2187A; font-weight: 600; }
        .hdr-link.hot:hover { color: #a01566; background: rgba(194,24,122,0.06); }

        /* Services trigger button */
        .svc-trigger {
          padding: 7px 10px; border-radius: 7px; font-size: 13px;
          font-family: 'DM Sans', sans-serif; white-space: nowrap;
          color: #1E2A4A; font-weight: 400; background: none; border: none;
          cursor: pointer; transition: color 0.15s, background 0.15s;
          display: inline-flex; align-items: center; gap: 4px;
        }
        .svc-trigger:hover, .svc-trigger.open { color: #2F6FDB; background: rgba(47,111,219,0.07); }

        /* Dropdown panel */
        .svc-panel {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border-radius: 12px;
          border: 1px solid rgba(30,42,74,0.10);
          box-shadow: 0 12px 40px rgba(30,42,74,0.16);
          min-width: 220px;
          z-index: 500;
          /* Invisible 8px bridge at top prevents gap between button and panel */
          padding-top: 8px;
          margin-top: -1px;
        }
        /* The actual white box sits below the bridge */
        .svc-panel-inner {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          padding: 6px 0;
        }
        .svc-item {
          display: block; padding: 10px 18px; font-size: 13px;
          font-weight: 500; color: #1E2A4A; text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .svc-item:hover { background: #F5F7FA; color: #2F6FDB; }

        .hdr-book-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: #2F6FDB; color: #fff !important; padding: 10px 18px;
          border-radius: 9px; font-size: 13px; font-weight: 600;
          text-decoration: none; white-space: nowrap;
          font-family: 'DM Sans', sans-serif; transition: background 0.2s;
        }
        .hdr-book-btn:hover { background: #2560c8; }

        .hdr-phone-link {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 500; color: #1E2A4A;
          text-decoration: none; white-space: nowrap;
          transition: color 0.15s;
        }
        .hdr-phone-link:hover { color: #2F6FDB; }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: '#fff',
        borderBottom: scrolled ? '1px solid rgba(30,42,74,0.12)' : '1px solid rgba(30,42,74,0.05)',
        boxShadow: scrolled ? '0 2px 24px rgba(30,42,74,0.10)' : 'none',
        transition: 'box-shadow 0.3s, border-color 0.3s',
      }}>
        <div style={{
          maxWidth: 1400, margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', height: 68,
        }}>

          {/* LOGO */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}>
            <Image
              src="/logo.png"
              alt="Top Hat Cleaners"
              width={160}
              height={52}
              style={{ objectFit: 'contain', height: 46, width: 'auto' }}
              priority
            />
          </Link>

          {/* DESKTOP NAV — overflow visible so dropdown shows */}
          {!isMobile && (
            <nav style={{
              display: 'flex', alignItems: 'center', gap: 0,
              flex: 1, justifyContent: 'center', margin: '0 12px',
              flexWrap: 'nowrap',
              // NO overflow:hidden — that clips the dropdown
            }}>
              {/* Services dropdown — hover-based, gap handled by padding bridge */}
              <div
                style={{ position: 'relative', flexShrink: 0 }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`svc-trigger${servicesOpen ? ' open' : ''}`}>
                  Services
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'none' }}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Dropdown — onMouseEnter/Leave on the PARENT div, not just panel, prevents gap issue */}
                {servicesOpen && (
                  <div className="svc-panel">
                    <div className="svc-panel-inner">
                      {SERVICES_DROPDOWN.map(sub => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="svc-item"
                          onClick={() => setServicesOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Regular nav links */}
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hdr-link${link.highlight ? ' hl' : link.hot ? ' hot' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {/* DESKTOP RIGHT */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
              <a href="tel:2143480666" className="hdr-phone-link">
                <Phone size={14} color="#2F6FDB" />
                214-348-0666
              </a>
              <Link href="/book" className="hdr-book-btn">
                <Package size={14} />
                Book Pickup
              </Link>
            </div>
          )}

          {/* MOBILE HAMBURGER */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(v => !v)}
              style={{
                background: 'none', border: '1.5px solid rgba(30,42,74,0.18)',
                borderRadius: 9, padding: '8px 10px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', color: '#1E2A4A',
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {isMobile && mobileOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, bottom: 0,
          background: '#fff', zIndex: 199, overflowY: 'auto',
          borderTop: '1px solid rgba(30,42,74,0.08)',
        }}>
          <div style={{ padding: '20px 24px 40px' }}>
            {/* CTA buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#2F6FDB', color: '#fff',
                  padding: '15px', borderRadius: 10,
                  fontSize: 16, fontWeight: 700, textDecoration: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                📦 Book Pickup Now
              </Link>
              <a
                href="tel:2143480666"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#fff', color: '#2F6FDB',
                  padding: '14px', borderRadius: 10,
                  fontSize: 16, fontWeight: 600, textDecoration: 'none',
                  border: '2px solid #2F6FDB', fontFamily: 'DM Sans, sans-serif',
                }}
              >
                ☎️ Call 214-348-0666
              </a>
            </div>

            {/* Nav links */}
            <nav>
              {[
                { label: 'Home', href: '/' },
                { label: '⭐ Pickup & Delivery', href: '/pickup-delivery', highlight: true },
                { label: 'Prices', href: '/prices' },
                { label: 'Services', href: '/services' },
                { label: '👔 Dry Cleaning', href: '/dry-cleaning' },
                { label: '🧺 Laundry Service', href: '/laundry-service' },
                { label: '🔥 Saree & Wedding', href: '/saree-cleaning-dfw', hot: true },
                { label: '⚡ Same Day / Express', href: '/same-day-express' },
                { label: 'Locations', href: '/locations' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    padding: '13px 0',
                    borderBottom: '1px solid rgba(30,42,74,0.07)',
                    fontSize: 15,
                    fontWeight: link.highlight || link.hot ? 600 : 400,
                    color: link.hot ? '#C2187A' : link.highlight ? '#2F6FDB' : '#1E2A4A',
                    textDecoration: 'none',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div style={{ height: 68 }} />
    </>
  )
}

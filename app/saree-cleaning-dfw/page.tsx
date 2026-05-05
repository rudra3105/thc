import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Star, Phone } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'
import FAQ from '@/components/ui/FAQ'

export const metadata: Metadata = {
  title: 'Saree Cleaning in DFW | Dry Cleaning for Indian Garments Dallas Fort Worth',
  description: 'Expert saree and Indian garment dry cleaning in Dallas–Fort Worth. Silk sarees, Banarasi, Kanjivaram, lehengas, wedding outfits. Free pickup & delivery. Call 214-348-0666.',
}

const FAQS = [
  { q: 'Can you clean silk sarees?', a: 'Yes — we specialize in all silk sarees including Kanjivaram, Banarasi, Paithani, and designer silk. We use fabric-specific solvents and hand-finishing.' },
  { q: 'How do you clean heavy embroidered sarees?', a: 'Heavy zari, gota, and embroidered sarees are handled individually. We spot-treat, hand-press around embroidery, and roll (not fold) to protect the fabric.' },
  { q: 'Do you clean wedding lehengas?', a: 'Yes. Bridal lehengas, sherwanis, and wedding sarees are among our highest-care services. Each garment is inspected before and after cleaning.' },
  { q: 'Can you do same-day saree cleaning?', a: 'In most cases yes, if dropped off by 10AM at select locations. Call 214-348-0666 to check availability.' },
  { q: 'Do you offer pickup for sarees?', a: 'Yes! Free pickup & delivery across DFW. Minimum $45 order. Safe packaging for delicate garments.' },
  { q: 'How much does saree dry cleaning cost?', a: 'Silk sarees start at $18–$30. Heavy or bridal sarees are $35–$60. Designer garments are quoted after inspection.' },
]

const PRICES = [
  { item: 'Silk Saree', price: '$18 – $30', note: 'Kanjivaram, Banarasi, designer silk' },
  { item: 'Cotton / Linen Saree', price: '$14 – $18', note: '' },
  { item: 'Heavy / Embroidered Saree', price: '$35 – $45', note: 'Zari, gota, heavy work' },
  { item: 'Bridal Saree', price: '$45 – $60+', note: 'Premium care, rolling included' },
  { item: 'Lehenga (Skirt + Blouse)', price: '$39.99+', note: '' },
  { item: 'Sherwani / Achkan', price: '$34.99+', note: '' },
  { item: 'Salwar Kameez', price: '$18 – $28', note: '' },
  { item: 'Dupatta', price: '$8 – $14', note: '' },
  { item: 'Wedding Dress', price: 'By Quote', note: 'Call for pricing' },
  { item: 'Designer Garment', price: 'By Quote', note: 'After inspection' },
]

const REVIEWS = [
  { name: 'Priya S.', loc: 'Frisco TX', text: 'My bridal Kanjivaram came back absolutely perfect — the colors were bright and the zari looked brand new. Worth every penny.', service: 'Bridal Saree' },
  { name: 'Anita R.', loc: 'Plano TX', text: 'Trusted them with my mother-in-law\'s 40-year-old Banarasi. They returned it in pristine condition. I cannot recommend them enough!', service: 'Vintage Saree' },
  { name: 'Deepa M.', loc: 'Irving TX', text: 'My daughter\'s wedding lehenga was cleaned and pressed to perfection. The team was so careful with the heavy embroidery.', service: 'Bridal Lehenga' },
]

export default function SareePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--navy)', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: '600', background: 'var(--gradient)', color: '#fff', marginBottom: '1.2rem' }}>
                🔥 DFW&apos;s Saree Specialists
              </div>
              <h1 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontFamily: 'Playfair Display,serif', color: '#fff', lineHeight: '1.1', marginBottom: '1rem' }}>
                Expert Saree &amp; Indian Garment Cleaning in{' '}
                <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Dallas–Fort Worth
                </span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                Your saree is not just fabric — it carries memories, traditions, and love. We handle every saree as if it were our own. Silk, zari, embroidered, bridal — no garment is too delicate for our care.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '2rem' }}>
                {['Silk sarees (Kanjivaram, Banarasi, Paithani, designer)', 'Heavy zari & embroidered garments', 'Bridal sarees and lehengas', 'Sherwanis and Indian wedding outfits', 'Safe rolling — no harsh folding', 'Free pickup & delivery across DFW'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                    <CheckCircle size={14} style={{ color: 'var(--blue)', minWidth: 14 }} />{item}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <BookButton label="📦 Book Saree Pickup" variant="gradient" service="Saree / Indian Garment Cleaning" />
                <a href="tel:2143480666" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: '600', padding: '13px 22px', borderRadius: '10px', border: '2px solid rgba(255,255,255,0.35)', fontSize: '14px', textDecoration: 'none' }}>
                  <Phone size={14} />214-348-0666
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ position: 'relative', height: '300px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.3)' }}>
                <Image src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&q=85" alt="Silk saree dry cleaning specialist DFW" fill style={{ objectFit: 'cover' }} priority />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ position: 'relative', height: '150px', borderRadius: '12px', overflow: 'hidden' }}>
                  <Image src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80" alt="Indian bridal saree" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'relative', height: '150px', borderRadius: '12px', overflow: 'hidden' }}>
                  <Image src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&q=80" alt="Wedding lehenga cleaning DFW" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: 'var(--gray)', padding: '14px 0', borderBottom: '1px solid rgba(30,42,74,0.06)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {['⭐ 4.8+ Rating on Google', '👗 Silk Saree Specialists', '🧵 Zari & Embroidery Safe', '🚐 Free DFW Pickup', '📦 Safe Rolling Technique'].map((t, i) => (
            <span key={i} style={{ fontSize: '13px', fontWeight: '500', color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '4px' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* WHY WE'RE DIFFERENT */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Why Trust Us</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>
                Not All Dry Cleaners Are Equal When It Comes to Sarees
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                Most generic dry cleaners treat sarees like ordinary garments. They use harsh solvents, fold instead of roll, and skip hand-pressing on embroidery. The result? Faded zari, crushed fabric, and damage that can&apos;t be undone.
              </p>
              <p style={{ color: '#4b5563', lineHeight: '1.75', marginBottom: '2rem' }}>
                At Top Hat Cleaners, we built a specialized process for every type of Indian garment. Your saree gets a dedicated care plan before we touch it.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { icon: '🧪', title: 'Fabric-Specific Solvents', desc: 'Safe for silk, crepe & georgette' },
                  { icon: '🧵', title: 'Zari-Safe Process', desc: 'Embroidery protected throughout' },
                  { icon: '🌿', title: 'No Harsh Chemicals', desc: 'Color-preserving treatment' },
                  { icon: '📦', title: 'Rolled, Never Folded', desc: 'Prevents crease damage' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'var(--gray)', borderRadius: '12px', padding: '1rem', border: '1px solid rgba(30,42,74,0.08)' }}>
                    <div style={{ fontSize: '24px', marginBottom: '6px' }}>{item.icon}</div>
                    <div style={{ fontWeight: '600', fontSize: '13px', color: 'var(--navy)', marginBottom: '3px' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ position: 'relative', height: '260px', borderRadius: '16px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Professional garment care process" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,42,74,0.1)' }} />
              </div>
              <div style={{ position: 'relative', height: '180px', borderRadius: '16px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" alt="Clean pressed garments" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
            <span className="section-label">Our Process</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)' }}>How We Handle Your Saree</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px', marginBottom: '2.5rem' }}>
            {[
              { n: '1', title: 'Pickup & Inspection', desc: 'We document the garment\'s condition, fabric type, embellishments, and any stains before cleaning begins.', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80' },
              { n: '2', title: 'Fabric Identification', desc: 'We identify the exact fabric: silk grade, weave type, dye stability. This determines the right solvent and temperature.', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80' },
              { n: '3', title: 'Gentle Cleaning', desc: 'Cleaned using fabric-appropriate solvents. Zari and embroidery are protected during the entire cleaning cycle.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
              { n: '4', title: 'Hand Pressing & Rolling', desc: 'Hand-pressed on both sides. Rolled (never folded) to protect the drape and prevent any crease marks.', img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80' },
              { n: '5', title: 'Quality Check & Delivery', desc: 'Final inspection by a specialist. Packaged carefully and delivered back to your door.', img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&q=80' },
            ].map((step, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(30,42,74,0.08)', boxShadow: '0 2px 12px rgba(30,42,74,0.06)' }}>
                <div style={{ position: 'relative', height: '140px' }}>
                  <Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,42,74,0.3)' }} />
                  <div style={{ position: 'absolute', top: '10px', left: '10px', width: '32px', height: '32px', borderRadius: '50%', background: 'var(--gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '14px', color: '#fff', fontFamily: 'Playfair Display,serif' }}>{step.n}</div>
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontWeight: '700', fontSize: '14px', color: 'var(--navy)', marginBottom: '5px', fontFamily: 'Playfair Display,serif' }}>{step.title}</h3>
                  <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.6' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <BookButton label="Book Saree Pickup Now" variant="gradient" service="Saree / Indian Garment Cleaning" size="lg" />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div>
              <span className="section-label">Transparent Pricing</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>Saree &amp; Indian Garment Pricing</h2>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '.9rem', lineHeight: '1.7' }}>
                Starting prices. Final cost depends on fabric type, embellishments, stains, and condition after inspection.
              </p>
              <table className="pricing-table" style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                <thead><tr><th>Garment</th><th>Starting Price</th></tr></thead>
                <tbody>
                  {PRICES.map((row, i) => (
                    <tr key={i}><td>{row.item}{row.note && <span style={{ color: '#9ca3af', fontSize: '11px', display: 'block' }}>{row.note}</span>}</td><td>{row.price}</td></tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '1.5rem' }}>⚠️ All prices confirmed after garment inspection. Pickup minimum $45.</p>
              <BookButton label="Get a Quote — Book Pickup" variant="gradient" service="Saree / Indian Garment Cleaning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ position: 'relative', height: '280px', borderRadius: '16px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=85" alt="Bridal saree cleaning Dallas" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ background: 'var(--navy)', borderRadius: '14px', padding: '1.5rem' }}>
                <h4 style={{ fontWeight: '700', fontSize: '15px', color: '#fff', marginBottom: '8px' }}>Wedding Garments</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>
                  Wedding dresses, bridal sarees, and designer garments are quoted individually. Call us for personalized pricing.
                </p>
                <a href="tel:2143480666" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--gradient)', color: '#fff', fontWeight: '600', padding: '10px 18px', borderRadius: '8px', fontSize: '13px', textDecoration: 'none' }}>
                  <Phone size={13} />Call for Bridal Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEDDING SECTION */}
      <section id="wedding" style={{ background: 'var(--gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', height: '380px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(30,42,74,0.15)' }}>
                <Image src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=700&q=85" alt="Wedding dress and bridal garment cleaning DFW" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div>
              <span className="section-label">Bridal Services</span>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>
                Bridal &amp; Wedding Garment Specialists
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                Your wedding outfit is worn once, but it carries the memory of a lifetime. Whether it&apos;s a Kanjivaram bridal saree, a heavy lehenga, or a Western wedding dress — we handle each with the extraordinary care it deserves.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '2rem' }}>
                {[
                  'Bridal sarees (all types & weights)',
                  'Wedding lehengas with heavy embroidery',
                  'Western wedding dresses',
                  'Sherwanis & groom outfits',
                  'Post-wedding restoration & preservation',
                  'Personalized care plan for every garment',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#4b5563' }}>
                    <CheckCircle size={14} style={{ color: 'var(--magenta)', minWidth: 14 }} />{item}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <BookButton label="Book Bridal Pickup" variant="gradient" service="Saree / Indian Garment Cleaning" />
                <a href="tel:2143480666" className="btn-outline" style={{ fontSize: '14px' }}>☎️ Get Bridal Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: 'var(--navy)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Customer Stories</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontFamily: 'Playfair Display,serif', color: '#fff' }}>What Our Customers Say About Saree Cleaning</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#f59e0b', fontSize: '16px', marginBottom: '10px' }}>★★★★★</div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1rem' }}>&ldquo;{r.text}&rdquo;</p>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '13px', color: '#fff' }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{r.loc} · {r.service}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/reviews" style={{ display: 'inline-block', padding: '10px 24px', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>
              See All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <span className="section-label">FAQ</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', color: 'var(--navy)', marginBottom: '1rem' }}>Saree Cleaning Questions</h2>
              <p style={{ color: '#6b7280', lineHeight: '1.7', marginBottom: '2rem' }}>Have more questions? Call us — we&apos;re happy to advise on your specific garment.</p>
              <a href="tel:2143480666" className="btn-primary" style={{ marginBottom: '12px', display: 'inline-flex' }}>☎️ 214-348-0666</a>
              <br />
              <BookButton label="Book Pickup Online" variant="gradient" service="Saree / Indian Garment Cleaning" className="mt-3" />
            </div>
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'var(--gradient)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontFamily: 'Playfair Display,serif', color: '#fff', marginBottom: '1rem' }}>Trust Us With Your Most Precious Garments</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1.05rem' }}>DFW&apos;s saree specialists — free pickup, expert care, guaranteed results.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <BookButton label="📦 Book Saree Pickup Now" variant="primary" size="lg" style={{ background: '#fff', color: 'var(--navy)' }} />
            <a href="tel:2143480666" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: '600', padding: '16px 28px', borderRadius: '10px', border: '2px solid rgba(255,255,255,0.5)', fontSize: '15px', textDecoration: 'none' }}>
              ☎️ 214-348-0666
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

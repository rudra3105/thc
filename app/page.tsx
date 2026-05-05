import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, CheckCircle, Truck, Sparkles, Phone } from 'lucide-react'
import BookButton from '@/components/ui/BookButton'
import ZipChecker from '@/components/ui/ZipChecker'
import FAQ from '@/components/ui/FAQ'
import { HOME_FAQS, DRY_CLEANING_PRICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: "DFW's Most Trusted Dry Cleaning & Laundry Pickup Service",
  description: "Free pickup & delivery across Dallas-Fort Worth. Same-day available. Saree specialists. 50,000+ garments cleaned. Book now and get $10 off your first order.",
}

const REVIEWS = [
  { name: 'Sarah M.', location: 'Frisco TX', rating: 5, text: 'Super convenient pickup and delivery. My dry cleaning always comes back perfect. Never going to another cleaner!', service: 'Dry Cleaning' },
  { name: 'Priya S.', location: 'Plano TX', rating: 5, text: 'Best saree cleaning service in DFW. My wedding saree looked brand new. The zari work was absolutely stunning!', service: 'Saree Cleaning' },
  { name: 'James R.', location: 'Flower Mound TX', rating: 5, text: 'Saves me 5 hours every week. The monthly subscription plan is the best value. Always on time!', service: 'Laundry Service' },
]

const SERVICES = [
  { name: 'Dry Cleaning', href: '/dry-cleaning', icon: '👔', desc: 'Fabric-safe dry cleaning for suits, dresses, and formal wear. Starting at $4.99.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
  { name: 'Laundry (Wash & Fold)', href: '/laundry-service', icon: '🧺', desc: 'Professional wash & fold service. Save 5–7 hours every week. Starting at $2.49/lb.', img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&q=80' },
  { name: 'Pickup & Delivery', href: '/pickup-delivery', icon: '🚐', desc: 'Free pickup from your door across DFW. Monday & Thursday routes. Min $45 order.', img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=500&q=80' },
  { name: 'Saree & Wedding Care 🔥', href: '/saree-cleaning-dfw', icon: '👗', desc: "DFW's specialists in silk sarees, zari work, lehengas & bridal garments. Expert care.", img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80', hot: true },
  { name: 'Same Day / Express', href: '/same-day-express', icon: '⚡', desc: 'Need it fast? Same-day and express cleaning available at select locations.', img: 'https://images.unsplash.com/photo-1448387473223-5c37445527e7?w=500&q=80' },
  { name: 'Household Items', href: '/laundry-service#household', icon: '🏠', desc: 'Comforters, blankets, bedding, curtains & more. Professional care.', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80' },
]

const CITIES = ['Frisco','Plano','Flower Mound','Southlake','Grapevine','Keller','Roanoke','Coppell','Irving','Lewisville','Dallas','Fort Worth']

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'center', paddingTop:'5rem', paddingBottom:'5rem' }} className="hero-grid">
            <div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(47,111,219,0.08)', border:'1px solid rgba(47,111,219,0.2)', color:'var(--blue)', fontSize:'13px', fontWeight:'600', padding:'6px 14px', borderRadius:'50px', marginBottom:'1.5rem' }}>
                🎉 Get $10 OFF First Order — Code: 10FREE
              </div>
              <h1 style={{ fontSize:'clamp(2rem,4.5vw,3.5rem)', fontFamily:'Playfair Display,serif', color:'var(--navy)', lineHeight:'1.1', marginBottom:'1.2rem' }}>
                DFW&apos;s Most Trusted<br/>
                <span style={{ background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Dry Cleaning</span> &amp; Laundry Pickup
              </h1>
              <p style={{ fontSize:'1.05rem', color:'#4b5563', lineHeight:'1.7', marginBottom:'.8rem' }}>
                Free Pickup &amp; Delivery · Same-Day Available · 50,000+ Garments Cleaned
              </p>
              <p style={{ fontSize:'.95rem', color:'#6b7280', lineHeight:'1.7', marginBottom:'2rem' }}>
                Specialists in Sarees, Wedding Wear &amp; Everyday Clothing across Dallas–Fort Worth.
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'12px', marginBottom:'1.5rem' }}>
                <BookButton label="📦 Book Free Pickup" variant="primary" size="lg" />
                <a href="tel:2143480666" style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'transparent', color:'var(--navy)', fontWeight:'600', padding:'14px 24px', borderRadius:'10px', border:'2px solid rgba(30,42,74,0.2)', fontSize:'15px', textDecoration:'none' }}>
                  ☎️ Call Now
                </a>
                <Link href="/prices" className="btn-outline" style={{ fontSize:'14px' }}>💰 Prices</Link>
              </div>
              <p style={{ fontSize:'13px', color:'#6b7280', marginBottom:'8px' }}>Check if we serve your area:</p>
              <ZipChecker />
            </div>
            <div style={{ position:'relative', display:'flex', flexDirection:'column', gap:'1rem' }}>
              <div style={{ position:'relative', height:'380px', borderRadius:'20px', overflow:'hidden', boxShadow:'0 20px 60px rgba(30,42,74,0.18)' }}>
                <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=90" alt="Top Hat Cleaners professional dry cleaning DFW" fill style={{ objectFit:'cover' }} priority />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
                <div style={{ background:'var(--gray)', borderRadius:'12px', padding:'14px', display:'flex', alignItems:'center', gap:'10px', border:'1px solid rgba(30,42,74,0.08)' }}>
                  <span style={{ fontSize:'24px' }}>⭐</span>
                  <div><div style={{ fontWeight:'700', fontSize:'16px', color:'var(--navy)' }}>4.8+</div><div style={{ fontSize:'12px', color:'#6b7280' }}>Google Rating</div></div>
                </div>
                <div style={{ background:'var(--gray)', borderRadius:'12px', padding:'14px', display:'flex', alignItems:'center', gap:'10px', border:'1px solid rgba(30,42,74,0.08)' }}>
                  <span style={{ fontSize:'24px' }}>👕</span>
                  <div><div style={{ fontWeight:'700', fontSize:'16px', color:'var(--navy)' }}>50K+</div><div style={{ fontSize:'12px', color:'#6b7280' }}>Garments Cleaned</div></div>
                </div>
                <div style={{ background:'var(--gray)', borderRadius:'12px', padding:'14px', display:'flex', alignItems:'center', gap:'10px', border:'1px solid rgba(30,42,74,0.08)' }}>
                  <span style={{ fontSize:'24px' }}>🏬</span>
                  <div><div style={{ fontWeight:'700', fontSize:'16px', color:'var(--navy)' }}>18+</div><div style={{ fontSize:'12px', color:'#6b7280' }}>DFW Locations</div></div>
                </div>
                <div style={{ background:'var(--gray)', borderRadius:'12px', padding:'14px', display:'flex', alignItems:'center', gap:'10px', border:'1px solid rgba(30,42,74,0.08)' }}>
                  <span style={{ fontSize:'24px' }}>🕒</span>
                  <div><div style={{ fontWeight:'700', fontSize:'16px', color:'var(--navy)' }}>24/7</div><div style={{ fontSize:'12px', color:'#6b7280' }}>Drop-Off Kiosks</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`.hero-grid{@media(max-width:768px){grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* TRUST BAR */}
      <div style={{ background:'var(--gray)', padding:'16px 0', borderTop:'1px solid rgba(30,42,74,0.06)', borderBottom:'1px solid rgba(30,42,74,0.06)' }}>
        <div className="container" style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2rem' }}>
          {[['⭐','4.8+ Google Rating'],['👕','50,000+ Garments Cleaned'],['🏬','18+ DFW Locations'],['🚐','Free Pickup & Delivery'],['🕒','24/7 Kiosks'],['⚡','Same-Day Available']].map(([icon,lbl],i)=>(
            <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px', fontSize:'13px', fontWeight:'500', color:'var(--navy)' }}><span style={{ fontSize:'18px' }}>{icon}</span>{lbl}</div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section style={{ background:'#fff', padding:'80px 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', maxWidth:'640px', margin:'0 auto 3rem' }}>
            <span className="section-label">Simple Process</span>
            <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.5rem)', fontFamily:'Playfair Display,serif', color:'var(--navy)', marginBottom:'1rem' }}>How Pickup &amp; Delivery Works</h2>
            <p style={{ color:'#6b7280', fontSize:'1rem', lineHeight:'1.7' }}>4 steps from your door and back — fresh every time</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'20px', marginBottom:'2.5rem' }}>
            {[
              { n:'1', icon:'📅', img:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80', title:'Schedule Pickup', desc:'Book online in seconds. Choose date & time.' },
              { n:'2', icon:'🚐', img:'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&q=80', title:'We Pick Up', desc:'Driver comes to your door. No store visit needed.' },
              { n:'3', icon:'✨', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', title:'Expert Cleaning', desc:'Professional cleaning, pressing & inspection.' },
              { n:'4', icon:'📦', img:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80', title:'Delivered Fresh', desc:'Clean & pressed, delivered back to your door.' },
            ].map((step,i)=>(
              <div key={i} style={{ background:'#fff', borderRadius:'16px', overflow:'hidden', border:'1px solid rgba(30,42,74,0.08)', boxShadow:'0 2px 12px rgba(30,42,74,0.06)' }}>
                <div style={{ position:'relative', height:'160px' }}>
                  <Image src={step.img} alt={step.title} fill style={{ objectFit:'cover' }} />
                  <div style={{ position:'absolute', inset:0, background:'rgba(30,42,74,0.25)' }} />
                  <div style={{ position:'absolute', top:'12px', left:'12px', width:'36px', height:'36px', borderRadius:'50%', background:'var(--gradient)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'800', fontSize:'16px', color:'#fff', fontFamily:'Playfair Display,serif' }}>{step.n}</div>
                </div>
                <div style={{ padding:'1.2rem' }}>
                  <div style={{ fontSize:'24px', marginBottom:'8px' }}>{step.icon}</div>
                  <h3 style={{ fontWeight:'700', fontSize:'15px', color:'var(--navy)', marginBottom:'6px', fontFamily:'Playfair Display,serif' }}>{step.title}</h3>
                  <p style={{ fontSize:'13px', color:'#6b7280', lineHeight:'1.6' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center' }}><BookButton label="Schedule Pickup Now" variant="primary" size="lg" /></div>
        </div>
      </section>

      {/* URGENCY */}
      <div style={{ background:'var(--gradient)', padding:'14px', textAlign:'center' }}>
        <p style={{ color:'#fff', fontWeight:'600', fontSize:'14px' }}>🔥 Same-day slots filling fast — Book before 2PM to secure today&apos;s pickup!</p>
      </div>

      {/* SERVICES */}
      <section style={{ background:'var(--gray)', padding:'80px 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', maxWidth:'640px', margin:'0 auto 3rem' }}>
            <span className="section-label">What We Do</span>
            <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.5rem)', fontFamily:'Playfair Display,serif', color:'var(--navy)', marginBottom:'1rem' }}>Complete Cleaning Services</h2>
            <p style={{ color:'#6b7280', fontSize:'1rem', lineHeight:'1.7' }}>From everyday laundry to delicate sarees — expert care for every garment</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'20px' }}>
            {SERVICES.map(svc=>(
              <Link key={svc.href} href={svc.href} style={{ display:'block', background:'#fff', borderRadius:'16px', overflow:'hidden', border:'1px solid rgba(30,42,74,0.08)', boxShadow:'0 2px 12px rgba(30,42,74,0.06)', textDecoration:'none', transition:'transform 0.25s, box-shadow 0.25s' }}>
                <div style={{ position:'relative', height:'200px' }}>
                  <Image src={svc.img} alt={svc.name} fill style={{ objectFit:'cover' }} />
                  {svc.hot && <div style={{ position:'absolute', top:'12px', right:'12px', background:'var(--gradient)', color:'#fff', fontSize:'11px', fontWeight:'700', padding:'4px 10px', borderRadius:'50px' }}>HIGH VALUE 🔥</div>}
                  <div style={{ position:'absolute', bottom:'12px', left:'12px', fontSize:'28px' }}>{svc.icon}</div>
                </div>
                <div style={{ padding:'1.2rem' }}>
                  <h3 style={{ fontWeight:'700', fontSize:'15px', color:'var(--navy)', marginBottom:'6px', fontFamily:'Playfair Display,serif' }}>{svc.name}</h3>
                  <p style={{ fontSize:'13px', color:'#6b7280', lineHeight:'1.6', marginBottom:'10px' }}>{svc.desc}</p>
                  <span style={{ fontSize:'13px', fontWeight:'600', color:'var(--blue)', display:'flex', alignItems:'center', gap:'4px' }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SAREE — NAVY PREMIUM */}
      <section style={{ background:'var(--navy)', padding:'80px 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'center' }} className="hero-grid">
            <div>
              <span style={{ display:'inline-block', fontSize:'12px', fontWeight:'600', letterSpacing:'1.5px', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', marginBottom:'12px' }}>High-Value Service</span>
              <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontFamily:'Playfair Display,serif', color:'#fff', marginBottom:'1.2rem', lineHeight:'1.2' }}>
                Saree &amp; Wedding Garment <span style={{ background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Specialists</span>
              </h2>
              <p style={{ color:'rgba(255,255,255,0.7)', lineHeight:'1.8', fontSize:'.95rem', marginBottom:'1.5rem' }}>
                Your saree is not just fabric — it&apos;s a memory. We specialize in garments that cannot be replaced. Expert care built on trust, precision, and experience.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'2rem' }}>
                {['Silk sarees (Banarasi, Kanjivaram, designer)','Zari and heavy embroidery garments','Bridal sarees and wedding outfits','Lehengas, sherwanis & formal wear','Nationwide mail-in service available'].map((item,i)=>(
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:'10px', color:'rgba(255,255,255,0.8)', fontSize:'14px' }}>
                    <CheckCircle size={15} style={{ color:'var(--blue)', minWidth:15 }} />
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
                <BookButton label="Book Saree Cleaning" variant="gradient" service="Saree / Indian Garment Cleaning" />
                <Link href="/saree-cleaning-dfw" className="btn-outline-white" style={{ fontSize:'14px', padding:'12px 20px' }}>Learn More</Link>
              </div>
            </div>
            <div style={{ position:'relative' }}>
              <div style={{ position:'relative', height:'420px', borderRadius:'20px', overflow:'hidden', boxShadow:'0 20px 60px rgba(0,0,0,0.3)' }}>
                <Image src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&q=85" alt="Saree cleaning specialists Dallas Fort Worth" fill style={{ objectFit:'cover' }} />
              </div>
              <div style={{ position:'absolute', bottom:'-16px', left:'-16px', background:'#fff', borderRadius:'12px', padding:'14px 18px', boxShadow:'0 8px 32px rgba(0,0,0,0.2)', maxWidth:'220px' }}>
                <div style={{ fontSize:'12px', fontWeight:'700', color:'var(--navy)', marginBottom:'4px' }}>⭐ Trusted by DFW Families</div>
                <div style={{ fontSize:'12px', color:'#6b7280' }}>&quot;My wedding saree looked brand new&quot;</div>
                <div style={{ fontSize:'12px', fontWeight:'600', color:'var(--magenta)', marginTop:'4px' }}>— Priya S., Frisco TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background:'#fff', padding:'80px 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'start' }} className="hero-grid">
            <div>
              <span className="section-label">Transparent Pricing</span>
              <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.4rem)', fontFamily:'Playfair Display,serif', color:'var(--navy)', marginBottom:'1rem' }}>Simple, Honest Pricing</h2>
              <p style={{ color:'#6b7280', fontSize:'.95rem', lineHeight:'1.7', marginBottom:'1.5rem' }}>No hidden fees. No surprises.</p>
              <table className="pricing-table" style={{ borderRadius:'12px', overflow:'hidden', marginBottom:'1rem' }}>
                <thead><tr><th>Item</th><th>Starting From</th></tr></thead>
                <tbody>
                  {DRY_CLEANING_PRICES.slice(0,5).map((row,i)=>(<tr key={i}><td>{row.item}</td><td>{row.price}</td></tr>))}
                </tbody>
              </table>
              <p style={{ fontSize:'12px', color:'#9ca3af', marginBottom:'1.5rem' }}>⚠️ Final price depends on fabric & condition. Most orders: $25–$60.</p>
              <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
                <Link href="/prices" className="btn-primary">View Full Pricing</Link>
                <BookButton label="Book Now" variant="outline" service="Dry Cleaning" />
              </div>
            </div>
            <div style={{ background:'var(--navy)', borderRadius:'20px', padding:'2.5rem', textAlign:'center', border:'2px solid rgba(47,111,219,0.25)' }}>
              <div style={{ display:'inline-block', padding:'6px 16px', borderRadius:'50px', fontSize:'12px', fontWeight:'700', background:'var(--gradient)', color:'#fff', marginBottom:'1.2rem' }}>🔥 MOST POPULAR PLAN</div>
              <div style={{ fontSize:'3.5rem', fontWeight:'900', fontFamily:'Playfair Display,serif', color:'var(--blue)' }}>$50<span style={{ fontSize:'1.2rem', fontWeight:'400' }}>/mo</span></div>
              <div style={{ fontSize:'1.1rem', fontWeight:'600', color:'rgba(255,255,255,0.9)', margin:'.3rem 0 .5rem' }}>→ Get <span style={{ color:'var(--blue)' }}>$65</span> Cleaning Credit</div>
              <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.55)', marginBottom:'1.5rem' }}>Save 30% every month · Min 3 months</p>
              <div style={{ display:'flex', flexDirection:'column', gap:'8px', marginBottom:'1.5rem', textAlign:'left' }}>
                {['All services (dry cleaning + laundry)','Priority pickup routes','Perfect for families & professionals','Monthly credit auto-applied'].map((f,i)=>(
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px', fontSize:'13px', color:'rgba(255,255,255,0.8)' }}>
                    <CheckCircle size={13} style={{ color:'var(--blue)', minWidth:13 }} />{f}
                  </div>
                ))}
              </div>
              <BookButton label="Start $50 Subscription" variant="gradient" className="w-full justify-center" style={{ width:'100%', justifyContent:'center' }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background:'var(--blue)', padding:'80px 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', color:'#fff', marginBottom:'2.5rem' }}>
            <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.5rem)', fontFamily:'Playfair Display,serif', color:'#fff', marginBottom:'.8rem' }}>Why Top Hat Cleaners is Different</h2>
            <p style={{ color:'rgba(255,255,255,0.8)' }}>Real locations, expert care, flexible service — built for DFW</p>
          </div>
          <div style={{ overflowX:'auto', borderRadius:'16px', boxShadow:'0 4px 24px rgba(0,0,0,0.15)' }}>
            <table style={{ width:'100%', background:'#fff', borderCollapse:'collapse', fontSize:'14px' }}>
              <thead>
                <tr>
                  <th style={{ padding:'12px 18px', textAlign:'left', fontWeight:'600', background:'var(--gray)', color:'var(--navy)' }}>Feature</th>
                  <th style={{ padding:'12px 18px', textAlign:'center', fontWeight:'600', background:'var(--blue)', color:'#fff' }}>Top Hat Cleaners</th>
                  <th style={{ padding:'12px 18px', textAlign:'center', fontWeight:'600', background:'var(--gray)', color:'var(--navy)' }}>Typical Local</th>
                  <th style={{ padding:'12px 18px', textAlign:'center', fontWeight:'600', background:'var(--gray)', color:'var(--navy)' }}>App-Based</th>
                </tr>
              </thead>
              <tbody>
                {[['Physical Locations (18+ DFW)','✅','⚠️','⚠️'],['Free Pickup & Delivery','✅','⚠️','✅'],['24/7 Drop-Off Kiosks','✅','❌','❌'],['Saree & Wedding Expertise','✅','❌','❌'],['Same Day / Express','✅','⚠️','❌'],['Monthly Subscription Savings','✅','❌','❌'],['Transparent Pricing','✅','❌','⚠️']].map((row,i)=>(
                  <tr key={i} style={{ borderBottom:'1px solid rgba(30,42,74,0.08)' }}>
                    <td style={{ padding:'12px 18px', fontWeight:'500', color:'var(--navy)' }}>{row[0]}</td>
                    <td style={{ padding:'12px 18px', textAlign:'center', fontSize:'18px', background:'rgba(47,111,219,0.04)' }}>{row[1]}</td>
                    <td style={{ padding:'12px 18px', textAlign:'center', fontSize:'18px' }}>{row[2]}</td>
                    <td style={{ padding:'12px 18px', textAlign:'center', fontSize:'18px' }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign:'center', marginTop:'2rem' }}>
            <BookButton label="Try Top Hat Today — Book Pickup" variant="primary" className="bg-white" style={{ background:'#fff', color:'var(--blue)' }} />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background:'var(--gray)', padding:'80px 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', maxWidth:'640px', margin:'0 auto 3rem' }}>
            <span className="section-label">Real Customers</span>
            <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.5rem)', fontFamily:'Playfair Display,serif', color:'var(--navy)', marginBottom:'.8rem' }}>What Our Customers Say</h2>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'6px' }}>
              <span style={{ color:'#f59e0b', fontSize:'18px' }}>★★★★★</span>
              <span style={{ fontWeight:'600', color:'var(--navy)' }}>4.8+</span>
              <span style={{ color:'#6b7280' }}>· 500+ Google Reviews</span>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'20px' }}>
            {REVIEWS.map((r,i)=>(
              <div key={i} style={{ background:'#fff', borderRadius:'16px', padding:'1.5rem', border:'1px solid rgba(30,42,74,0.08)', boxShadow:'0 2px 12px rgba(30,42,74,0.06)' }}>
                <div style={{ color:'#f59e0b', fontSize:'16px', marginBottom:'12px' }}>★★★★★</div>
                <p style={{ fontSize:'14px', color:'#4b5563', lineHeight:'1.7', marginBottom:'1rem', fontStyle:'italic' }}>&quot;{r.text}&quot;</p>
                <div>
                  <div style={{ fontWeight:'600', fontSize:'13px', color:'var(--navy)' }}>{r.name}</div>
                  <div style={{ fontSize:'12px', color:'#9ca3af' }}>{r.location} · {r.service}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'2rem' }}>
            <Link href="/reviews" className="btn-outline">See All Reviews →</Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section style={{ background:'#fff', padding:'60px 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <span className="section-label">Serving DFW</span>
            <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.2rem)', fontFamily:'Playfair Display,serif', color:'var(--navy)', marginBottom:'.6rem' }}>Pickup &amp; Delivery Across Dallas–Fort Worth</h2>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'10px', marginBottom:'1.5rem' }}>
            {CITIES.map(city=>(
              <Link key={city} href={`/locations/${city.toLowerCase().replace(/\s+/g,'-')}`}
                style={{ padding:'8px 16px', borderRadius:'50px', fontSize:'13px', fontWeight:'500', background:'var(--gray)', color:'var(--navy)', border:'1px solid rgba(30,42,74,0.1)', textDecoration:'none', transition:'all 0.2s' }}>
                📍 {city}
              </Link>
            ))}
          </div>
          <div style={{ textAlign:'center' }}>
            <Link href="/locations" className="btn-outline" style={{ fontSize:'14px' }}>View All Locations →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background:'var(--gray)', padding:'80px 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'start' }} className="hero-grid">
            <div>
              <span className="section-label">Quick Answers</span>
              <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.4rem)', fontFamily:'Playfair Display,serif', color:'var(--navy)', marginBottom:'1rem' }}>Frequently Asked Questions</h2>
              <p style={{ color:'#6b7280', lineHeight:'1.7', marginBottom:'2rem' }}>Everything you need to know about our services in DFW.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                <BookButton label="Book Free Pickup" variant="primary" />
                <a href="tel:2143480666" className="btn-outline" style={{ width:'fit-content' }}>☎️ Call 214-348-0666</a>
              </div>
            </div>
            <FAQ items={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background:'var(--navy)', padding:'80px 0' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <div style={{ maxWidth:'640px', margin:'0 auto' }}>
            <div style={{ fontSize:'36px', marginBottom:'1rem' }}>✨</div>
            <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontFamily:'Playfair Display,serif', color:'#fff', marginBottom:'1rem' }}>Ready to Make Laundry Effortless?</h2>
            <p style={{ color:'rgba(255,255,255,0.7)', fontSize:'1.05rem', marginBottom:'2rem' }}>Stop wasting time on laundry. Let us handle it — DFW&apos;s most trusted cleaning service.</p>
            <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
              <BookButton label="📦 Book Free Pickup Now" variant="primary" size="lg" />
              <a href="tel:2143480666" className="btn-outline-white" style={{ fontSize:'15px', padding:'16px 28px' }}>☎️ Call 214-348-0666</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

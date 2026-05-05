import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyBar from '@/components/layout/MobileStickyBar'
import { Toaster } from 'react-hot-toast'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700','800','900'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: { default: "Top Hat Cleaners | DFW's Most Trusted Dry Cleaning & Laundry", template: '%s | Top Hat Cleaners DFW' },
  description: "Professional dry cleaning, laundry pickup & delivery across Dallas-Fort Worth. Saree specialists. Same-day available. 50,000+ garments cleaned.",
  keywords: ['dry cleaning DFW','laundry pickup delivery Dallas','saree cleaning DFW','dry cleaning near me','laundry service Frisco TX'],
  openGraph: {
    type: 'website', locale: 'en_US', url: 'https://tophatcleaner.com',
    siteName: 'Top Hat Cleaners',
    title: "Top Hat Cleaners | DFW's Most Trusted Dry Cleaning & Laundry",
    description: "Professional dry cleaning, laundry pickup & delivery across Dallas-Fort Worth. Saree specialists.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context':'https://schema.org','@type':'DryCleaningOrLaundry',
          name:'Top Hat Cleaners',url:'https://tophatcleaner.com',telephone:'+12143480666',
          address:{'@type':'PostalAddress',addressLocality:'Dallas',addressRegion:'TX',addressCountry:'US'},
          areaServed:['Frisco TX','Plano TX','Flower Mound TX','Southlake TX','Grapevine TX','Keller TX','Irving TX','Dallas TX','Fort Worth TX'],
          priceRange:'$$',
          aggregateRating:{'@type':'AggregateRating',ratingValue:'4.8',reviewCount:'500',bestRating:'5'},
          serviceType:['Dry Cleaning','Laundry Service','Saree Cleaning','Wedding Dress Cleaning','Pickup and Delivery'],
        })}} />
      </head>
      <body>
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  )
}

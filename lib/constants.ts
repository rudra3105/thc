export const SITE = {
  name: 'Top Hat Cleaners',
  phone: '214-348-0666',
  phoneHref: 'tel:2143480666',
  whatsapp: 'https://wa.me/12143480666',
  email: 'info@tophatcleaner.com',
  url: 'https://tophatcleaner.com',
  address: 'Dallas–Fort Worth, TX',
  minimumOrder: 45,
  offerCode: '10FREE',
  offerAmount: 10,
}

export const COLORS = {
  blue: '#2F6FDB',
  magenta: '#C2187A',
  navy: '#1E2A4A',
  white: '#FFFFFF',
  gray: '#F5F7FA',
  gradient: 'linear-gradient(135deg, #2F6FDB 0%, #C2187A 100%)',
}

export const DFW_CITIES = [
  { city: 'Frisco', zips: ['75033', '75034', '75035'] },
  { city: 'Plano', zips: ['75024', '75025', '75093', '75094'] },
  { city: 'Flower Mound', zips: ['75028', '75022'] },
  { city: 'Southlake', zips: ['76092'] },
  { city: 'Grapevine', zips: ['76051', '76099'] },
  { city: 'Keller', zips: ['76248', '76262'] },
  { city: 'Roanoke', zips: ['76262'] },
  { city: 'Trophy Club', zips: ['76262'] },
  { city: 'Coppell', zips: ['75019', '75099'] },
  { city: 'Irving', zips: ['75038', '75039', '75063'] },
  { city: 'Lewisville', zips: ['75067', '75056', '75065'] },
  { city: 'Allen', zips: ['75002', '75013'] },
  { city: 'McKinney', zips: ['75069', '75070', '75071'] },
  { city: 'The Colony', zips: ['75056'] },
  { city: 'Carrollton', zips: ['75006', '75007', '75010'] },
  { city: 'Dallas', zips: ['75201', '75225', '75230', '75240'] },
  { city: 'Fort Worth', zips: ['76101', '76107', '76109'] },
  { city: 'Arlington', zips: ['76001', '76010', '76017'] },
]

export const SERVED_ZIPS = DFW_CITIES.flatMap(c => c.zips)

export const PICKUP_SCHEDULE = [
  { pickup: 'Monday', delivery: 'Thursday' },
  { pickup: 'Thursday', delivery: 'Monday' },
]

export const DRY_CLEANING_PRICES = [
  { item: 'Shirt / Blouse', price: '$4.99', note: '' },
  { item: 'Pants / Slacks', price: '$7.99', note: '' },
  { item: 'Sweater / Knit', price: '$8.99', note: '' },
  { item: 'Dress', price: '$14.99', note: '' },
  { item: 'Suit (2-Piece)', price: '$17.99', note: '' },
  { item: 'Coat / Jacket', price: '$14.99', note: '' },
  { item: 'Blazer', price: '$12.99', note: '' },
  { item: 'Tie / Scarf', price: '$5.99', note: '' },
]

export const LAUNDRY_PRICES = [
  { item: 'Wash & Fold', price: '$2.49/lb', note: 'Minimum order applies' },
  { item: 'Laundered Shirt', price: '$3.99', note: '' },
  { item: 'Comforter (Queen)', price: '$29.99', note: '' },
  { item: 'Comforter (King)', price: '$34.99', note: '' },
  { item: 'Blanket', price: '$24.99', note: '' },
  { item: 'Sheets / Bedding', price: '$19.99', note: 'Per set' },
  { item: 'Duvet / Pillow', price: '$22.99', note: '' },
]

export const SPECIALTY_PRICES = [
  { item: 'Silk Saree', price: '$18–$30', note: 'Depends on fabric & detailing' },
  { item: 'Heavy / Bridal Saree', price: '$35–$60', note: 'Zari, embroidery included' },
  { item: 'Lehenga / Indian Outfit', price: '$39.99+', note: '' },
  { item: 'Sherwani', price: '$34.99+', note: '' },
  { item: 'Wedding Dress', price: 'By Quote', note: 'Call for pricing' },
  { item: 'Designer Garment', price: 'By Quote', note: 'After inspection' },
  { item: 'Heavy Embroidery / Beading', price: 'By Quote', note: '' },
  { item: 'Alterations', price: 'By Quote', note: 'Call for pricing' },
  { item: 'Saree Rolling', price: 'Included', note: 'With cleaning service' },
]

export const TRUST_STATS = [
  { value: '4.8+', label: 'Google Rating', icon: '⭐' },
  { value: '50K+', label: 'Garments Cleaned', icon: '👕' },
  { value: '18+', label: 'DFW Locations', icon: '📍' },
  { value: '24/7', label: 'Drop-Off Kiosks', icon: '🕒' },
]

export const HOME_FAQS = [
  {
    q: 'Do you offer free pickup & delivery?',
    a: 'Yes, we offer free pickup and delivery across most DFW areas with a minimum order of $45. No store visit required.',
  },
  {
    q: 'How long does cleaning take?',
    a: 'Standard turnaround is 2–3 days. Same-day service is available at select locations when booked before 10AM.',
  },
  {
    q: 'Do you clean sarees and delicate garments?',
    a: 'Yes — saree and Indian garment care is one of our specialties. We handle silk, zari, Kanjivaram, Banarasi, lehengas, sherwanis, and wedding garments with expert care.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve most cities across Dallas–Fort Worth including Frisco, Plano, Flower Mound, Southlake, Keller, Grapevine, Irving, Coppell, Lewisville, and more.',
  },
  {
    q: 'How does the $50 subscription work?',
    a: 'Pay $50/month and receive $65 in cleaning credit each month. Minimum 3-month commitment. Works for dry cleaning, laundry, and pickup services.',
  },
  {
    q: 'What is the minimum order for pickup?',
    a: 'Minimum order for pickup & delivery service is $45. Payment is by card only.',
  },
]

export const SERVICES_NAV = [
  { name: 'Home', href: '/' },
  { name: 'Pickup & Delivery', href: '/pickup-delivery', highlight: true },
  { name: 'Prices', href: '/prices' },
  { name: 'Locations', href: '/locations' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Saree & Wedding Care', href: '/saree-cleaning-dfw', hot: true },
  { name: 'Same Day / Express', href: '/same-day-express' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const SERVICES_DROPDOWN = [
  { name: 'Dry Cleaning', href: '/dry-cleaning', icon: '👔' },
  { name: 'Laundry Service', href: '/laundry-service', icon: '🧺' },
  { name: 'Saree & Indian Wear', href: '/saree-cleaning-dfw', icon: '👗' },
  { name: 'Wedding Dress', href: '/saree-cleaning-dfw#wedding', icon: '👰' },
  { name: 'Household Items', href: '/laundry-service#household', icon: '🏠' },
  { name: 'Alterations', href: '/services#alterations', icon: '✂️' },
]

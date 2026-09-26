// Company information. Sources: the previous avaniecocare.com site, the company's
// service brief, and the ISO certificates issued to Avani Ecocare Labs Pvt. Ltd.

export const site = {
  // Absolute site URL including any base path, without a trailing slash.
  url: `${(import.meta.env.SITE ?? 'https://avaniecocare.com').replace(/\/$/, '')}${import.meta.env.BASE_URL.replace(/\/$/, '')}`,
  name: 'Avani Ecocare Labs',
  legalName: 'Avani Ecocare Labs Pvt. Ltd.',
  tagline: 'Test • Research • Innovate',
  description:
    'Avani Ecocare Labs is an ISO 17025, NABL & BIS accredited laboratory in Greater Noida offering chemical, mechanical, metallurgical and polymer testing — plastics, rubber, metals, plywood, tiles, utensils, NDT and RoHS/REACH compliance.',
  accreditation: 'ISO 17025, NABL accredited & BIS approved',
  quote: 'Fast 1-hour quotes',
  turnaround: 'Most standard tests completed within 3–5 business days',
  email: 'info@avaniecocare.com',
  phone: {
    display: '+91 99108 52911',
    href: 'tel:+919910852911',
    e164: '+919910852911',
  },
  whatsapp: {
    href: 'https://wa.me/919910852911?text=' + encodeURIComponent('Hello! I would like to inquire about your testing services.'),
  },
  address: {
    lines: [
      '1st Floor, Khasra No. 430, Complex Divan Plaza',
      'Sector 1, Bisrakh Jalalpur Village',
      'Greater Noida, Gautam Buddha Nagar',
      'Uttar Pradesh 203207, India',
    ],
    street: '1st Floor, Khasra No. 430, Complex Divan Plaza, Sector 1, Bisrakh Jalalpur Village',
    locality: 'Greater Noida',
    region: 'Uttar Pradesh',
    postalCode: '203207',
    country: 'IN',
    mapsHref:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('Complex Divan Plaza, Sector 1, Bisrakh Jalalpur, Greater Noida, Uttar Pradesh 203207'),
  },
  hours: {
    display: 'Monday – Saturday, 9:00 AM – 6:00 PM IST',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Certifications', href: '/certifications/' },
  { label: 'Contact', href: '/contact/' },
] as const;

// Testing standards listed on the previous site, plus customer-specified methods.
export const standards = [
  { code: 'ASTM', name: 'American Society for Testing and Materials' },
  { code: 'ISO', name: 'International Organization for Standardization' },
  { code: 'IS', name: 'Bureau of Indian Standards' },
  { code: 'BS EN', name: 'British & European Standards' },
  { code: 'DIN', name: 'German Institute for Standardization' },
  { code: 'JIS', name: 'Japanese Industrial Standards' },
] as const;

// Process from the previous site ("Simple 4-Step Process"), preceded by the
// technical consultation offered in the company brief.
export const process = [
  {
    title: 'Share your requirement',
    text: 'Tell us about the material or product and the purpose of testing. We help you select the tests and applicable standard, and send a quote within 1 hour.',
  },
  {
    title: 'Submit your sample',
    text: 'Drop off or courier your material sample to our lab in Greater Noida. We handle all types of metals, polymers and composites.',
  },
  {
    title: 'Expert analysis',
    text: 'Our certified scientists run comprehensive tests using ISO 17025 accredited methods and state-of-the-art instruments.',
  },
  {
    title: 'Detailed report',
    text: 'Receive a comprehensive, traceable test report with findings, interpretations and compliance status.',
  },
  {
    title: 'Expert consultation',
    text: 'Our metallurgists and polymer specialists are available to discuss findings and recommend solutions.',
  },
] as const;

export const whyChoose = [
  {
    title: 'Wide range of material and product testing',
    text: 'Polymers, rubber, metals and alloys, plywood, tiles, utensils and other engineering materials.',
  },
  {
    title: 'Chemical, physical and mechanical testing under one roof',
    text: 'Composition, properties and performance evaluated in a single laboratory, with one point of contact.',
  },
  {
    title: 'Support for product development and quality control',
    text: 'From new product development and raw material checks to routine QC and failure investigation.',
  },
  {
    title: 'Testing support for OEMs, manufacturers and suppliers',
    text: 'Test programmes aligned with your specifications, your customers’ requirements and applicable standards.',
  },
  {
    title: 'Standard-based testing approach',
    text: 'Tests carried out against IS/BIS, ASTM, ISO or customer-specified methods, depending on the requirement.',
  },
  {
    title: 'Technical consultation',
    text: 'Guidance on selecting the right tests and applicable standards before you send a sample.',
  },
  {
    title: 'Reliable, traceable and technically sound results',
    text: 'Tests and inspections performed in ISO 17025, NABL accredited and BIS approved laboratories, with 100% traceable reports.',
  },
] as const;

// "Why Choose Us" from the previous About page.
export const expertise = [
  {
    icon: 'users',
    title: 'Technical Expertise',
    text: 'Our team is led by professionals with advanced degrees in Plastic Technology and hands-on industry experience.',
  },
  {
    icon: 'search',
    title: 'Research-Driven Mindset',
    text: 'We focus on root-cause analysis, innovation and material optimisation.',
  },
  {
    icon: 'target',
    title: 'Client-Centric Service',
    text: 'We prioritise transparency, fast turnaround times and custom solutions tailored to your product goals.',
  },
  {
    icon: 'microscope',
    title: 'Advanced Infrastructure',
    text: 'Equipped with state-of-the-art instruments and software to ensure precise, reliable results.',
  },
  {
    icon: 'car',
    title: 'NPD Testing Consultancy',
    text: 'End-to-end testing support for new automotive products — from concept to launch, ensuring performance, compliance and quality.',
  },
  {
    icon: 'report',
    title: 'Comprehensive Reporting',
    text: 'Detailed, traceable NABL-compliant test reports delivered digitally with full findings, interpretations and compliance status for regulatory submissions.',
  },
] as const;

export const purposes = [
  'Product development',
  'Quality control',
  'Material characterisation',
  'Failure investigation',
  'Compliance-oriented testing',
] as const;

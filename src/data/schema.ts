import { site } from './site';

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${site.url}${item.path}`,
  })),
});

export const faqSchema = (items: readonly { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const localBusinessSchema = () => ({
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#laboratory`,
  name: site.legalName,
  description: site.description,
  url: `${site.url}/`,
  image: `${site.url}/og-image.jpg`,
  logo: `${site.url}/icon-512.png`,
  email: site.email,
  telephone: site.phone.e164,
  parentOrganization: { '@id': `${site.url}/#organization` },
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: { '@type': 'Country', name: 'India' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: site.hours.days,
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
  ],
});

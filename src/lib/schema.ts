import { address, areas, faqs, services, site, type Service } from '../data/business';

const id = `${site.url}/#business`;

export function electricianSchema() {
  return {
    '@type': 'Electrician',
    '@id': id,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/images/workshop.webp`,
    telephone: site.phoneTel,
    email: site.email,
    description: site.description,
    slogan: site.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address.street}, ${address.estate}`,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postcode,
      addressCountry: address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.googleMaps,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'UK Companies House number',
      value: site.companyNumber,
    },
    foundingDate: '2007-10-04',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: areas.map((area) => ({
      '@type': 'City',
      name: area.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bedfordshire' },
    })),
    knowsAbout: ['Electrical installation', 'Emergency lighting servicing', 'Electrical repairs'],
    sameAs: [site.googleCid, site.companiesHouse, site.bsiListing],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          url: `${site.url}/services/${service.slug}`,
        },
      })),
    },
  };
}

export function webPageSchema(title: string, description: string, path: string) {
  return {
    '@type': 'WebPage',
    '@id': `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name: title,
    description,
    inLanguage: 'en-GB',
    isPartOf: { '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.name, url: site.url },
    about: { '@id': id },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    '@type': 'Service',
    name: service.title,
    description: service.lede,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.title,
    provider: { '@id': id },
    areaServed: areas.map((area) => area.name),
  };
}

export function faqSchema(items: readonly { q: string; a: string }[] = faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function graph(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}

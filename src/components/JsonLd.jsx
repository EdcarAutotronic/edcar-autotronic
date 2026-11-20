import { business } from '../data/business'

export default function JsonLd() {
  const hours = business.hours.flatMap((item) => {
    if (!item.opens || !item.closes) return []
    return item.schemaDays.map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: item.opens,
      closes: item.closes,
    }))
  })

  const data = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: business.name,
    description: business.seo.description,
    telephone: `+${business.whatsappDigits}`,
    url: business.seo.siteUrl || undefined,
    image: undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      addressCountry: business.addressCountry,
    },
    openingHoursSpecification: hours,
    sameAs: [business.social.instagram, business.social.facebook, business.social.tiktok],
    hasMap: business.mapsUrl,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Mixco, Guatemala',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

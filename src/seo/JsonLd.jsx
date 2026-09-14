import { CLINIC_NAME, PHONE, ADDRESS, MAPS_LINK } from '../lib/constants';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": CLINIC_NAME,
    "image": "https://damodardental.co.in/og-image.jpg",
    "url": "https://damodardental.co.in",
    "telephone": PHONE,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ADDRESS,
      "addressLocality": "Margao",
      "addressRegion": "Goa",
      "postalCode": "403601",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.2736,
      "longitude": 73.9583
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "10:00", "closes": "14:00" }
    ],
    "sameAs": ["https://www.instagram.com/damodardental", "https://www.facebook.com/damodardental"],
    "priceRange": "₹₹"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

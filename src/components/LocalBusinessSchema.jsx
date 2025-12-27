import { Helmet } from 'react-helmet-async';

/**
 * LocalBusiness Schema Component
 * Google Maps ve yerel aramalar için kritik
 */
function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Taşdemir Hukuk",
    "image": "https://tasdemirlaw.com/logo.png",
    "url": "https://tasdemirlaw.com",
    "telephone": "+905388539944",
    "email": "info@tasdemirlaw.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "İstanbul",
      "addressLocality": "İstanbul",
      "addressRegion": "İstanbul",
      "postalCode": "34000",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/tasdemirlaw",
      "https://www.linkedin.com/company/tasdemirlaw",
      "https://twitter.com/tasdemirlaw"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.0082,
        "longitude": 28.9784
      },
      "geoRadius": "50000"
    },
    "serviceType": [
      "Yabancılar ve Vatandaşlık Hukuku",
      "Ticaret Hukuku",
      "Aile Hukuku",
      "Ceza Hukuku",
      "İş Hukuku",
      "Gayrimenkul Hukuku",
      "Miras Hukuku"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export default LocalBusinessSchema;

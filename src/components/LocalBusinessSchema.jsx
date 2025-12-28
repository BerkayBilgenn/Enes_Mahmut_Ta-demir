import { Helmet } from 'react-helmet-async';

/**
 * LocalBusiness Schema Component
 * Google Maps ve yerel aramalar için kritik
 */
function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "EMT Hukuk",
    "image": "https://tasdemirlaw.com/logo.png",
    "url": "https://tasdemirlaw.com",
    "telephone": "+905388539944",
    "email": "emtasdemirhukuk@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Çağlayan Mah. Vatan Cad. No:8 D:12 Orhan Pınar İş Merkezi",
      "addressLocality": "Kağıthane",
      "addressRegion": "İstanbul",
      "postalCode": "34410",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 28.9784
    },

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

import { Helmet } from 'react-helmet-async';

/**
 * LocalBusiness Schema Component
 * Google Maps ve yerel aramalar için kritik
 */
function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://www.emtasdemirhukuk.com/#organization",
    "name": "EMT Hukuk & Danışmanlık",
    "alternateName": ["EMT", "EMT Hukuk", "Avukat Enes", "Enes Mahmut Taşdemir"],
    "image": "https://www.emtasdemirhukuk.com/logo-transparent.png",
    "url": "https://www.emtasdemirhukuk.com",
    "telephone": "+905388539944",
    "email": "emtasdemirhukuk@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Çağlayan Mah. Vatan Cad. No:8 D:12 Orhan Pınar İş Merkezi",
      "addressLocality": "Kağıthane",
      "addressRegion": "İstanbul",
      "postalCode": "34413",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0637,
      "longitude": 28.9738
    },
    "sameAs": [],
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
      "Miras Hukuku",
      "İcra ve İflas Hukuku",
      "Tazminat Davaları",
      "Anlaşmalı Boşanma",
      "Ağır Ceza",
      "İşçi Alacakları",
      "Kurumsal Hukuk Danışmanlığı"
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

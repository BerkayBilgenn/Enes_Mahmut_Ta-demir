import { Helmet } from 'react-helmet-async';

/**
 * SEO Component - Provides dynamic meta tags for each page
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.image - OG image URL
 * @param {string} props.url - Canonical URL
 * @param {string} props.type - OG type (article, website)
 * @param {Object} props.article - Article specific data (for blog posts)
 * @param {Object} props.schema - JSON-LD structured data
 */
function SEO({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200',
  url,
  type = 'website',
  article = null,
  schema = null
}) {
  const siteName = 'EMT Hukuk';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const baseUrl = 'https://www.emtasdemirhukuk.com';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

  // Default schema for the site
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": siteName,
    "description": description,
    "url": fullUrl,
    "telephone": "+905388539944",
    "email": "emtasdemirhukuk@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "priceRange": "$$",
    "areaServed": "Türkiye"
  };

  // Article schema for blog posts
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Person",
      "name": "EMT Hukuk"
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    }
  } : null;

  // Service schema
  const serviceSchema = schema?.type === 'Service' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": schema.name,
    "provider": {
      "@type": "LegalService",
      "name": siteName
    },
    "description": description,
    "areaServed": "Türkiye"
  } : null;

  const structuredData = article ? articleSchema : (serviceSchema || schema || defaultSchema);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.date} />
          <meta property="article:author" content="EMT Hukuk" />
          <meta property="article:section" content={article.category} />
        </>
      )}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export default SEO;

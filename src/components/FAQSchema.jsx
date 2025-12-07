import { Helmet } from 'react-helmet-async';

/**
 * FAQ Schema Component - Adds FAQPage JSON-LD structured data
 * This helps Google display FAQ rich snippets in search results
 * @param {Array} faqs - Array of {question, answer} objects
 */
function FAQSchema({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
}

export default FAQSchema;

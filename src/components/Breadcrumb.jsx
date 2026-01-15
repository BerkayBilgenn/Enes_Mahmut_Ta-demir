import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumb Component with Schema.org BreadcrumbList markup
 * Provides navigation breadcrumbs and structured data for SEO
 */
function Breadcrumb({ items = [] }) {
  const location = useLocation();
  const baseUrl = 'https://www.emtasdemirhukuk.com';

  // Default home item
  const breadcrumbItems = [
    { name: 'Ana Sayfa', path: '/' },
    ...items
  ];

  // Generate JSON-LD schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.path}`
    }))
  };

  return (
    <>
      {/* JSON-LD Breadcrumb Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Visual Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            
            return (
              <li key={item.path} className="flex items-center">
                {index === 0 ? (
                  <Link 
                    to={item.path}
                    className="flex items-center gap-1 text-gray-400 hover:text-gold transition-colors"
                  >
                    <Home className="w-4 h-4" />
                    <span className="hidden sm:inline">{item.name}</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-gold font-medium truncate max-w-[200px] sm:max-w-none">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-gold transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {item.name}
                  </Link>
                )}
                
                {!isLast && (
                  <ChevronRight className="w-4 h-4 text-gray-600 ml-2" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;

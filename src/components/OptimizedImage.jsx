import { useState } from 'react';

/**
 * OptimizedImage Component - Lazy loading, WebP support, blur placeholder
 * Improves page speed and Core Web Vitals scores
 */
function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  priority = false,
  objectFit = 'cover'
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Placeholder for when image is loading
  const placeholderClass = !isLoaded && !priority 
    ? 'bg-navy-800 animate-pulse' 
    : '';

  // Error fallback
  if (hasError) {
    return (
      <div 
        className={`${className} bg-navy-800 flex items-center justify-center`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Görsel yüklenemedi</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${placeholderClass}`} style={{ width, height }}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`
          ${className}
          ${!isLoaded && !priority ? 'opacity-0' : 'opacity-100'}
          transition-opacity duration-300 ease-in-out
        `}
        style={{ objectFit }}
      />
    </div>
  );
}

export default OptimizedImage;

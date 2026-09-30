import React, { useState } from 'react';
import { Palmtree, Compass } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#162720] ${containerClassName}`}>
      {/* Background Gradient / Fallback Canvas */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-[#123126] via-[#1a4436] to-[#0d211a] flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${
          hasError || !isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-[#faf8f5]/10 flex items-center justify-center text-[#d4a359] mb-3">
          <Palmtree className="w-6 h-6 stroke-[1.5]" />
        </div>
        <p className="font-serif text-sm font-medium text-[#f5efe6] max-w-[200px] line-clamp-2">
          {fallbackTitle || alt || 'Ceylon Horizons Expedition'}
        </p>
        <span className="text-[11px] tracking-widest uppercase text-[#d4a359]/80 mt-1 font-sans">
          Sri Lanka
        </span>
      </div>

      {!hasError && src && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};

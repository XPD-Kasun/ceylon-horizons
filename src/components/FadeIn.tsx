import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'none';
  threshold?: number;
  fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
  threshold = 0.12,
  fullWidth = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  const getTransformClasses = () => {
    if (isVisible) return 'opacity-100 translate-y-0';
    if (direction === 'up') return 'opacity-0 translate-y-6';
    if (direction === 'down') return 'opacity-0 -translate-y-6';
    return 'opacity-0';
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: '700ms',
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all ${getTransformClasses()} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

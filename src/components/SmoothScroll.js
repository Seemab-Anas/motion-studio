'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis with smoother and slower scrolling
    lenis.current = new Lenis({
      duration: 1.8, // Increased duration for slower scrolling
      easing: (t) => {
        // Smooth ease-out without bounce
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
      lerp: 0.1, // Smoother interpolation
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
      touchMultiplier: 1.5, // Reduced for better touch control
      infinite: false,
      direction: 'vertical',
      gestureDirection: 'vertical',
    });

    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleReducedMotion = (e) => {
      if (e.matches) {
        lenis.current.stop();
      } else {
        lenis.current.start();
      }
    };

    // Check initial preference
    if (mediaQuery.matches) {
      lenis.current.stop();
    }

    // Listen for changes in preference
    mediaQuery.addEventListener('change', handleReducedMotion);

    // Cleanup
    return () => {
      if (lenis.current) {
        lenis.current.destroy();
      }
      mediaQuery.removeEventListener('change', handleReducedMotion);
    };
  }, []);

  // No need for wrapper divs with Lenis
  return children;
}
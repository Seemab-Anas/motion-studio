'use client';

import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <section className="hero relative w-full h-screen bg-black overflow-hidden">
      {/* UnicornStudio Background */}
      <div data-us-project="GuQWVZGCks9u2ICuQTld" style={{width: '100vw', height: '100vh'}}></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-start px-8 lg:px-50 z-10 pb-32">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-gray-900 font-manrope max-w-2xl text-lg font-light">
          At Motion Studio, we craft visually stunning and highly engaging websites that blend creativity with modern technology. Our focus is on delivering smooth animations, clean design, and aesthetic user experiences that help brands stand out. Whether it’s a portfolio, business site, or a digital presence, we bring ideas to life with elegance and impact.
          </p>
        </div>
      </div>
    </section>
  );
}

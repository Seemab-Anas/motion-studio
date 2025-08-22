"use client"
import { useRef } from 'react';
import Image from 'next/image';


const testimonials = [
  {
    message: '"Whenever something goes wrong, Clarygen picks up straight away and sorts it. We’ve had late-night problems before and they’ve always been quick to respond. It’s a relief knowing someone’s there whenever we need them."',
    author: "Richard M.",
    avatar: "/testmonials/avatar1.webp"
  },
  {
    message: '"We needed extra support across our offices, and Clarygen made it simple. Their engineers came on site and handled everything without fuss. What could have been a headache ended up being very smooth."',
    author: "Helen P.",
    avatar: "/testmonials/avatar1.webp"
  },
  {
    message: '"Since Clarygen started looking after our systems, we don’t get the small breakdowns that used to slow us down. They deal with things before we even notice them most of the time. It means our team can just focus on work."',
    author: "Emma L.",
    avatar: "/testmonials/avatar1.webp"
  },
  {
    message: '"They take care of our payroll and tax, which saves us a lot of hassle each month. It just runs in the background now."',
    author: "Daniel R.",
    avatar: "/testmonials/avatar1.webp"
  },

];

export default function Testimonials() {
  const containerRef = useRef(null);

  // Duplicate testimonials for infinite slider effect
  const testimonialSlider = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header section */}
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            Clarygen has transformed the business operations of over 500+ companies worldwide through strategic outsourcing and innovative solutions.
          </p>
        </div>

        {/* Testimonials section */}
        <div className="overflow-hidden">
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            
            <div className="flex animate-scroll-left gap-8 w-max" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              {testimonialSlider.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card flex-shrink-0 bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{
                    width: '400px',
                    height: '280px',
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <p className="text-gray-800 text-base mb-4 leading-relaxed">{testimonial.message}</p>
                      <p className="text-gray-600 text-sm font-medium">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scrollLeft 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
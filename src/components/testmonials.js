"use client"
import { useRef } from 'react';
import Image from 'next/image';


const testimonials = [
  {
    message: "Clarygen transformed our financial operations completely. Their expertise is unmatched.",
    author: "Sarah Johnson",
    avatar: "/testmonials/avatar1.png"
  },
  {
    message: "Professional, reliable, and always delivers on time. Best outsourcing partner we've had.",
    author: "Michael Chen",
    avatar: "/testmonials/avatar1.png"
  },
  {
    message: "Their IT consultancy saved us thousands while improving our system efficiency.",
    author: "Emma Thompson",
    avatar: "/testmonials/avatar1.png"
  },
  {
    message: "24/7 support that actually works. Clarygen has been a game-changer for our business.",
    author: "James Wilson",
    avatar: "/testmonials/avatar1.png"
  },
  {
    message: "Cost-effective solutions without compromising quality. Highly recommended!",
    author: "Lisa Rodriguez",
    avatar: "/testmonials/avatar1.png"
  },
  {
    message: "Their team feels like an extension of our company. Excellent collaboration.",
    author: "David Kumar",
    avatar: "/testmonials/avatar1.png"
  },
  {
    message: "Strategic outsourcing that actually reduces costs and improves efficiency.",
    author: "Sophie Chen",
    avatar: "/testmonials/avatar1.png"
  },
  {
    message: "Innovation and reliability combined. Clarygen delivers exceptional results.",
    author: "Robert Martinez",
    avatar: "/testmonials/avatar1.png"
  },
  {
    message: "Client-focused approach that adapts to our specific business needs perfectly.",
    author: "Amanda Foster",
    avatar: "/testmonials/avatar1.png"
  },
  {
    message: "Dependable partner that consistently exceeds expectations. Five stars!",
    author: "Mark Thompson",
    avatar: "/testmonials/avatar1.png"
  }
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
                    width: '380px',
                    height: '200px',
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
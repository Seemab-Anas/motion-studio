"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/hero/card-1.jpeg",
    title: "Outsource IT the Smarter Way",
    text: "The smarter way to scale your business: proactive, reliable IT outsourcing",
  },
  {
    id: 2,
    image: "/hero/card-2.jpeg",
    title: "24/7 Proactive IT Support",
    text: "Round-the-clock support with proactive monitoring to stop downtime before it starts",
  },
  {
    id: 3,
    image: "/hero/card-3.jpeg",
    title: "Beyond Tax & Payroll",
    text: "Stress-Free Bookkeeping, CIS Returns & Financial Strategy",
  },
  {
    id: 4,
    image: "/hero/card-4.jpeg",
    title: "Outsource Smarter, Save More",
    text: "Save up to 50% with integrated IT and finance outsourcing — without the in-house overhead",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-medium">{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform flex space-x-3">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

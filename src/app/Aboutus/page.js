import React from 'react';
import Image from 'next/image';
import { ChevronRight, Award, Shield, Lightbulb, Users, DollarSign } from 'lucide-react';
import Vision from '@/components/vision';
import Testimonials from '@/components/testmonials';
import FAQ from '@/components/faq';

const page = () => {
  const values = [
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards, ensuring every task is delivered with accuracy and care.",
      icon: Award,
    },
    {
      title: "Dependability", 
      description: "You can count on us—our clients trust us because we keep our word and deliver consistently.",
      icon: Shield,
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and technologies to create smarter, more efficient solutions for our clients.",
      icon: Lightbulb,
    },
    {
      title: "Client Focus",
      description: "We listen first, then act—our approach is always shaped around the needs and goals of your business.",
      icon: Users,
    },
    {
      title: "Cost Effectiveness", 
      description: "We provide meaningful results at a fair cost, ensuring every partnership is built on trust and benefit.",
      icon: DollarSign,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <header className="relative w-full h-[60vh] md:h-[60vh] lg:h-[68vh]">
        <Image
          src="/aboutus/about-banner.jpg"
          alt="About Us banner"
          fill
          className="object-cover"
          priority
        />

        {/* subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>

        {/* Left-aligned content — bottom on mobile, center on md+ */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pb-6 md:pb-0">
            {/* Use a full-width inner row so text sits on the left edge of the container */}
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm uppercase tracking-wider text-white/90 font-semibold">
                <span className="text-white/80">CLARYGEN</span>
                <ChevronRight className="w-4 h-4 text-white/60" />
                <span className="text-white break-words whitespace-normal leading-snug max-w-full">ABOUT US</span>
              </div>

              {/* Big left-aligned heading */}
              <h1 className="mt-4 text-left text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                About Clarygen
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Who We Are
            </h2>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Clarygen is a dedicated partner for businesses seeking to transform their operations through strategic outsourcing. At Clarygen, we empower businesses to achieve more. We provide tailored outsourcing solutions that turn operational challenges into your greatest advantages. By deeply understanding your specific needs, we craft strategies that reduce costs, boost efficiency, and accelerate growth.
              </p>
              <p>
                Leveraging industry expertise and the power of modern technology, we deliver innovative support across key functions like financial management and IT consultancy. We're not just a service provider; we're an extension of your team, dedicated to your success and available 24/7 to ensure flawless execution and complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Component */}
      <Vision />

      {/* Our Values Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#045494' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-lg text-white/90 max-w-4xl">
              We empower businesses with reliable IT and financial solutions, built on trust, innovation, and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`p-6 md:p-8 ${
                    index < values.length - 1 ? 'border-r border-white/20' : ''
                  }`}
                >
                  <div className="flex items-center justify-start mb-4">
                    <IconComponent className="w-8 h-8 text-white mr-3" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default page;
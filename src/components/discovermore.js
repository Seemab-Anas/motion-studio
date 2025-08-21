"use client";

import Image from "next/image";
import { ShieldCheck, Globe2, Clock } from "lucide-react";

export default function AboutBanner() {
  return (
    <section className="w-full bg-white text-[#045494]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-12 py-16">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Global IT & Financial Solutions for Businesses –{" "}
            <span className="text-[#0C4F8D]">Trusted by 5,643+ Clients Worldwide</span>
          </h1>

          <div className="space-y-6">
            <h2 className="flex items-center gap-4 text-lg md:text-xl font-semibold">
              <span className="bg-[#045494]/10 p-3 rounded-full">
                <Globe2 className="w-6 h-6 text-[#045494]" />
              </span>
              Seamless IT Management & HMRC-Compliant Financial Services in One Platform
            </h2>
            <h2 className="flex items-center gap-4 text-lg md:text-xl font-semibold">
              <span className="bg-[#045494]/10 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6 text-[#045494]" />
              </span>
              24/7 Technology Security Meets Strategic Financial Optimization
            </h2>
            <h2 className="flex items-center gap-4 text-lg md:text-xl font-semibold">
              <span className="bg-[#045494]/10 p-3 rounded-full">
                <Clock className="w-6 h-6 text-[#045494]" />
              </span>
              Proactive IT Support & Tax Experts Working Together to Protect Your Business
            </h2>
          </div>

          
        </div>

        {/* Right Image (Equal Height + Rounded 36px) */}
        <div className="relative w-full h-full rounded-[36px] overflow-hidden">
          <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
            <Image
              src="/discovermore.jpg"
              alt="Discover More"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* CTA (moved from services.js) */}
      <div className="px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="mt-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Discover How We’ve Saved Clients £900k in IT Costs & Tax Penalties</h3>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

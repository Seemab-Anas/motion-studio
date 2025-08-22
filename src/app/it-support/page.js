"use client";

import Image from "next/image";
import CompaniesScroller from "@/components/companiesscroller";
import {
  Clock,
  Server,
  Cpu,
  ShieldCheck,
  MapPin,
  Globe2,
  ChevronRight,
} from "lucide-react";

export default function Page() {
  const servicesData = [
    {
      id: "01",
      title: "On-Demand IT Support",
      desc: "Instant, 24/7 IT assistance for businesses to resolve issues quickly and efficiently",
      img: "/it-service/on-demand-support.jpg"
    },
    {
      id: "02", 
      title: "Managed IT Services",
      desc: "Proactive and ongoing IT management to ensure systems are always up and running smoothly",
      img: "/it-service/managed-services.jpg"
    },
    {
      id: "03",
      title: "On-Site IT Support", 
      desc: "Dedicated on-site engineers available to resolve technical issues at client locations",
      img: "/it-service/onsite-support.jpg"
    },
    {
      id: "04",
      title: "Hardware Support and Maintenance",
      desc: "Maintenance services for hardware from top brands like HP, Dell, Cisco, IBM, and more",
      img: "/it-service/hardware-support.jpg"
    },
    {
      id: "05",
      title: "IMAC (Install, Move, Add, Change) Services",
      desc: "Support for the installation, relocation, upgrading, and reconfiguration of IT systems and infrastructure.",
      img: "/it-service/imac-services.jpg"
    },
    {
      id: "06",
      title: "Smart Hands Support",
      desc: "Hands-on technical support for desktops, servers, and other devices, with expert guidance from certified engineers",
      img: "/it-service/smart-hands.jpg"
    },
    {
      id: "07",
      title: "IT Consulting & Guidance",
      desc: "Professional advice on IT infrastructure, system optimization, and technology solutions tailored to your business needs.",
      img: "/it-service/consulting.jpg"
    },
    {
      id: "08",
      title: "Industry-Leading Vendor Support",
      desc: "Certified support services for leading platforms and vendors including Cisco, Oracle, Fujitsu, EMC, and more.",
      img: "/it-service/vendor-support.jpg"
    }
  ];

  return (
    <main className="w-full bg-white text-slate-800">
      {/* Banner */}
      <header className="relative w-full h-[60vh] md:h-[60vh] lg:h-[68vh]">
        <Image
          src="/banner/it-support.jpeg"
          alt="IT Support banner"
          fill
          className="object-cover"
          priority
        />
        {/* DARK BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

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
                <span className="text-white break-words whitespace-normal leading-snug max-w-full">IT-SERVICE AND CONSULTANCY</span>
              </div>

              {/* Big left-aligned heading */}
              <h1 className="mt-4 text-left text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                IT Support & Consultancy
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Description Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We are focused on providing on-demand and managed IT support services around the globe and around the clock.
            Our highly technical skilled team of engineers is available 24/7 to visit the client site and fix issues.
            We provide unlimited on-site user support with a team of dedicated and skilled engineers offering professional advice and services.
            Our certified experts provide IT support according to industry best practices meeting the business demand. We are a global IT support provider,
            Supplying services on HP, IBM, DELL, CISCO, FUJITSU, NETAPP, EMC, Oracle/Sun, Hitachi, etc.
            Our services include maintenance support, IMAC, smart hands support on Desktop servers, Storage, Tape libraries, Site survey, Etc. We are in business for the past 2 years and have our Head Office based In London (UK).
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#045494] mb-4">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-700">
              What We Serve
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((item) => (
              <div
                key={item.id}
                className="rounded-[28px] bg-white shadow-sm hover:shadow-lg transition p-4 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-48 rounded-[20px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-5">
                  <span className="block text-sm font-bold text-[#045494]">
                    {item.id}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold mt-1 text-[#045494]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CompaniesScroller />
    </main>
  );
}
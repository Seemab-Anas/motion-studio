"use client";

import Image from "next/image";

export default function CompaniesScroller() {
  const companies = [
    { name: "Cisco", logo: "/logos/cisco.png" },
    { name: "Dell", logo: "/logos/dell.png" },
    { name: "EMC", logo: "/logos/emc.png" },
    { name: "Fujitsu", logo: "/logos/fujitsu.png" },
    { name: "Hitachi", logo: "/logos/hitachi.png" },
    { name: "HP", logo: "/logos/hp.png" },
    { name: "IBM", logo: "/logos/ibm.png" },
    { name: "NetApp", logo: "/logos/netapp.png" },
    { name: "Oracle", logo: "/logos/oracle.png" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#045494]">
            We Are Working With These Companies
          </h2>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-[#fff] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-[#fff] to-transparent pointer-events-none" />
          <div className="flex animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex items-center justify-center"
              >
                <div className="relative h-16 w-32 md:h-20 md:w-40 lg:h-24 lg:w-48">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-225%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
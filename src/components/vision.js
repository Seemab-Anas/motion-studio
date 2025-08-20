"use client";

import Image from "next/image";

const visionData = [
  {
    id: "01",
    title: "Technology-Driven Innovation",
    desc: "Leveraging AI-powered tools and cloud automation to deliver 30% faster service delivery than industry standards",
    img: "/vision/card1.jpg",
  },
  {
    id: "02",
    title: "Precision-Tailored Solutions",
    desc: "Custom-built outsourcing packages that adapt to your unique compliance requirements and growth objectives",
    img: "/vision/card2.jpg",
  },
  {
    id: "03",
    title: "Uncompromising Value Creation",
    desc: "Proven frameworks that reduce operational costs by 40% while maintaining 99.9% service reliability",
    img: "/vision/card3.jpg",
  },
  {
    id: "04",
    title: "Relationship-Centric Growth",
    desc: 'Building decade-long partnerships through our "Client Success First" guarantee and quarterly ROI reviews',
    img: "/vision/card4.jpg",
  },
];

export default function VisionSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#045494]">
          Our Vision
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Clarygen, we envision becoming the world's most trusted partner
          for integrated IT and financial outsourcing solutions. Our mission is
          to transform business operations through:
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {visionData.map((item) => (
          <div
            key={item.id}
            className="rounded-[28px] bg-gray-50 shadow-sm hover:shadow-lg transition p-4 flex flex-col"
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
    </section>
  );
}

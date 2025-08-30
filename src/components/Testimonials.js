'use client';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alan Voong",
      title: "Sr Full Stack Engineer",
      company: "PlayStation",
      avatar: "/images/alan-avatar.jpg", // Replace with actual avatar paths
      rating: 5,
      testimonial: "Nick's ability to innovate and deliver designs that impress regardless is a rare talent. Nick takes ownership in his projects. It was always a pleasure working with him."
    },
    {
      id: 2,
      name: "Tina Sang",
      title: "Marketing Manager",
      company: "Lightspeed Studio",
      avatar: "/images/tina-avatar.jpg",
      rating: 5,
      testimonial: "He's got a great taste that you can always count on, making designs that speak to the audience, whether it's for video games or editorial websites. It's great working w/ him!"
    },
    {
      id: 3,
      name: "Carlos Estrada",
      title: "Associate Creative Director",
      company: "Apple",
      avatar: "/images/carlos-avatar.jpg",
      rating: 5,
      testimonial: "Nick is an extremely talented designer with passion for days. His creative experience is super diverse which lends itself to a very strong leadership quality he posses."
    }
  ];



  return (
    <section className="testimonials bg-gray-100 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-black text-8xl font-anton leading-none">
            INDUSTRY<br />
            APPROVED
          </h2>
          <div className="text-right max-w-md">
            <p className="text-black font-manrope text-sm font-light uppercase tracking-wide leading-relaxed">
              HEAR FROM CLIENTS AND OTHER<br />
              PROFESSIONALS ON WHAT YOU CAN EXPECT<br />
              WHEN WORKING WITH ME
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-black mb-16"></div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-6 mx-auto">
                {/* Placeholder for avatar - replace with actual images */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-manrope">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 font-manrope text-base leading-relaxed mb-6 text-center">
                {testimonial.testimonial}
              </p>

              {/* Author Info */}
              <div className="text-center">
                <h4 className="text-black font-manrope font-semibold text-lg mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 font-manrope text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
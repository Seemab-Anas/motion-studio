'use client';

export default function Team() {
  return (
    <section className="team-section" style={{ backgroundColor: '#EFEEEC' }}>
      <div className="w-full mx-auto px-8 lg:px-50 py-20">
        {/* Team Header */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-black text-8xl font-anton leading-none">
            OUR<br />TEAM
          </h2>
          <div className="text-right max-w-md">
            <p className="text-black font-manrope text-sm font-light uppercase tracking-wide leading-relaxed">
              MEET THE CREATIVE MINDS BEHIND<br />
              MOTION STUDIO. WE'RE A PASSIONATE<br />
              TEAM DEDICATED TO BRINGING YOUR<br />
              VISION TO LIFE
            </p>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="group">
            <div className="w-full h-96 bg-gray-300 rounded-2xl mb-4 overflow-hidden">
              <img 
                src="/team-member-1.jpg" 
                alt="Nickolas Kossup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-manrope text-xl font-semibold mb-2" style={{ color: '#222725' }}>
              Nickolas Kossup
            </h4>
            <p className="text-gray-600 font-manrope text-sm">
              Creative Director & Founder
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="group">
            <div className="w-full h-96 bg-gray-300 rounded-2xl mb-4 overflow-hidden">
              <img 
                src="/team-member-2.jpg" 
                alt="Jane Designer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-manrope text-xl font-semibold mb-2" style={{ color: '#222725' }}>
              Jane Designer
            </h4>
            <p className="text-gray-600 font-manrope text-sm">
              Senior UI/UX Designer
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="group">
            <div className="w-full h-96 bg-gray-300 rounded-2xl mb-4 overflow-hidden">
              <img 
                src="/team-member-2.jpg" 
                alt="Mike Developer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-manrope text-xl font-semibold mb-2" style={{ color: '#222725' }}>
              Mike Developer
            </h4>
            <p className="text-gray-600 font-manrope text-sm">
              Lead Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

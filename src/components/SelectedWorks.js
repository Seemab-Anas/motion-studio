'use client';

export default function SelectedWorks() {
  const works = [
    {
      id: 1,
      title: "Gaming",
      subtitle: "Marketing",
      image: "/images/gaming-work.jpg", // Replace with your actual image paths
      category: "gaming"
    },
    {
      id: 2,
      title: "Web Design",
      subtitle: "Development",
      image: "/images/web-design-work.jpg",
      category: "web"
    },
    {
      id: 3,
      title: "Branding",
      subtitle: "Design",
      image: "/images/branding-work.jpg",
      category: "branding"
    },
    {
      id: 4,
      title: "Past Work",
      subtitle: "Various",
      image: "/images/past-work.jpg",
      category: "various"
    }
  ];

  return (
    <section className="selected-works bg-black text-white min-h-screen py-20 mx-8 mb-8 rounded-3xl">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-white text-6xl md:text-8xl lg:text-9xl font-anton leading-none">
            SELECTED<br />
            WORK
          </h2>
          <div className="max-w-md">
            <p className="text-white font-manrope text-sm font-light uppercase tracking-wide">
              IMPACTFUL SOLUTIONS THAT<br />
              STAND OUT,<br />
              CAPTURE ATTENTION,<br />
              AND DRIVE MEASURABLE SUCCESS
            </p>
          </div>
        </div>

        {/* Latest Work Label */}
        <div className="mb-8">
          <p className="text-white font-manrope text-sm uppercase tracking-wider">
            LATEST WORK
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="work-card group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                {/* Placeholder for actual images */}
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  <span className="text-sm font-manrope">
                    {work.title} Preview
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Status Dots */}
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    {work.id === 4 && (
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-manrope font-medium text-lg">
                      {work.title}
                    </h3>
                    <p className="text-gray-400 font-manrope text-sm">
                      {work.subtitle}
                    </p>
                  </div>
                </div>
                
                <button className="text-white font-manrope text-sm uppercase tracking-wider hover:text-gray-300 transition-colors duration-200">
                  EXPLORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
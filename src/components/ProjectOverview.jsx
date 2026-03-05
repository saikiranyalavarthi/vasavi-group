const highlights = [
  { value: "1.93", label: "Acres Land Area" },
  { value: "75%", label: "Open Space" },
  { value: "324", label: "Total Units" },
  { value: "34", label: "Floors High Rise" },
  { value: "10", label: "Exclusive Sky Villas" },
  { value: "26,600", label: "SFT Clubhouse" },
  { value: "100%", label: "Vaastu Compliant" },
];

const ProjectOverview = () => {
  return (
    <section
      id="overview"
      className="relative py-4 bg-black text-white px-6 overflow-hidden"
    >
      {/* Gold Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-500 blur-[180px] opacity-10 rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400 blur-[180px] opacity-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-yellow-400 uppercase tracking-[6px] text-sm font-semibold mb-4">
            Project Overview
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Vasavi Crown East
          </h2>

          <div className="w-24 h-[2px] bg-yellow-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Located in Uppal, developed with a legacy of trust since 1994,
            offering premium high-rise living with world-class amenities and
            elegant architecture.
          </p>
        </div>

        {/* Luxury Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-10 text-center">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center transition duration-500 hover:-translate-y-3"
            >
              {/* Number */}
              <h3 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-3">
                {item.value}
              </h3>

              {/* Divider Line */}
              <div className="w-12 h-[2px] bg-yellow-500 mb-4 transition-all duration-500 group-hover:w-20"></div>

              {/* Label */}
              <p className="text-gray-400 tracking-wide text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;

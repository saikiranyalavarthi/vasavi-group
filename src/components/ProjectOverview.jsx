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
      className="relative py-4 md:py-4 bg-black text-white px-4 md:px-10 overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-500 blur-[160px] opacity-10 rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400 blur-[160px] opacity-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">

          <p className="text-yellow-400 uppercase tracking-[5px] text-xs md:text-sm font-semibold mb-3">
            Project Overview
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Vasavi Crown East
          </h2>

          <div className="w-20 h-[2px] bg-yellow-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
            Located in Uppal, developed with a legacy of trust since 1994,
            offering premium high-rise living with world-class amenities and
            elegant architecture.
          </p>

        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">

          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-xl transition duration-500 hover:border-yellow-400 hover:-translate-y-3"
            >

              {/* Value */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-3">
                {item.value}
              </h3>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-yellow-500 mx-auto mb-3 transition-all duration-500 group-hover:w-16"></div>

              {/* Label */}
              <p className="text-gray-400 text-xs md:text-sm tracking-wide">
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
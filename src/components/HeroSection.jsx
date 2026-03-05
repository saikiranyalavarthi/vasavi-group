import heroImage from "/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-42 flex items-center justify-center overflow-hidden text-white">

      {/* Background Image with Slow Zoom */}
      <div
        className="absolute inset-0 bg-center bg-cover animate-slow-zoom"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gold Gradient Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-up">

        {/* Tagline */}
        <p className="text-yellow-400 uppercase tracking-[8px] text-sm font-semibold mb-6">
          Premium High-Rise Living in Uppal
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Vasavi Crown East
          <br />
          <span className="text-yellow-400">
            Luxury 2BHK, 3BHK, & 4BHK Sky Villas
          </span>
        </h1>

        {/* Sub Text */}
        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
          Starting at ₹ 6099 per SFT · 34 Floors · 75% Open Space ·
          26,600 SFT Clubhouse · 100% Vaastu Compliant
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">

          <a
            href="#contact"
            className="relative px-10 py-4 rounded-full font-semibold text-lg bg-yellow-500 text-black transition duration-300 hover:scale-105 hover:bg-yellow-600 shadow-2xl"
          >
            Book Site Visit
          </a>

          <a
            href="#overview"
            className="px-10 py-4 rounded-full font-semibold text-lg border border-white text-white hover:bg-white hover:text-black transition duration-300"
          >
            Explore Project
          </a>

        </div>

        {/* Glass Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">324</h3>
            <p className="text-gray-300 mt-2">Total Units</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">1.93</h3>
            <p className="text-gray-300 mt-2">Acres Land Area</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">34</h3>
            <p className="text-gray-300 mt-2">Floors High Rise</p>
          </div>

        </div>

      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10"></div>

    </section>
  );
};

export default HeroSection;
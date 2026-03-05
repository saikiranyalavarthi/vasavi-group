export default function AboutSection() {
    return (
      <section className="bg-black py-24 px-6 md:px-16" id="about">
  
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
  
          {/* IMAGE */}
          <div className="relative group">
            <img
              src="Elevations/v3.jpg"
              alt="about project"
              className="rounded-xl shadow-2xl w-full h-[450px] object-cover transform group-hover:scale-105 transition duration-500"
            />
  
            {/* overlay border */}
            <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl opacity-30"></div>
          </div>
  
          {/* CONTENT */}
          <div>
  
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              ABOUT THE PROJECT
            </h2>
  
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Discover a new standard of luxury living where architecture meets
              elegance. Our premium residential project is designed with
              world-class construction technology, modern amenities, and spacious
              living environments to provide an exceptional lifestyle.
            </p>
  
            <p className="text-gray-400 leading-relaxed mb-8">
              Located in a prime area, the project offers excellent connectivity,
              green landscapes, and thoughtfully designed residences that
              combine comfort, sophistication, and functionality for modern
              families.
            </p>
  
            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-6">
  
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-yellow-400 transition">
                <h3 className="text-yellow-400 text-3xl font-bold">324+</h3>
                <p className="text-gray-300 text-sm mt-2">Luxury Apartments</p>
              </div>
  
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-yellow-400 transition">
                <h3 className="text-yellow-400 text-3xl font-bold">75%</h3>
                <p className="text-gray-300 text-sm mt-2">Open Space</p>
              </div>
  
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-yellow-400 transition">
                <h3 className="text-yellow-400 text-3xl font-bold">10+</h3>
                <p className="text-gray-300 text-sm mt-2">Luxury Amenities</p>
              </div>
  
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-yellow-400 transition">
                <h3 className="text-yellow-400 text-3xl font-bold">1.9</h3>
                <p className="text-gray-300 text-sm mt-2">Acres Land Area</p>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }
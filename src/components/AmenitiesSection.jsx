import {
  Building2,
  Coffee,
  Dumbbell,
  Waves,
  Gamepad2,
  BookOpen,
  Store,
  Baby,
  Users,
  Music,
} from "lucide-react";

const amenities = [
  { icon: Building2, title: "Grand Lobby" },
  { icon: Waves, title: "Temperature Pool" },
  { icon: Dumbbell, title: "Gymnasium" },
  { icon: Users, title: "Multipurpose Hall" },
  { icon: Coffee, title: "Café Lounge" },
  { icon: Gamepad2, title: "Indoor Games" },
  { icon: BookOpen, title: "Library" },
  { icon: Store, title: "Convenience Store" },
  { icon: Baby, title: "Kids Play Area" },
  { icon: Music, title: "Yoga / Zumba" },
];

const AmenitiesSection = () => {
  return (
    <section
      className="relative py-24 bg-black text-white px-6 md:px-12 overflow-hidden"
      id="amenities"
    >
      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-500 blur-[160px] opacity-10 rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400 blur-[160px] opacity-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-yellow-400 uppercase tracking-[5px] text-sm mb-4">
            Clubhouse Amenities
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Luxury Lifestyle Amenities
          </h2>

          <div className="w-24 h-[2px] bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 text-center">

          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl transition duration-500 hover:border-yellow-400 hover:-translate-y-3"
              >
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto flex items-center justify-center rounded-full border border-yellow-500/30 bg-white/5 text-yellow-400 mb-5 group-hover:bg-yellow-500 group-hover:text-black transition duration-500">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h4 className="text-sm md:text-base font-medium tracking-wide group-hover:text-yellow-400 transition">
                  {item.title}
                </h4>

                {/* underline */}
                <div className="w-0 h-[2px] bg-yellow-400 mt-3 mx-auto transition-all duration-500 group-hover:w-10"></div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
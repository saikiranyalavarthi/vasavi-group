import {
  FaBuilding,
  FaPaintRoller,
  FaDoorOpen,
  FaLayerGroup,
  FaBolt,
  FaWater,
  FaWifi,
  FaShieldAlt,
  FaFan,
  FaArrowUp,
} from "react-icons/fa";

const specifications = [
  {
    icon: FaBuilding,
    title: "Foundation",
    items: ["RCC Foundation"],
  },
  {
    icon: FaBuilding,
    title: "Super Structure & Walls",
    items: ["Aluminium formwork shear wall technology"],
  },
  {
    icon: FaPaintRoller,
    title: "Wall Finishing",
    items: [
      "External textured finish with emulsion paint",
      "Internal putty finish with acrylic emulsion",
    ],
  },
  {
    icon: FaLayerGroup,
    title: "Ceiling Finishing",
    items: ["POP cornice in balconies and corridors"],
  },
  {
    icon: FaDoorOpen,
    title: "Doors & Windows",
    items: [
      "Engineered wood main door",
      "Hardwood internal doors",
      "UPVC windows with mosquito mesh",
    ],
  },
  {
    icon: FaLayerGroup,
    title: "Flooring",
    items: [
      "Vitrified tiles in living & bedrooms",
      "Anti-skid tiles in bathrooms",
      "Granite / vitrified corridors",
    ],
  },
  {
    icon: FaBolt,
    title: "Electrical",
    items: ["Copper concealed wiring", "Modular switches"],
  },
  {
    icon: FaWater,
    title: "Plumbing",
    items: ["PVC / CPVC pipelines", "Premium sanitary fittings"],
  },
  {
    icon: FaFan,
    title: "Air Conditioning",
    items: ["Provision for AC"],
  },
  {
    icon: FaArrowUp,
    title: "Lifts",
    items: ["High-speed passenger lifts"],
  },
  {
    icon: FaShieldAlt,
    title: "Security",
    items: ["CCTV surveillance", "24/7 security"],
  },
  {
    icon: FaWifi,
    title: "Internet",
    items: ["High-speed internet provision"],
  },
];

export default function Specifications() {
  return (
    <section className="bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-widest">
          SPECIFICATIONS
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specifications.map((spec, index) => {
            const Icon = spec.icon;

            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-yellow-400 transition duration-300 hover:scale-105"
              >
                {/* ICON */}
                <div className="text-yellow-400 text-3xl mb-4">
                  <Icon />
                </div>

                {/* TITLE */}
                <h3 className="text-white font-semibold text-lg mb-3">
                  {spec.title}
                </h3>

                {/* LIST */}
                <ul className="text-gray-300 text-sm space-y-2">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-yellow-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

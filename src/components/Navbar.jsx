import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="/Crown East Logo.jpg"
            alt="Crown East"
            className="h-12 md:h-14 object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-10 text-gray-800 font-medium">
          <a
            href="#about"
            className="relative hover:text-yellow-600 transition"
          >
            About
          </a>
          <a
            href="#amenities"
            className="relative hover:text-yellow-600 transition"
          >
            Amenities
          </a>
          <a
            href="#gallery"
            className="relative hover:text-yellow-600 transition"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="relative hover:text-yellow-600 transition"
          >
            Contact
          </a>
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold transition duration-300 shadow-sm"
          >
            Enquire Now
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden text-gray-800">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-6 text-center shadow-md">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-yellow-600"
          >
            About
          </a>
          <a
            href="#amenities"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-yellow-600"
          >
            Amenities
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-yellow-600"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-yellow-600"
          >
            Contact
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-full font-semibold transition"
          >
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
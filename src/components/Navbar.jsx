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

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* LOGO */}
        <img
          src="/Crown East Logo.jpg"
          alt="Crown East"
          className="h-10 md:h-14 object-contain"
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-10 text-gray-800 font-medium">
          <a href="#about" className="hover:text-yellow-600 transition">About</a>
          <a href="#amenities" className="hover:text-yellow-600 transition">Amenities</a>
          <a href="#gallery" className="hover:text-yellow-600 transition">Gallery</a>
          <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold transition shadow-sm"
          >
            Enquire Now
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)}>
            <X size={30} />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col items-center justify-center h-[80%] space-y-8 text-xl font-medium text-gray-800">

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-600 transition"
          >
            About
          </a>

          <a
            href="#amenities"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-600 transition"
          >
            Amenities
          </a>

          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-600 transition"
          >
            Gallery
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-600 transition"
          >
            Contact
          </a>

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold mt-6"
          >
            Enquire Now
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
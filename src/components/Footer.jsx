import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-14 px-6 md:px-16">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* COMPANY */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            EPOQUE GROUP
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Creating premium living spaces with modern architecture,
            luxury amenities, and exceptional construction quality.
            Experience elegant living designed for the future.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-yellow-400 transition">
                Gallery
              </a>
            </li>

            <li>
              <a href="#amenities" className="hover:text-yellow-400 transition">
                Amenities
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="space-y-4 text-gray-400 text-sm">

            <a
              href="tel:+919133633327"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 9133 633 327</span>
            </a>

            <a
              href="mailto:sales@epoquegroup.in"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaEnvelope className="text-yellow-400" />
              <span>sales@epoquegroup.in</span>
            </a>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Epoque Group. All Rights Reserved.
      </div>

    </footer>
  );
}
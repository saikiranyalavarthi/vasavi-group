import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6 md:px-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

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
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Gallery</li>
            <li className="hover:text-yellow-400 cursor-pointer">Specifications</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="space-y-4 text-gray-400 text-sm">

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 9133 633 327</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <span>sales@epoquegroup.in</span>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">

            <div className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-full hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-full hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-full hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              <FaLinkedinIn />
            </div>

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
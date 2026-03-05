import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `New Enquiry:
Name: ${form.name}
Phone: ${form.phone}
Apartment: ${form.type}
Message: ${form.message}`;

    const whatsappURL =
      "https://wa.me/919133633327?text=" + encodeURIComponent(text);

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="bg-black py-24 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-widest">
          ENQUIRE NOW
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* CONTACT INFO */}
          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-yellow-400 text-xl" />
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-400">+91 9133 633 327</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-yellow-400 text-xl" />
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400">sales@epoquegroup.in</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-400 text-xl" />
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-400">Hyderabad, Telangana</p>
              </div>
            </div>

          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-yellow-400 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-yellow-400 outline-none"
            />

            <select
              name="type"
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-yellow-400 outline-none"
            >
              <option className="text-black">Select Apartment Type</option>
              <option className="text-black">2 BHK</option>
              <option className="text-black">3 BHK</option>
              <option className="text-black">4 BHK</option>
            </select>

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-yellow-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition w-full"
            >
              Submit Enquiry
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
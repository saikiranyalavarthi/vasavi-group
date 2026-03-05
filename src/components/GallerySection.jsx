import { useState, useEffect } from "react";
import { X } from "lucide-react";

const images = [
  "/Elevations/v1.jpg",
  "/Elevations/v2.jpg",
  "/Elevations/v3.jpg",
  "/Elevations/v4.jpg",
  "/Elevations/v5.jpg",
  "/Elevations/v6.jpg",
  "/Elevations/v7.jpg",
  "/Elevations/v8.jpg",
  "/Elevations/v9.jpg",
  "/Elevations/v10.jpg",
  "/Elevations/v11.jpg",
  "/Elevations/v12.jpg",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  return (
    <section className="bg-black py-4 px-4 md:px-16" id="gallery">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-widest">
          GALLERY
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg md:rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-40 md:h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-yellow-400 text-sm md:text-lg font-semibold tracking-wider">
                  VIEW
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">

          {/* CLOSE BUTTON */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage}
            alt="preview"
            className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
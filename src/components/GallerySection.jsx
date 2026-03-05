import { useState } from "react";

const images = [
  "/Elevations/v1.jpg",
  "/Elevations/v2.jpg",
  "/Elevations/v3.jpg",
  "/Elevations/v4.jpg",
  "/Elevations/v5.jpg",
  "/Elevations/v6.jpg",
  "/Elevations/v7.jpg",
  "/Elevations/v8.jpg",
  " /Elevations/v9.jpg",
  "/Elevations/v10.jpg",
  "/Elevations/v11.jpg",
  "/Elevations/v12.jpg",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-black py-24 px-6 md:px-16" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-widest">
          GALLERY
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-yellow-400 text-lg font-semibold tracking-wider">
                  VIEW IMAGE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

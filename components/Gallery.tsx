"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  { src: "/gallery/project1.jpg", title: "Skyline Towers" },
  { src: "/gallery/project2.jpg", title: "Eco Valley Offices" },
  { src: "/gallery/project3.jpg", title: "Urban Square" },
  { src: "/gallery/project4.jpg", title: "Emerald Corporate Park" },
  { src: "/gallery/project5.jpg", title: "Sunrise Business Hub" },
  { src: "/gallery/project6.jpg", title: "Infinity Heights" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#7A1C1C]">Projects Gallery</span>
        </motion.h2>
        <motion.div
          className="mx-auto w-24 h-1 bg-[#7A1C1C] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImage(project.src)}
          >
            <Image
              src={project.src}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{project.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <Image
              src={selectedImage}
              alt="Project Preview"
              width={1000}
              height={600}
              className="rounded-xl object-contain w-full max-h-[80vh]"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;

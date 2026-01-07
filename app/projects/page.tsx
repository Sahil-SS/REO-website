"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luxury Residential Villa",
    description:
      "A premium residential villa designed with modern architecture, refined materials, and optimized spatial flow.",
    images: ["/projects/kolkata.jpg"],
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    description:
      "A thoughtfully planned commercial space built for scalability, efficiency, and long-term asset value.",
    images: ["/projects/dhanbad.jpg"],
  },
  {
    id: 3,
    title: "Commercial Office Complex",
    description:
      "A thoughtfully planned commercial space built for scalability, efficiency, and long-term asset value.",
    images: ["/projects/ranchi.jpg"],
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[640px] pt-10 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/project-bg.jpg"
          alt="REO Projects"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-white text-5xl md:text-6xl font-bold mb-4"
          >
            Our Signature Projects
          </motion.h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Curated real estate developments designed for long-term value and
            architectural excellence.
          </p>
        </motion.div>
      </section>

      {/* ===== PROJECT LIST ===== */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.1)] overflow-hidden grid lg:grid-cols-2"
          >
            {/* Images */}
            <div className="grid grid-cols-2 gap-3 p-4">
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-64 rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setPreviewImage(img)}
                >
                  <Image
                    src={img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#db071d] mb-4">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                {project.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpen(true)}
                className="cursor-pointer w-fit bg-gradient-to-r from-[#db071d] to-[#b00516] text-white px-10 py-3 rounded-xl font-semibold shadow-md"
              >
                Buy This Project
              </motion.button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ===== PRICING MODAL ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white max-w-md w-full rounded-3xl p-8 text-center shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#db071d] mb-4">
                Pricing on Request
              </h3>
              <p className="text-gray-600 mb-8">
                Project pricing and availability are shared after a brief
                discussion. Please contact our team to proceed further.
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 rounded-lg border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => router.push("/contact-us")}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#db071d] to-[#b00516] text-white font-semibold cursor-pointer"
                >
                  Contact Team
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== IMAGE PREVIEW MODAL ===== */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center px-6"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white rounded-full p-2 transition"
              >
                <X size={20} className="cursor-pointer"/>
              </button>

              <Image
                src={previewImage}
                alt="Project Preview"
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

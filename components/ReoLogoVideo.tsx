"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ReoLogoVideo() {
  return (
    <section className="bg-white w-full pt-12 pb-8 flex flex-col items-center text-center">
      {/* 🔺 Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-10 px-4"
      >
        Welcome to <span className="text-[#db071d]">REO</span>
      </motion.h2>

      {/* 🎥 Animated Video Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-[95%] sm:w-[90%] md:w-[80%] lg:w-[75%] h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_0_15px_-8px_rgba(0,0,0,0.2)]"
      >
        {/* 🖥️ Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        >
          <source src="/videos/reo-logo.mp4" type="video/mp4" />
        </video>

        {/* 📱 Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        >
          <source src="/videos/reo-logo.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* 🏷️ Animated Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-700 text-lg md:text-xl mt-10 max-w-2xl leading-relaxed"
      >
        Where Real Estate Meets Smart Investment
      </motion.p>
    </section>
  );
}

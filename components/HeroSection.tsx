"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const MotionButton = motion(Button);

const slides = [
  {
    src: "/images/property1.jpg",
    tagline: "Where Quality Meets Opportunity.",
    description:
      "REO Developments is dedicated to creating sustainable ecosystems — workspaces that uplift individuals, communities, and the environment.",
  },
  {
    src: "/images/property2.jpg",
    tagline: "Over 175 Tenants Across Metro Cities.",
    description:
      "Our portfolio proudly hosts multinational and Indian corporations thriving in our premium workspaces.",
  },
  {
    src: "/images/property3.jpg",
    tagline: "Generating Rental Income with Confidence.",
    description:
      "We empower our investors and partners to achieve long-term, sustainable growth through reliable real estate investments.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      7000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background slideshow */}
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={index}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                backgroundImage: `url(${slide.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ) : null
        )}
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60 z-10" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 px-6 max-w-3xl text-center translate-y-28"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          key={slides[current].tagline}
          className="text-xl md:text-5xl font-bold mb-4 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {slides[current].tagline}
        </motion.h1>

        <motion.p
          key={slides[current].description}
          className="text-gray-200 mb-8 text-lg md:text-xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {slides[current].description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <MotionButton
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(219, 7, 29, 0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#db071d] hover:bg-[#8b0010] text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md transition-all duration-300"
          >
            Explore Properties
          </MotionButton>
        </motion.div>
      </motion.div>

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    src: "/images/hero-image1.png",
    tagline: "Where Quality Meets Opportunity.",
  },
  {
    src: "/images/hero-image2.jpg",
    tagline: "Over 175 Tenants Across Metro Cities.",
  },
  {
    src: "/images/property3.png",
    tagline: "Generating Rental Income with Confidence.",
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
    <section className="relative h-screen w-full overflow-hidden">
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
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
            />
          ) : null
        )}
      </AnimatePresence>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Text slightly below center */}
      <motion.div
        className="relative z-20 px-6 text-center top-2/3 -translate-y-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          key={slides[current].tagline}
          className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap"
        >
          {slides[current].tagline}
        </motion.h1>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;

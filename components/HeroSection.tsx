"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const MotionButton = motion(Button);

const slides = [
  {
    src: "/images/property1.jpg",
    tagline: "Where Quality Meets Opportunity!!",
    description:
      "RERI Group is dedicated to creating sustainable workspaces that positively impact communities and individuals.",
  },
  {
    src: "/images/mumbai.jpg",
    tagline: "Over 175 Tenants Across Metro Cities",
    description:
      "Our portfolio includes multinational and Indian corporations thriving in our premium workspaces.",
  },
  {
    src: "/images/delhi.jpg",
    tagline: "Generating Rental Income with Confidence",
    description:
      "We guarantee our shareholders support in generating rental income from metropolitan cities, making dreams possible.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      7000 // change every 7 seconds
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background images */}
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.img
              key={index}
              src={slide.src}
              alt={`Slide ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          ) : null
        )}
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Text */}
      <motion.div
        className="z-20 px-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          key={slides[current].tagline}
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {slides[current].tagline}
        </motion.h1>

        <motion.p
          key={slides[current].description}
          className="text-gray-200 mb-8 text-lg md:text-xl"
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
              boxShadow: "0px 0px 20px rgba(37,150,190,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold text-lg"
          >
            Explore Properties
          </MotionButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

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
    src: "/images/property4.jpg",
    tagline: "Generating Rental Income with Confidence.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] md:h-[100vh] w-full overflow-hidden">
      {/* ========================================================= */}
      {/* 🟢 NEW: Background videos for desktop and mobile */}
      {/* ========================================================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* ========================================================= */}
      {/* 🔴 OLD SYSTEM (Commented out) - Background slideshow */}
      {/* ========================================================= */}
      {/*
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
      */}

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Text slightly below center */}
      <motion.div
        className="relative z-20 px-6 text-center top-2/3 -translate-y-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <motion.h1
          key={slides[current].tagline}
          className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap"
        >
          {slides[current].tagline}
        </motion.h1> */}
      </motion.div>

      {/* ========================================================= */}
      {/* 🟦 NEW: Social Media Icons (Left side) */}
      {/* ========================================================= */}
      <div className="absolute left-6 bottom-20 z-20 flex flex-col gap-5 text-white">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210" // your phone number in international format
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <FaWhatsapp size={26} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram size={24} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaFacebookF size={22} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedinIn size={22} />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 transition"
        >
          <FaYoutube size={24} />
        </a>

        {/* Twitter (X) */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition"
        >
          <FaTwitter size={22} />
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500 transition"
        >
          <FaTelegramPlane size={22} />
        </a>
      </div>

      {/* ========================================================= */}
      {/* 🔽 Scroll Down Indicator (center bottom) */}
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* 🔽 Smooth Continuous Down Arrow Indicator */}
      {/* ========================================================= */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: "smooth",
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 hover:stroke-[#db071d] transition-colors duration-300"
        >
          <path d="M12 4v16M5 14l7 7 7-7" />
        </svg>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/70 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;

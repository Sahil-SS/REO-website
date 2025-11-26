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
    <section className="relative h-[100vh] sm:h-[100vh] w-full overflow-hidden">
      {/* ========================================================= */}
      {/* BACKGROUND VIDEOS */}
      {/* ========================================================= */}

      {/* DESKTOP VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onTimeUpdate={(e) => {
          const v = e.target;
          if (v.duration - v.currentTime < 0.25) {
            v.currentTime = 0;
            v.play();
          }
        }}
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source
          src="https://res.cloudinary.com/docecjwz4/video/upload/f_auto,vc_auto,q_auto:best/reo_main_tjgp0i.mp4"
          type="video/mp4"
        />
      </video>

      {/* MOBILE VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onTimeUpdate={(e) => {
          const v = e.target;
          if (v.duration - v.currentTime < 0.25) {
            v.currentTime = 0;
            v.play();
          }
        }}
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      >
        <source
          src="https://res.cloudinary.com/docecjwz4/video/upload/f_auto,vc_auto,q_auto:best/reo_mobile_p5osyw.mp4"
          type="video/mp4"
        />
      </video>

      {/* ========================================================= */}
      {/* SOCIAL ICONS LEFT SIDE */}
      {/* ========================================================= */}
      <div className="absolute left-3 sm:left-6 bottom-16 sm:bottom-20 z-20 flex flex-col gap-4 sm:gap-5 text-white">
        <a href="https://wa.me/+918436969369" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
          <FaWhatsapp size={22} className="sm:w-6 sm:h-6" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <FaInstagram size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <FaFacebookF size={18} className="sm:w-5 sm:h-5" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaLinkedinIn size={18} className="sm:w-5 sm:h-5" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
          <FaYoutube size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
          <FaTwitter size={18} className="sm:w-5 sm:h-5" />
        </a>
        <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition">
          <FaTelegramPlane size={18} className="sm:w-5 sm:h-5" />
        </a>
      </div>

      {/* ========================================================= */}
      {/* SCROLL DOWN INDICATOR */}
      {/* ========================================================= */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
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
          className="w-8 h-8 sm:w-10 sm:h-10 hover:stroke-[#db071d] transition-colors duration-300"
        >
          <path d="M12 4v16M5 14l7 7 7-7" />
        </svg>
      </motion.div>

      {/* ========================================================= */}
      {/* BOTTOM FADE OVERLAY */}
      {/* ========================================================= */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-linear-to-t from-black/60 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;

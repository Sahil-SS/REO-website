"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <motion.div
        className="max-w-[1800px] mx-auto flex items-center justify-between px-14 transition-all duration-700"
        animate={{
          height: scrolled ? "70px" : "85px", // slightly tighter navbar
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {/* ---------- Logo ---------- */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <motion.div
            className="relative flex-shrink-0"
            animate={{
              width: scrolled ? 120 : 150, // reduced size
              height: scrolled ? 35 : 45, // fits inside navbar perfectly
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={scrolled ? "scrolled" : "top"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/logo.png"
                  alt="REO Developments Logo"
                  width={scrolled ? 120 : 150}
                  height={scrolled ? 35 : 45}
                  className="object-contain"
                  priority
                  style={{
                    filter: scrolled ? "none" : "brightness(0) invert(1)",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Link>

        {/* ---------- Navigation Links ---------- */}
        <div
          className={`hidden lg:flex items-center justify-center flex-1 gap-14 font-medium transition-colors duration-700 text-[18px] ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <Link href="/" className="hover:text-[#db071d] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#db071d] transition">
            Who We Are
          </Link>
          <Link href="/coming-soon" className="hover:text-[#db071d] transition">
            Projects
          </Link>
          <Link href="/contact-us" className="hover:text-[#db071d] transition">
            Contact Us
          </Link>
        </div>

        {/* ---------- Log In Button + Dropdown ---------- */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <div className="relative" ref={dropdownRef}>
            <Button
              onClick={() => setLoginOpen((prev) => !prev)}
              className={`rounded-lg px-7 py-2.5 transition-all duration-700 text-[17px] font-medium flex items-center gap-2 ${
                scrolled
                  ? "bg-[#db071d] text-white hover:bg-[#8b0010]"
                  : "bg-[#db071d]/90 text-white hover:bg-[#db071d]"
              }`}
            >
              Log In <ChevronDown className="w-4 h-4" />
            </Button>

            <AnimatePresence>
              {loginOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-100"
                >
                  <Link
                    href="/admin-login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setLoginOpen(false)}
                  >
                    Admin Login
                  </Link>
                  <Link
                    href="/user-login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setLoginOpen(false)}
                  >
                    User Login
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

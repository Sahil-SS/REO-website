"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = ({ setMenuOpen }: { setMenuOpen?: (open: boolean) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpenState, setMenuOpenState] = useState(false);
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Who We Are" },
    { href: "/coming-soon", label: "Projects" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      {/* ---------- Main Navbar ---------- */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-700"
        style={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.98)"
            : "rgba(255, 255, 255, 0)",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.08)"
            : "1px solid rgba(0,0,0,0)",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
        }}
      >
        <motion.div
          className="max-w-[1800px] mx-auto flex items-center justify-between px-6 md:px-14 transition-all duration-700"
          animate={{
            height: scrolled ? "70px" : "85px",
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* ---------- Logo ---------- */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <motion.div
              className="relative flex-shrink-0"
              animate={{
                width: scrolled ? 120 : 150,
                height: scrolled ? 35 : 45,
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

          {/* ---------- Desktop Nav Links ---------- */}
          <div
            className={`hidden lg:flex items-center justify-center flex-1 gap-14 font-medium transition-colors duration-700 text-[18px] ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#db071d] transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ---------- Desktop Log In ---------- */}
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

          {/* ---------- Mobile Hamburger ---------- */}
          <div className="flex lg:hidden">
            <button
              onClick={() => {
                setMenuOpenState(true);
                setMenuOpen?.(true); // notify parent (optional)
              }}
              aria-label="Open Menu"
              className={`p-2 rounded-md transition ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <Menu size={28} />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* ---------- Mobile Sidebar ---------- */}
      <AnimatePresence>
        {menuOpenState && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setMenuOpenState(false);
                setMenuOpen?.(false);
              }}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-gray-200">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={120}
                  height={35}
                  className="object-contain"
                />
                <button
                  onClick={() => {
                    setMenuOpenState(false);
                    setMenuOpen?.(false);
                  }}
                  aria-label="Close Menu"
                  className="text-gray-800"
                >
                  <X size={26} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 px-6 py-8 text-gray-800 text-[18px] font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setMenuOpenState(false);
                      setMenuOpen?.(false);
                    }}
                    className="hover:text-[#db071d] transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="px-6 mt-auto pb-8">
                <Button
                  onClick={() => {
                    setMenuOpenState(false);
                    setMenuOpen?.(false);
                    window.location.href = "/coming-soon";
                  }}
                  className="w-full bg-[#db071d] text-white hover:bg-[#8b0010] text-[17px] py-2.5 rounded-lg"
                >
                  Log In
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20 md:h-20"
        animate={{ scale: scrolled ? 1.01 : 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="REO Developments Logo"
            width={220}
            height={150}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800 h-full">
          <Link href="/" className="hover:text-[#b80000] transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#b80000] transition-colors duration-300">
            Who We Are
          </Link>
          {/* <Link href="/payment" className="hover:text-[#b80000] transition-colors duration-300">
            Pay
          </Link> */}
          <Link href="/coming-soon" className="hover:text-[#b80000] transition-colors duration-300">
            Projects
          </Link>
          <Link href="/coming-soon" className="hover:text-[#b80000] transition-colors duration-300">
            Loan
          </Link>
          <Link href="/contact-us" className="hover:text-[#b80000] transition-colors duration-300">
            Contact Us
          </Link>

          {/* Log In Dropdown (Click-to-toggle) */}
          <div className="relative" ref={dropdownRef}>
            <Button
              onClick={() => setLoginOpen((prev) => !prev)}
              className="bg-[#db071d] text-white hover:bg-[#8b0010] rounded-xl px-6 py-2 transition text-sm md:text-base flex items-center gap-1"
            >
              Log In <ChevronDown className="w-4 h-4" />
            </Button>

            {loginOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-12 right-0 bg-white border border-gray-200 shadow-md rounded-md w-48 py-2 z-50"
              >
                <Link
                  href="/coming-soon"
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-[#b80000] transition"
                >
                  Tenant Portal
                </Link>
                <Link
                  href="/coming-soon"
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-[#b80000] transition"
                >
                  Owner Portal
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <HiOutlineMenu className="w-7 h-7 text-gray-800 cursor-pointer" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 p-0 flex flex-col bg-white border-l border-gray-200 shadow-2xl [&>button]:hidden"
            >
              {/* Custom Header */}
              <div className="bg-gradient-to-r from-[#b80000] to-[#db071d] p-6 flex justify-between items-center shadow-md">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <SheetClose asChild>
                  <HiOutlineX className="w-6 h-6 cursor-pointer text-white hover:text-yellow-200 transition" />
                </SheetClose>
              </div>

              {/* Main Links */}
              <div className="flex flex-col space-y-4 py-8 px-6 font-medium text-gray-800">
                {[
                  { name: "Home", href: "/" },
                  { name: "Who We Are", href: "/about" },
                  // { name: "Pay", href: "/payment" },
                  { name: "Projects", href: "/coming-soon" },
                  { name: "Loan", href: "/coming-soon" },
                  { name: "Contact Us", href: "/contact-us" },
                ].map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.03, x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 text-gray-800 hover:text-[#f5c518] transition-all"
                      >
                        <span className="w-5 h-5 inline-block text-[#f5c518]">•</span>
                        <span>{item.name}</span>
                      </Link>
                    </SheetClose>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="mx-6 border-t border-gray-200"></div>

              {/* Login Section */}
              <div className="py-6 px-6 bg-[#fff8f8] rounded-t-xl mt-auto">
                <span className="block text-gray-900 font-semibold mb-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#f5c518]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12h.01M12 15h.01M9 12h.01M12 3C7.582 3 4 6.582 4 11c0 4.418 3.582 8 8 8 4.418 0 8-3.582 8-8 0-4.418-3.582-8-8-8z"
                    />
                  </svg>
                  Log In
                </span>

                <div className="ml-2 flex flex-col space-y-3 text-gray-700">
                  <SheetClose asChild>
                    <Link
                      href="/coming-soon"
                      className="flex items-center gap-2 hover:text-[#f5c518] transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-[#f5c518]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Tenant Portal
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/coming-soon"
                      className="flex items-center gap-2 hover:text-[#f5c518] transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-[#f5c518]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM21 21H3v-2a4 4 0 014-4h10a4 4 0 014 4v2z"
                        />
                      </svg>
                      Owner Portal
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

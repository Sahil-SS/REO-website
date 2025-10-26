"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-white/90 backdrop-blur-md"
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
            width={240}
            height={170}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800 h-full">
          <Link href="/" className="flex items-center h-full hover:text-[#db071d] transition-colors duration-300">
            Home
          </Link>

          <Link href="/about" className="flex items-center h-full hover:text-[#db071d] transition-colors duration-300">
            Who We Are
          </Link>

          <Link href="/coming-soon" className="flex items-center h-full hover:text-[#db071d] transition-colors duration-300">
            Invest
          </Link>

          <Link href="/coming-soon" className="flex items-center h-full hover:text-[#db071d] transition-colors duration-300">
            Projects
          </Link>

          <Link href="/coming-soon" className="flex items-center h-full hover:text-[#db071d] transition-colors duration-300">
            Loan
          </Link>

          {/* Contact Us */}
          <Link href="/contact-us" className="flex items-center h-full hover:text-[#db071d] transition-colors duration-300">
            Contact Us
          </Link>

          {/* Log In Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoginOpen(true)}
            onMouseLeave={() => setLoginOpen(false)}
          >
            <Button
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
                  href="/tenant-portal"
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-[#db071d] transition"
                >
                  Tenant Portal
                </Link>
                <Link
                  href="/owner-portal"
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-[#db071d] transition"
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
            <SheetContent side="right" className="w-72 p-6 flex flex-col bg-white">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#1C2B5B]">Menu</h2>
                <SheetClose asChild>
                  <HiOutlineX className="w-6 h-6 cursor-pointer" />
                </SheetClose>
              </div>

              <div className="flex flex-col space-y-6 mb-8 font-medium text-gray-800">
                <SheetClose asChild><Link href="/">Home</Link></SheetClose>
                <SheetClose asChild><Link href="/about">Who We Are</Link></SheetClose>
                <SheetClose asChild><Link href="/coming-soon">Invest</Link></SheetClose>
                <SheetClose asChild><Link href="/coming-soon">Projects</Link></SheetClose>
                <SheetClose asChild><Link href="/coming-soon">Loan</Link></SheetClose>
                <SheetClose asChild><Link href="#contact">Contact Us</Link></SheetClose>
              </div>

              {/* Log In dropdown in mobile */}
              <div className="mt-4">
                <span className="block text-gray-900 font-semibold mb-2">Log In</span>
                <div className="ml-2 flex flex-col space-y-2 text-gray-700">
                  <SheetClose asChild>
                    <Link href="/tenant-portal" className="hover:text-[#db071d]">
                      Tenant Portal
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/owner-portal" className="hover:text-[#db071d]">
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

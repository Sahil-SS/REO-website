"use client";

import { useEffect, useState } from "react";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFooter = () => {
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-0.5 md:py-1"
        animate={{ scale: scrolled ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="REO Developments Logo"
            width={160} 
            height={70}
            className="object-contain"
          />
        </Link>

        {/* Right: Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <Link
            href="/"
            className="hover:text-[#1C2B5B] transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-[#1C2B5B] transition-colors duration-300"
          >
            Who We Are
          </Link>

          <Link
            href="/coming-soon"
            className="hover:text-[#1C2B5B] transition-colors duration-300"
          >
            Invest
          </Link>

          <Link
            href="/coming-soon"
            className="hover:text-[#1C2B5B] transition-colors duration-300"
          >
            Projects
          </Link>

          <Link
            href="/coming-soon"
            className="hover:text-[#1C2B5B] transition-colors duration-300"
          >
            Loan
          </Link>

          {/* Portals Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#1C2B5B] transition-colors duration-300">
              Portals <ChevronDown className="w-4 h-4" />
            </button>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: dropdownOpen ? 1 : 0,
                y: dropdownOpen ? 0 : -10,
              }}
              transition={{ duration: 0.25 }}
              className={`absolute top-8 left-0 bg-white shadow-lg rounded-md border border-gray-100 py-2 w-48 ${
                dropdownOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <Link
                href="/coming-soon"
                className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1C2B5B] transition"
              >
                Tenant Portal
              </Link>
              <Link
                href="/coming-soon"
                className="block px-4 py-2 hover:bg-gray-50 hover:text-[#1C2B5B] transition"
              >
                Owner Portal
              </Link>
            </motion.div>
          </div>

          <Button
            onClick={scrollToFooter}
            className="bg-[#db071d] text-white hover:bg-[#8b0010] rounded-xl px-5 transition"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <HiOutlineMenu className="w-7 h-7 text-gray-800 cursor-pointer" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 p-6 flex flex-col bg-white"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#1C2B5B]">Menu</h2>
                <SheetClose asChild>
                  <HiOutlineX className="w-6 h-6 cursor-pointer" />
                </SheetClose>
              </div>

              <div className="flex flex-col space-y-6 mb-8 text-gray-800 font-medium">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="text-lg hover:text-[#1C2B5B] transition"
                  >
                    Home
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="text-lg hover:text-[#1C2B5B] transition"
                  >
                    Who We Are
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/coming-soon"
                    className="text-lg hover:text-[#1C2B5B] transition"
                  >
                    Invest
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/coming-soon"
                    className="text-lg hover:text-[#1C2B5B] transition"
                  >
                    Projects
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/coming-soon"
                    className="text-lg hover:text-[#1C2B5B] transition"
                  >
                    Loan
                  </Link>
                </SheetClose>

                {/* Mobile Portals */}
                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-semibold text-gray-900">
                    Portals
                  </span>
                  <div className="ml-4 flex flex-col space-y-2 text-gray-700">
                    <SheetClose asChild>
                      <Link
                        href="/coming-soon"
                        className="hover:text-[#1C2B5B]"
                      >
                        Tenant Portal
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/coming-soon"
                        className="hover:text-[#1C2B5B]"
                      >
                        Owner Portal
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </div>

              {/* Mobile Contact Us */}
              <SheetClose asChild>
                <Button
                  onClick={scrollToFooter}
                  className="bg-[#db071d] text-white hover:bg-[#8b0010] w-full rounded-xl"
                >
                  Contact Us
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

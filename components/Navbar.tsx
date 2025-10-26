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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFooter = () => {
    const footer = document.getElementById("contact");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

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
        className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20 md:h-24"
        animate={{ scale: scrolled ? 1.01 : 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="REO Developments Logo"
            width={200} // slightly larger
            height={80} // fixed height
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800 h-full">
          {["Home", "Who We Are", "Invest", "Projects", "Loan"].map((link) => (
            <Link
              key={link}
              href="/coming-soon"
              className="flex items-center h-full hover:text-[#db071d] transition-colors duration-300"
            >
              {link}
            </Link>
          ))}

          {/* Dropdown */}
          <div
            className="relative group h-full flex items-center"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#db071d] transition-colors duration-300">
              Portals <ChevronDown className="w-4 h-4" />
            </button>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: dropdownOpen ? 1 : 0, y: dropdownOpen ? 0 : -10 }}
              transition={{ duration: 0.25 }}
              className={`absolute top-8 left-0 bg-white shadow-md rounded-md border border-gray-200 py-2 w-48 ${
                dropdownOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {["Tenant Portal", "Owner Portal"].map((portal) => (
                <Link
                  key={portal}
                  href="/coming-soon"
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-[#db071d] transition"
                >
                  {portal}
                </Link>
              ))}
            </motion.div>
          </div>

          <Button
            onClick={scrollToFooter}
            className="bg-[#db071d] text-white hover:bg-[#8b0010] rounded-xl px-6 py-2 transition text-sm md:text-base"
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
            <SheetContent side="right" className="w-72 p-6 flex flex-col bg-white">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#1C2B5B]">Menu</h2>
                <SheetClose asChild>
                  <HiOutlineX className="w-6 h-6 cursor-pointer" />
                </SheetClose>
              </div>

              <div className="flex flex-col space-y-6 mb-8 font-medium text-gray-800">
                {["Home", "Who We Are", "Invest", "Projects", "Loan"].map((link) => (
                  <SheetClose key={link} asChild>
                    <Link href="/coming-soon" className="text-lg hover:text-[#db071d] transition">
                      {link}
                    </Link>
                  </SheetClose>
                ))}

                {/* Mobile Dropdown */}
                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-semibold text-gray-900">Portals</span>
                  <div className="ml-4 flex flex-col space-y-2 text-gray-700">
                    {["Tenant Portal", "Owner Portal"].map((portal) => (
                      <SheetClose key={portal} asChild>
                        <Link href="/coming-soon" className="hover:text-[#db071d]">
                          {portal}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </div>

              <SheetClose asChild>
                <Button
                  onClick={scrollToFooter}
                  className="bg-[#db071d] text-white hover:bg-[#8b0010] w-full rounded-xl py-2"
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

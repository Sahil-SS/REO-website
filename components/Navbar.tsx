"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-100 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-[#2596be]">
          RERI Group
        </Link>

        {/* Right: Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <Link href="/" className="hover:text-[#2596be] transition">
            Home
          </Link>

          <Link href="/who-we-are" className="hover:text-[#2596be] transition">
            Who We Are
          </Link>

          {/* Portals Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#2596be] transition">
              Portals <ChevronDown className="w-4 h-4" />
            </button>

            {/* Dropdown menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: dropdownOpen ? 1 : 0, y: dropdownOpen ? 0 : -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-8 left-0 bg-white shadow-lg rounded-md border border-gray-100 py-2 w-48 ${
                dropdownOpen ? "visible" : "invisible"
              }`}
            >
              <Link
                href="/tenant-portal"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Tenant Portal
              </Link>
              <Link
                href="/owner-portal"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Owner Portal
              </Link>
            </motion.div>
          </div>

          <Link href="/invest" className="hover:text-[#2596be] transition">
            Invest
          </Link>

          <Link href="/projects" className="hover:text-[#2596be] transition">
            Projects
          </Link>

          <Link href="/loan" className="hover:text-[#2596be] transition">
            Loan
          </Link>

          <Link href="/contact-us">
            <Button className="bg-[#2596be] text-white hover:bg-[#1e83a7] transition">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <HiOutlineMenu className="w-6 h-6 text-gray-800 cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-6 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-[#2596be]">Menu</h2>
                <SheetClose asChild>
                  <HiOutlineX className="w-6 h-6 cursor-pointer" />
                </SheetClose>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col space-y-6 mb-8">
                <SheetClose asChild>
                  <Link href="/" className="text-lg hover:text-[#2596be] transition">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/who-we-are" className="text-lg hover:text-[#2596be] transition">
                    Who We Are
                  </Link>
                </SheetClose>

                {/* Portals Dropdown */}
                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-medium text-gray-800">Portals</span>
                  <div className="ml-4 flex flex-col space-y-2 text-gray-700">
                    <SheetClose asChild>
                      <Link href="/tenant-portal" className="hover:text-[#2596be]">
                        Tenant Portal
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/owner-portal" className="hover:text-[#2596be]">
                        Owner Portal
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                <SheetClose asChild>
                  <Link href="/invest" className="text-lg hover:text-[#2596be] transition">
                    Invest
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/projects" className="text-lg hover:text-[#2596be] transition">
                    Projects
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/loan" className="text-lg hover:text-[#2596be] transition">
                    Loan
                  </Link>
                </SheetClose>
              </div>

              <SheetClose asChild>
                <Button className="bg-[#2596be] text-white hover:bg-[#1e83a7] w-full">
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NAV_ITEMS = ["Home", "About Us", "Newsletter", "Portfolios", "Contact Us"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div animate={{ scale: scrolled ? 1.05 : 1 }} transition={{ type: "spring", stiffness: 120 }}>
          <Link href="/" className="text-2xl font-bold text-brand tracking-wide">
            RERI Group
          </Link>
        </motion.div>

        {/* Center Links */}
        <motion.div className="hidden md:flex flex-1 justify-center space-x-8" animate={{ scale: scrolled ? 1.02 : 1 }}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-brand transition font-medium"
            >
              {item}
            </Link>
          ))}
        </motion.div>

        {/* Desktop Auth Buttons */}
        <motion.div className="hidden md:flex space-x-4 items-center" animate={{ scale: scrolled ? 1.02 : 1 }}>
          <Button variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </motion.div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <HiOutlineMenu className="w-6 h-6 text-gray-700 cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-6 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Menu</h2>
                <SheetClose asChild>
                  <HiOutlineX className="w-6 h-6 cursor-pointer" />
                </SheetClose>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col space-y-6 mb-6">
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-lg font-medium hover:text-brand transition"
                    >
                      {item}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="flex flex-col space-y-4">
                <SheetClose asChild>
                  <Button variant="outline" className="w-full">
                    <Link href="/login">Login</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="w-full">
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

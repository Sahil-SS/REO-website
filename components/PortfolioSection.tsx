"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cities = [
  { name: "Mumbai", image: "/images/mumbai.jpg", link: "/cities/mumbai" },
  { name: "Bangalore", image: "/images/bangalore.jpg", link: "/cities/bangalore" },
  { name: "Delhi", image: "/images/delhi.jpg", link: "/cities/delhi" },
  { name: "Pune", image: "/images/pune.jpg", link: "/cities/pune" },
];

export default function PortfolioSection() {
  return (
    <section className="py-16 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore RERI Properties
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our premium properties across top cities. Click on a city to see all listings!
        </motion.p>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full h-60 md:h-72 lg:h-80 overflow-hidden rounded-3xl cursor-pointer"
            >
              <Link href={city.link}>
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4 text-white text-2xl font-semibold">
                  {city.name}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

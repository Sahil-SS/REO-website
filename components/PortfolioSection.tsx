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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore RERI Properties
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover our premium properties across top cities. Click on a city to see all listings!
        </motion.p>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.03,
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full h-80 overflow-hidden rounded-3xl cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-300"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link href={city.link}>
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <motion.h3 
                    className="text-3xl font-bold mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {city.name}
                  </motion.h3>
                  <p className="text-lg opacity-90 mb-4">Premium Properties</p>
                  
                  {/* Animated arrow */}
                  <motion.div
                    className="flex items-center text-sm font-semibold"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Explore Properties
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(37, 99, 235, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Properties
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

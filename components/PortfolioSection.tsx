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
    <section className="py-24 bg-gradient-to-br from-white via-[#fdf5f3] to-[#f8f6f5]">
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#db071d] to-[#8b0010] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore REO Properties
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover premium real estate developments across India top cities.
          Each project embodies our signature blend of elegance, sustainability, and innovation.
        </motion.p>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                y: -6,
              }}
              whileTap={{ scale: 0.97 }}
              className="relative w-full h-80 overflow-hidden rounded-3xl cursor-pointer group shadow-md hover:shadow-xl transition-all duration-400"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link href='/coming-soon'>
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <motion.h3
                    className="text-3xl font-bold mb-2 tracking-tight"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {city.name}
                  </motion.h3>
                  <p className="text-lg opacity-90 mb-4">Luxury Developments</p>

                  {/* Arrow Animation */}
                  <motion.div
                    className="flex items-center text-sm font-semibold text-[#F5E6E0]"
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

                {/* Subtle Glow */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-[#db071d]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#F5E6E0]/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-[#db071d] text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:bg-[#8b0010] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Properties
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Home, CheckCircle2, HandCoins, TrendingUp } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Home className="w-10 h-10 text-[#2596be]" />,
      title: "Earn from Real Estate Without Ownership",
      desc: "Invest confidently in premium real estate opportunities without the complexities of ownership.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-[#2596be]" />,
      title: "Seamless Access",
      desc: "Get started effortlessly through our modern, transparent, and user-friendly platform.",
    },
    {
      icon: <HandCoins className="w-10 h-10 text-[#2596be]" />,
      title: "Hassle-Free Management",
      desc: "Enjoy passive income while we take care of property operations and maintenance.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#2596be]" />,
      title: "Smart Investment Growth",
      desc: "Be part of one of the most stable and rewarding investment segments with strong returns.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Why Choose <span className="text-[#2596be]">RERI Group</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg"
      >
        Experience trusted growth, transparent operations, and future-ready investments that redefine real estate ownership.
      </motion.p>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              boxShadow: "0 10px 25px rgba(37,150,190,0.15)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#2596be]/30 transition duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 bg-[#2596be]/10 rounded-full">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
  
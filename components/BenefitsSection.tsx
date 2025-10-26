"use client";

import { motion } from "framer-motion";
import { Home, CheckCircle2, HandCoins, TrendingUp } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Home className="w-10 h-10 text-[#db071d]" />,
      title: "Earn from Real Estate Without Ownership",
      desc: "Invest in premium real estate opportunities with ease — no maintenance, no stress, just returns.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-[#db071d]" />,
      title: "Effortless Accessibility",
      desc: "Get started instantly with a transparent and intuitive digital platform built for investors.",
    },
    {
      icon: <HandCoins className="w-10 h-10 text-[#db071d]" />,
      title: "Hassle-Free Management",
      desc: "Enjoy consistent rental income while we handle property operations, tenants, and upkeep.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#db071d]" />,
      title: "Smart, Sustainable Growth",
      desc: "Participate in one of the most stable asset classes — combining growth, safety, and impact.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-6 text-center">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      >
        Why Choose{" "}
        <span className="bg-gradient-to-r from-[#db071d] to-[#8b0010] bg-clip-text text-transparent">
          REO Developments
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
      >
        Empowering investors through reliability, transparency, and innovation —
        redefining real estate ownership for the modern era.
      </motion.p>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              boxShadow: "0 12px 30px rgba(219, 7, 29, 0.15)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:border-[#db071d]/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-5">
              <div className="p-4 bg-[#db071d]/10 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

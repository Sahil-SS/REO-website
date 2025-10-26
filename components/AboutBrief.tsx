"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutBrief = () => {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#7A1C1C] font-extrabold">REO Developments</span>{" "}
          <span className="font-medium text-gray-800">– Who We Are</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="mx-auto w-24 h-1 bg-[#7A1C1C] rounded-full mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Subheading */}
        <motion.h3
          className="text-xl md:text-2xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Where <span className="text-[#7A1C1C]">Quality Meets Opportunity</span>
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-700 mb-10 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          REO Developments is committed to crafting sustainable, high-performance
          workspaces that foster innovation and well-being. We strive to build
          enduring ecosystems that positively impact individuals, communities,
          and the environment — empowering multinational and Indian corporations
          to thrive in thoughtfully designed environments.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            asChild
            className="bg-[#7A1C1C] hover:bg-[#611515] text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md transition-all duration-300"
          >
            <Link href="/about">Know More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBrief;

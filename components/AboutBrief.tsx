"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutBrief = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#2596be] font-bold">RERI Group</span> – Who We Are
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="mx-auto w-24 h-1 bg-[#2596be] rounded-full mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Subheading */}
        <motion.h3
          className="text-lg md:text-xl font-medium text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Where <span className="text-[#2596be] font-semibold">Quality Meets Opportunity</span>
        </motion.h3>

        {/* Paragraph */}
        <motion.p
          className="text-gray-700 mb-10 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          RERI Group is dedicated to creating sustainable workspaces that positively impact individuals, communities, and the environment. Our mission is to develop long-term ecosystems that enhance well-being while supporting a diversified tenant base of multinational and Indian corporations.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="bg-[#2596be] hover:bg-[#1e7aa8] text-white px-8 py-3 rounded-lg font-semibold text-lg">
            <Link href="/about">Know More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBrief;

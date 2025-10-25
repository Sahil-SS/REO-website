"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaRulerCombined,
  FaBuilding,
  FaHandHoldingUsd,
  FaCheckCircle,
} from "react-icons/fa";
import { RiBuildingLine } from "react-icons/ri";
import { GiHand } from "react-icons/gi";

const highlights = [
  {
    title: "Total Leasable Area",
    value: 38.1,
    unit: "msf",
    icon: <FaRulerCombined className="w-10 h-10 text-[#2596be]" />,
  },
  {
    title: "Completed Area",
    value: 31,
    unit: "msf",
    icon: <FaBuilding className="w-10 h-10 text-[#2596be]" />,
  },
  {
    title: "Committed Occupancy",
    value: 92.9,
    unit: "%*",
    icon: <RiBuildingLine className="w-10 h-10 text-[#2596be]" />,
  },
  {
    title: "Q1FY26 Revenue from Operations",
    value: 7523,
    unit: "Mn",
    icon: <FaHandHoldingUsd className="w-10 h-10 text-[#2596be]" />,
  },
  {
    title: "Tenants",
    value: 275,
    unit: "+",
    icon: <GiHand className="w-10 h-10 text-[#2596be]" />,
  },
  {
    title: "Completed Buildings",
    value: 61,
    unit: "",
    icon: <FaCheckCircle className="w-10 h-10 text-[#2596be]" />,
  },
];

const KeyHighlights = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center">
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Key Highlights
      </motion.h2>

      <motion.p
        className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Portfolio of RERI Group with significant embedded growth opportunities.
      </motion.p>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02,
              y: -5
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.08,
              ease: "easeOut"
            }}
          >
            {/* Icon */}
            <motion.div
              className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">{item.title}</h3>

            {/* Animated Number */}
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.p
                className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                <CountUp
                  start={0}
                  end={item.value}
                  decimals={item.value % 1 !== 0 ? 1 : 0}
                  duration={2.5}
                  separator=","
                />
                <span className="text-2xl font-normal text-gray-600 dark:text-gray-400 ml-2">{item.unit}</span>
              </motion.p>

              {/* Animated underline */}
              <motion.div
                className="h-1 w-16 mx-auto mt-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footnote */}
      <p className="text-xs text-gray-500 mt-8 max-w-2xl mx-auto">
        * Committed occupancy excluding Pocharam. Board approval received for potential divestment of Mindspace Pocharam. Q City has been acquired post 31<sup>st</sup> March, 2025 and hence, certain operational numbers are presented on a pro-forma basis as if Q City is part of the REIT as on 30<sup>th</sup> June, 2025
      </p>
    </section>
  );
};

export default KeyHighlights;

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
    <section className="py-20 px-6 bg-white text-center">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Key Highlights
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Portfolio of RERI Group with significant embedded growth opportunities.
      </motion.p>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {/* Icon */}
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-medium text-gray-800">{item.title}</h3>

            {/* Animated Number */}
            <motion.p
              className="text-3xl md:text-4xl font-bold mt-2 text-[#2596be] relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <CountUp
                start={0}
                end={item.value}
                decimals={item.value % 1 !== 0 ? 1 : 0}
                duration={2}
                separator=","
              />{" "}
              <span className="text-xl font-normal text-gray-600">{item.unit}</span>

              {/* Underline Accent */}
              <span className="block h-1 w-12 mx-auto mt-1 bg-[#2596be] rounded-full" />
            </motion.p>
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

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
    icon: <FaRulerCombined className="w-10 h-10 text-[#7A1C1C]" />,
  },
  {
    title: "Completed Area",
    value: 31,
    unit: "msf",
    icon: <FaBuilding className="w-10 h-10 text-[#7A1C1C]" />,
  },
  {
    title: "Committed Occupancy",
    value: 92.9,
    unit: "%*",
    icon: <RiBuildingLine className="w-10 h-10 text-[#7A1C1C]" />,
  },
  {
    title: "Q1FY26 Revenue from Operations",
    value: 7523,
    unit: "Mn",
    icon: <FaHandHoldingUsd className="w-10 h-10 text-[#7A1C1C]" />,
  },
  {
    title: "Tenants",
    value: 275,
    unit: "+",
    icon: <GiHand className="w-10 h-10 text-[#7A1C1C]" />,
  },
  {
    title: "Completed Buildings",
    value: 61,
    unit: "",
    icon: <FaCheckCircle className="w-10 h-10 text-[#7A1C1C]" />,
  },
];

const KeyHighlights = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 text-center">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[#7A1C1C]">Key Highlights</span>
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A portfolio by <span className="font-semibold text-[#7A1C1C]">REO Developments</span>,
        showcasing exceptional growth and long-term value creation.
      </motion.p>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#7A1C1C]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Icon */}
            <motion.div
              className="mb-6 p-5 bg-[#7A1C1C]/5 rounded-2xl"
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>

            {/* Animated Value */}
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.p
                className="text-4xl md:text-5xl font-bold text-[#7A1C1C]"
                initial={{ scale: 0.9 }}
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
                <span className="text-2xl font-normal text-gray-600 ml-2">
                  {item.unit}
                </span>
              </motion.p>

              <motion.div
                className="h-[2px] w-12 mx-auto mt-3 bg-[#7A1C1C] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 1, delay: index * 0.2 + 0.4 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footnote */}
      <p className="text-xs text-gray-500 mt-10 max-w-3xl mx-auto leading-snug">
        * Committed occupancy excluding Pocharam. Board approval received for potential divestment
        of Mindspace Pocharam. Q City has been acquired post 31<sup>st</sup> March, 2025, and hence,
        certain operational numbers are presented on a pro-forma basis as if Q City is part of the
        REIT as on 30<sup>th</sup> June, 2025.
      </p>
    </section>
  );
};

export default KeyHighlights;

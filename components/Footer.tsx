"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Properties",
    "Investors",
    "Careers",
    "Contact",
  ];

  const socialLinks = [
    { icon: FaFacebook, label: "Facebook", color: "hover:text-blue-500" },
    { icon: FaTwitter, label: "Twitter", color: "hover:text-blue-400" },
    { icon: FaLinkedin, label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: FaInstagram, label: "Instagram", color: "hover:text-pink-500" },
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#7A1C1C] to-[#A83232] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              REO Developments
            </motion.h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Creating sustainable workspaces that positively impact individuals,
              communities, and the environment. Where{" "}
              <span className="text-[#7A1C1C] font-semibold">
                Quality Meets Opportunity
              </span>
              .
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-[#7A1C1C]" />
                <span className="text-gray-300">Metro Cities, India</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhone className="text-[#7A1C1C]" />
                <span className="text-gray-300">+91 9876543210</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-[#7A1C1C]" />
                <span className="text-gray-300">info@reodevelopments.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-[#7A1C1C] transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Form (via Web3Forms) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-3"
            >
              <input
                type="hidden"
                name="access_key"
                value="335dfb36-4a68-4db8-b011-61a5058477a3"
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#7A1C1C]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#7A1C1C]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={3}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#7A1C1C]"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full py-2 bg-linear-to-r from-[#7A1C1C] to-[#A83232] text-white rounded-md font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 REO Developments. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0 text-xs md:text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-[#7A1C1C] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-[#7A1C1C] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

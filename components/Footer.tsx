"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = ["About Us", "Properties", "Investors", "Careers", "Contact"];
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000); // auto-hide message
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <footer id="contact" className="relative text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/footer-image.jpg"
          alt="Footer background"
          className="w-full h-full object-cover blur-[2px] brightness-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-14">
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
              className="text-2xl font-bold mb-4 text-white"
              whileHover={{ scale: 1.05 }}
            >
              REO Developments
            </motion.h3>

            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Creating sustainable workspaces that positively impact individuals, communities,
              and the environment.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <FaMapMarkerAlt className="text-[#db071d]" />
                <a
                  href="https://www.google.com/maps/place/WorkFlo+in+Ranka+Junction,+KR+Puram,+Orr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#db071d] transition-colors duration-300"
                >
                  1st floor, AH45, Krishna Reddy Industrial Estate, Dooravani Nagar, Bengaluru,
                  Karnataka 560016
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 cursor-pointer hover:text-[#db071d] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="text-[#db071d]" />
                <span className="text-gray-300">support@reodevelop.com</span>
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
                    href="#"
                    className="text-gray-300 hover:text-[#db071d] transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Form (Web3Forms) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="hidden"
                name="access_key"
                value="2756ba83-599a-443a-b5a1-1871d615f0db"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#db071d] text-white placeholder-gray-400"
              />

              <input
                type="tel"
                name="contact_number"
                placeholder="Your Contact Number"
                pattern="[0-9]{10}"
                inputMode="numeric"
                required
                className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#db071d] text-white placeholder-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#db071d] text-white placeholder-gray-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={3}
                required
                className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#db071d] text-white placeholder-gray-400"
              ></textarea>

              <motion.button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-[#db071d] to-[#A83232] text-white rounded-md font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>

              {/* Animated status messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    className="text-green-400 text-sm text-center mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    ✅ Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    className="text-red-400 text-sm text-center mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    ❌ Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
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
              href="/privacy-policy"
              className="text-gray-400 hover:text-[#db071d] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-[#db071d] transition-colors"
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

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

  return (
    <footer id="contact" className="relative text-white overflow-hidden">
      {/* Background Image with Subtle Blur & Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/footer-image.jpg"
          alt="Footer background"
          className="w-full h-full object-cover blur-[2px] brightness-90 scale-105"
        />
        {/* Slightly lighter overlay so image is softly visible */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/80"></div>
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
              transition={{ type: "spring", stiffness: 300 }}
            >
              REO Developments
            </motion.h3>

            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Creating sustainable workspaces that positively impact
              individuals, communities, and the environment. Where{" "}
              {/* <span className="text-[#db071d] font-semibold">
                Quality Meets Opportunity
              </span> */}
              .
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-[#db071d]" />
                <a
                  href="https://www.google.com/maps/place/WorkFlo+in+Ranka+Junction,+KR+Puram,+Orr/@12.9977088,77.6671201,17z/data=!4m10!1m2!2m1!1s1st+floor,+AH45,+Krishna+Reddy+Industrial+Estate,+Dooravani+Nagar,+Bengaluru,+Karnataka+560016!3m6!1s0x3bae17e23422f449:0xf026ddf98b77e824!8m2!3d12.9977317!4d77.6695186!15sCl4xc3QgZmxvb3IsIEFINDUsIEtyaXNobmEgUmVkZHkgSW5kdXN0cmlhbCBFc3RhdGUsIERvb3JhdmFuaSBOYWdhciwgQmVuZ2FsdXJ1LCBLYXJuYXRha2EgNTYwMDE2WlsiWTFzdCBmbG9vciBhaDQ1IGtyaXNobmEgcmVkZHkgaW5kdXN0cmlhbCBlc3RhdGUgZG9vcmF2YW5pIG5hZ2FyIGJlbmdhbHVydSBrYXJuYXRha2EgNTYwMDE2kgEPY293b3JraW5nX3NwYWNl4AEA!16s%2Fg%2F11xd0kbny0?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#db071d] transition-colors duration-300"
                >
                  1st floor, AH45, Krishna Reddy Industrial Estate, Dooravani Nagar, Bengaluru, Karnataka 560016
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 hover:text-[#db071d] transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* <FaPhone className="text-[#db071d]" />
                <span className="text-gray-300">+91 8436969369</span> */}
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 cursor-pointer hover:text-[#db071d] transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-[#db071d]" />
                <span className="text-gray-300">
                  support@reodevelop.com
                </span>
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
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-3"
            >
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
                className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#db071d]"
              />
                            <input
                type="Contact Number"
                name="Contact number"
                placeholder="Your Contact Number"
                required
                className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#db071d]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#db071d]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={3}
                required
                className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-[#db071d]"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full py-2 bg-linear-to-r from-[#db071d] to-[#A83232] text-white rounded-md font-medium text-sm"
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

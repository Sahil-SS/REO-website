"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaPhone } from "react-icons/fa";

const AboutREODevelopments: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "FaEnvelope":
        return <FaEnvelope className="w-5 h-5" />;
      case "FaLinkedin":
        return <FaLinkedin className="w-5 h-5" />;
      case "FaWhatsapp":
        return <FaWhatsapp className="w-5 h-5" />;
      case "FaPhone":
        return <FaPhone className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 rounded-3xl shadow-2xl overflow-hidden border border-gray-700 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-96 lg:h-auto">
              <img
                src="/images/property1.jpg"
                alt="REO Developments Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/40"></div>
              <div className="absolute bottom-8 left-6 text-white">
                <h3 className="text-2xl font-medium tracking-tight drop-shadow-md">
                  Modern Workspaces
                </h3>
                <p className="text-base opacity-90 drop-shadow-md">
                  Sustainable, future-ready ecosystems
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">
                  REO Developments
                </h2>
                <p className="text-lg text-gray-300 font-normal">
                  Where quality meets opportunity
                </p>
              </div>

              <div className="space-y-5 mb-10 text-gray-200">
                <p className="leading-relaxed text-base">
                  At <span className="font-bold">REO Developments</span>, we
                  create spaces that positively impact individuals, communities, and the
                  environment. Our mission is to foster sustainable ecosystems that drive
                  growth, well-being, and harmony.
                </p>

                <p className="leading-relaxed text-base">
                  Our adaptive approach embraces innovation to meet the evolving demands of
                  modern businesses. We serve over <span className="font-bold">175+
                  tenants</span>, ranging from multinational corporations to leading Indian
                  enterprises.
                </p>

                <div className="bg-white/10 p-6 rounded-xl border-l-4 border-[#db071d]">
                  <p className="text-gray-100 leading-relaxed text-base">
                    Shareholders can enjoy reliable real estate investments and consistent
                    metropolitan rental income.
                  </p>
                </div>
              </div>

              {/* Contact Icons */}
              <div className="flex items-center space-x-4 mt-2">
                {[
                  {
                    icon: "FaEnvelope",
                    name: "Email",
                    color: "bg-[#db071d]",
                    link: "mailto:support@reodevelopments.com",
                  },
                  {
                    icon: "FaLinkedin",
                    name: "LinkedIn",
                    color: "bg-[#8b0010]",
                    link: "https://linkedin.com/company/reo-developments",
                  },
                  {
                    icon: "FaWhatsapp",
                    name: "WhatsApp",
                    color: "bg-green-600",
                    link: "https://wa.me/+918436969369",
                  },
                  {
                    icon: "FaPhone",
                    name: "Phone",
                    color: "bg-gray-800",
                    link: "tel:+918436969369",
                  },
                ].map((contact) => (
                  <a
                    key={contact.name}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 ${contact.color}`}
                    title={contact.name}
                  >
                    {renderIcon(contact.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutREODevelopments;

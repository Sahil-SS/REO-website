"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaGlobe } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      formData.append("access_key", "2756ba83-599a-443a-b5a1-1871d615f0db");
      formData.append("from_name", form.name);
      formData.append("subject", "New Contact - REO Developments");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          countryCode: "+91",
          phoneNumber: "",
          message: "",
        });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/contactus-hero.jpg"
          alt="Contact REO Developments"
          fill
          className="object-cover brightness-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            Let’s Connect and Build Your Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100 font-light drop-shadow"
          >
            Get in touch with our experts to explore investment opportunities
            that redefine real estate.
          </motion.p>
        </div>
      </section>

      {/* ===== UNIFIED CARD SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 -mt-24 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-[0_0_50px_-10px_rgba(219,7,29,0.8)] overflow-hidden grid lg:grid-cols-2 border border-[#db071d]/60"
        >
          {/* LEFT: FORM */}
          <div className="p-10 md:p-14 bg-white">
            <h2 className="text-3xl font-bold text-[#db071d] mb-6">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db071d] focus:border-[#db071d] outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db071d] focus:border-[#db071d] outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter mobile number"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{6,15}"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db071d] focus:border-[#db071d] outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db071d] focus:border-[#db071d] outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#db071d] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#b00516] transition-all shadow-lg disabled:opacity-50"
              >
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {status === "success" && (
                <p className="text-green-600 font-medium">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-medium">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* RIGHT: INFO (Updated for clean white theme) */}
          <div className="bg-white text-gray-800 p-10 md:p-14 flex flex-col justify-between border-l border-gray-200">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#db071d]">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Reach us anytime — our team is here to assist with your real
                estate investment goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#f4d35e]/20 rounded-full text-[#db071d]">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:support@reodevelop.com"
                      className="text-gray-600 hover:text-[#db071d] transition"
                    >
                      support@reodevelop.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#f4d35e]/20 rounded-full text-[#db071d]">
                    <FaGlobe className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Website
                    </h4>
                    <a
                      href="https://www.reodevelop.com"
                      target="_blank"
                      className="text-gray-600 hover:text-[#db071d] transition"
                    >
                      www.reodevelop.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-200">
              <h4 className="font-semibold text-[#db071d] mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/+918436969369"
                  target="_blank"
                  className="p-3 bg-[#25D366] text-white rounded-full hover:scale-110 transition-transform shadow-md"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
                <a
                  href="mailto:support@reodevelop.com"
                  className="p-3 bg-[#db071d] text-[white] rounded-full hover:scale-110 transition-transform shadow-md"
                >
                  <FaEnvelope className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="px-6 pb-20 max-w-6xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl h-[450px] border-4 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.2277779755247!2d77.66694371526043!3d12.997731690838424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e23422f449%3A0xf026ddf98b77e824!2sWorkFlo%20by%20OYO%20Ranka%20Junction!5e0!3m2!1sen!2sin!4v1730012345678!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="REO Developments Office"
          ></iframe>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

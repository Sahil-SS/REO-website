"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      // formData.append("phone", `${form.countryCode} ${form.phoneNumber}`);
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
          subject: "",
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
      <section className="relative h-[610px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/property1.jpg"
          alt="Contact REO Developments"
          fill
          className="object-cover brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* ===== CONTACT FORM + INFO ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-5 gap-12"
        >
          {/* FORM SECTION */}
          <div className="lg:col-span-3 bg-white shadow-xl rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-5">
                {/* Name */}
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

                {/* Email */}
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

                {/* Mobile Number with Country Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <div className="flex items-center gap-3">
                    {/* <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      className="p-4 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#db071d] focus:border-[#db071d] outline-none transition text-gray-700 font-medium"
                      style={{ minWidth: "90px" }}
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+65">🇸🇬 +65</option>
                    </select> */}

                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Enter mobile number"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{6,15}"
                      className="flex-1 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db071d] focus:border-[#db071d] outline-none transition"
                    />
                  </div>
                </div>

                {/* Message */}
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
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#db071d] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#b00516] transition-all shadow-lg disabled:opacity-50"
              >
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {/* Status Messages */}
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

          {/* INFO SECTION */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#db071d]">Contact Us</h2>
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                You can also reach out directly via email, phone, or WhatsApp — we are
                always ready to assist you with your real estate investment needs.
              </p>

              <div className="space-y-6">
                {/* <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#db071d] rounded-full text-white">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                    <p className="text-gray-600">+91 84369 69369</p>
                  </div>
                </div> */}

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#db071d] rounded-full text-white">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                    <a
                      href="mailto:support@reodevelop.com"
                      className="text-gray-600 hover:text-[#db071d] transition"
                    >
                      support@reodevelop.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#db071d] rounded-full text-white">
                    <FaGlobe className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Website</h4>
                    <a
                      href="https://www.reodevelop.com"
                      target="_blank"
                      className="text-gray-600 hover:text-[#db071d] transition"
                    >
                      www.reodevelop.com

                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#db071d] rounded-full text-white">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      WorkFlo by OYO Ranka Junction, Bangalore
                    </p>
                  </div>
                </div> */}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us On</h4>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/+918436969369"
                    target="_blank"
                    className="p-3 bg-[#25D366] text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                  >
                    <FaWhatsapp className="text-lg" />
                  </a>
                  <a
                    href="mailto:support@reodevelop.com"
                    className="p-3 bg-[#FF0000] text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                  >
                    <FaEnvelope className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
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

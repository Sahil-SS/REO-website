"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("subject", form.subject);
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
        setForm({ name: "", email: "", subject: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-50 text-[#1C2B5B]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/property1.jpg"
          alt="Contact REO Developments"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* ===== CONTACT FORM + INFO ===== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* FORM SECTION */}
          <div className="md:col-span-2 bg-white shadow-xl rounded-3xl p-10">
            {/* <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions or investment inquiries? Fill out the form below and we’ll get back to you promptly.
            </p> */}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#db071d] outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#db071d] outline-none transition"
                />
              </div>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#db071d] outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#db071d] outline-none transition"
              ></textarea>

              <button
                type="submit"
                className="bg-[#db071d] w-full md:w-auto px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:bg-[#8b0010] transition flex items-center justify-center gap-2"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center mt-2">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* INFO SECTION */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Contact Info</h2>
              <p className="text-gray-600 mb-6">
                You can also reach out directly via email, phone, or WhatsApp — we’re always ready to assist you.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                {/* <FaPhoneAlt className="text-[#db071d] text-xl" /> */}
                {/* <p className="text-lg">+91 84369 69369</p> */}
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#db071d] text-xl" />
                <p>
                  <a
                    href="mailto:support@reodevelop.com"
                    className="text-lg hover:underline"
                  >
                    support@reodevelop.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaGlobe className="text-[#db071d] text-xl" />
                <p className="text-lg">www.reodevelop.com</p>
              </div>
              {/* <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#db071d] text-xl" />
                <p className="text-lg">WorkFlo by OYO Ranka Junction, Bangalore</p>
              </div> */}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://wa.me/+918436969369"
                target="_blank"
                className="p-3 bg-green-500 text-white rounded-full hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>
              {/* <a
                href="mailto:support@reodevelop.com"
                className="p-3 bg-[#db071d] text-white rounded-full hover:scale-110 transition"
              >
                <FaEnvelope />
              </a> */}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold mb-10"
        >
          Visit Our <span className="text-[#db071d]">Office</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl h-[400px]"
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
    </div>
  );
};

export default ContactPage;

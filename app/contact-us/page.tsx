"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
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
      formData.append("phone", form.phone);
      formData.append("message", form.message);
      formData.append("access_key", "2756ba83-599a-443a-b5a1-1871d615f0db");
      formData.append("subject", "New Contact - REO Developments");
      formData.append("from_name", form.name);

      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else setStatus("error");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-50 text-[#1C2B5B]">
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/property1.jpg"
          alt="Contact REO Developments"
          fill
          className="object-cover brightness-75"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact <span className="text-white">REO Developments</span>
          </h1>
          <p className="text-white/90 md:text-xl max-w-2xl mx-auto">
            Have any questions or need assistance? Write to us at{" "}
            <a
              href="mailto:support@reodevelopments.com"
              className="font-semibold underline hover:text-[#db071d]"
            >
              support@reodevelopments.com
            </a>{" "}
            or fill out the form below.
          </p>
        </motion.div>
      </section>

      {/* CONTACT CARD */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-10"
        >
          {/* INFO SIDE */}
          <div className="flex flex-col justify-between space-y-6">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-700 text-lg">
              We’re here to answer any questions you may have and help you explore investment opportunities with REO Developments. Our team is ready to assist you.
            </p>
            <p className="text-gray-700 text-lg">
              Reach out via email, phone, or even a quick message on WhatsApp. Let’s build something great together!
            </p>

            <div className="space-y-3">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:support@reodevelop.com" className="text-[#db071d] hover:underline">
                  support@reodevelop.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+91 84369 69369" className="text-[#db071d] hover:underline">
                  +91 84369 69369
                </a>
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-4 text-2xl">
              <a href="https://wa.me/+918436969369" target="_blank" className="hover:scale-110 transition">
                <FaWhatsapp className="text-green-500" />
              </a>
              <a href="mailto:support@reodevelopments.com" className="hover:scale-110 transition">
                <FaEnvelope className="text-red-500" />
              </a>
            </div>
          </div>

          {/* FORM SIDE */}
          <div>
            <h2 className="text-2xl font-semibold text-center mb-6">Send Us a Message</h2>
            <p className="text-gray-600 text-center mb-6">
              Fill out the form below with your details and we will get back to you as soon as possible.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#db071d] focus:outline-none transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#db071d] focus:outline-none transition"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#db071d] focus:outline-none transition"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#db071d] focus:outline-none transition md:col-span-2"
                required
              />

              <button
                type="submit"
                className="md:col-span-2 bg-[#db071d] text-white font-semibold py-4 rounded-xl hover:bg-[#8b0010] transition shadow-lg flex justify-center items-center gap-2"
              >
                Send Message <span className="text-white text-lg">→</span>
              </button>
            </form>

            {status === "success" && <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-500 mt-4 text-center">Oops! Something went wrong.</p>}
          </div>
        </motion.div>
      </section>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Visit Our <span className="text-[#db071d]">Office</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.2277779755247!2d77.66694371526043!3d12.997731690838424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e23422f449%3A0xf026ddf98b77e824!2sWorkFlo%20by%20OYO%20Ranka%20Junction!5e0!3m2!1sen!2sin!4v1730012345678!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-3xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="REO Developments Office"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;

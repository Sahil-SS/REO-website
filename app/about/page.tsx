"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Users, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Tenants Served", value: "175+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Metro Cities", value: "6+" },
  ];

  const locations = [
    { city: "Bangalore", img: "/images/bangalore.jpg" },
    { city: "Mumbai", img: "/images/mumbai.jpg" },
    { city: "Delhi", img: "/images/delhi.jpg" },
    { city: "Pune", img: "/images/pune.jpg" },
    { city: "Hyderabad", img: "/images/hyderabad.jpeg"},
    { city: "Kolkata", img: "/images/kolkata.jpg"},
  ];

  const icons = [
    {
      icon: <Building2 className="w-10 h-10 text-[#db071d]" />,
      title: "Premium Infrastructure",
      desc: "Architecturally inspiring, energy-efficient spaces built to global standards.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#db071d]" />,
      title: "Trusted Partnerships",
      desc: "We collaborate with top multinational and Indian corporations for long-term growth.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-[#db071d]" />,
      title: "Guaranteed Returns",
      desc: "Assured rental income through well-managed and transparent investment models.",
    },
  ];

  return (
    <div className="bg-linear-to-b from-white to-gray-50 text-[#1C2B5B]">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="About REO Developments"
          fill
          className="object-cover brightness-[0.6]"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white z-10 px-6"
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight font-extrabold">
            REO Developments
          </h1>
          <h3 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Crafting Spaces Where Dreams Take Shape
          </h3>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            At{" "}
          <span className="font-semibold text-white">REO Developments</span>,
            we create sustainable ecosystems that empower businesses to thrive 
            and communities to flourish.
          </p>
        </motion.div>
      </section>

      {/* OUR STORY / WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
        >
          {/* Text Section */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                 Who <span className="text-[#db071d]">We Are</span>
              </h2>
              <p className="text-2xl font-semibold text-gray-800 mb-4">
                Where Quality Meets Opportunity
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Real Estates Opportunity (REO) is committed to creating and maintaining 
                work environments that foster sustainable ecosystems. These spaces enhance 
                environmental wellness and support the long-term health of people and 
                surrounding communities.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
              <span className="font-semibold text-[#db071d]">REO</span> possesses 
                the expertise and resources required to help you achieve your investment 
                objectives. Alongside our extensive experience with commercial and 
                residential properties, we have a significant background in successfully 
                managing challenging Class B and C urban properties.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Always focused on your bottom line, we offer you the opportunity to 
                take advantage of a wide range of unique investments, all while 
                minimizing your costs and maximizing the potential upside.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                We have strong faith in our management team and assure all our 
                shareholders that we will assist them in generating substantial income 
                from an urban setting, a goal that many aspire to achieve.
              </p>
            </div>

<div className="p-6 bg-gradient-to-r from-[#FFE5E5] to-[#FFD6D6] border-l-4 border-[#db071d] rounded-xl shadow-lg mt-4">
  <p className="text-[#1C2B5B] font-medium leading-relaxed italic">
    "We put the real in real estate."
  </p>
</div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative h-80 lg:h-auto">
            <Image
              src="/images/mumbai.jpg"
              alt="REO Office"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>
      </section>
      

      {/* STATS SECTION */}
      <section className="relative py-16 bg-gradient-to-r from-[#db071d] to-[#B31E1E] text-white overflow-hidden">
        <div className="absolute top-[-30px] left-[-30px] w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-40px] right-[-40px] w-32 h-32 bg-white/10 rounded-full animate-pulse-slow"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
                {stat.value}
              </h3>
              <p className="text-sm opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#db071d]">Core Values</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {icons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#1C2B5B] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-[#db071d]">Presence</span> Across India
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
              >
                <Image
                  src={loc.img}
                  alt={loc.city}
                  width={400}
                  height={250}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{loc.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROJECTS SECTION
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#db071d]">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/images/innov8-bangalore.jpg" // replace with your project image
              alt="Innov8 Ranka Junction, Bangalore"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold">
                Innov8 Ranka Junction, Bangalore
              </h3>
              <a
                href="https://www.innov8.work/coworking-space/bangalore/ranka-junction-kr-puram-orr-5dce31138bca0c04028a9460/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#db071d] mt-2 hover:underline"
              >
                View Project
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* GOOGLE MAP SECTION */}
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
            title="REO Developments Location"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none"></div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 bg-linear-to-r from-[#db071d] to-[#B31E1E] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full mt-4 opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-md">
            Partner With <span className="text-white">REO Developments</span>
          </h2>
          <p className="text-white/90 mb-6 text-base md:text-lg drop-shadow-sm">
            Let’s create sustainable, smart, and future-ready spaces together.
          </p>
        </motion.div>
        <div className="absolute top-[-30px] left-[-30px] w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <a
          href="/contact-us"
          className="inline-flex items-center justify-center gap-2 bg-[#db071d] hover:bg-[#8b0010] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-white/20"
        >
          Contact Our Team <span className="text-white text-lg">→</span>
        </a>
      </section>
    </div>
  );
};

export default AboutPage;

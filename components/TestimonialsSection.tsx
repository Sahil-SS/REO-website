"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Simmons",
    role: "Investor, USA",
    image: "/users/user1.jpg",
    text: "Working with REO Developments was a remarkable experience. Their attention to detail and quality is unmatched — they truly build spaces that inspire growth.",
  },
  {
    name: "William Smith",
    role: "Entrepreneur, UK",
    image: "/users/user2.jpg",
    text: "I’m incredibly impressed by their professionalism and the way they deliver sustainable projects with modern design sensibilities.",
  },
  {
    name: "Aisha Patel",
    role: "Architect, India",
    image: "/users/user3.jpg",
    text: "The team’s ability to blend aesthetics with functionality is brilliant. Each project reflects deep thought and care for the environment.",
  },
//   {
//     name: "Mike Alter",
//     role: "Business Owner, Dubai",
//     image: "/users/user4.jpg",
//     text: "Their developments redefine workspaces — inspiring and practical. It’s a pleasure partnering with such a forward-thinking company.",
//   },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our <span className="text-[#7A1C1C]">Clients Say</span>
        </motion.h2>
        <motion.div
          className="mx-auto w-24 h-1 bg-[#7A1C1C] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 0px 25px rgba(122, 28, 28, 0.3)",
            }}
          >
            <Image
              src={t.image}
              alt={t.name}
              width={80}
              height={80}
              className="rounded-full mb-4 border-4 border-[#7A1C1C]/20 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{t.role}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

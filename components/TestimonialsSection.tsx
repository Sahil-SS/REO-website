"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sanjay Kumar",
    role: "Delhi, India",
    image: "/users/user1.jpg",
    text: "I was definitely hesitant at first, but switching to REO was the best decision I made for my investments. My property returns are consistent and hassle-free. They've saved me so much time and money. I'm completely hooked—REO delivered on its promise to simplify my life!",
  },
  {
    name: "L. Vasanthi",
    role: "Chennai, India",
    image: "/users/user2.jpg",
    text: "REO is a trusted brand for rental income! Their excellent service, customer-friendly support, and hassle-free transactions make every property a worthy investment. They handle the entire process smoothly, from registration onwards. Keep up the excellent work!",
  },
  {
    name: "Raj Patel",
    role: "Mumbai, India",
    image: "/users/user3.jpg",
    text: "Thanks to REO, my rental property portfolio is thriving! The passive income has exceeded my expectations, and your team made the entire process seamless. Highly recommend for anyone looking to maximize their real estate investments!",
  },
];

const Testimonials = () => {
  return (
    <section className="relative pt-12 pb-24 bg-gradient-to-b from-white to-gray-50 px-6 md:px-12">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our <span className="text-[#db071d]">Clients Say</span>
        </motion.h2>
        <motion.div
          className="mx-auto w-24 h-1 bg-[#db071d] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-gray-100/80 border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-[#db071d]/40 transition-all duration-300"
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 0px 25px rgba(219, 7, 29, 0.25)",
            }}
          >
            <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-[#db071d]/20">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{t.role}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>

      {/* ✨ Elegant Gold Separator Bar */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] via-[#F5C542] to-[#D4AF37]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
};

export default Testimonials;

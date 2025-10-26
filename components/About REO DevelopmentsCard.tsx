"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhoWeArePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <section className="max-w-7xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 mb-12"
        >
          {/* Text Section */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Who <span className="text-[#db071d]">We Are</span>
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                <span className="font-semibold text-[#db071d]">
                  Real Estate Opportunity
                </span>{" "}
                possesses the resources and expertise necessary to assist you in
                achieving your investment goals. Alongside our work with
                commercial properties, we have significant experience managing
                challenging Class B and C low-income properties.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Always prioritizing the bottom line, we provide opportunities to
                explore a diverse range of unique investment options while
                reducing expenses and enhancing potential returns.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                With our extensive experience in the markets we serve, we excel
                at identifying opportunities and helping our clients capitalize
                on them. Whether you are a new or seasoned investor, you can
                rely on us to achieve the results you desire.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-[#FFE5E5] to-[#FFD6D6] border-l-4 border-[#db071d] rounded-xl shadow-lg mt-4">
              <p className="text-[#1C2B5B] font-medium leading-relaxed">
                “We don’t just build properties — we build ecosystems that
                sustain businesses and communities for generations.”
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative h-80 lg:h-auto">
            <Image
              src="/images/card.jpg"
              alt="REO Office"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WhoWeArePage;

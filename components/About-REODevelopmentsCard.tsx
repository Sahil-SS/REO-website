"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const WhoWeArePage = () => {
  return (
    <div className="bg-white pt-24 pb-8 px-6">
      <section className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Who <span className="text-[#db071d]">We Are</span>
          </h2>
          <p className="text-2xl font-semibold text-gray-800 mb-4">
            Where Quality Meets Opportunity
          </p>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Real Estates Opportunity (REO) is committed to creating and maintaining
            work environments that foster sustainable ecosystems. These spaces enhance
            environmental wellness and support the long-term health of people and
            surrounding communities.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 mb-8"
        >
          {/* Text Section */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-between bg-white">
            <div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                <span className="font-semibold text-[#db071d]">REO</span> possesses
                the expertise and resources required to help you achieve your investment
                objectives. Alongside our extensive experience with commercial and
                residential properties, we have a significant background in successfully
                managing challenging Class B and Class C urban properties.
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

            <div className="p-6 bg-gradient-to-r from-[#fff0f0] to-[#ffe5e5] border-l-4 border-[#db071d] rounded-xl shadow-sm mt-4">
              <p className="text-[#1C2B5B] font-medium leading-relaxed italic">
                &quot;We put the real in real estate.&quot;
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative h-80 lg:h-auto bg-white">
            <Image
              src="/images/card.jpg"
              alt="REO Office"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* Our Aim Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white pt-6"
        >
          <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#db071d]">Aim</span>
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
            With extensive experience in the markets we serve, we are adept at
            identifying opportunities and helping our clients take advantage of them.
            Whether you are new to rental ownership or a seasoned investor, you can
            depend on us to help you achieve the outcomes you are looking for.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-[#db071d] hover:bg-[#8b0010] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Contact Our Team
              <span className="text-white text-lg">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default WhoWeArePage;

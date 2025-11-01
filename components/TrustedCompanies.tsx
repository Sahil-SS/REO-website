"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TrustedCompanies = () => {
  const companies = [
    { name: "Accenture", logo: "/company-logo/accenture.png" },
    { name: "Capgemini", logo: "/company-logo/capgemini.png" },
    { name: "Tech Mahindra", logo: "/company-logo/techmahindra.png" },
    { name: "KPMG", logo: "/company-logo/kpmg.png" },
    { name: "Genpact", logo: "/company-logo/genpact.png" },
    { name: "Wipro", logo: "/company-logo/wipro.png" },
    { name: "TCS", logo: "/company-logo/tcs.png" },
    { name: "Oracle", logo: "/company-logo/oracle.png" },
    { name: "Nestle", logo: "/company-logo/nestle.png" },
    { name: "Britannia", logo: "/company-logo/britannia.png" },
    { name: "Aditya Birla", logo: "/company-logo/adityabirla.png" },
    { name: "Sun Pharma", logo: "/company-logo/sunpharma.png" },
    { name: "Dabur", logo: "/company-logo/dabur.png" },
    { name: "Haldirams", logo: "/company-logo/haldirams.png" },
    { name: "Colgate", logo: "/company-logo/colgate.png" },
    { name: "Berger Paints", logo: "/company-logo/bergerpaints.png" },
    { name: "Emami", logo: "/company-logo/emami.png" },
    { name: "Titan", logo: "/company-logo/titan.png" },
    { name: "HCL", logo: "/company-logo/hcl.png" },
  ];

  return (
    <section className="py-10 bg-white pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
            Trusted by Top Companies Across{" "}
            <span className="text-[#db071d]">India</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Our learners and professionals work with these industry leaders.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center mb-10"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              whileHover={{ scale: 1.36 }}
              className="flex items-center justify-center transition-transform duration-300 ease-out"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center cursor-pointer">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={112}
                  height={112}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-base md:text-lg text-gray-700 italic"
        >
          The list of trusted partners is{" "}
          <span className="bg-yellow-300 text-black px-2 py-1 font-semibold rounded-md not-italic">
            growing every day
          </span>
          .
        </motion.p>
      </div>
      {/* ✨ Elegant Gold Separator Bar
      <motion.div
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] via-[#F5C542] to-[#D4AF37]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      /> */}
    </section>
  );
};

export default TrustedCompanies;

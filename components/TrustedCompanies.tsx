"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TrustedCompanies = () => {
  const companies = [
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Accenture.svg" },
    { name: "Capgemini", logo: "https://companieslogo.com/img/orig/CAP.PA_BIG-9f9e56d3.png" },
    { name: "Tech Mahindra", logo: "https://companieslogo.com/img/orig/TECHM.NS_BIG-b7b37c9d.png" },
    { name: "KPMG", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/KPMG_logo.svg" },
    { name: "Genpact", logo: "https://companieslogo.com/img/orig/G_1f0a46b1.png" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Wipro_Primary_Logo_Color_RGB.svg" },
    { name: "TCS", logo: "https://companieslogo.com/img/orig/TCS.NS_BIG-7a9c8a7b.png" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Nestle", logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Nestle_textlogo_blue.svg" },
    { name: "Britannia", logo: "https://upload.wikimedia.org/wikipedia/en/f/f8/Britannia_Industries_logo.svg" },
    { name: "Aditya Birla", logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/Aditya_Birla_Group_logo.svg" },
    { name: "Sun Pharma", logo: "https://companieslogo.com/img/orig/SUNPHARMA.NS_BIG-6bce595f.png" },
    { name: "Dabur", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Dabur_logo.svg" },
    { name: "Haldiram's", logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/Haldiram%27s_Logo.svg" },
    { name: "Colgate", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Colgate_logo.svg" },
    { name: "Berger Paints", logo: "https://companieslogo.com/img/orig/BERGEPAINT.NS_BIG-67f4ad54.png" },
    { name: "Emami", logo: "https://companieslogo.com/img/orig/EMAMILTD.NS_BIG-2f5b36a4.png" },
    { name: "Titan", logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Titan_Company_Logo.svg" },
    { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/HCL_Technologies_Logo.svg" },
    { name: "SAIL", logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/Sail_logo.svg" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Top Companies Across{" "}
            <span className="text-[#db071d]">India</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our learners and professionals work with these industry leaders.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 md:gap-10 items-center justify-items-center mb-12"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              whileHover={{ scale: 1.12 }}
              className="transition-all grayscale hover:grayscale-0 cursor-pointer opacity-80 hover:opacity-100"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-lg md:text-xl text-gray-700 italic"
        >
          The list of trusted partners is{" "}
          <span className="bg-yellow-300 text-black px-2 py-1 font-semibold rounded-md not-italic">
            growing every day
          </span>
          .
        </motion.p>
      </div>
    </section>
  );
};

export default TrustedCompanies;

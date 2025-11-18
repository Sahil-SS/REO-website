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
    { name: "Novartis", logo: "/company-logo/novartis.png" },
    { name: "ALSTOM", logo: "/company-logo/alstom.png" },
    { name: "Axiom", logo: "/company-logo/axiom.png" },
    { name: "Johnson & Johnson", logo: "/company-logo/jnj.png" },
    { name: "Unisys", logo: "/company-logo/unisys.png" },
    { name: "ACC Cement", logo: "/company-logo/acc.png" },
    { name: "Eveready Industries", logo: "/company-logo/eveready.png" },
    { name: "Lafarge Cement", logo: "/company-logo/lafarge.png" },
    { name: "Exide", logo: "/company-logo/exide.png" },
    { name: "Crompton Greaves", logo: "/company-logo/crompton.png" },
    { name: "Dr. Reddy's", logo: "/company-logo/drreddys.png" },
    { name: "Hitachi", logo: "/company-logo/hitachi.png" },
    { name: "UltraTech Cement", logo: "/company-logo/ultratech.png" },
    { name: "TAFE", logo: "/company-logo/tafe.png" },
    { name: "Supreme Industries", logo: "/company-logo/supreme.png" },
    { name: "SAIL", logo: "/company-logo/sail.png" },
    { name: "Ambuja Cement", logo: "/company-logo/ambuja.png" },
    { name: "Kirloskar", logo: "/company-logo/kirloskar.png" },
    { name: "Greenply", logo: "/company-logo/greenply.png" },
    { name: "Himadri Speciality Chemical", logo: "/company-logo/himadri.png" },
    { name: "Saregama", logo: "/company-logo/saregama.png" },
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
            Some of the Largest Companies / Employers in{" "}
            <span className="text-[#db071d]">Pan India</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Trusted by top organizations that shape industries across the
            nation.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center mb-10"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex items-center justify-center cursor-pointer"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
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
          transition={{ duration: 0.5 }}
          className="text-center text-base md:text-lg text-gray-700 italic"
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

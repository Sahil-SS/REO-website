"use client";

import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <section className="py-24 px-6 bg-white text-gray-800">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-[#db071d]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Terms of Service
        </motion.h1>

        <motion.p
          className="mb-8 text-lg leading-relaxed text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to REO Developments. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
        </motion.p>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Use of Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to use our website and services only for lawful purposes and
              in accordance with these Terms. Unauthorized use, including data scraping,
              spam, or other disruptive actions, is strictly prohibited.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Account Responsibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you create an account with us, you are responsible for maintaining
              the confidentiality of your login information. You are fully responsible
              for all activities that occur under your account.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Property Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All property listings, images, and information provided on this website
              are for informational purposes only. REO Developments does not guarantee
              accuracy or availability of properties.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Payments & Fees
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Any investment or payment made through our platform must comply with
              applicable terms for the specific property or service. Fees, taxes, and
              other charges are your responsibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              REO Developments shall not be liable for any direct, indirect, incidental,
              or consequential damages resulting from your use of our website or services.
              Use our platform at your own risk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms of Service from time to time. Any changes
              will be posted on this page with the updated effective date. Continued
              use of our services constitutes acceptance of the new terms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:support@reodevelopments.com" className="text-[#db071d] underline">
                support@reodevelop.com
              </a>.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TermsOfService;

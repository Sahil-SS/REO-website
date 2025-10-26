"use client";

import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </motion.h1>

        <motion.p
          className="mb-8 text-lg leading-relaxed text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At REO Developments, your privacy is our priority. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you visit our website or interact with our services.
        </motion.p>

        {/* Sections */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect personal information such as your name, email address,
              phone number, and any details you voluntarily provide when contacting
              us or filling forms on our website. Non-personal information, such as
              browser type and usage data, may also be collected for analytics purposes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information is used to provide and improve our services, respond to
              inquiries, send updates, and comply with legal obligations. We do not
              sell or rent your personal information to third parties.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard measures to protect your data from
              unauthorized access, disclosure, or alteration. However, no method of
              transmission over the Internet or electronic storage is 100% secure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use cookies to enhance user experience and analyze
              traffic. You can disable cookies through your browser settings, but
              some features may not function properly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of external sites. We encourage
              you to review the privacy policies of any sites you visit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-[#db071d] mb-3">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. Any changes will be
              posted on this page with an updated effective date. We encourage you to
              check this page regularly.
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
              If you have questions about this Privacy Policy or your personal data,
              please contact us at{" "}
              <a href="mailto:support@reodevelopments.com" className="text-[#db071d] underline">
                support@reodevelop.com
              </a>
              .
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;

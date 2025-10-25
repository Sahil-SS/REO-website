"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutRERIGroup: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* LEFT SIDE: Image */}
            <motion.div 
              className="lg:w-1/2 h-80 lg:h-auto relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center relative"
                style={{ 
                  backgroundImage: "url('/images/property1.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Animated overlay */}
                <motion.div 
                  className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.h3 
                      className="text-white text-3xl font-bold mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      RERI GROUP
                    </motion.h3>
                    <p className="text-white text-sm opacity-90">Real Estate Excellence</p>
                  </motion.div>
                </motion.div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </motion.div>

            {/* RIGHT SIDE: Content */}
            <motion.div 
              className="lg:w-1/2 p-8 lg:p-12 bg-white dark:bg-gray-800 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl" />
              
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                RERI Group
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Who We Are
              </motion.p>
              
              <motion.p 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Where Quality Meets Opportunity!!
              </motion.p>
              
              <motion.div 
                className="space-y-6 text-gray-700 dark:text-gray-300 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="leading-relaxed"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Our company is dedicated to creating workspaces that have a positive effect on individuals, communities, and the environment. Our mission is to create sustainable ecosystems by developing workspaces that have a positive impact on the environment and improve the well-being of individuals and communities for the long term.
                </motion.p>
                
                <motion.p 
                  className="leading-relaxed"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Our capacity to adapt and succeed in a rapidly changing world drives our success, enabling us to respond swiftly to the evolving demands of the new normal. Our portfolio is currently well diversified, featuring over 175 tenants. This tenant base includes a combination of multinational and Indian corporations.
                </motion.p>
                
                <motion.p 
                  className="font-semibold text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  We are so confident in our manager that we guarantee all our shareholders that we will aid them in generating rental income from a metropolitan city, which is a dream of many.
                </motion.p>
              </motion.div>

              {/* Enhanced Social/Contact Icons */}
              <motion.div 
                className="flex items-center space-x-4 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="flex space-x-4">
                  {['R', 'E', 'R', 'I'].map((letter, index) => (
                    <motion.div 
                      key={`${letter}-${index}`}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                        index === 0 ? 'bg-blue-600' : 
                        index === 1 ? 'bg-green-600' : 
                        index === 2 ? 'bg-purple-600' : 'bg-orange-600'
                      }`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 360,
                        boxShadow: "0px 0px 20px rgba(0,0,0,0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {letter}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            </div>
        </motion.div>
        </div>
    </section>
  );
};

export default AboutRERIGroup;
"use client";

import React from "react";
import { motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";

const UniqueApproach = ({ points }) => {
  return (
    <section className="w-full bg-[#F7F8FC] py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-8">
          Empowering Research Through Technology
        </h2>
        <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto mb-12">
          At HawkSims, we bridge the gap between complex scientific challenges
          and innovative computational solutions. Our team of experts combines
          deep domain knowledge with cutting-edge technology to accelerate
          discovery and drive meaningful outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 text-left border-t-4 border-[#5F80F6]"
            >
              <div className="flex items-center gap-3 mb-4">
                {/* <CheckCircle className="text-[#5F80F6] w-6 h-6" /> */}
                <h3 className="text-xl font-semibold text-[#1E1E1E]">
                  {point.title}
                </h3>
              </div>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueApproach;

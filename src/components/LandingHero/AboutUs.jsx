"use client";

import { motion } from "framer-motion";
import { FaFlask, FaCode, FaChartLine, FaLightbulb } from "react-icons/fa";

const features = [
  {
    title: "Expert Team",
    description: "PhD-level scientists and engineers with industry experience",
    icon: <FaFlask className="text-2xl text-blue-400" />,
    color: "bg-blue-900/20",
  },
  {
    title: "Proven Methods",
    description: "Validated approaches backed by peer-reviewed research",
    icon: <FaCode className="text-2xl text-blue-300" />,
    color: "bg-blue-800/20",
  },
  {
    title: "Custom Solutions",
    description: "Tailored strategies for your unique research challenges",
    icon: <FaChartLine className="text-2xl text-blue-200" />,
    color: "bg-blue-700/20",
  },
  {
    title: "Innovative Approach",
    description: "Cutting-edge techniques that push scientific boundaries",
    icon: <FaLightbulb className="text-2xl text-blue-100" />,
    color: "bg-blue-600/20",
  },
];

export default function HawkSimsAboutSection() {
  return (
    <section className="relative bg-gray-950 text-white px-4 py-16 md:px-12 lg:px-28 lg:py-24 overflow-hidden">
      {/* Blurry background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-800/15 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Text */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="uppercase text-sm text-blue-400 tracking-wider font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            About HawkSims
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Pioneering
            </span>{" "}
            the intersection of scientific research and computational innovation
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            At HawkSims, we bridge the gap between complex scientific challenges
            and innovative computational solutions. Our team of experts combines
            deep domain knowledge with cutting-edge technology to accelerate
            discovery and drive meaningful outcomes.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className={`group p-6 rounded-xl ${feature.color} backdrop-blur-sm border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gray-900/50 border border-gray-800 transition-all duration-300 group-hover:scale-110 group-hover:rotate-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Video */}
        {/* Right Video */}
        <motion.div
          className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden border border-gray-800 group transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Video Background */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
            >
              <source src="/videos/tech-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/30 to-transparent pointer-events-none" />
          </div>

          {/* Floating overlay card */}
          <motion.div
            className="absolute bottom-8 left-8 right-8 bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-gray-800 shadow-xl transition-all duration-300 group-hover:shadow-blue-500/20 group-hover:border-blue-400/30"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-bold text-xl text-white mb-2">Our Mission</h3>
            <p className="text-gray-300">
              To revolutionize scientific discovery through computational
              excellence and interdisciplinary collaboration.
            </p>
          </motion.div>

          {/* Decorative blobs */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-500/10 blur-xl" />
          <div className="absolute bottom-10 -left-8 w-32 h-32 rounded-full bg-blue-400/10 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}

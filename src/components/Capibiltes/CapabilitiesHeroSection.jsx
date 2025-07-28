"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaProjectDiagram,
  FaRobot,
  FaChartLine,
  FaFlask,
  FaServer,
  FaCode,
} from "react-icons/fa";

function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin,
  });
  const isInView = !inView || inViewResult;

  const defaultVariants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function CapabilityCard({ title, description, icon, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BlurFade delay={delay} inView>
      <motion.div
        className="relative group cursor-pointer overflow-hidden rounded-2xl bg-[#18181B] border border-white/10 shadow-xl hover:border-violet-500/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
        style={{ height: "320px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          <motion.div
            className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            animate={{
              scale: isHovered ? 1.1 : 1,
              backgroundColor: isHovered
                ? "rgba(255,255,255,0.2)"
                : "rgba(255,255,255,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white text-2xl">{icon}</div>
          </motion.div>
          <div className="space-y-3">
            <motion.h3
              className="text-white text-xl font-semibold leading-tight"
              animate={{ y: isHovered ? -4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-gray-400 text-sm leading-relaxed"
              animate={{ y: isHovered ? -4 : 0, opacity: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Hover Effects */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(45deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))",
            opacity: 0,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl border-2"
          style={{
            borderColor: "transparent",
            background:
              "linear-gradient(45deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3)) border-box",
            WebkitMask:
              "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "subtract",
            opacity: 0,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </BlurFade>
  );
}

export default function CapabilitiesSection() {
  const capabilities = [
    {
      title: "Computational Modeling",
      description:
        "Develop sophisticated mathematical models and simulations for complex systems, from molecular dynamics to climate modeling.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Implement cutting-edge ML algorithms for pattern recognition, predictive analytics, and automated discovery in scientific data.",
      icon: <FaRobot />,
    },
    {
      title: "Data Analysis & Visualization",
      description:
        "Transform complex datasets into actionable insights with advanced statistical analysis and interactive visualizations.",
      icon: <FaChartLine />,
    },
    {
      title: "Research Consulting",
      description:
        "Expert guidance on experimental design, methodology selection, and computational approach optimization for your research goals.",
      icon: <FaFlask />,
    },
    {
      title: "High-Performance Computing",
      description:
        "Optimize algorithms and leverage parallel computing resources to accelerate computationally intensive research tasks.",
      icon: <FaServer />,
    },
    {
      title: "Custom Software Development",
      description:
        "Build specialized research tools and applications tailored to your specific scientific workflow and requirements.",
      icon: <FaCode />,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center py-24 px-6">
      <div className="text-center mb-16">
        <BlurFade delay={0.1} inView>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Capabilities
          </h2>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive scientific computing solutions for modern research
            challenges
          </p>
        </BlurFade>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {capabilities.map((cap, index) => (
          <CapabilityCard
            key={cap.title}
            title={cap.title}
            description={cap.description}
            icon={cap.icon}
            delay={0.3 + index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}

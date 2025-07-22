"use client";

import { useState } from "react";
import Image from "next/image";

const allServices = [
  {
    title: "Computational Modeling",
    desc: "Develop sophisticated mathematical models and simulations for complex systems, from molecular dynamics to climate modeling.",
    icon: "/globe.svg",
  },
  {
    title: "AI & Machine Learning",
    desc: "Implement cutting-edge ML algorithms for pattern recognition, predictive analytics, and automated discovery in scientific data.",
    icon: "/icon-title.svg",
  },
  {
    title: "Data Analysis & Visualization",
    desc: "Transform complex datasets into actionable insights with advanced statistical analysis and interactive visualizations.",
    icon: "/vercel.svg",
  },
  {
    title: "Research Consulting",
    desc: "Expert guidance on experimental design, methodology selection, and computational approach optimization for your research goals.",
    icon: "/file.svg",
  },
  {
    title: "High-Performance Computing",
    desc: "Optimize algorithms and leverage parallel computing resources to accelerate computationally intensive research tasks.",
    icon: "/window.svg",
  },
  {
    title: "Custom Software Development",
    desc: "Build specialized research tools and applications tailored to your specific scientific workflow and requirements.",
    icon: "/next.svg",
  },
];

const features = [
  {
    title: "Reproducible Workflows",
    desc: "Ensure your research is robust and repeatable with automated, version-controlled pipelines.",
    icon: "/file.svg",
  },
  {
    title: "Scalable Infrastructure",
    desc: "Seamlessly scale from local experiments to cloud or HPC clusters as your data grows.",
    icon: "/window.svg",
  },
  {
    title: "Collaborative Tools",
    desc: "Work together in real-time with secure, shareable research environments.",
    icon: "/globe.svg",
  },
  {
    title: "Data Security",
    desc: "Protect sensitive research data with enterprise-grade encryption and access controls.",
    icon: "/vercel.svg",
  },
  {
    title: "Custom Integrations",
    desc: "Connect your favorite scientific libraries, databases, and APIs for a seamless workflow.",
    icon: "/icon-title.svg",
  },
  {
    title: "Expert Support",
    desc: "Get help from experienced computational scientists and engineers whenever you need it.",
    icon: "/next.svg",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState(false);
  const visibleServices = expanded ? allServices : allServices.slice(0, 6);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <>
      <section
        id="services"
        className="relative py-24 px-6 sm:px-10 md:px-20 lg:px-32 text-center text-white overflow-hidden"
      >
        {/* Radial Violet Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#7c3aed_0%,_transparent_70%)] opacity-20 blur-[180px] z-0" />
        <div className="absolute inset-0 bg-[#09090B] z-[-1]" />

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 relative z-10">
          Our Services
        </h3>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto relative z-10">
          Comprehensive scientific computing solutions for modern research
          challenges
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {visibleServices.map(({ title, desc, icon }, index) => (
            <div
              key={title}
              className="relative p-6 bg-black/10 backdrop-blur-md border border-white/10 text-left rounded-md transition-opacity transform opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="absolute inset-0 pointer-events-none group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-violet-600/10 transition-opacity duration-300" />
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-white/5 border border-white/10">
                <Image src={icon} alt={title} width={28} height={28} />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>

        {/* View More / Show Less (if more than 6 services) */}
        {/* <div className="mt-12 relative z-10">
          <button
            onClick={toggleExpanded}
            className="text-sm font-medium text-white px-5 py-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-md"
          >
            {expanded ? "Show Less" : "View More"}
          </button>
        </div> */}
      </section>

      {/* Features Section */}
    </>
  );
}

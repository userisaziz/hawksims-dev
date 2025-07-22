"use client";
import {
  Brain,
  LineChart,
  FlaskConical,
  ServerCog,
  Code,
  Atom,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Computational Modeling",
      description:
        "Develop sophisticated mathematical models and simulations for complex systems, from molecular dynamics to climate modeling.",
      icon: <Atom className="w-6 h-6 text-white" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Implement cutting-edge ML algorithms for pattern recognition, predictive analytics, and automated discovery in scientific data.",
      icon: <Brain className="w-6 h-6 text-white" />,
    },
    {
      title: "Data Analysis & Visualization",
      description:
        "Transform complex datasets into actionable insights with advanced statistical analysis and interactive visualizations.",
      icon: <LineChart className="w-6 h-6 text-white" />,
    },
    {
      title: "Research Consulting",
      description:
        "Expert guidance on experimental design, methodology selection, and computational approach optimization for your research goals.",
      icon: <FlaskConical className="w-6 h-6 text-white" />,
    },
    {
      title: "High-Performance Computing",
      description:
        "Optimize algorithms and leverage parallel computing resources to accelerate computationally intensive research tasks.",
      icon: <ServerCog className="w-6 h-6 text-white" />,
    },
    {
      title: "Custom Software Development",
      description:
        "Build specialized research tools and applications tailored to your specific scientific workflow and requirements.",
      icon: <Code className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section
      id="features"
      className="relative py-24 px-6 sm:px-10 md:px-20 lg:px-32 text-center text-white overflow-hidden"
    >
      {/* Softer Radial Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[900px] h-[900px] rounded-full opacity-30 bg-[radial-gradient(circle,_#7c3aed_0%,_transparent_70%)] blur-[180px]" />
      </div>
      <div className="absolute inset-0 bg-[#09090B] z-[-1]" />

      {/* Heading */}
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-4 rounded-full text-sm bg-white/5 border border-white/10 backdrop-blur-md text-white">
          <span>✨ Main Features</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Key Features of EuTACT
        </h2>
        <p className="text-sm text-gray-400">
          A Complete Solution for AI SaaS Startups
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-20 relative z-10">
        {features.map(({ title, description, icon }, index) => {
          const isTop = index < 3;

          return (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center text-center p-10 aspect-square overflow-hidden group
              backdrop-blur bg-black/10
              ${isTop ? "gradient-border-bottom" : "gradient-border-top"}`}
            >
              {/* Hover Gradient Background */}
              <div
                className={`absolute inset-0 z-0 transition-opacity duration-300 group-hover:opacity-100 opacity-0 ${
                  isTop
                    ? "bg-gradient-to-b from-transparent to-violet-600/10"
                    : "bg-gradient-to-t from-transparent to-violet-600/10"
                }`}
              />

              {/* Icon */}
              <div className="z-10 mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10">
                {/* <img src={icon} alt={title} className="w-6 h-6 opacity-80" /> */}
                {icon}
              </div>

              {/* Title + Description */}
              <div className="z-10">
                <h3 className="font-semibold text-white text-base mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Extra Highlight Section */}
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto mt-20 relative z-10">
        {/* Left Feature Card */}
        <div className="relative flex-1 rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden border border-white/10 backdrop-blur-md bg-gradient-to-br from-violet-800/40 to-black/40 flex items-center justify-center text-left">
          <div className="absolute right-6 top-6 hidden md:block">
            <img
              src="/globe.svg"
              alt="AI Icon"
              className="opacity-10 w-20 h-20 sm:w-24 sm:h-24"
            />
          </div>

          <div className="relative z-10 max-w-lg">
            <div className="inline-flex justify-center items-center space-x-2 px-4 py-1.5 mb-4 rounded-full text-sm bg-white/5 border border-white/10 backdrop-blur text-white">
              <span>🚀 Kickstart your AI Startup</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              Seamless OpenAI Integration
            </h3>

            <p className="text-sm text-gray-400 max-w-xl">
              Build SaaS AI applications using OpenAI and Next.js. This kit
              comes with pre-configured and pre-built examples, making it easier
              to quickly kickstart your AI startup.
            </p>

            <button className="mt-6 px-5 py-2.5 text-sm font-medium text-white rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
              Learn more →
            </button>
          </div>
        </div>

        {/* Right-side Supporting Cards */}
        <div className="flex flex-col gap-6 flex-1">
          {[
            {
              title: "All Essential SaaS Pages",
              desc: "Build SaaS AI applications using OpenAI and Next.js, with pre-configured pages for a rapid start.",
              icon: "/window.svg",
            },
            {
              title: "Highly Customizable",
              desc: "Tailor every detail of your SaaS app effortlessly, with reusable components and flexible layout.",
              icon: "/globe.svg",
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="relative bg-gradient-to-br from-violet-700/10 to-black/30 backdrop-blur border border-white/10 p-6 rounded-2xl text-left flex-1"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white/5 border border-white/10">
                <img src={icon} alt={title} className="w-5 h-5 opacity-80" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

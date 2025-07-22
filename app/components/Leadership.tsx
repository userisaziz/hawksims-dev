"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    title: "Chief Executive Officer",
    description:
      "Leading computational scientist with 15+ years in high-performance computing and AI research. Former research director at leading institutions.",
    image: "/globe.svg", // Placeholder - replace with actual team photos
    expertise: ["Computational Biology", "AI Research", "Strategic Leadership"],
  },
  {
    name: "Dr. Michael Rodriguez",
    title: "Chief Technology Officer",
    description:
      "Expert in distributed systems and scientific software architecture. Pioneered scalable solutions for large-scale data processing.",
    image: "/next.svg",
    expertise: ["Distributed Systems", "Software Architecture", "HPC"],
  },
  {
    name: "Dr. Emily Watson",
    title: "Head of Research",
    description:
      "Specialist in machine learning algorithms and statistical modeling. Published 50+ papers in top-tier scientific journals.",
    image: "/vercel.svg",
    expertise: [
      "Machine Learning",
      "Statistical Modeling",
      "Research Strategy",
    ],
  },
  {
    name: "Dr. James Kim",
    title: "Director of Engineering",
    description:
      "Full-stack developer and systems architect with deep expertise in scientific computing platforms and cloud infrastructure.",
    image: "/file.svg",
    expertise: ["Cloud Infrastructure", "Full-Stack Development", "DevOps"],
  },
  {
    name: "Dr. Lisa Thompson",
    title: "Head of Data Science",
    description:
      "Data scientist and visualization expert with experience in genomics, climate modeling, and computational chemistry.",
    image: "/window.svg",
    expertise: ["Data Science", "Visualization", "Genomics"],
  },
  {
    name: "Dr. Robert Singh",
    title: "Chief Scientific Officer",
    description:
      "Leading researcher in computational physics and quantum computing. Advised government agencies on scientific computing policy.",
    image: "/icon-title.svg",
    expertise: ["Quantum Computing", "Computational Physics", "Policy"],
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative py-24 px-6 sm:px-10 md:px-20 lg:px-32 text-center text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[900px] h-[900px] rounded-full opacity-20 bg-[radial-gradient(circle,_#7c3aed_0%,_transparent_70%)] blur-[180px]" />
      </div>
      <div className="absolute inset-0 bg-[#09090B] z-[-1]" />

      {/* Section Header */}
      <div className="mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 mb-4 rounded-full text-sm bg-white/5 border border-white/10 backdrop-blur-md text-white"
        >
          <span>👥 Leadership Team</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Meet Our Leadership
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          World-class scientists and engineers driving innovation in
          computational research
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative p-8 bg-black/10 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:scale-105">
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Profile Image */}
              <div className="relative z-10 mb-6 flex justify-center">
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-violet-600/20 to-purple-600/20 border-2 border-white/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={48}
                      height={48}
                      className="opacity-80"
                    />
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-violet-400 font-medium text-sm mb-3">
                  {member.title}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-violet-500/30 transition-colors duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 relative z-10"
      >
        <div className="inline-flex items-center space-x-4">
          <button className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform shadow-md">
            Join Our Team
          </button>
          <button className="text-white px-8 py-3 rounded-lg font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition">
            View Open Positions
          </button>
        </div>
      </motion.div>
    </section>
  );
}

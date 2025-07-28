import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Prof. James Liu",
    role: "Advisor, Stanford University – Quantum Computing & Algorithms",
    image:
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Dr. Rachel Green",
    role: "Advisor, Former VP, Google AI – Machine Learning at Scale",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Dr. Alan Thompson",
    role: "Advisor, Boeing Chief Scientist (Ret.) – Aerospace Engineering",
    image:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Dr. Maria Santos",
    role: "Advisor, McKinsey Partner – Digital Transformation",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const LeadershipCard = ({ name, role, image, index }) => {
  const isSecondCard = index === 1;
  const translateY = isSecondCard ? "md:translate-y-6" : "";

  return (
    <motion.div
      className={`relative cursor-pointer group ${translateY}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute w-20 h-24 bg-gradient-to-l from-orange-400 to-pink-500 -top-1.5 -left-1.5 transition-transform duration-300 ease-in-out group-hover:scale-105 z-0"></div>
      <div className="relative z-10 bg-gradient-to-b from-gray-700/20 to-black/90 p-6 text-center">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition duration-500"
        />
        <h2 className="text-white text-lg mt-4 font-medium">{name}</h2>
        <p className="text-gray-400 text-sm mt-1">{role}</p>
      </div>
    </motion.div>
  );
};

const LeadershipTeam = () => {
  return (
    <div className="relative bg-[#171717] text-white mt-10">
      <header className="text-center py-20 px-4">
        <span className="uppercase text-gray-400 text-sm tracking-wider">
          Advisory Board
        </span>
        <h1 className="text-2xl md:text-4xl font-semibold mt-2 max-w-3xl mx-auto">
          World-class experts guiding our strategic direction
        </h1>
      </header>

      <section className="py-24 px-4 max-w-screen-xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <LeadershipCard key={index} index={index} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeadershipTeam;

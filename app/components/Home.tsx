// "use client";

// export default function Home() {
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 lg:px-32 overflow-hidden">
//       {/* Centered Animated Background Glow */}
//       <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
//         <div className="w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,_#4b00d0,_#1a0a4f,_transparent)] blur-[180px] opacity-60 animate-pulse-glow" />
//       </div>

//       {/* Solid Background Layer */}
//       <div className="absolute inset-0 bg-[#09090B] z-[-1]" />

//       {/* Main Content */}
//       <div className="relative z-10 max-w-5xl w-full">
//         {/* Badge */}
//         <div className="inline-flex items-center space-x-2 px-5 py-2 mb-6 rounded-full text-sm bg-white/5 border border-white/10 backdrop-blur-sm text-white">
//           <span>✨ Setup your AI workflow with us</span>
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
//           We are the Experts in <br />
//           AI Business Solutions
//         </h1>

//         {/* Description */}
//         <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
//           We provide end-to-end AI integration tailored for your business — from
//           intelligent chatbots to full-stack automation. Let’s turn your ideas
//           into smart, scalable, real-world solutions.
//         </p>

//         {/* CTA Button */}
//         <div>
//           <button className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white px-6 py-3 rounded-lg font-medium text-sm sm:text-base shadow-md hover:scale-105 transition-transform">
//             Try AI Examples
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-hidden min-h-screen flex flex-col justify-center items-center">
      {/* Background gradient circle */}
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

      <div className="container relative z-10 flex flex-col justify-center items-center flex-1">
        {/* Animated gradient text */}
        <div className="flex items-center justify-center">
          {/* <AnimatedGradientTextDemo /> */}
        </div>

        {/* Main content area */}
        <div className="relative flex justify-center items-center w-full">
          {/* Main headline */}
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Advancing Science Through <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-100 to-purple-900">
                Computational Excellence
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your research with cutting-edge scientific computing, AI
              solutions, and expert consulting services tailored for
              breakthrough discoveries
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="inline-flex items-center space-x-4">
                <button className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform shadow-md">
                  Start Your Project
                </button>
                <button className="text-white px-8 py-3 rounded-lg font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition">
                  Explore Services
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

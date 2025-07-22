"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import { Plane, Zap, Building, Car, Cpu } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

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
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin as any,
  });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
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

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
  delay?: number;
}

function IndustryCard({
  title,
  description,
  icon,
  backgroundImage,
  delay = 0,
}: IndustryCardProps) {
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
        {/* Background Image with Blur Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              filter: "blur(6px)",
              scale: 1.1,
            }}
            animate={{
              scale: isHovered ? 1.15 : 1.1,
              filter: isHovered ? "blur(8px)" : "blur(6px)",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/25" />
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)",
            }}
            animate={{
              background: isHovered
                ? "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.5) 100%)"
                : "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 100%)",
            }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Content */}
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
              animate={{
                y: isHovered ? -4 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-gray-400 text-sm leading-relaxed"
              animate={{
                y: isHovered ? -4 : 0,
                opacity: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(45deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))",
            opacity: 0,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Border Glow */}
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
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </BlurFade>
  );
}

function IndustriesSection() {
  const industries = [
    {
      title: "Aerospace & Defense",
      description:
        "Advanced simulations for aerospace engineering and defense systems with cutting-edge computational models.",
      icon: <Plane />,
      backgroundImage:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop&q=60",
    },
    {
      title: "Oil & Gas",
      description:
        "Reservoir modeling and flow optimization solutions for enhanced energy production and efficiency.",
      icon: <Zap />,
      backgroundImage:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=60",
    },
    {
      title: "Construction & Infrastructure",
      description:
        "Structural analysis and smart city solutions for modern urban development and infrastructure planning.",
      icon: <Building />,
      backgroundImage:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60",
    },
    {
      title: "Automotive",
      description:
        "Vehicle dynamics and autonomous systems development with advanced simulation technologies.",
      icon: <Car />,
      backgroundImage:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=60",
    },
    {
      title: "Electronics",
      description:
        "Circuit simulation and thermal management solutions for next-generation electronic systems.",
      icon: <Cpu />,
      backgroundImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Layered blurred circles */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-700/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-purple-500/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        {/* Dark overlay for extra depth */}
        <div className="absolute inset-0 bg-black/60" />
        {/* --- Background Circle and Stars and Blurs --- */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-0 w-full flex flex-col items-center pointer-events-none">
          {/* Circle */}
          <div className="h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full bg-dark opacity-80"></div>
          {/* Stars */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[482px] h-60 overflow-hidden">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>
          {/* Blurs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[925px]">
            <Image
              src="/images/blur/blur-13.svg"
              alt="blur"
              fill
              className="max-w-none"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[778px]">
            <Image
              src="/images/blur/blur-14.svg"
              alt="blur"
              fill
              className="max-w-none"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[584px]">
            <Image
              src="/images/blur/blur-15.svg"
              alt="blur"
              fill
              className="max-w-none"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Add blur-16.svg below the cards */}
          <div className="absolute left-1/2 top-[70%] -translate-x-1/2 z-10 w-full max-w-[600px] pointer-events-none">
            <Image
              src="/images/blur/blur-16.svg"
              alt="blur background"
              width={600}
              height={200}
              className="mx-auto blur-2xl opacity-80"
              style={{ filter: "blur(24px)" }}
            />
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive scientific computing solutions for modern research
              challenges across industry verticals
            </p>
          </BlurFade>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              backgroundImage={industry.backgroundImage}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function IndustriesSectionDemo() {
  return (
    <div className="bg-black text-white  min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";

const SolutionAndServices = ({ heading }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  const handleHover = () => {
    setIsHovered(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024) setIsHovered(true);
      else {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setIsHovered(true);
              setIsVisible(true);
            }
          },
          { threshold: 0.2 }
        );

        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }

        return () => {
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        };
      }
    }
  }, []);

  const hardcodedData = [
    {
      title: "Computational Modeling",
      description:
        "Develop sophisticated mathematical models and simulations for complex systems, from molecular dynamics to climate modeling.",
      logo: "https://img.icons8.com/ios-filled/50/ffffff/calculator.png",
      bg_img:
        "https://images.unsplash.com/photo-1581090700227-1e8c7f07dd45?auto=format&fit=crop&w=800&q=80",
      redirectTo: "/areas/computational-modeling",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Implement cutting-edge ML algorithms for pattern recognition, predictive analytics, and automated discovery in scientific data.",
      logo: "https://img.icons8.com/ios-filled/50/ffffff/artificial-intelligence.png",
      bg_img:
        "https://images.unsplash.com/photo-1566241440091-ec10de8db6d0?auto=format&fit=crop&w=800&q=80",
      redirectTo: "/areas/ai-ml",
    },
    {
      title: "Data Analysis & Visualization",
      description:
        "Transform complex datasets into actionable insights with advanced statistical analysis and interactive visualizations.",
      logo: "https://img.icons8.com/ios-filled/50/ffffff/combo-chart--v1.png",
      bg_img:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      redirectTo: "/areas/data-analysis",
    },
    {
      title: "Research Consulting",
      description:
        "Expert guidance on experimental design, methodology selection, and computational approach optimization for your research goals.",
      logo: "https://img.icons8.com/ios-filled/50/ffffff/microscope.png",
      bg_img:
        "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6796?auto=format&fit=crop&w=800&q=80",
      redirectTo: "/areas/research-consulting",
    },
    {
      title: "High-Performance Computing",
      description:
        "Optimize algorithms and leverage parallel computing resources to accelerate computationally intensive research tasks.",
      logo: "https://img.icons8.com/ios-filled/50/ffffff/server.png",
      bg_img:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
      redirectTo: "/areas/high-performance-computing",
    },
    {
      title: "Custom Software Development",
      description:
        "Build specialized research tools and applications tailored to your specific scientific workflow and requirements.",
      logo: "https://img.icons8.com/ios-filled/50/ffffff/source-code.png",
      bg_img:
        "https://images.unsplash.com/photo-1590608897129-79eec6f4d7da?auto=format&fit=crop&w=800&q=80",
      redirectTo: "/areas/custom-software",
    },
  ];

  return (
    <div
      id="our-areas"
      ref={sectionRef}
      className={`relative max-w-full px-4 py-14 md:px-12 lg:px-28 lg:py-20 overflow-hidden transition-all duration-500 ease-in-out ${
        isHovered ? "bg-footerBg" : "bg-white"
      }`}
      onMouseEnter={handleHover}
    >
      <div className="lg:container mx-auto">
        <div className="w-[917px] h-[747px] absolute -top-[25%] -left-[25%] rotate-180 opacity-20 bg-gradient-to-tl from-textBlue to-[#3f49a7] rounded-[225px] blur-[475.04px]" />
        <div
          className={`flex justify-between items-center mb-20 transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="lg:text-[32px] md:text-start w-full text-center lg:leading-[39.2px] md:leading-[39.2px] md:text-[28px] text-xl font-semibold text-white">
            {heading || "Our Areas of Excellence"}
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[20px] transition-all duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {hardcodedData.map((item, index) => (
            <div
              key={index}
              className="group relative px-8 py-12 h-[530px] flex flex-col gap-6 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out bg-[#22232a66]"
            >
              <div className="group-hover:bg-[#232A66] absolute top-0 left-0 opacity-80 z-[10] w-full h-full"></div>

              <Image
                src={item.logo}
                alt={`${item.title}-logo`}
                className="w-10 h-10 z-20"
                width={40}
                height={40}
              />
              <h3 className="text-2xl font-semibold mb-2 text-white z-10">
                {item.title}
              </h3>

              <div className="text-sm text-gray-200 transition-all duration-300 ease-in-out group-hover:max-h-[none] max-h-[3.6em] overflow-visible z-10">
                <p className="line-clamp-2 group-hover:line-clamp-none group-hover:absolute group-hover:pr-8 transition-all duration-300 ease-in-out">
                  {item.description}
                </p>
              </div>

              <div className="group-hover:flex hidden h-[40px]" />
              <button
                onClick={() => router.push(item.redirectTo)}
                className="absolute text-white bottom-10 py-[13px] opacity-0 group-hover:opacity-100 border-white pl-8 pr-6 items-center text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px] lg:text-lg flex justify-center overflow-hidden hover:text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56 z-10"
              >
                <span className="flex gap-[10px] items-center z-10">
                  Explore More
                  <GoArrowRight size={18} />
                </span>
              </button>

              <div className="border-t mt-9 group-hover:border-none border-b border-l max-w-[350px] self-end -mb-16 -mr-11 px-3 pt-3 rounded-tl-[12px] rounded-tr-[12px] rounded-b-none border-[#909193] border-opacity-[0.655] hover:border-none transition-all duration-[1s] ease-in-out">
                <Image
                  src={item.bg_img}
                  width={350}
                  height={225}
                  className="transition-transform duration-[1s] ease-in-out transform origin-bottom-right group-hover:scale-y-[2.3] md:group-hover:scale-y-[3.8] lg:group-hover:scale-y-[3.2] xl:group-hover:scale-y-[2.5] group-hover:scale-x-[2.5] md:group-hover:scale-x-[1.8]"
                  alt="Solutions-bg-logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionAndServices;

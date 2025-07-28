"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useScreenSize from "@/hooks/useScreenSize";

const IndustriesWeServe = () => {
  const [expandedSection, setExpandedSection] = useState("aerospace");
  const [headingAnimDone, setHeadingAnimDone] = useState(false);
  const [cardAnimDone, setCardAnimDone] = useState(false);
  const [descriptionAnimDone, setDescriptionAnimDone] = useState(false);
  const screenSize = useScreenSize();

  const sections = [
    {
      id: "aerospace",
      title: "Aerospace & Defense",
      description: "Advanced simulations for aerospace engineering.",
      bgColor: "#1E3A8A",
      imgSrc:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "oilgas",
      title: "Oil & Gas",
      description: "Reservoir modeling and flow optimization.",
      bgColor: "#065F46",
      imgSrc:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "construction",
      title: "Construction & Infrastructure",
      description: "Structural analysis and smart city solutions.",
      bgColor: "#92400E",
      imgSrc:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "automotive",
      title: "Automotive",
      description: "Vehicle dynamics and autonomous systems.",
      bgColor: "#7C3AED",
      imgSrc:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "electronics",
      title: "Electronics",
      description: "Circuit simulation and thermal management.",
      bgColor: "#B91C1C",
      imgSrc:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    },
  ];

  const toggleExpand = (sectionId) => {
    setExpandedSection(sectionId);
  };

  return (
    <div
    //   id="maximise"
    //   className="bg-cover bg-no-repeat bg-white"
    //   style={{ backgroundPosition: "center" }}
    >
      <div className="w-full mobile:px-4 px-12 md:px-10 lg:px-7 xl:px-14 2xl:max-w-7xl mx-auto space-y-28">
        {/* <motion.h2
          className="text-footerBg text-xl lg:text-[32px] md:text-[28px] font-semibold text-center md:pt-24 pt-14 lg:pt-[120px] px-16 md:px-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={headingAnimDone ? { opacity: 1, scale: 1 } : {}}
          whileInView={() => {
            if (!headingAnimDone) setHeadingAnimDone(true);
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Industries We Serve
        </motion.h2> */}

        <motion.div
          className="z-[4] flex flex-wrap md:flex-nowrap items-center justify-between gap-x-2 lg:gap-x-3 gap-y-3 self-stretch"
          initial={{ opacity: 0, scale: 0 }}
          animate={cardAnimDone ? { opacity: 1, scale: 1 } : {}}
          whileInView={() => {
            if (!cardAnimDone) setCardAnimDone(true);
          }}
          transition={{ duration: 1.7, ease: "easeOut" }}
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              className={`flex transition-all duration-700 max-w-[900px] ${
                expandedSection === section.id
                  ? "h-[300px] tablet:h-[232px] w-full md:!h-[360px] lg:!h-[440px] md:w-[60%]"
                  : "h-[70px] w-full md:h-[360px] lg:h-[440px] md:w-[65px] lg:w-[100px]"
              } ease-in-out cursor-pointer`}
              onClick={() => toggleExpand(section.id)}
            >
              <motion.div
                style={{ background: section.bgColor }}
                className={`relative flex w-full h-full flex-col items-start overflow-hidden ${
                  expandedSection === section.id
                    ? "pl-8 rounded-xl"
                    : "items-center justify-end px-0 rounded-lg lg:rounded-xl"
                } transition-all duration-700`}
              >
                {/* ✅ Blurred background image */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${section.imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(10px)",
                    opacity: 0.4,
                  }}
                ></div>

                {/* ✅ Dark overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>

                {/* ✅ Foreground Content */}
                {expandedSection === section.id ? (
                  <motion.div
                    className="relative z-10 grid h-full w-full grid-cols-1 sm:grid-cols-2 pt-0 md:pt-8 lg:pt-[72px] md:flex-row tablet:gap-y-10 md:gap-x-4 desktop:gap-x-18 mt-8 sm:mt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                  >
                    <div className="flex flex-col md:gap-y-3 lg:gap-y-4">
                      <h3 className="mobile:text-[16px] sm:pt-10 md:pt-0 tablet:text-[14px] desktop:text-[24px] font-semibold leading-[1.6] text-white">
                        {section.title}
                      </h3>
                      <div className="text-grayText tablet:w-[78%] desktop:w-auto text-[12px] tracking-wide desktop:text-[16px] font-normal pb-5 sm:pb-0">
                        <p className="lg:pr-[12%]">{section.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="border-t border-l absolute bottom-0 right-0 md:pt-2 md:pl-2 lg:pt-4 lg:pl-4 self-end rounded-tl-[12px] border-[#909193] border-opacity-[0.655] transition-all duration-[1s] ease-in-out pl-2 pt-2">
                        <Image
                          src={section.imgSrc}
                          width={100}
                          height={100}
                          alt="industry-illustration"
                          className="transition-transform object-cover md:h-[253px] md:w-[208px] xl:min-h-[350px] xl:min-w-[250px] lg:min-h-[350px] lg:min-w-[214px] w-[201px] h-[145px] duration-[1s] ease-in-out transform origin-bottom-right"
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="relative z-10 text-[14px] lg:text-[24px] py-8 md:pt-5 lg:pt-14 px-8 lg:px-7 h-full w-full font-semibold flex items-center bg-cover bg-no-repeat leading-[1.6] text-white bg-center [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl] [transform:rotate(0deg)] md:[transform:rotate(180deg)]">
                    {section.title}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            descriptionAnimDone
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={() => {
            if (!descriptionAnimDone) setDescriptionAnimDone(true);
          }}
          className="text-footerBg lg:text-5xl lg:leading-[67.2px] md:leading-[44.8px] text-2xl leading-[38.4px] md:text-3xl font-semibold text-center lg:pb-40 pb-20 px-4 md:px-12 lg:px-[120px] flex items-center justify-center"
        >
          {/* Optional Bottom CTA or Message */}
        </motion.div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;

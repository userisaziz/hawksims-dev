import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { infographicsJson } from "@/commonJson/WhatWeDo";
import useScreenSize from "@/hooks/useScreenSize";

export default function Infographics() {
  const [hovered, setHovered] = useState(null);

  const screenSize = useScreenSize();

  const getStyles = (hovered, sectionId, index, screenSize, length) => {
    let marginLeft;
    if (hovered === sectionId) {
      marginLeft = index === 0 || index === length - 1 ? "5rem" : "0rem"; // On hover
    } else {
      if (screenSize === "desktop") {
        switch (index) {
          case 0:
            marginLeft = "22rem";
            break;
          case 1:
            marginLeft = "15rem";
            break;
          case 2:
            marginLeft = "8rem";
            break;
          case 3:
            marginLeft = "15rem";
            break;
          default:
            marginLeft = "2rem"; // Fallback for any other items
        }
      } else {
        marginLeft = index === 0 || index === length - 1 ? "7.5rem" : "2rem"; // For other screens
      }
    }

    return {
      marginLeft,
      transition: hovered === sectionId ? "margin-left 0.3s ease" : "none",
      paddingRight: "0.5rem",
      background:
        hovered === sectionId
          ? "linear-gradient(270deg, rgba(238, 239, 250, 0.40) 0%, rgba(153, 164, 240, 0.40) 100%)"
          : "initial",
    };
  };

  return (
    <>
      <div id="analytics-infographics" style={{ background: "white" }}>
        <div className="container mx-auto max-w-[1440px] hidden md:flex flex-row justify-between items-center  md:!min-h-[80vh] min-h-screen lg:!min-h-screen p-8 relative overflow-hidden ">
          <div className="flex flex-col space-y-8 z-[2] ml-10">
            {infographicsJson.map((section, index) => (
              <motion.div
                key={section.id}
                className="p-6 rounded-lg transition-all duration-300"
                style={getStyles(
                  hovered,
                  section.id,
                  index,
                  screenSize,
                  infographicsJson.length
                )}
                onMouseEnter={() => setHovered(section.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex space-x-4 items-center">
                  <div className="flex flex-col lg:flex-row">
                    <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                      <Image
                        width={44}
                        height={44}
                        src={section.imgUrl}
                        layout="responsive"
                        alt="icon"
                      />
                    </div>
                    <h3 className="text-sm text-footerBg font-semibold max-w-[248px] lg:text-lg">
                      {section.heading}
                    </h3>
                  </div>
                  {hovered === section.id && section.description && (
                    <p className="text-xs text-gray-800 max-w-[300px] lg:text-sm">
                      {section.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="absolute lg:text-3xl md:text-2xl text-footerBg font-semibold right-[4%] top-[60%] z-[2] w-[300px]">
            What is Analytics Services about
          </h2>

          <div
            className="absolute inset-0"
            style={{
              width: "26%",
              background:
                "radial-gradient(circle, rgba(95,128,246,0.31) 0%, rgba(255,255,255,0) 100%)",
              background:
                "radial-gradient(118.29% 57.53% at 46.25% 45.91%, #FFF 0%, #D9E2FD 100%)",
              zIndex: 1,
              opacity: 0.3,
            }}
          ></div>

          <div className="absolute w-[120%] h-[133%] overflow-hidden rounded-xl z-[1] bottom-[-33%] right-[-46%] ">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(95,128,246,0.31) 0%, rgba(255,255,255,0) 100%)",
                background:
                  "radial-gradient(118.29% 57.53% at 46.25% 45.91%, #FFF 0%, #D9E2FD 100%)",
                zIndex: 1,
                opacity: 0.4,
              }}
            ></div>
            <video
              src="/assets/services/wireanimation2.mp4"
              className="w-full h-full object-bottom z-0"
              loop
              autoPlay
              muted
              playsInline
              playsinline="true"
              webkit-playsinline="true"
              onLoadedData={(e) => e.target.classList.remove("scale-y-0")}
            />
          </div>
        </div>

        {/* ---------- mobile view -------------  */}

        <div className="flex flex-col items-center min-h-screen relative md:hidden">
          <div className="relative w-full flex justify-center items-center overflow-hidden">
            <div className="relative h-[15rem] w-screen flex items-center justify-center">
              <div className="absolute w-[130%] tablet:w-[90%] h-full left-1/2 transform -translate-x-1/2 z-[1] overflow-hidden rounded-xl">
                <video
                  src="/assets/services/wireanimation2.mp4"
                  className="w-full h-full object-cover object-bottom"
                  loop
                  autoPlay
                  muted
                  playsInline
                  playsinline="true"
                  webkit-playsinline="true"
                  onLoadedData={(e) => e.target.classList.remove("scale-y-0")}
                />
              </div>
              <h2 className="absolute top-16 text-lg font-semibold text-black z-10">
                What is Analytics Services about
              </h2>
            </div>
          </div>

          <div className="flex flex-col space-y-4 w-full max-w-4xl mx-auto p-4 pt-0">
            {infographicsJson.map((section) => (
              <motion.div
                key={section.id}
                className={`flex flex-col justify-center items-start gap-3 p-4 pt-1 rounded-lg transition-all duration-300 `}
                style={{
                  ...(hovered === section.id
                    ? {
                        background:
                          "linear-gradient(270deg, rgba(238, 239, 250, 0.40) 0%, rgba(153, 164, 240, 0.40) 100%)",
                      }
                    : {}),
                }}
                onMouseEnter={() => setHovered(section.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-x-3">
                  <Image
                    width={24}
                    height={24}
                    src={section.imgUrl}
                    objectFit="contain"
                    className="h-20 w-20"
                    alt="icon"
                  />

                  <div className="flex flex-col -mt-2">
                    <h3 className="text-xs text-footerBg font-bold">
                      {section.heading}
                    </h3>
                    {hovered === section.id && section.description && (
                      <p className="mt-1 text-gray-800 text-sm max-w-sm">
                        {section.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

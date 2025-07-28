import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import MobileDevice from "./Mobile";

const ScrollComponent = ({ json, imageOrder, stripOrder, textOrder }) => {
  const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const desktopRefs = json.map(() => useIntersectionObserver(1.0));
  const mobileRefs = json.map(() => useIntersectionObserver(1.0));

  useEffect(() => {
    const observerOptions = {
      threshold: 1,
    };

    const desktopObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = desktopRefs.findIndex(
          (ref) => ref.sectionRef.current === entry.target
        );
        if (entry.isIntersecting) {
          setCurrentDesktopIndex(index);
        }
      });
    }, observerOptions);
    const mobileObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = mobileRefs.findIndex(
          (ref) => ref.sectionRef.current === entry.target
        );
        if (entry.isIntersecting) {
          setCurrentMobileIndex(index);
        }
      });
    }, observerOptions);

    // Observe desktop sections
    desktopRefs.forEach((ref) => {
      if (ref.sectionRef.current) {
        desktopObserver.observe(ref.sectionRef.current);
      }
    });

    // Observe mobile sections
    mobileRefs.forEach((ref) => {
      if (ref.sectionRef.current) {
        mobileObserver.observe(ref.sectionRef.current);
      }
    });

    return () => {
      desktopObserver.disconnect();
      mobileObserver.disconnect();
    };
  }, [desktopRefs, mobileRefs]);
  return (
    <div
      id="journey"
      className="relative flex flex-col items-center w-full  bg-headerBg overflow-hidden"
    >
      <div className="time-line-scrollbar w-full h-[70vh] overflow-y-scroll">
        <div className="flex items-center justify-center text-white p-2 sm:py-10">
          <div className="hidden md:flex flex-col md:flex-row md:gap-20 w-full ">
            <motion.div
              key={json[currentDesktopIndex]?.imgUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={` w-1/2 h-96 ${imageOrder}`}
              style={{
                position: "sticky",
                top: "0px",
              }}
            >
              {json[currentDesktopIndex]?.imgUrl && (
                <Image
                  src={json[currentDesktopIndex]?.imgUrl}
                  alt={json[currentDesktopIndex]?.heading}
                  layout="fill"
                  objectFit="cover"
                  className="sticky rounded-lg"
                />
              )}
            </motion.div>
            <div
              className={`${stripOrder} flex flex-col items-center mx-4 space-y-4`}
            >
              {json.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer flex flex-col rounded-lg items-center ${index === currentDesktopIndex
                      ? "text-blue-400"
                      : "text-gray-500"
                    }`}
                >
                  <motion.div
                    className={`w-[8px] rounded-lg h-32 bg-blue-400 ${index === currentDesktopIndex
                        ? "opacity-100"
                        : "opacity-40"
                      }`}
                    layout
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                </div>
              ))}
            </div>

            <div className={`md:w-1/2 space-y-8 ${textOrder}`}>
              {json.map((item, index) => (
                <motion.div
                  key={item?.heading}
                  ref={desktopRefs[index].sectionRef}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-auto">
                    <h2 className="text-3xl mb-2">{item?.heading}</h2>
                    <p
                      className={`text-lg mb-5 ${currentDesktopIndex === index
                          ? "flex min-h-[240px]"
                          : "hidden"
                        }  `}
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    />

                    {index < json?.length - 1 ? (
                      <hr className="text-gray-50 mt-5" />
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:hidden w-full">
            <MobileDevice
              json={json}
              currentIndex={currentMobileIndex}
              sectionRefs={mobileRefs}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;

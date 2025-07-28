"use client";
import React, { useRef } from "react";
import styles from "./JoinUs.module.css";
import Image from "next/image";
import useImageSlider from "@/hooks/useImageSlider";
import Link from "next/link";
import BaseButton from "../BaseButton";
import { motion, useInView } from "framer-motion";

const images = [
  "/assets/CareerHeroImg1.svg",
  "/assets/CareerHeroImg2.svg",
  "/assets/CareerHeroImg3.svg",
];

const HeroSection = () => {
  const currentImageIndex = useImageSlider(images, 3000);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
// below code is used for animation 
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, x: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetSection = document.querySelector(targetId);
    const subHeaderSection = document.querySelector('#subHeader');
    let height;
    if (subHeaderSection) {
      height = subHeaderSection.offsetHeight;
    };
    if (targetSection) {
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - height;
      try {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } catch (error) {
        console.error("Error during scrolling:", error);
      }
    }
  };
  return (
    <>
      <div
        id="heroSection"
        className="xl:px-[7.78%] lg:pb-20 pb-12 mobile:pb-14 px-[8.33%] pt-[124px] md:px-[9.64%] lg:px-[2%] bg-[#030515] md:pt-[144px] w-full h-full "
      >
        <div className="xl:max-w-7xl mx-auto flex  px-0 md:px-0 lg:px-[4%] xl:px-[6%] jusify-center flex-col items-center w-full h-full">
          <div className="rounded-[100px] top-[20%] z-[-1]  opacity-[0.15] absolute h-[280px] md:h-[950px] w-[280px] bg-[linear-gradient(311deg,_#5F80F6_20.02%,_#3F49A7_112.23%)] filter blur-[85px] rotate-[-15.402deg]" />
          <div className="rounded-[400px] opacity-[0.5] bg-[linear-gradient(311deg,_#5F80F6_20.02%,_#3F49A7_112.23%)] absolute bottom-0 filter blur-[450px] w-full h-[200px]" />
          <h1 className=" shine font-inter text-center mobile:w-[300px] text-[32px] leading-[44.8px]  md:text-[44px]  lg:text-[64px] lg:leading-[83.2px] md:leading-[61.6px] font-semibold text-[#DFDFE0] ">
            Begin with the Future in Mind
          </h1>

          <p className="text-xs md:text-sm lg:text-xl mt-3 mobile:w-[257px] text-center font-normal   lg:w-[786px] w-[382px] md:w-[477px] shine text-[#DFDFE0] lg:mt-[20px] font-inter  md:font-semibold ">
            With us, there are endless possibilities for you to achieve your
            full potential. Just focus on being the best version of yourself
          </p>
          <Link href="#openingPositions" className="z-10"
            onClick={(e) => handleSmoothScroll(e, "#openingPositions")}
          >
            <BaseButton
              className="lg:py-3 py-2  lg:mt-[52px] mt-8 md:mt-6 flex lg:pl-[1.2rem] lg:pr-[1.2rem]  relative pl-6 pr-4 items-center  text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px]
border-[#FFF] lg:text-lg  justify-center overflow-hidden text-[#FFF] transition-all before:absolute before:h-0 before:w-0 before:rounded-full hover:text-[#FFF]
before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56"
              text="See Current Openings"
            />
          </Link>
        </div>
{/* motion.div will add animation for the images */}
        <motion.div
          variants={imageVariants}
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`${styles.imagesContainer} max-w-7xl mx-auto lg:px-[4%] lg:mt-20 mt-12 mobile:mt-22`}
        >
          {images[currentImageIndex] && (
            <Image
              src={images[currentImageIndex]}
              alt="hero section"
              className={`lg:rounded-[20px] lg:h-[624px] mobile:h-[167px] h-[338px] rounded-[12px] mobile:rounded-[8px] object-cover w-full `}
              layout="responsive"
              width={500}
              height={300}
            />
          )}
        </motion.div>
      </div>
    </>
  );
};
export default HeroSection;

"use client";
import React, { useRef } from "react";
import Image from "next/image";
import useImageSlider from "@/hooks/useImageSlider";
import styles from "./JoinUs.module.css";
import { solutionEcStoriesImagesJson } from "@/commonJson/JoinUs/JoinUs";
import { motion, useInView } from "framer-motion";

const SolutionNecStories = () => {
  const index = useImageSlider(solutionEcStoriesImagesJson[0], 2000);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const isInView2 = useInView(sectionRef, { once: true });
  // below code is used for animation
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, x: "-30%", y: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 3,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };
  const imageVariants2 = {
    hidden: { scale: 0.8, opacity: 0, x: "12%", y: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 4,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };
  const imageVariants3 = {
    hidden: { scale: 0.8, opacity: 0, x: "-50%", y: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 4,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };
  return (
    <>
      <div
        id="wearesolutionnec"
        className={`container mobile:max-w-96 tablet:max-w-xl  md:max-w-2xl lg:max-w-[950px] xl:max-w-6xl 2xl:max-w-7xl mx-auto  mobile:py-14 py-24 lg:py-[120px] h-full w-full  ${styles.solutionEcStoriesContainer}`}
      >
        <div className="flex justify-center h-full w-full  items-center lg:text-[36px] font-semibold text-[28px] mobile:text-[20px] mobile:leading-[28px] leading-[39.2px] lg:leading-[50.4px] font-inter">
          <h2 className="text-[#01020A] text-center mobile:w-[300px] tablet:w-[454px] w-[458px] lg:w-[698px]">
            Discover the
            <span className="text-[#5F80F6] ml-[6px]">
              #WeAreSolutionec stories{" "}
            </span>
            and find out what we value most
          </h2>
        </div>

        <motion.div
          className="lg:mt-20 mt-12 mobile:mt-10"
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* first slide */}
          <motion.div
            variants={imageVariants}
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex gap-2 mobile:gap-1 lg:gap-3"
          >
            <Image
              alt="story1img"
              width={300}
              height={297}
              src="/assets/SolutionEcStory1.svg"
              className={`rounded-[16px] object-cover mobile:h-[110px] mobile:w-[66.32%] h-[159px] mobile:rounded-[8px] lg:h-[297px] w-[45.8%] ${styles.storyImg}`}
            />

            <h3
              className={`text-[#FFF] px-1 break-words mobile:text-[12px]  mobile:leading-[16.8px] mobile:font-bold h-[159px] rounded-[16px] w-[24.7%] lg:h-[297px] lg:text-[24px] xl:text-[30px] lg:leading-[44px] text-[14px] leading-[19.6px] text-center font-inter font-semibold flex items-center justify-center mobile:rounded-[8px] mobile:h-[110px] mobile:w-[32.78%] ${styles.keyword}`}
              style={{
                backgroundColor: solutionEcStoriesImagesJson[0][index].bgColor,
              }}
            >
              {solutionEcStoriesImagesJson[0][index].title}
            </h3>
            <Image
              alt="story2img"
              width={315}
              height={297}
              src="/assets/SolutionEcStory2.svg"
              className={`rounded-[16px] mobile:hidden object-cover lg:h-[297px] h-[159px] w-[25.9%] ${styles.storyImg}`}
            />
          </motion.div>
          {/* second slide */}
          <motion.div
            variants={imageVariants2}
            ref={sectionRef}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            className="flex overflow-hidden mobile:mt-1 mobile:gap-1 gap-2 lg:gap-3 mt-2 lg:mt-3"
          >
            <h3
              className={`text-[#FFF] px-1 break-words mobile:text-[12px]  mobile:leading-[16.8px] mobile:font-bold h-[159px] rounded-[16px] w-[24.7%] lg:h-[297px] lg:text-[24px] xl:text-[30px] lg:leading-[44px] text-[14px] leading-[19.6px] text-center font-inter font-semibold flex items-center mobile:rounded-[8px] mobile:h-[110px] justify-center mobile:w-[32.78%] ${styles.keyword}`}
              style={{
                backgroundColor: solutionEcStoriesImagesJson[1][index].bgColor,
              }}
            >
              {solutionEcStoriesImagesJson[1][index].title}
            </h3>
            <Image
              alt="story3img"
              width={315}
              height={297}
              src="/assets/SolutionEcStory3.svg"
              className={`rounded-[16px] h-[159px] mobile:hidden  lg:h-[297px] object-cover  w-[25.9%] ${styles.storyImg}`}
            />

            <Image
              alt="story4img"
              width={300}
              height={297}
              src="/assets/SolutionEcStory4.svg"
              className={`rounded-[16px] h-[159px] mobile:rounded-[8px] mobile:h-[110px] mobile:w-[66.32%] lg:h-[297px] object-cover  w-[45.8%] ${styles.storyImg}`}
            />
          </motion.div>
          {/* third slide */}
          <motion.div
            variants={imageVariants3}
            ref={sectionRef}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            className="flex gap-2 mobile:gap-1 mobile:mt-1 lg:gap-3 mt-2 lg:mt-3"
          >
            <Image
              alt="story5img"
              width={300}
              height={297}
              src="/assets/SolutionEcStory5.svg"
              className={`rounded-[16px]  mobile:rounded-[8px] mobile:h-[110px] mobile:w-[66.32%] object-cover h-[159px] lg:h-[297px] w-[45.8%] ${styles.storyImg}`}
            />
            <h3
              className={`text-[#FFF] px-1 mobile:text-[12px]  mobile:leading-[16.8px] mobile:font-bold mobile:h-[110px] h-[159px] rounded-[16px] w-[24.7%] lg:h-[297px] lg:text-[24px] xl:text-[30px] lg:leading-[44px] text-[14px] leading-[19.6px] text-center font-inter font-semibold flex mobile:rounded-[8px] break-words items-center justify-center mobile:w-[32.78%] ${styles.keyword}`}
              style={{
                backgroundColor: solutionEcStoriesImagesJson[2][index].bgColor,
              }}
            >
              {solutionEcStoriesImagesJson[2][index].title}
            </h3>

            <Image
              alt="story6img"
              width={315}
              height={297}
              src="/assets/SolutionEcStory6.svg"
              className={`rounded-[16px] lg:h-[297px] mobile:hidden h-[159px] object-cover w-[25.9%] ${styles.storyImg}`}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SolutionNecStories;

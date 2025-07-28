"use client";
import React from "react";
import styles from "./landingHero.module.css";
import { statsData } from "@/commonJson/HomePage/SolutionecByNumberConstant";

const SolutionecSection = () => {
  return (
    <div
      id="solutionec-by-numbers"
      className="font-sans max-w-full bg-[#F2F8FF]"
    >
      <div className="w-full container mx-auto max-w-[1440px] overflow-hidden relative">
        <div
          className="absolute w-[800px] h-[850px] bg-blue-200 blur-[92px] rounded-full opacity-20 transform rotate-90 
        -left-[280px] -top-[237px]"
        ></div>

        {/* Right Gradient */}
        <div
          className="absolute w-[800px] h-[850px] bg-blue-200 blur-[92px] rounded-full opacity-20 transform rotate-90 
        -right-[280px] -top-[237px]"
        ></div>
        <div className="flex flex-col py-24 bg-white">
          <h2 className="text-[28px] md:text-[32px] mb-16 text-solutionecHeading font-semibold text-center">
            Solutionec By Numbers
          </h2>
          <div className={`${styles.logos}`}>
            <div className={`${styles.logosSlide}`}>
              {statsData?.map((stat, index) => (
                <div
                  key={index}
                  className="slide-container px-3 sm:px-2 md:px-4 w-full"
                >
                  <div
                    className={` h-[112px] sm:h-auto w-[112px] md:w-[170px] lg:w-[324px]   ${
                      index % 2 !== 0 ? "mt-24" : "mt-5"
                    } flex  flex-col gap-[5px] sm:gap-[10px] md:gap-[18px] 
                 max-w-[315px] px-2 sm:px-15 py-[10px] sm:py-[30px] bg-[#D2DAF7] rounded-tr-[20px] text-center rounded-bl-[20px] 2xl:w-[314px]`}
                  >
                    <text className="text-[16px] md:text-[36px] mt-3 sm:mt-0 lg:text-[56px] text-darkBlue font-semibold">
                      {stat.value}
                    </text>
                    <text className="text-[12px] text-wrap  lg:text-[24px] text-footerBg font-normal">
                      {stat.label}
                    </text>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${styles.logosSlide}`}>
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="slide-container px-3 sm:px-2 md:px-4 w-full"
                >
                  <div
                    className={` h-[112px] sm:h-auto w-[112px] md:w-[170px] lg:w-[324px]   ${
                      index % 2 !== 0 ? "mt-24" : "mt-5"
                    } flex  flex-col gap-[5px] sm:gap-[10px] md:gap-[18px] 
                 max-w-[315px] px-2 sm:px-15 py-[10px] sm:py-[30px] bg-[#D2DAF7] rounded-tr-[20px] text-center rounded-bl-[20px] 2xl:w-[314px]`}
                  >
                    <text className="text-[16px] md:text-[36px] mt-3 sm:mt-0 lg:text-[56px] text-darkBlue font-semibold">
                      {stat.value}
                    </text>
                    <text className="text-[12px] text-wrap  lg:text-[24px] text-footerBg font-normal">
                      {stat.label}
                    </text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionecSection;

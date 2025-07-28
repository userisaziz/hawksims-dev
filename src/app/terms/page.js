import React from "react";
import CustomHeroSection from "@/components/commonComponent/CustomHeroSection/index";
import NavigatingSubHeader from "@/components/commonComponent/NavigatingSubHeader";
import { data, navigationData } from "@/commonJson/PrivacyandTerms";



const TermsAndConditions = () => {
  return (
    <>
      <CustomHeroSection
        title="Terms and Conditions"
        srcImg="/assets/heroImageCaseStudies.svg"
      />
      <NavigatingSubHeader data={navigationData} visibility="flex" />
      <div className="pt-20 bg-white mobile:px-[3.3%] px-[6.6%] pb-40 lg:px-[7.78%] flex flex-col 2xl:max-w-7xl mx-auto ">
        <p className="text-3xl  font-semibold text-[#01020A]">
          Lorem Ipsum dolor sit amet
        </p>
        {data?.map((data, i) => (
          <p className="pt-6 max-w-[831px]  text-base text-[#52545B] font-normal">
            {data?.desc}
          </p>
        ))}
        <p className="text-3xl pt-12 font-semibold text-[#01020A]">
          Lorem Ipsum dolor sit amet
        </p>
        {data?.map((data, i) => (
          <p className="pt-6 max-w-[831px]  text-base text-[#52545B] font-normal">
            {data?.desc}
          </p>
        ))}
      </div>
    </>
  );
};
export default TermsAndConditions;

import React from "react";
import Image from "next/image";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import styles from './heroSection.module.css';

const CustomHeroSection = ({ title,blog, srcImg }) => {
  return (
    <>
      <div id="heroSection" className={`lg:h-[280px] mobile:h-[350px] h-[288px] w-full relative mt-[62px] lg:mt-[107px] sm:mt-[63px] ${styles.heroContainer} `}>
        {srcImg && <Image
          width={100}
          height={100}
          alt="bg-image"
          className="w-full h-full object-cover"
          src={srcImg}
        />}
        <div className="w-full container max-w-[1440px] m-auto">
          <p className="absolute px-[2%]  mobile:text-[12px] mobile:leading-[20.64px] mobile:top-[16px] top-[10px] font-normal pt-2 text-[#DFDFE0] text-[10px] leading-[24.08px] font-inter ">
            <Breadcrumb  blog={blog}/>
          </p>
          <h1 className="absolute px-3 w-full text-center mobile:text-[32px] mobile:leading-[44.8px] text-[#FFF] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-semibold leading-[61.6px] text-[44px] lg:leading-[83.2px] lg:text-[56px]  font-inter">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};
export default CustomHeroSection;

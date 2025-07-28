import React from "react";
import Image from "next/image";
import styles from "./JoinUs.module.css";

const WeAreWaitingForYou = () => {
  return (
    <>
      <div
        id="solutionec-team"
        className={`px-[7.78%] dark:bg-white 2xl:px-0 mobile:py-14 mobile:px-[3.3%] tablet:pt-[63px] tablet:pb-24 py-40 w-full h-full`}
      >
        <div
          className={`${styles.waitingBg} 2xl:max-w-7xl mx-auto mobile:pt-8 pt-14 lg:pt-[60px] mobile:rounded-[12px] rounded-[20px] flex-col  lg:flex lg:flex-row`}
        >
          <div className={`lg:w-[40%] w-full lg:pb-[7%]  pr-[4%] pl-[4%]`}>
            <h2 className="lg:text-[32px] mobile:text-[20px] mobile:leading-[28px] text-[28px]  leading-[39.2px] text-[#01020A]  font-semibold lg:leading-[44.8px] font-inter">
              We are waiting for you!
            </h2>
            <p className="lg:mt-5 mobile:mt-4  mt-6 md:w-[538px] lg:w-full text-[14px] leading-[24.08px]  font-inter lg:text-[18px] font-normal lg:leading-[28.8px] text-[#52545B]">
              If you're passionate about problem-solving and love working with a
              fun, dynamic group, we'd love to meet you. Come join us - we can't
              wait to see the amazing things we'll accomplish together!
            </p>
            <p className="lg:mt-5 mt-6 mobile:mt-4 text-[14px] leading-[19.6px]  text-[#01020A] lg:leading-[22.4px] lg:text-[16px] font-inter font-semibold">
              Solutionec Team
            </p>
          </div>
          <div className={`w-full lg:w-[60%] mt-2 lg:mt-0`}>
            <Image
              alt="img"
              width={300}
              height={300}
              src="/assets/JoinUsWaitingForU1.svg"
              className="w-full h-full hidden lg:flex rounded-bl-[20px] rounded-br-[20px]"
            />
            <Image
              alt="img"
              width={300}
              height={300}
              src="/assets/JoinUsWaitingForU2.svg"
              className="w-full h-full mobile:hidden flex lg:hidden rounded-bl-[12px] rounded-br-[12px]"
            />
            <Image
              alt="img"
              width={300}
              height={300}
              src="/assets/JoinUsWaitingForU3.svg"
              className="w-full h-full hidden mobile:flex rounded-bl-[12px] rounded-br-[12px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeAreWaitingForYou;

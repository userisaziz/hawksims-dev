"use clinet";
import React,{useState} from "react";
import styles from "./whoWeAre.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BaseButton from "../BaseButton";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

/**
 * this below component is used for "Want to be a part of Solutionec Family?" section in who-we-are page
 * @returns 
 */
const WantToBePartOfSolutionEC = () => {
  const [cardAnimDone , setCardAnimDone]=useState(false);
  const router = useRouter();
  return (
    <>
      <div
        id="join"
        className={`dark:bg-white container mx-auto max-w-full  md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 2xl:mx-auto md:py-20 mobile:mt-[96px]  flex mobile:flex-col tablet:px-[6.25%] tablet:py-[7.29%] w-full  ${styles.WantToBePartContainer}`}
      >
        <div className="md:max-w-[479px] mobile:px-4 w-[90%] lg:w-[479px] tablet:max-w-[289px] h-full">
          <h2
            className="text-[#01020A] md:max-w-[479px] tablet:max-w-[244px] tablet:text-[28px] tablet:leading-[39.2px]
            xl:w-[479px] mobile:max-w-[327px] mobile:text-[20px] mobile:font-semibold mobile:leading-[28px] font-inter  md:text-[32px] md:font-semibold leading-[44.8px] "
          >
            Want to be a part of Solutionec Family?
          </h2>
          <p className="md:mt-4 mobile:max-w-[327px] mobile:mt-[12px] tablet:mt-3 tablet:text-[14px] tablet:max-w-[355px] tablet:leading-[24.08px] mobile:text-[14px] mobile:leading-[19.6px] text-[16px] md:max-w-[399px]  xl:w-[399px] text-[#52545B] font-normal font-inter">
            Come help us in connecting the dots as we shape the future and scale
            at velocity
          </p>

          <BaseButton
            onClick={() => router.push("/join-us")}
            className="lg:py-3 py-2 lg:pl-8 lg:pr-6 mt-[30px] relative pl-6 pr-4 items-center  text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px]
         border-[#5F80F6] lg:text-lg flex justify-center overflow-hidden text-[#3F49A7] transition-all before:absolute before:h-0 before:w-0 before:rounded-full hover:text-[#FFF]
          before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56"
            text=" Join Our Team"
            iconClassContainer={"gap-2"}
            icon={<GoArrowRight size={18} />}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.0 }}
          animate={cardAnimDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          whileInView={() => {
           if (!cardAnimDone) setCardAnimDone(true);
          }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          className={` md:ml-[4%] mobile:px-5 mobile:w-[96%] mobile:mb-8 mobile:h-[209px]  mobile:mt-[48px] tablet:ml-[2%] lg:ml-[8%] xl:ml-[10%] flex tablet:w-[344px] tablet:h-[210px] md:h-[375px] h-full md:max-w-[557px] relative ${styles.joinUs1}`}
        >
          <div
            className={` max-w-[50%] h-full aspect-[16/9] md:h-[335px] lg:h-[375px] lg:min-w-[270px] xl:min-w-[280px] xl:min-h-[375px] $${styles.joinUsLeftContainer}`}
          >
            <Image
              alt="joinus`"
              src={"/assets/joinus1.svg"}
              height={100}
              width={100}
              className={`object-cover rounded-xl  w-full h-full ${styles.joinImg}`}
            />

            <div
              className={`absolute mobile:top-[-6%]  mobile:left-[2%] mobile:w-[53px] mobile:h-[89px] md:w-20 tablet:top-[-6%] tablet:left-[-3%] tablet:w-[61px] tablet:h-[90px] md:h-40 bg-[#5F80F6] md:max-w-[80px] md:max-h-[159px] md:left-[-3%]  top-[-4%] left-[-5%] rounded-[20px] ${styles.blueCorner}`}
              style={{ zIndex: "-10" }}
            ></div>
          </div>

          <div
            className={`h-full md:ml-3  mobile:ml-1 w-full max-w-[50%] tablet:ml-2 ${styles.joinusRightContainer}`}
          >
            <div className="md:max-w-[264px]  mobile:w-full mobile:h-[90px] lg:min-w-[270px] xl:min-w-[264px] tablet:max-w-[147.7px] tablet:h-[90.63px] md:h-[162px] xl:min-h-[162px]">
              <Image
                alt="joinus2"
                src={"/assets/joinus2.svg"}
                height={18}
                width={18}
                className={`object-cover rounded-lg   w-full h-full ${styles.rightImg1}`}
              />
            </div>
            <div
              className={`md:max-w-[264px] pt-2 mobile:max-full mobile:max-h-[111px] lg:min-w-[250px] xl:min-w-[264px]  md:h-[200px] xl:min-h-[200px] md:mt-2 relative
    tablet:max-w-[147.7px] tablet:h-[111.89px] ${styles.joinUs3}`}
            >
              <Image
                alt="joinus3"
                src={"/assets/joinus3.svg"}
                height={18}
                width={18}
                className={`object-cover w-full rounded-lg h-full mobile:h-[111px]  ${styles.rightImg2}`}
              />
              <div
                className={`absolute mobile:bottom-[-18%]  mobile:right-[-8%]  mobile:w-[112px] mobile:h-[95px] md:h-40 tablet:w-[113px] tablet:h-[96px] tablet:bottom-[-13%] tablet:right-[-10%] bg-[#BDE910] md:w-[201px] xl:min-w-[201px] xl:min-h-[171px] md:max-h-[171px] bottom-[-10%] right-[-8%] rounded-[20px] ${styles.neonCorner}`}
                style={{ zIndex: "-10" }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default WantToBePartOfSolutionEC;

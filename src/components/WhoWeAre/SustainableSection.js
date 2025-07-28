import Image from "next/image";
import React, { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

/**
 * this component used for Sestainable section in who-we-are page
 * @returns 
 */
const SustainableSection = () => {
  const sectionRef = useRef(null);
  const router = useRouter();
  const isInView = useInView(sectionRef, { once: true });

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, x: -50, y: 50 }, 
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
/**
 * methos to handle redirection for sustainability page
 */
  const handleClick = () => {
    router.push("who-we-are/sustainability");
  };

  return (
    <div
      id="sustainability"
      className="container max-w-[1440px] bg-white pt-40 lg:px-28 lg:pb-40 px-[17px] pb-[55px] md:px-12 md:pb-24 w-full  m-auto"
    >
      <div className="bg-sustainableGreen rounded-2xl flex items-center lg:items-end flex-col-reverse lg:flex-row">
        <motion.div
          className="rounded-2xl w-full h-full lg:w-[50%]"
          variants={imageVariants}
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src={"/assets/Sustainable-Tab.svg"}
            height={480}
            width={670}
            className="rounded-2xl h-full w-full hidden md:flex lg:hidden"
            alt="sustainable-bg-Img"
          />
          <Image
            src={"/assets/sustainableImg-web.svg"}
            height={520}
            width={810}
            className="rounded-2xl h-full w-full hidden lg:flex"
            alt="sustainable-bg-Img"
          />
          <Image
            src={"/assets/sustainableImg-mobile.svg"}
            height={520}
            width={360}
            className="rounded-2xl h-full w-full flex md:hidden"
            alt="sustainable-bg-Img"
          />
        </motion.div>

        <div className="flex w-full lg:w-[50%] flex-col gap-4 py-[70px] md:pr-20 pr-4 pl-4 md:pl-0 max-w-[550px]">
          <h2 className="text-[20px] font-semibold text-footerBg leading-[28px] md:text-[32px] lg:text-[32px] md:leading-[44px] lg:leading-[44px]">
            Building a <span className="text-textBlue">Sustainable</span>{" "}
            Tomorrow
          </h2>
          <h3 className="text-[#52545B] text-base">
            We’re dedicated to a sustainable future by minimizing our
            environmental impact and continuously innovating to improve lives
            worldwide
          </h3>
          <button
            onClick={handleClick}
            className="lg:mt-10 md:mt-6 mt-3 py-[13px] w-fit relative pl-8 pr-6 items-center
             text-xs md:text-base border font-medium rounded-full font-inter leading-[22.4px]
              border-textBlue lg:text-lg flex justify-center overflow-hidden text-textBlue transition-all
               before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-l from-textBlue
                to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:text-white hover:before:h-56 hover:before:w-56"
          >
            <span className="flex gap-[10px] items-center z-10">
              Learn More
              <GoArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SustainableSection;

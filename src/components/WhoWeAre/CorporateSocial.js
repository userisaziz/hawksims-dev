import React, { useState } from "react";
import styles from "./whoWeAre.module.css";
import Image from "next/image";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
/**
 * CorporateSocial Component for "Corporate Social Responsibility" section in who-we-are page
 * 
 * This component showcases the "Corporate Social Responsibility" section, including an engaging background image,
 * a description, and a button that redirects users to a dedicated CSR page.
 * - The layout is responsive, adjusting for mobile, tablet, and desktop views.
 * - The `motion.div` elements add smooth animations to the content for better user interaction.
 * - On hover, the button changes styles and triggers a mouse enter/leave event to control its appearance.
 * - The background images and circular design elements adjust based on screen size for an optimized display.
 */
const CorporateSocial = () => {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        id="social"
        className={`w-full h-full 2xl:max-w-7xl mx-auto relative tablet:flex-col-reverse mobile:flex-col-reverse  md:h-full  flex ${styles.corporateBg}`}
      >
        <Image
          alt="sds"
          src={"/assets/backgroundCSR.png"}
          width={500}
          height={500}
          className={`w-full absolute hidden desktop:block top-0 left-0 h-full z-10`}
        />
        <div className="w-[48%] mobile:mt-[60%] relative mobile:w-full mobile:h-[269px]  tablet:w-full tablet:mt-[60%] md:h-[487px] h-[400px]">
          <div
            className={`absolute top-0 z-10 left-0 w-full h-[20%] ${styles.blueShade}`}
          ></div>
          <Image
            alt="corporate"
            src={"/assets/corporateJoinUs.svg"}
            width={500}
            height={500}
            className={`w-full h-full object-cover absolute top-0 z-0`}
          />
        </div>

        <div
          className={`w-[65%] tablet:w-full mobile:w-full mobile:mt-[56px] h-full relative`}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={`md:max-w-[41%] absolute z-10  mobile:pl-[2%] mobile:w-full tablet:w-[435px] tablet:mt-[56px] tablet:ml-[48px]  md:mt-[104px] md:ml-[18%]  max-h-[279px] ${styles.csrContainer}`}
          >
            <h2
              className="w-[356px] tablet:text-[28px] font-semibold tablet:leading-[39.2px]  
           text-[#FFF] font-inter text-[36px]  md:leading-[50.4px] mobile:max-w-[303px] mobile:text-[20px] mobile:leading-[28px]"
            >
              Corporate Social Responsibility
            </h2>
            <p
              className={`md:text-[14px] mobile:mt-3 mobile:max-w-[328px] mobile:leading-[19.6px] tablet:text-[14px] tablet:font-normal tablet:leading-[24.08px] tablet:max-w-[448px] md:max-w-[448px] font-normal md:mt-6 tablet:mt-3 md:leading-[24.08px] font-inter text-[#DFDFE0] ${styles.corporatePara}`}
            >
              We strive to create an impact that matters through proactive
              environmental stewardship and community engagement
            </p>

            <button
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className={
                "lg:mt-10 md:mt-6 mt-10 md:py-3 py-2 px-4 w-fit relative md:pl-8 md:pr-6 items-center text-xs md:text-base border font-medium rounded-full font-inter leading-[22.4px] border-white lg:text-lg flex justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-l from-[#F2F3FA] to-[#F2F3FA] hover:border-transparent before:duration-300 before:ease-out hover:text-blue-800 hover:before:h-56 hover:before:w-56"
              }
              onClick={() => router.push("/join-us#csr")}
            >
              <span className="flex gap-[10px] hover:text-blue-800 items-center z-10">
                Learn More
                <ArrowRightIcon bgColor={isHover ? "blue" : "white"} />
              </span>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={`w-[18%] absolute z-10 mobile:w-[25%] mobile:h-[336px] tablet:w-[16%] tablet:h-[298px] h-[393px] top-[68px]  tablet:top-[48px]   right-0 ${styles.circleBg}`}
          >
            <Image
              alt="arrow"
              src="/assets/CorporateCircle.svg"
              width={400}
              height={500}
              className="mobile:hidden  block w-full h-full absolute right-0 object-fit"
            />
            <Image
              alt="arrow"
              src="/assets/mobileCSR.svg"
              width={400}
              height={500}
              className="hidden mobile:block w-full h-full absolute right-0 object-fit"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CorporateSocial;

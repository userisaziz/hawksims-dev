import React from "react";
import styles from "./JoinUs.module.css";

const Card = ({
  icon: IconComponent,
  heading,
  subheading,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`p-6 flex flex-col mobile:h-[310px] h-full transition-all ease-in-out duration-1000 rounded-[12px] lg:rounded-[20px] hover:bg-[#3F49A7] ${styles.cardBg}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="duration-500 transition-all ease-in-out delay-1000  w-[68px] h-[68px] lg:w-[88px] lg:h-[88px]">
        <IconComponent
          bgColor={isHovered ? "#C0C4E7" : "#DFDFE0"}
          iconBg={isHovered ? "#3F49A7" : "#FFF"}
        />
      </div>
      <div className="mt-10">
        <h3 className="font-inter text-[18px] leading-[25.2px] lg:text-[24px] lg:leading-[38.4px] text-[#FFF] font-semibold">
          {heading}
        </h3>
        <h4 className="lg:mt-2 mt-2 text-[14px] leading-[24px] text-[#DFDFE0] font-inter lg:text-[14px] font-normal lg:leading-[24px]">
          {subheading}
        </h4>
      </div>
    </div>
  );
};
export default Card;

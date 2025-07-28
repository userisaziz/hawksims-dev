"use client";
import React from "react";
import { useState } from "react";
import CustomSlider from "@/components/CustomSlider";
import Card from "./Card";
import { whatIsLikeToBeAtJsonData } from "@/commonJson/JoinUs/JoinUs";

const WhatIsLikeToBeAtSolNec = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // below code is used for react slick library
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    appendDots: (dots) => (
      <div
        style={{
          bottom: "-26px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          position: "absolute",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0",
          }}
        >
          {dots.map((dot, index) => (
            <li
              key={index}
              style={{
                display: "inline-block",
                margin: "0 2px",
              }}
            >
              {React.cloneElement(dot, {
                onClick: dot.props.onClick,
                style: {
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: dot.props.className.includes("slick-active")
                    ? "linear-gradient(311deg, #5F80F6 20.02%, #3F49A7 112.23%)"
                    : "#909193",
                  cursor: "pointer",
                  border: "none",
                  fontSize: 0,
                },
              })}
            </li>
          ))}
        </ul>
      </div>
    ),
  };
  return (
    <>
      <div
        id="solutionnec"
        className="lg:py-20 mobile:pt-14 px-[6.25%] py-12 lg:px-[7.78%] bg-[#030515] w-full h-full"
      >
        <div className="w-full mx-auto max-w-7xl h-full text-[28px] leading-[39.2px] lg:text-[32px] font-semibold lg:leading-[44.8px] mobile:text-[20px] mobile:leading-[28px]  font-inter flex items-center justify-center">
          <h2 className="text-[#FFFFFF] ">
            What is it like to be at
            <span className="text-[#5F80F6] ml-[9px]">Solutionec?</span>
          </h2>
        </div>

        <div className="mt-20 mobile:mt-10 text-[#FFF]">
          {/* below code is used for slider and it will be visible in smaller devices */}
          <div className="mobile:w-full mobile:block md:hidden tablet:hidden">
            <CustomSlider settings={settings}>
              {whatIsLikeToBeAtJsonData?.map((card, index) => (
                <Card
                  key={index}
                  icon={card.icon}
                  heading={card.heading}
                  subheading={card.subheading}
                  isHovered={hoveredIndex === index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </CustomSlider>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mobile:hidden max-w-7xl mx-auto">
            {whatIsLikeToBeAtJsonData?.map((card, index) => (
              // here we are using the custom card component 
              <Card
                key={index}
                icon={card.icon}
                heading={card.heading}
                subheading={card.subheading}
                isHovered={hoveredIndex === index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsLikeToBeAtSolNec;

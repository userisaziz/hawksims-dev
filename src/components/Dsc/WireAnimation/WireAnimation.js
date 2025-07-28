"use client";
import HoverCards from "./HoverCards";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function WireAnimation({ video, hoverCardsJson }) {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  const calculatePosition = (index, total) => {
    const angle = (index / total) * 360;
    const xAxisRad = 40;
    const yAxisRad = 40;

    const x = 50 + xAxisRad * Math.cos((angle * Math.PI) / 180);
    const y = 50 + yAxisRad * Math.sin((angle * Math.PI) / 180);

    return { x, y };
  };

  return (
    <div className="relative ">
      <video
        className="w-full h-full object-cover backface-hidden preserve-3d z-[-1]"
        autoPlay
        loop
        muted
        playsInline
        playsinline="true"
        webkit-playsinline="true"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 dark:text-footerBg flex justify-center items-center">
        {hoverCardsJson[0]?.imageUrl.src && (
          <Image
            width={100}
            height={100}
            src={hoverCardsJson[0]?.imageUrl.src}
            alt="Center Overlay"
            className="absolute transition-transform transform
           duration-[1500ms] ease-in-out  hover:scale-110 h-[80px] sm:h-[100px] lg:h-[100px] lg:w-[100px] md:h-[60px] md:w-[60px]
           w-auto  top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10"
            onMouseEnter={() => {
              setVisibleIndex(0);
              setFadeIn(true);
            }}
            onMouseLeave={() => {
              setVisibleIndex(null);
              setFadeIn(false);
            }}
          />
        )}

        <div
          className={`block absolute top-[65%] left-[50%]
               transform -translate-x-1/2 -translate-y-1/2 z-20 
               ${visibleIndex === 0 && fadeIn ? "opacity-100" : "opacity-0"}`}
        >
          <HoverCards
            heading={hoverCardsJson[0]?.heading}
            subHeading={hoverCardsJson[0]?.subHeading}
          />
        </div>

        {hoverCardsJson?.slice(1).map((ele, index) => {
          const { x, y } = calculatePosition(index, hoverCardsJson.length - 1);
          return (
            <div
              key={index + 1}
              className="absolute flex flex-col items-center
               transition-transform dark:text-[#01020A] duration-[1500ms] ease-in-out transform
                hover:scale-110"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
              onMouseEnter={() => {
                setVisibleIndex(index + 1);
                setFadeIn(true);
              }}
              onMouseLeave={() => {
                setVisibleIndex(null);
                setFadeIn(false);
              }}
            >
              {ele?.imageUrl.src && (
                <Image
                  width={100}
                  height={100}
                  src={ele?.imageUrl.src}
                  alt={`Overlay ${index + 1}`}
                  className="h-[80px] sm:h-[100px] md:h-[60px] md:w-[60px] lg:h-[100px] lg:w-[100px] w-auto"
                />
              )}
              {index + 1 === visibleIndex && (
                <div
                  className={`transition-opacity duration-[1500ms] ease-in-out ${
                    fadeIn ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <HoverCards
                    heading={ele.heading}
                    subHeading={ele.subHeading}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

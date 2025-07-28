"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Discover = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Example dynamic content array
  const slides = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.Lorem ipsum dolor sitamet consectetur adipiscing elit semper",
      name: "Mayuri Srivastava",
      position: "DESIGN LEAD",
      imageSrc: "/assets/ceo-img.svg",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.Lorem ipsum dolor sitamet consectetur adipiscing elit semper",
      name: "Mayuri Srivastava",
      position: "DESIGN LEAD",
      imageSrc: "/assets/ceo-img.svg",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar.Lorem ipsum dolor sitamet consectetur adipiscing elit semper",
      name: "Mayuri Srivastava",
      position: "DESIGN LEAD",
      imageSrc: "/assets/ceo-img.svg",
    },
    // Add more slide objects as needed
  ];

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollStep = () => {
      if (!isPaused) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scrollStep, 16); // Adjust speed by changing the interval

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="font-sans" id="discover">
      <div className="flex flex-col pb-24 bg-white">
        <div className="w-full container max-w-full m-auto">
          <h2 className="lg:text-[36px] text-xl md:text-[28px] lg:mb-20 md:mb-12 mb-8 text-solutionecHeading font-semibold text-center">
            Discover what Solutionec-xperts experience
          </h2>
          <div
            ref={sliderRef}
            className="solution-carousel flex overflow-hidden gap-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="discover-slide-container flex-shrink-0 w-full md:max-w-[900px] lg:max-w-[635px] px-4"
              >
                <div className="rounded-2xl items-start lg:items-end gap-10 md:p-6 md:pb-8 p-4 pb-8 lg:p-8 lg:pb-10 flex-col-reverse md:flex-row-reverse lg:flex-row flex justify-between relative bg-[#F2F3FA]">
                  <div className="flex flex-col-reverse md:flex-col md:gap-[48px] gap-[35px]">
                    <div className="flex flex-col gap-3">
                      <div className="text-[#52545B] leading-6">
                        {slide.text}
                      </div>
                    </div>
                    <div className="hidden lg:flex flex-col gap-[6px]">
                      <div className="text-lg text-footerBg font-semibold">
                        {slide.name}
                      </div>
                      <div className="text-sm text-[#52545B]">
                        {slide.position}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center md:flex-col gap-5 ">
                    <div className="relative z-10 h-[165px] w-[155px] lg:h-[215px] lg:w-[195px]">
                      <Image
                        src={slide.imageSrc}
                        alt="ceo-img"
                        height={225}
                        width={150}
                        className="absolute bottom-[0px] lg:bottom-[10px] left-6 w-[130px] h-[180px] lg:w-[150px] lg:h-[225px]"
                      />
                      <div
                        className="h-[165px] w-[155px] lg:h-[205px] lg:w-[172px] rounded-[14px]"
                        style={{
                          background: "rgba(95, 128, 246, 0.30)",
                        }}
                      ></div>
                    </div>
                    <div className="flex lg:hidden flex-col gap-[6px]">
                      <div className="text-lg text-footerBg font-semibold">
                        {slide.name}
                      </div>
                      <div className="text-sm text-[#52545B]">
                        {slide.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

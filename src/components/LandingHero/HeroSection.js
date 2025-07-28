"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowRight } from "react-icons/go";
import { Hero_Carousel_Data } from "./HeroCarouselData";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BaseButton from "../BaseButton";

// Slide content used in both video and image variants
const SlideContent = ({ buttonText, buttonLink }) => {
  const router = useRouter();
  return (
    <div className="relative z-10 text-center md:px-0 px-[7%] md:max-w-[584px] lg:max-w-[725px] m-auto flex flex-col items-center">
      <h1 className="text-4xl text-white font-medium tracking-tighter mx-auto md:text-6xl text-pretty  bg-clip-text text-transparent">
        Advancing Science Through Computational Excellence
      </h1>
      <p className="max-w-2xl text-white text-lg mx-auto text-muted-foreground text-balance mt-4 mb-8">
        Transform your research with cutting-edge scientific computing, AI
        solutions, and expert consulting services tailored for breakthrough
        discoveries.
      </p>
      <div className="flex gap-2 ">
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {/* Primary Button - Filled Gradient */}
          <BaseButton
            onClick={() => router.push(buttonLink)}
            className="md:py-[13px] py-2 relative px-6 text-xs md:text-sm lg:text-lg font-inter font-medium leading-[22.4px] text-white rounded-full bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:opacity-90 transition-all duration-300"
            text="Start Your Project"
            iconClassContainer="gap-1"
            icon={<GoArrowRight size={18} />}
          />

          {/* Secondary Button - White Border Outline */}
          <BaseButton
            onClick={() => router.push(buttonLink)}
            className="md:py-[13px] py-2 relative px-6 text-xs md:text-sm lg:text-lg font-inter font-medium leading-[22.4px] border border-white rounded-full text-white hover:bg-white hover:text-[#3F49A7] transition-all duration-300"
            text="Explore Services"
            iconClassContainer="gap-1"
            // icon={<GoArrowRight size={18} />}
          />
        </div>
      </div>
    </div>
  );
};

const VideoSlide = ({ videoSrc }) => (
  <div className="relative w-full h-screen flex items-center justify-center">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-[-1]" />
    <SlideContent buttonText="Know Our Services" buttonLink="what-we-do" />
  </div>
);

const ImageSlide = ({ imageAlt }) => (
  <div className="relative w-full h-screen flex items-center justify-center">
    <Image
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      src="/assets/eventHeroImage.svg"
      alt={imageAlt}
      width={2000}
      height={1000}
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-[-1]" />
    <div className="absolute left-0 z-10 text-left max-w-[725px] m-auto flex flex-col items-start p-4 md:p-8 lg:p-12">
      <SlideContent
        buttonText="Know More"
        buttonLink="our-resources/our-events"
      />
    </div>
  </div>
);

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const slides = Hero_Carousel_Data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    appendDots: (dots) =>
      mounted ? (
        <div className="absolute bottom-5 w-full flex justify-center">
          <ul className="m-0 p-0 list-none">
            {dots.map((dot, index) => (
              <li key={index} className="inline-block mx-[2px]">
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
      ) : null,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.length > 1 ? (
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              {slide.videoSrc ? (
                <VideoSlide videoSrc={slide.videoSrc} />
              ) : (
                <ImageSlide imageAlt={slide.title || "Slide image"} />
              )}
            </div>
          ))}
        </Slider>
      ) : slides[0]?.videoSrc ? (
        <VideoSlide videoSrc={slides[0].videoSrc} />
      ) : (
        <ImageSlide imageAlt={slides[0]?.title || "Hero image"} />
      )}
    </div>
  );
};

export default HeroSection;

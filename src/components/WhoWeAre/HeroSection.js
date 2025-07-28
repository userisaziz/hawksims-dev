import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * this component is used for Hero section for who-we-are page
 * @returns
 */
const HeroSection = ({ title, description, subtitle }) => {
  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 5000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      pauseOnHover: false,
      variableWidth: false,
      centerMode: false,
      arrows: false,
      swipe: false,
      touchMove: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    []
  );

  const images = [
    "/assets/who-slider-img1.svg",
    "/assets/who-slider-img2.svg",
    "/assets/who-slider-img3.svg",
    "/assets/joinus1.svg",
    "/assets/who-slider-img4.svg",
  ];
  return (
    <div
      id="heroSection"
      className="relative w-full overflow-hidden bg-headerBg"
    >
      <div className="w-full flex items-center justify-center mt-36 mb-28">
        <div className="rounded-[100px] top-[20%] opacity-[0.15] absolute h-[950px] w-[280px] bg-[linear-gradient(311deg,_#5F80F6_20.02%,_#3F49A7_112.23%)] filter blur-[85px] rotate-[-15.402deg]" />
        <div className="rounded-[400px] opacity-[0.5] bg-[linear-gradient(311deg,_#5F80F6_20.02%,_#3F49A7_112.23%)] absolute bottom-0 filter blur-[450px] w-full h-[200px]" />
        <div className="relative z-10 text-center max-w-[725px] m-auto flex flex-col items-center">
          <h1 className="shine text-[24px] md:text-[32px] lg:text-[48px] opacity-[0.7] px-4 text-grayText font-semibold mb-5">
            {title}
          </h1>

          <p className="shine text-[12px] md:text-[14px] lg:text-[18px] font-semibold mb-6 mx-auto opacity-[0.8] px-4 max-w-3xl">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full container max-w-[1440px] m-auto">
        {/* this below code used to slide the images in hero section */}
        <Slider {...settings} className="solution-carousel mb-20  space-x-3">
          {images.map((image, index) => (
            <div key={index} className="slide-container px-4">
              <div
                className={`bg-cover rounded-2xl flex justify-center items-center ${
                  index % 2 === 0 ? "mt-12" : ""
                }`}
              >
                <img
                  className="object-cover rounded-2xl w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]"
                  src={image}
                  alt={`image${index}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);

"use client";
import arrowLeft from "../../../public/assets/arrow-left-csr.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef, useEffect } from "react";
import styles from "./JoinUs.module.css";

const CorporateSocial = ({ json, componentHeading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false); // Track screen size
  const [hideCardVisible, setHideCardVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const roundedSlide = Math.round(currentSlide);
    if (roundedSlide === json.length - 1) {
      setHideCardVisible(true);
    } else {
      setHideCardVisible(false);
    }
  }, [currentSlide, json.length]);

  const settings = {
    slidesToScroll: 1,

    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    draggable: false,
    swipe: false,
    touchMove: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1.15,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.15,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.15,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <div
        id="csr"
        className="bg-[#030515] py-14 px-4 md:py-10 lg:px-20 lg:pr-0"
      >
        <div className="2xl:max-w-7xl mx-auto">
          <h2 className="text-[20px] sm:text-[28px] text-center lg:text-[32px] font-semibold text-white md:pb-12 lg:pb-20">
            {componentHeading}
          </h2>
        </div>
        <div className="2xl:max-w-7xl mx-auto">
          {/* below code will show slider and we are using react slick library for that */}
          <Slider ref={sliderRef} {...settings}>
            {json.map((item, index) => {
              const isLastSlide = index === json.length - 1;
              const isNextSlide = index === currentSlide + 1;
              const isPrevSlide = index === json.length - 2;
              return (
                <div
                  key={item.id}
                  className={`${
                    isPrevSlide && hideCardVisible && isLargeScreen
                      ? styles.hidePreviousCard
                      : ""
                  }
                             ${
                               isNextSlide && isLargeScreen
                                 ? styles.blurSlide
                                 : ""
                             }`}
                >
                  <div className="  flex  flex-col md:flex-row  items-start md:gap-8  lg:gap-14">
                    <div className="h-full pt-10 md:pt-0 w-full lg:h-[400px]  md:h-[226px] lg:w-[60%] md:w-[50%]">
                      {item?.img && (
                        <Image
                          src={item?.img}
                          alt={`${item.heading}`}
                          className="h-full w-full object-cover rounded-lg lg:rounded-2xl"
                        />
                      )}
                    </div>
                    <div
                      className={`ml-6 md:ml-0  h-[177px] lg:h-[400px]  md:w-[40%] ${styles.csrArrowContainer}`}
                    >
                      <h3 className="text-white pt-7 md:pt-0 md:max-w-[216px] lg:max-w-[337px] text-lg lg:text-3xl  font-semibold">
                        {item.heading}
                      </h3>
                      <p className="text-[#DFDFE0] md:max-w-[216px] lg:max-w-[373px] lg:h-auto pt-3 mb-4  break-words lg:w-[80%] text-[12px] sm:text-[14px] lg:text-[16px] font-normal">
                        {item.desc}
                      </p>

                      <div className="flex  items-center text-white absolute bottom-0 ">
                        <div className="mr-10">
                          <button
                            disabled={currentSlide + 1 == 1}
                            className={` border border-[#22232A] p-2 md:p-4 rounded-full `}
                            onClick={() => sliderRef.current.slickPrev()}
                          >
                            <Image
                              src={arrowLeft}
                              alt="arrow-left"
                              className={`rotate-180`}
                            />
                          </button>
                        </div>
                        <div className="mr-10">
                          {Math.ceil(currentSlide + 1)}/{json.length}
                        </div>
                        <div className="mr-10">
                          <button
                            disabled={
                              currentSlide + 1 == json.length ? true : false
                            }
                            className=" border border-[#22232A] text-white md:p-4 p-2 rounded-full"
                            onClick={() => sliderRef.current.slickNext()}
                          >
                            <Image src={arrowLeft} alt="arrow-left" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CorporateSocial;

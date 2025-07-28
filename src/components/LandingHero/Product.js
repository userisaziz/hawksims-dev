"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import styles from "./Product.module.css";
import { useRouter } from "next/navigation";

const Product = ({ ProductCarouselJson, heading }) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { isInView, sectionRef } = useIntersectionObserver(0.1);
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef(null);
  const [windowWidth , setWindowWidth]=useState(0);
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
    if (roundedSlide === ProductCarouselJson.length - 1) {
      setHideCardVisible(true);
    } else {
      setHideCardVisible(false);
    }
  }, [currentSlide,  ProductCarouselJson.length ]);
  useEffect(() => {
    setMounted(true);
    if(typeof window !="undefined") setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleNavigate = () => {
    router.push("our-products");
  };

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <div
      id="business"
      ref={sectionRef}
      className={` max-w-full bulletActive relative  px-4 py-14 md:px-12 lg:px-20 lg:py-20 bg-footerBg overflow-hidden transition-opacity duration-700 ${
        hasAnimated ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full md:container mx-auto relative">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-[32px] font-semibold text-white">{heading}</h2>
          <button
            className="md:py-3 py-2 relative pl-8 pr-6 items-center hidden text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px]
         border-white lg:text-lg md:flex justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full
          before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56"
            onClick={handleNavigate}
          >
            <span className="flex gap-[10px] items-center z-10">
              Explore More
              <GoArrowRight size={18} />
            </span>
          </button>
        </div>
        {/* below code will show the swiper , here we are using react slick library for the slider */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              const isActive = currentSlide === index;
              return `<span class="${styles["swiper-pagination-bullet"]} ${className}   "></span>`;
            },
            el: `.swiper-pagination`,
          }}
          spaceBetween={16}
          slidesPerView={windowWidth >= 768 ? 1.15 : 1}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          className={`${hasAnimated ? "slide-top" : ""}`}
          breakpoints={{
            // Mobile view settings
            640: {
              slidesPerView: 1.15, // Show only one full slide on mobile
            },
          }}
        >
          {/* here we are mapping the product json data */}
          {ProductCarouselJson?.map((slide, index) => {
            const isLastSlide = index === ProductCarouselJson.length - 1;
            const isNextSlide = index === currentSlide + 1;
            const isPrevSlide = index === ProductCarouselJson.length - 2;
            return ( 
            <SwiperSlide key={index}>
              <div
                className={`relative w-full gap-6 h-[520px] px-4 pt-8 flex items-center flex-col md:flex-row justify-between rounded-[20px] shadow-lg ${styles["product-background"]}
                ${isPrevSlide && hideCardVisible && isLargeScreen
                  ? styles.blurSlide
                  : ""
                }
                         ${isNextSlide && isLargeScreen
                  ? styles.blurSlide
                  : ""
                }
                `}
              >
                <div className="absolute md:top-0 md:right-0 lg:top-0 lg:right-0 lg:h-[300px] md:h-[300px] md:w-[300px] hidden sm:block">
                <Image
                 alt="product-carousel-img"
                 className="z-10"
                 src={"/assets/bars.svg"}
                 width={500}
                 height={200}
                 />
                </div>
                <div
                  className={`w-[1250px] h-[1250px] rounded-full absolute right-0 bottom-0 hidden md:flex`}
                />
                <div
                  className={`w-[427px] h-[427px] absolute -bottom-10 -right-10 md:hidden flex rounded-full`}
                />
                <div className="relative z-10 max-w-[450px] ml-0 md:ml-16 flex flex-col lg:-mt-36">
                  <h3 className="text-[32px] font-semibold mb-4 text-white">
                    {slide.title}
                  </h3>
                  <p className="opacity-[0.6] text-grayText text-[14px] font-normal mb-6 max-w-[380px] m-auto">
                    {slide.description}
                  </p>
                </div>
                <Image
                  alt="product-carousel-img"
                  className="z-10 lg:max-w-[500px] lg:max-h-[410px] max-h-[250px] max-w-[350px] w-full md:self-center -mr-4 self-end"
                  src={"/assets/product-carousel-img.svg"}
                  width={500}
                  height={310}
                />
              </div>
            </SwiperSlide>

)})}
        </Swiper>
        {/* below code contains the button to move the slider to next and previous card */}
        <div className="md:block py-10 lg:py-5 ">
          <button
            className={`rounded-full hidden lg:flex p-4 absolute -left-[80px] top-[55%] bg-[#fff3] transition-opacity duration-300 ${
              currentSlide === 0
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
            onClick={goPrev}
          >
            <GoArrowLeft size={18} className="text-white" />
          </button>
          <button
            className={`rounded-full p-4 absolute hidden lg:flex -right-[80px] top-[55%] bg-[#fff3] transition-opacity duration-300 ${
              currentSlide === ProductCarouselJson.length - 1
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
            onClick={goNext}
          >
            <GoArrowRight size={18} className="text-white" />
          </button>
        </div>
        <div
          className={`swiper-pagination flex md:items-start md:justify-start items-center justify-center space-x-4  pl-[0px] pt-[20px]`}
        ></div>
      </div>
      <button
        onClick={handleNavigate}
        className="md:py-3 py-2 m-auto md:hidden mt-12 relative pl-8 pr-6 items-center text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px] border-white lg:text-lg flex justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full
       before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56"
      >
        <span className="flex gap-[10px] items-center z-10">
          Explore More
          <GoArrowRight size={18} />
        </span>
      </button>
    </div>
  );
};

export default Product;

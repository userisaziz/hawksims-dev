"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./caseStudySwiper.module.css";
import { useRouter } from "next/navigation";
import OurBlogsCard from "@/components/OurResources/OurBlogsCard";
import BaseButton from "@/components/BaseButton";
import CaseStudySwiperCard from "../CaseStudySwiperCard/CaseStudySwiperCard";
import { GoArrowRight } from "react-icons/go";

const CaseStudySwiper = ({
  cardData,
  btnVisible = true,
  heading,
  isVisible,
  setIsVisible,
  containerClass,
  headingClass,
  isWhitePaperInternalPage,
  isCaseStudyInternalPage = false,
  readMoreButtonText = "Read Blog",
}) => {
  const router = useRouter();
  // this function will redirect to the  page of case study 
  const handleExploreMore = () => {
    router.push("/our-resources/case-studies");
  };

  return (
    <section
      className={` container max-w-[1440px] ${containerClass} ${
        isVisible ? "relative z-[-1]" : ""
      } 2xl:max-w-7xl mx-auto `}
    >
      <div className={headingClass}>
        <h2 className="md:text-center text-footerBg font-semibold mb-8 text-2xl tablet:3xl md:text-3xl md:mb-0">
          {heading}
        </h2>
        {btnVisible && (
          <BaseButton
            text="Explore More &rarr;"
            className="h-8 px-6 py-5 flex justify-center items-center rounded-full border text-[#5F80F6] border-[#5F80F6] hidden md:flex"
            onClick={handleExploreMore}
          />
        )}
      </div>
      <div className={`rounded-xl overflow-hidden`}>
        <Swiper
          className="custom-swiper"
          slidesPerView={"auto"}
          centeredSlides={false}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation, Autoplay]}
          style={{
            "--swiper-navigation-color": "#FFF",
            "--swiper-navigation-size": "2rem",
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {(isCaseStudyInternalPage
            ? cardData?.data?.data[0]?.attributes?.resources?.data
            : isWhitePaperInternalPage
            ? cardData?.data?.data[1]?.attributes?.resources?.data
            : cardData?.data?.data[0]?.attributes?.resources?.data?.slice(0, 3)
          )?.map((resource, id) => (
            // here we are using react slick library for sliding the cards
            <SwiperSlide className={styles.swiperSlide} key={id}>
              <CaseStudySwiperCard
                id={resource?.id}
                isWhitePaperInternalPage={isWhitePaperInternalPage}
                imgUrl={
                  resource?.attributes?.portrait_image?.data?.attributes?.url
                }
                blogLength={resource?.attributes?.reading_duration}
                heading={resource?.attributes?.title}
                description={resource?.attributes?.short_description}
                descClass="text-sm  mobile:mb-3 mb-6 group-hover:mb-3"
                titleClass="text-lg mb-1  font-semibold "
                cardContainerClass="group  relative flex flex-col group justify-between items-start w-[305px] h-[285px] bg-white overflow-hidden rounded-xl"
                textContainerClass="absolute w-[270px] font-inter text-[16px] px-3 leading-[27.52px] bottom-1 transition-all duration-300 group-hover:bottom-8"
                readMoreButtonText={readMoreButtonText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>
          {`
            .custom-swiper .swiper-button-next {
              padding: 32px;
              background: rgba(12, 12, 12, 0.2);
              font-weight: 900;
            }
            .custom-swiper .swiper-button-prev {
              padding: 32px;
              background: rgba(12, 12, 12, 0.2);
              font-weight: 900;
            }
          `}
        </style>
      </div>
      <div className="w-full flex items-center justify-center">
        {btnVisible && (
          <button
            onClick={handleExploreMore}
            className=" mt-3 py-2 md:py-[13px] w-fit relative pl-6 pr-4 md:pl-8 md:pr-6 items-center text-xs md:text-base border font-semibold rounded-full font-inter leading-[22.4px] border-white  flex justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-l from-textBlue to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:text-white hover:before:h-56 hover:before:w-56"
          >
            <span className="flex gap-[10px] items-center z-10">
              Explore More
              <GoArrowRight size={18} />
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default CaseStudySwiper;

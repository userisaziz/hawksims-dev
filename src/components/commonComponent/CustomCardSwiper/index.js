"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import styles from "./customCardSwiper.module.css";
import { useRouter } from "next/navigation";
import OurBlogsCard from "@/components/OurResources/OurBlogsCard";
import BaseButton from "@/components/BaseButton";
import { GoArrowRight } from "react-icons/go";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";

const index = ({
  cardData,
  isIndicatorSwiper,
  isServiceInternal,
  anaylticsServiceInternal,
  aiEnabledInternal,
  btnVisible = true,
  heading,
  containerClass,
  headingClass,
  isCaseStudyByService = false,
  visibleDataCount,
}) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleExploreMore = () => {
    router.push("/our-resources/our-blogs");
  };
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  // here we are checking if isCaseStudyByService is true then it means we will show data for the service page casestudy
  const resources = isCaseStudyByService
    ? cardData?.data?.data?.attributes?.resources?.data
    : cardData?.data?.data
        ?.filter((item) => item.attributes?.name === "Blogs")
        .map((ele, i) => ele?.attributes?.resources?.data)[0];

  const finalResources = visibleDataCount
    ? resources?.slice(0, visibleDataCount)
    : resources;

  return (
    <>
      <section
        ref={ref}
        className={`container max-w-[1440px] ${containerClass} 2xl:max-w-[1440px] mx-auto `}
      >
        <div className={headingClass}>
          <h2 className="md:text-center text-footerBg font-semibold mb-8 text-xl md:text-[28px] md:mb-0 lg:text-4xl">
            {heading}
          </h2>
          {btnVisible && (
            <BaseButton
              onClick={handleExploreMore}
              className="lg:py-3 py-2 hidden md:flex lg:pl-8 lg:pr-6  relative pl-6 pr-4 items-center  text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px]
       border-[#5F80F6] lg:text-lg  justify-center overflow-hidden text-[#3F49A7] transition-all before:absolute before:h-0 before:w-0 before:rounded-full hover:text-[#FFF]
        before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56"
              text="Explore more"
              iconClassContainer={"gap-2"}
              icon={<GoArrowRight size={18} />}
            />
          )}
        </div>
        <div className={`rounded-xl overflow-hidden`}>
          {/* below code will show the service page case studies*/}
          {/* below code will add the arrows in the slider if isIndicatorSwiper is true */}
          {isIndicatorSwiper ? (
            <>
              {isInView && (
                <Swiper
                  className="custom-swiper"
                  slidesPerView={"auto"}
                  centeredSlides={false}
                  spaceBetween={15}
                  navigation={true}
                  onSlideChange={({ activeIndex }) =>
                    setCurrentSlide(activeIndex)
                  }
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
                  {finalResources?.map((resource, id) => (
                    <SwiperSlide className={styles.swiperSlide} key={id}>
                      <OurBlogsCard
                        blogId={resource?.id}
                        isServiceInternal={isServiceInternal}
                        anaylticsServiceInternal={anaylticsServiceInternal}
                        aiEnabledInternal={aiEnabledInternal}
                        imgUrl={
                          resource?.attributes?.portrait_image?.data?.attributes
                            ?.url
                        }
                        blogLength={resource?.attributes?.reading_duration}
                        heading={resource?.attributes?.title}
                        description={resource?.attributes?.short_description}
                        descClass="text-sm  lg:text-base mobile:mb-3 mb-6 group-hover:mb-3 lg:mb-8"
                        titleClass="text-lg mb-1  font-semibold lg:text-2xl"
                        cardContainerClass="group  relative flex flex-col group justify-between items-start w-[305px] h-[285px] bg-white overflow-hidden rounded-xl"
                        textContainerClass="absolute w-[270px] font-inter text-[16px] px-3 leading-[27.52px] bottom-1 transition-all duration-300 group-hover:bottom-8
                lg:w-[400px] lg:px-5"
                        {...(heading?.toLowerCase() === "case studies" && {
                          readMoreButtonText: "Case Study",
                        })}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
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
            </>
          ) : (
            <>
              {/* below code will show the slider for the our blogs of resource page */}
              {isInView && (
                <Swiper
                  slidesPerView={"auto"}
                  centeredSlides={false}
                  spaceBetween={15}
                  autoplay={{
                    delay: 6800,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    clickable: true,
                    el: `.${styles.customPagination}`,
                  }}
                  modules={[Autoplay, Pagination]}
                >
                  {finalResources?.map(
                    (resource, id) =>
                      isInView && (
                        <SwiperSlide className={styles.swiperSlide} key={id}>
                          <OurBlogsCard
                            blogId={resource?.id}
                            isServiceInternal={isServiceInternal}
                            anaylticsServiceInternal={anaylticsServiceInternal}
                            aiEnabledInternal={aiEnabledInternal}
                            imgUrl={
                              resource?.attributes?.portrait_image?.data
                                ?.attributes?.url
                            }
                            blogLength={resource?.attributes?.reading_duration}
                            heading={resource?.attributes?.title}
                            description={
                              resource?.attributes?.short_description
                            }
                            descClass="text-sm  lg:text-base mobile:mb-3 mb-6 group-hover:mb-3 lg:mb-8"
                            titleClass="text-lg mb-1  font-semibold lg:text-2xl"
                            cardContainerClass="group  relative flex flex-col group justify-between items-start w-[305px] h-[285px] bg-white overflow-hidden rounded-xl lg:w-[425px] lg:h-[380px]"
                            textContainerClass="absolute w-[270px] font-inter text-[16px] px-3 leading-[27.52px] bottom-1 transition-all duration-300 group-hover:bottom-8
                lg:w-[400px] lg:px-5"
                            {...(heading?.toLowerCase() === "case studies" && {
                              readMoreButtonText: "Case Study",
                            })}
                          />
                        </SwiperSlide>
                      )
                  )}
                </Swiper>
              )}
            </>
          )}

          <div className={`${styles.customPagination}`}></div>
        </div>

        {btnVisible && (
          <div className="flex md:hidden items-center justify-center ">
            <BaseButton
              onClick={handleExploreMore}
              className="lg:py-3 py-2 mt-2.5 flex lg:pl-8 lg:pr-6  relative pl-6 pr-4 items-center  text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px]
            border-[#5F80F6] lg:text-lg  justify-center overflow-hidden text-[#3F49A7] transition-all before:absolute before:h-0 before:w-0 before:rounded-full hover:text-[#FFF]
            before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56"
              text="Explore more"
              iconClassContainer={"gap-2"}
              icon={<GoArrowRight size={18} />}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default index;

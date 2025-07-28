import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSuppressHeader } from "@/provider/redux/slice/headerSlice";
/**
 * this below component is used for Time line section
 * @param {*} param0 
 * @returns 
 */
const Timeline = ({ Json, heading }) => {
  const timelineContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isInTimeline, setIsInTimeline] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);

  const dispatch = useDispatch();

  const scrollSpeedThreshold = 2.0;
  const scrollThreshold = 50;
  const minScrollDistance = 10;
  /**
   * Define the handleScroll function using useCallback to memoize it
   */
  const handleScroll = useCallback(() => {
    // Early exit if the timelineContainerRef is not defined
    if (!timelineContainerRef.current) return;
    const journeyDiv = document.getElementById("journey");
    // Scroll to the "journey" div smoothly
    journeyDiv.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    });
    // Get the current scroll position, scroll height, and container height
    const scrollTop = timelineContainerRef.current.scrollTop;
    const scrollHeight = timelineContainerRef.current.scrollHeight;
    const clientHeight = timelineContainerRef.current.clientHeight;

    const currentTime = Date.now();
    const timeDifference = currentTime - lastScrollTime;
    const positionDifference = scrollTop - lastScrollPosition;

    if (Math.abs(positionDifference) < minScrollDistance) return;

    const currentSpeed = Math.abs(positionDifference) / timeDifference;

    setLastScrollTime(currentTime);
    setLastScrollPosition(scrollTop);
    setScrollSpeed(currentSpeed);

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - scrollThreshold);
    setIsAtTop(scrollTop <= scrollThreshold);
    setScrollPosition(scrollTop);
  }, [lastScrollTime, lastScrollPosition]);

  const scrollToSection = useCallback((selector) => {
    const section = document.querySelector(selector);
    if (section) {

      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInTimeline(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (timelineContainerRef.current) {
      observer.observe(timelineContainerRef.current);
    }

    return () => {
      if (timelineContainerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isInTimeline) return;
    const journeyHeading = document.getElementById("journey-heading");


    // position based on screen width
    const updateStickyPosition = () => {
      const isMobile = window.innerWidth <= 768;
      journeyHeading.style.top = isMobile ? "0.5rem" : "2.2rem";
    };

    journeyHeading.style.position = "sticky";
    journeyHeading.style.zIndex = "10";
    updateStickyPosition();

    window.addEventListener("resize", updateStickyPosition);

    timelineContainerRef.current.addEventListener("scroll", handleScroll);
    dispatch(setSuppressHeader(true));

    return () => {
      if (timelineContainerRef.current) {
        dispatch(setSuppressHeader(false));
      }
      window.removeEventListener("resize", updateStickyPosition);
    };
  }, [handleScroll, isInTimeline]);

  useEffect(() => {
    if (isAtBottom && scrollSpeed > scrollSpeedThreshold && !scrolling) {
      setScrolling(true);
      scrollToSection("#ceoWord");
      setScrolling(false);
    }

    if (isAtTop && scrollSpeed > scrollSpeedThreshold && !scrolling) {
      setScrolling(true);
      scrollToSection("#sustainability");
      setScrolling(false);
    }
  }, [isAtBottom, isAtTop, scrollSpeed, scrollToSection, scrolling]);


  return (
    <div
      id="journey"
      className="relative flex flex-col items-center w-full h-[900px] bg-headerBg pt-4 md:p-4  overflow-hidden px-5"
    >
      <div className="absolute bg-[#5F80F6] blur-[250px] opacity-[0.14] top-0 left-0 h-[500px] w-[500px]" />
      <h2 id="journey-heading" className="text-[20px] sm:text-[32px] font-semibold text-white mb-8 sticky top-16 ">
        {heading}
      </h2>
      <div
        className="time-line-scrollbar w-full h-full overflow-y-scroll "
        ref={timelineContainerRef}
      >
          {/* Mapping through the Json array to render each event */}
        <div className="relative">
          {Json?.map((event, index) => {
            // Calculate the scroll position at which the fade-out effect should start
            const fadeOutStart = index === Json.length - 1 ? (index * 480) - 200 : index * 480;
            const fadeOut = scrollPosition > fadeOutStart;

            return (
              <motion.div
                key={index}
                className={`timeline-section flex justify-center items-center gap-5 sm:gap-20 p-2 mb-8 relative md:p-0 md:w-full lg:pr-16 ${index === Json.length - 1 ? "h-[550px]" : index > 1 ? "h-[450px]" : "h-[500px]"}`}
                initial={{ opacity: 1, y: 0 }}
                animate={{
                  opacity: fadeOut ? 0.8 : 1,
                  y: fadeOut ? -20 : 0,
                }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-[32px] font-semibold w-[510px] hidden md:flex md:justify-end bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 lg:w-[510px] md:w-[300px] lg:pr-12 md:pr-12">
                  {event.date}
                </div>
                <div className="relative flex items-center">
                  <div
                    className={`relative h-[480px] md:h-[380px] border-l-4 ${fadeOut ? "border-[#5f80f6]" : "border-[#5f80f6]"} transition-colors duration-500 ease-linear`}
                  >
                    <div
                      className={`hidden md:block absolute ${fadeOut ? "top-full" : "top-1/2"} left-[55%] translate-x-[-63%] translate-y-[-50%] w-5 h-5 bg-[#5f80f6] rounded-full z-10 transition-all duration-500 ease-linear`}
                    ></div>
                  </div>
                  <div
                    className={`absolute top-0 left-0 w-1 ${fadeOut ? "h-0" : "h-1/2"} ${index !== event.id ? "bg-[#5f80f6]" : "bg-gray-500"} transition-all duration-500 ease-linear`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-1 ${fadeOut ? "h-0" : "h-1/2"} ${index !== event.id ? "bg-gray-500" : ""} transition-all duration-500 ease-linear`}
                  />
                </div>
                <div className="flex-1 text-white max-w-[560px] md:max-w-[510px] lg:max-w-[530px]">
                  <div className="text-[20px] sm:text-[32px] font-semibold w-[250px] block md:hidden mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {event.date}
                  </div>
                  <h3 className="text-[16px] sm:text-2xl font-semibold mb-4">
                    {event.title}
                  </h3>
                  <p className="text-tertitaryGray text-[14px] sm:text-lg">
                    {event.description}
                  </p>
                  <Image
                    src={event.imgUrl}
                    alt={event.title}
                    width={510}
                    height={240}
                    className="mt-10 w-full max-w-[510px] object-cover rounded h-[200px] md:h-[160px] lg:h-[200px] xl:h-[240] 2xl-[240px]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
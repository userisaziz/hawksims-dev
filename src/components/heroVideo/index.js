import React, { useRef, useEffect } from "react";

/**
 * this below component is used for video background section in hero section in what-we-do page
 * @returns 
 */
const SectionedVideoBackground = () => {
  const videoRefs = useRef([]);

  const startTimes = [0, 2, 4, 8, 10, 12];
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.currentTime = startTimes[index];
      }
    });
  }, []);
  return (
    <div className="relative 2xl:max-w-7xl md:w-full h-[214px] w-[600px]  lg:h-[379px] md:h-[269px] mx-auto overflow-hidden md:container">
      {/*  
        This component renders a series of six full-screen, looping video elements that play a single video file.
        Each video is wrapped in a `div` container and is displayed responsively across all screen sizes.
        The videos will autoplay, loop, and remain muted by default.*/}
      <div className="absolute top-0 left-0 w-full h-full flex">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="relative h-full flex-1 mx-1 overflow-hidden rounded-2xl  "
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="absolute top-0 left-[50%] h-full min-w-[100vw] -translate-x-1/2 object-cover"
              autoPlay
              loop
              muted
              playsInline
              playsinline="true"
              webkit-playsinline="true"
            >
              <source src="/assets/video/whatToDo.mp4" type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionedVideoBackground;

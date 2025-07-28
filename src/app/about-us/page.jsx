"use client";
import React, { useState } from "react";
import HeroSection from "@/components/WhoWeAre/HeroSection";

import CeoWord from "@/components/WhoWeAre/CeoWord";
import MissionVisionToggle from "@/components/WhoWeAre/MissionVision";
import MeetOurLeadershipTeam from "@/components/WhoWeAre/MeetOurLeadershipTeam";
import useScreenSize from "@/hooks/useScreenSize";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSuppressHeader } from "@/provider/redux/slice/headerSlice";

/**
 * this component is used for who-we-are page
 * @returns
 */
const AboutUs = () => {
  const screenSize = useScreenSize();
  const suppressHeader = useSelector((state) => state.header.suppressHeader);
  const isFooterSameLinkClicked = useSelector(
    (state) => state.header.footerLinkClickedOnSameRoute
  );
  const [windowWidth, setWindowWidth] = useState();
  const dispatch = useDispatch();
  const seachParams = useSearchParams();
  const [headerHeight, setHeaderHeight] = useState(0);
  const scrollableHeaders = [
    { item: ["offices", "office"], targetElement: "offices" },
  ];
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const subheaderHeight = document.querySelector("#subHeader");
      if (subheaderHeight) {
        setHeaderHeight(subheaderHeight.offsetHeight);
        const sectionLink = seachParams.get("redirectSection");
        if (sectionLink) {
          const matchedHeader = scrollableHeaders.find((header) =>
            header.item.some(
              (item) => item.toLowerCase() === sectionLink.toLowerCase()
            )
          );
          if (matchedHeader) {
            const targetId = `#${matchedHeader.targetElement}`;
            if (isFooterSameLinkClicked) {
              handleSmoothScroll(targetId, subheaderHeight.offsetHeight);
            } else {
              handleSmoothScroll(targetId, subheaderHeight.offsetHeight * 1);
            }
          }
        }
      }
    }
  }, [seachParams]);

  /**
   * this method is used for scroll to a prticular section if redirectSection paramter present in what-we-do url
   * @param {*} targetId
   * @param {*} subheaderHeight
   */
  const handleSmoothScroll = (targetId, subheaderHeight) => {
    dispatch(setSuppressHeader(true));
    setTimeout(() => {
      dispatch(setSuppressHeader(false));
    }, 1000);

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - subheaderHeight;
      try {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } catch (error) {
        console.error("Error during scrolling:", error);
      }
    }
  };

  return (
    <div className="w-full">
      <HeroSection />
      {/* <SubNavigation items={subHeaderItems} bgColor={"bg-[#3F49A7]"} /> */}
      <div id="vision">
        <MissionVisionToggle />
      </div>
      {/* <BringChange
        Json={BringChangeJson}
        staggerVariants={staggerVariants}
        sliderSettings={sliderSettings}
        heading={"What We Value To Bring Change"}
      /> */}
      {/* <SustainableSection /> */}
      {/* <Timeline Json={timelineJson} heading={"Our Timeline of Success"} /> */}

      <div className="mobile:flex mobile:flex-col-reverse dark:bg-white">
        <MeetOurLeadershipTeam />
        {/* <WantToBePartOfSolutionEC /> */}
      </div>
      <CeoWord />
      {/* <CorporateSocial /> */}
      {/* <MapPinpoint
        backgroundImage={mapConfig[screenSize].backgroundImage}
        mapSrc={mapConfig[screenSize].mapSrc}
        hoverEffect={mapConfig[screenSize].hoverEffect}
        pinpoints={mapConfig[screenSize].pinpoints}
      /> */}
    </div>
  );
};

export default AboutUs;

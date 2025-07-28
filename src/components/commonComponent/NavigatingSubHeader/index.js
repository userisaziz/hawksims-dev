"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SubheaderLogo } from "@/components/Icons/SolutionecLogo/SubheaderLogo";

const NavigatingSubHeader = ({
  bgColor = "bg-[#3F49A7]",
  data,
  visibility,
}) => {
  const router = useRouter();

  const [isSticky, setIsSticky] = useState(false);
  const [headerTop, setHeaderTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [subHeaderHeight, setSubHeaderHeight] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [heroSectionTop, setHeroSectionTop] = useState(0);
  const [heroSectionHeight, setHeroSectionHeight] = useState(0);
  const [dir, setDir] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    // Function to update position and height on initial load and on resize
    const updateDimensions = () => {
      const subHeader = document.getElementById("subHeader");
      if (subHeader) {
        setSubHeaderHeight(subHeader.offsetHeight);
        setHeaderTop(subHeader.offsetTop);
      }

      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }

      const heroSection = document.getElementById("heroSection");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        setHeroSectionTop(heroRect.top + window.scrollY);
        setHeroSectionHeight(heroRect.height);
      }
    };

    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);

      // Track scroll direction (up or down)
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
        setDir(false);
      } else {
        setScrollDirection("up");
        setDir(true);
      }

      // If the hero section is still in view, make the subheader non-sticky
      const subHeader = document.getElementById("subHeader");
      if (subHeader) {
        const subHeaderRect = subHeader.getBoundingClientRect();

        // Adjust scroll check to include subHeaderHeight
        if (
          scrollDirection === "up" &&
          heroSectionTop + heroSectionHeight - 1.5 * subHeaderHeight >
            currentScrollY
        ) {
          setIsSticky(false);
        } else if (currentScrollY > headerTop && scrollDirection === "down") {
          setIsSticky(true);
          setShowLogo(true);
        } else if (scrollDirection === "up" && currentScrollY > headerHeight) {
          setIsSticky(true);
          setShowLogo(false);
        } else {
          setIsSticky(false);
          setShowLogo(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [
    lastScrollY,
    headerTop,
    headerHeight,
    scrollDirection,
    heroSectionTop,
    heroSectionHeight,
    subHeaderHeight,
  ]);

  return (
    <>
      <div
        id="subHeader"
        className={`${
          isSticky ? "fixed top-0 w-full z-50 translate-y-0" : ""
        } ${bgColor} ${visibility} items-center justify-center px-6 py-[6px] transition-all duration-300 ease-in-out transform`}
        style={{
          top: dir && `${headerHeight}px`,
        }}
      >
        {showLogo && (
          <div
            className="absolute left-0 ml-4 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <SubheaderLogo className="w-7 h-7" />
          </div>
        )}
        {data?.map((item) => (
          <Link
            key={item?.id}
            href={item?.href}
            className={`text-white ${
              item?.href === pathName ? "bg-[rgba(95,128,246,0.20)]" : ""
            } rounded-lg px-4 py-2 cursor-pointer whitespace-nowrap`}
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavigatingSubHeader;

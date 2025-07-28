"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSuppressHeader } from "@/provider/redux/slice/headerSlice";
import { SubheaderLogo } from "../Icons/SolutionecLogo/SubheaderLogo";

const SubNavigation = ({
  customFill,
  items,
  bgColor,
  setIndex,
  handleIndex,
}) => {
  const router = useRouter();
  const suppressHeader = useSelector((state) => state.header.suppressHeader);
  const [isSticky, setIsSticky] = useState(false);
  const [headerTop, setHeaderTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [dir, setDir] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [heroSectionTop, setHeroSectionTop] = useState(0);
  const [heroSectionHeight, setHeroSectionHeight] = useState(0);
  const observer = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const subHeader = document.getElementById("subHeader");
    if (subHeader) {
      setHeaderTop(subHeader.offsetTop);
    }
    const header = document.querySelector("header");
    if (header && !suppressHeader) {
      setHeaderHeight(header.offsetHeight);
    }

    const heroSection = document.getElementById("heroSection");
    if (heroSection) {
      const heroRect = heroSection.getBoundingClientRect();
      setHeroSectionTop(heroRect.top + window.scrollY);
      setHeroSectionHeight(heroRect.height);
    }

    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);

      if (currentScrollY > lastScrollY || suppressHeader) {
        setScrollDirection("down");
        setDir(false);
      } else {
        setScrollDirection("up");
        setDir(true);
      }

      const subHeader = document.getElementById("subHeader");
      if (subHeader) {
        const subHeaderRect = subHeader.getBoundingClientRect();

        if (
          scrollDirection === "up" &&
          heroSectionTop + heroSectionHeight - 1.5 * subHeaderRect.height >
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
    window.addEventListener("resize", () => {
      const heroSection = document.getElementById("heroSection");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        setHeroSectionTop(heroRect.top + window.scrollY);
        setHeroSectionHeight(heroRect.height);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
    };
  }, [
    lastScrollY,
    headerTop,
    headerHeight,
    scrollDirection,
    heroSectionTop,
    heroSectionHeight,
    suppressHeader,
  ]);

  useEffect(() => {
    const createObserver = (threshold) => {
      if (observer.current) observer.current.disconnect(); // Disconnect any existing observer

      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const visibleSectionId = entry.target.id;
              const activeIndex = items.findIndex(
                (item) => item.href === `#${visibleSectionId}`
              );
              setActiveSection(activeIndex);
              if (typeof setIndex === "function") {
                setIndex(activeIndex);
              }
            }
          });
        },
        { threshold }
      );

      items.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) observer.current.observe(section);
      });
    };

    if (scrollDirection === "up") {
      createObserver([0.1, 0.4, 0.75]);
    } else {
      createObserver(0.4);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [items, setIndex, scrollDirection]);

  const handleSmoothScroll = (e, targetId, index) => {
    e.preventDefault();

    if (typeof setIndex === "function") {
      setIndex(index);
    }
    setActiveSection(index);

    dispatch(setSuppressHeader(true));
    setTimeout(() => {
      dispatch(setSuppressHeader(false));
    }, 1000);

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerHeight / 2;

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
    <div
      id="subHeader"
      className={`${
        isSticky ? "fixed w-full z-50 translate-y-0" : ""
      } ${bgColor} hidden lg:flex items-center justify-center px-6 py-[6px] transition-all duration-300 ease-in-out transform`}
      style={{
        top: dir ? `${headerHeight}px` : "0",
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
      {items?.map((item, index) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={(e) => handleSmoothScroll(e, item.href, index)}
          className={`relative text-white font-normal px-4 py-2 cursor-pointer whitespace-nowrap
            ${
              activeSection === index
                ? "bg-[rgba(95,128,246,0.20)] rounded-lg"
                : ""
            }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default SubNavigation;

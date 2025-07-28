import React, { useState, useEffect } from "react";

const SubHeader = ({ subHeaderItems, bgColor }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const subHeader = document.getElementById("subHeader");
    setHeaderTop(subHeader.offsetTop);

    const handleScroll = () => {
      if (window.scrollY > headerTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerTop]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="subHeader"
      className={`${
        isSticky ? "fixed top-0 w-full z-50" : ""
      } hidden lg:flex items-center bg-[${bgColor}] justify-center px-6 py-[6px] transition-all duration-300 ease-in-out transform  sdfhdfsdflkasjdflksjdflkjasdflk${
        isSticky ? "translate-y-0" : ""
      }`}
    >
      {subHeaderItems?.map((item) => (
        <a
          key={item.id}
          href={item?.href}
          onClick={(e) => handleSmoothScroll(e, item?.href)}
          className="text-white px-0 lg:pr-[0px] lg:pl-[1rem]  xl:px-4 py-2 cursor-pointer whitespace-nowrap"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default SubHeader;

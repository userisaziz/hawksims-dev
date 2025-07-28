// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
// import { HeaderLogo } from "../Icons/headerLogo";
// import { SearchIcon } from "../Icons/searchIcon";
// import { MobileLogo } from "../Icons/mobileLogo";
// import ThreeLinesIcon from "../Icons/threeLinesIcon";
// import { TabLogo } from "../Icons/tabLogo";
// import useScreenSize from "@/hooks/useScreenSize";
// import BaseButton from "../BaseButton";
// import { renderList } from "../utils";
// import ExpandIcon from "../Icons/ExpandIcon.js";
// import CollapseIcon from "../Icons/CollapseIcon";
// import styles from "../commonComponent/CustomHeroSection/heroSection.module.css";
// import { useSelector } from "react-redux";

// const NAVIGATION_LINKS = [
//   { name: "Who We Are", path: "/who-we-are" },
//   { name: "What We Do", path: "/what-we-do" },
//   { name: "Our Products", path: "/our-products" },
//   { name: "Our Resources", path: "/our-resources" },
//   { name: "Join Us", path: "/join-us" },
// ];

// const Header = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const suppressHeader = useSelector((state) => state.header.suppressHeader);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [openIndex, setOpenIndex] = useState(null);

//   const [isHeaderVisible, setIsHeaderVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [shouldAddS, setShouldAddS] = useState(false);
//   const footerNavigationData = useSelector(
//     (state) => state.header.footerNavigationData
//   );

//   useEffect(() => {
//     if (typeof window != "undefined") {
//       const storedValue = localStorage.getItem("isSAdded");
//       if (storedValue !== null) setShouldAddS(JSON.parse(storedValue));
//     }
//   }, []);
//   const screenSize = useScreenSize();
//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleContactUs = () => {
//     router.push("/contact");
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSearchSubmit = (e) => {
//     if (e.key === "Enter") {
//       router.push(`/search?query=${searchTerm?.trim()}`);
//       setIsSearchActive(false);
//       setSearchTerm("");
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMenuOpen && !event.target.closest(".menu-content")) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isMenuOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = Math.max(window.scrollY, 0); // Ensure scrollY is never negative

//       if (currentScrollY > lastScrollY || suppressHeader) {
//         // Scrolling down, hide the header
//         setIsHeaderVisible(false);
//       } else {
//         // Scrolling up, show the header
//         setIsHeaderVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, suppressHeader]);

//   const cancelSearch = () => {
//     setIsSearchActive(false);
//     setSearchTerm("");
//   };

//   const logos = [
//     { component: MobileLogo, className: "block md:hidden" },
//     { component: TabLogo, className: "hidden md:block lg:hidden" },
//     { component: HeaderLogo, className: "hidden lg:block" },
//   ];

//   const buttonComp = (
//     <BaseButton
//       onClick={handleContactUs}
//       className="w-[134px] h-[40px]  py-2 relative items-center  text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px]
// border-white lg:text-lg flex justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full
// before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56"
//       text="Contact Us"
//       iconClassContainer={"text-[16px]"}
//     />
//   );

//   return (
//     <>
//       {!suppressHeader && (
//         <header
//           className={`fixed top-0 left-0 w-full z-40 bg-headerBg text-white py-[14px] px-4 md:px-12 transition-transform duration-300 ${
//             isHeaderVisible ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           <div className="container mobile:mx-0 p-[7px] lg:p-1 max-w-full  mx-auto flex items-center justify-between">
//             {/* Hamburger Menu Icon for Mobile and Tablet View */}
//             {(screenSize === "tablet" ||
//               screenSize === "desktop" ||
//               (screenSize === "mobile" && !isSearchActive)) && (
//               <BaseButton
//                 onClick={toggleMenu}
//                 className="lg:hidden text-white focus:outline-none"
//                 icon={isMenuOpen ? <FaTimes size={24} /> : <ThreeLinesIcon />}
//               />
//             )}

//             <div
//               className={`flex items-center justify-center lg:justify-start space-x-4 ${
//                 isMenuOpen ? "hidden lg:flex" : ""
//               }`}
//             >
//               {logos.map((logo, index) => (
//                 <div
//                   key={index}
//                   className={`${logo.className} cursor-pointer ${
//                     screenSize === "mobile" && isSearchActive ? "hidden" : ""
//                   }`}
//                   onClick={() => router.push("/")}
//                 >
//                   {/* <logo.component /> */}
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Drawer for Mobile and Tablet */}
//             <nav
//               className={`fixed top-0 left-0 h-full bg-[#030515] text-white transition-transform duration-300 ease-in-out ${
//                 isMenuOpen ? "translate-x-0" : "-translate-x-full"
//               } lg:translate-x-0 lg:relative lg:w-auto w-[80%] lg:flex lg:items-center lg:space-x-6 lg:justify-center !z-[1000] menu-content`}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="p-4 lg:hidden flex items-center justify-between w-full bg-[#3F49A7]">
//                 {/* Logo inside the drawer */}
//                 <MobileLogo fill="#3F49A7" />
//                 {/* Cancel icon to close the menu */}
//                 <button
//                   onClick={toggleMenu}
//                   className="text-white focus:outline-none"
//                 >
//                   <FaTimes size={24} />
//                 </button>
//               </div>
//               <ul className="flex flex-col lg:flex-row lg:space-x-6 items-start lg:items-center p-4 lg:p-0 bg-headerBg relative z-[999] h-[110vh] lg:h-full">
//                 {screenSize === "desktop" ? (
//                   <>
//                     {!isSearchActive &&
//                       NAVIGATION_LINKS.map((item, index) => (
//                         <li key={index} className="group w-full lg:w-auto">
//                           <Link
//                             href={item.path}
//                             className="py-2 px-[14px] 2xl:px-4 block lg:inline-block text-[#DFDFE0] relative text-base font-normal"
//                             onClick={() => {
//                               setIsMenuOpen(false);
//                             }}
//                           >
//                             {item.name}
//                             <span
//                               className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 h-[4px] bg-gradient-to-r from-[#5F80F6] to-[#3F49A7] rounded-full transition-all duration-300 ease-in-out ${
//                                 pathname.includes(item.path)
//                                   ? "w-10"
//                                   : "w-0 group-hover:w-10"
//                               }`}
//                             ></span>
//                           </Link>
//                         </li>
//                       ))}
//                   </>
//                 ) : (
//                   <>
//                     {footerNavigationData.map((section, index) => (
//                       <div key={index} className="border-gray-300 w-full">
//                         <button className="w-full text-left py-4 flex justify-between items-center">
//                           <h3
//                             className="text-xl font-semibold"
//                             onClick={() => {
//                               router.push(section.path);
//                               toggleMenu();
//                             }}
//                           >
//                             {section.title}
//                           </h3>
//                           <span onClick={() => toggleAccordion(index)}>
//                             {openIndex === index ? (
//                               <CollapseIcon />
//                             ) : (
//                               <ExpandIcon />
//                             )}
//                           </span>
//                         </button>
//                         {openIndex === index && (
//                           <div className="pb-4" onClick={toggleMenu}>
//                             {renderList(
//                               { content: section.content },
//                               shouldAddS,
//                               setShouldAddS
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </>
//                 )}
//               </ul>
//             </nav>

//             {/* Search Icon, Input and Contact Us Button */}
//             <div
//               className={`flex items-center space-x-2 ${
//                 isSearchActive ? `lg:py-[1.6rem] ${styles.searchContainer}` : ""
//               }`}
//             >
//               {isSearchActive ? (
//                 <>
//                   <div className="relative flex items-center">
//                     {/* Search Input */}
//                     <input
//                       type="text"
//                       className="w-80 md:w-72 py-2.5 px-5 text-sm text-white border border-gray-300 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#909193] placeholder:text-[#909193]
//                   bg-[#030515]"
//                       style={{
//                         boxShadow: "0px 8px 34px 0px rgba(34, 43, 75, 0.06)",
//                       }}
//                       placeholder="type here to search.."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       onKeyDown={handleSearchSubmit}
//                       autoFocus
//                     />

//                     <button
//                       onClick={cancelSearch}
//                       className="absolute right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
//                     >
//                       <FaTimes />
//                     </button>
//                   </div>
//                   <BaseButton
//                     onClick={handleContactUs}
//                     className="w-[134px] h-[40px] lg:flex hidden py-2 relative items-center  text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px]
// border-white lg:text-lg  justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full
// before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56"
//                     text="Contact Us "
//                     iconClassContainer={"text-[16px]"}
//                   />
//                 </>
//               ) : (
//                 <>
//                   {/* Search Icon for Mobile View */}
//                   <BaseButton
//                     className={`p-2 text-gray-400 lg:hidden `}
//                     onClick={() => setIsSearchActive(true)}
//                     icon={<FaSearch size={20} />}
//                   />

//                   {/* Search Icon and Contact Us Button for Large Screens */}
//                   <div className="hidden lg:flex items-center space-x-4">
//                     <BaseButton
//                       className="p-2 text-gray-400"
//                       onClick={() => setIsSearchActive(true)}
//                       icon={<SearchIcon />}
//                     />
//                     {buttonComp}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </header>
//       )}
//     </>
//   );
// };

// export default Header;
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { HeaderLogo } from "../Icons/headerLogo";
import { SearchIcon } from "../Icons/searchIcon";
import { MobileLogo } from "../Icons/mobileLogo";
import ThreeLinesIcon from "../Icons/threeLinesIcon";
import { TabLogo } from "../Icons/tabLogo";
import useScreenSize from "@/hooks/useScreenSize";
import BaseButton from "../BaseButton";
import { renderList } from "../utils";
import ExpandIcon from "../Icons/ExpandIcon.js";
import CollapseIcon from "../Icons/CollapseIcon";
import styles from "../commonComponent/CustomHeroSection/heroSection.module.css";
import { useSelector } from "react-redux";

// Define links with optional children
const NAVIGATION_LINKS = [
  {
    name: "Industries",
    path: "/industries",
    children: [
      { label: "Aerospace & Defense", path: "/industries#aerospace-defense" },
      { label: "Oil & Gas", path: "/industries#oil-gas" },
      { label: "Construction", path: "/industries#construction" },
      { label: "Automotive", path: "/industries#automotive" },
      { label: "Electronics", path: "/industries#electronics" },
    ],
  },
  {
    name: "Capabilities",
    path: "/capabilities",
    children: [
      {
        label: "Mathematical Modeling",
        path: "/capabilities#mathematical-modeling",
      },
      {
        label: "Computational Mathematics",
        path: "/capabilities#computational-mathematics",
      },
      {
        label: "Scientific Software Engineering",
        path: "/capabilities#scientific-software",
      },
      {
        label: "Industrial AI & Automation",
        path: "/capabilities#industrial-ai",
      },
      { label: "AI Research", path: "/capabilities#ai-research" },
    ],
  },
  {
    name: "Services",
    path: "/services",
    children: [
      {
        label: "Computational Modeling",
        path: "/services#computational-modeling",
      },
      { label: "Machine Learning", path: "/services#machine-learning" },
      { label: "Data Analysis", path: "/services#data-analysis" },
      { label: "Research Consulting", path: "/services#research-consulting" },
      { label: "Custom Development", path: "/services#custom-development" },
    ],
  },
  {
    name: "Solutions",
    path: "/solutions",
  },
  {
    name: "Research",
    path: "/research",
  },
  {
    name: "Resources",
    path: "/resources",
    children: [
      { label: "Blog", path: "/resources#blog" },
      { label: "Case Studies", path: "/resources#case-studies" },
    ],
  },
  {
    name: "About Us",
    path: "/about-us",
    children: [
      { label: "Our Company", path: "/about-us#company" },
      { label: "Purpose, Mission & Values", path: "/about-us#mission-values" },
      { label: "Careers", path: "/about-us#careers" },
    ],
  },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const suppressHeader = useSelector((state) => state.header.suppressHeader);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldAddS, setShouldAddS] = useState(false);
  const footerNavigationData = useSelector(
    (state) => state.header.footerNavigationData
  );
  const screenSize = useScreenSize();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isSAdded");
      if (storedValue !== null) setShouldAddS(JSON.parse(storedValue));
    }
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactUs = () => {
    router.push("/contact");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?query=${searchTerm.trim()}`);
      setIsSearchActive(false);
      setSearchTerm("");
    }
  };

  const cancelSearch = () => {
    setIsSearchActive(false);
    setSearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".menu-content")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      setIsHeaderVisible(currentScrollY < lastScrollY && !suppressHeader);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, suppressHeader]);

  const logos = [
    { component: MobileLogo, className: "block md:hidden" },
    { component: TabLogo, className: "hidden md:block lg:hidden" },
    { component: HeaderLogo, className: "hidden lg:block" },
  ];

  const buttonComp = (
    <BaseButton
      onClick={handleContactUs}
      className="w-[134px] h-[40px] py-2 relative items-center text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px]
      border-white lg:text-lg flex justify-center overflow-hidden text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full 
      before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56"
      text="Contact Us"
      iconClassContainer={"text-[16px]"}
    />
  );

  return (
    <>
      {!suppressHeader && (
        <header
          className={`fixed top-0 left-0 w-full z-40 bg-headerBg text-white py-[14px] px-4 md:px-12 transition-transform duration-300 ${
            isHeaderVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container p-[7px] lg:p-1 max-w-full mx-auto flex items-center justify-between">
            {(screenSize === "tablet" ||
              screenSize === "desktop" ||
              (screenSize === "mobile" && !isSearchActive)) && (
              <BaseButton
                onClick={toggleMenu}
                className="lg:hidden text-white"
                icon={isMenuOpen ? <FaTimes size={24} /> : <ThreeLinesIcon />}
              />
            )}

            <div
              className={`flex items-center justify-center lg:justify-start space-x-4 ${
                isMenuOpen ? "hidden lg:flex" : ""
              }`}
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className={`${logo.className} cursor-pointer ${
                    screenSize === "mobile" && isSearchActive ? "hidden" : ""
                  }`}
                  onClick={() => router.push("/")}
                >
                  <HeaderLogo />
                  {/* <logo.component /> */}
                </div>
              ))}
            </div>

            <nav
              className={`fixed top-0 left-0 h-full bg-[#030515] text-white transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } lg:translate-x-0 lg:relative lg:w-auto w-[80%] lg:flex lg:items-center lg:space-x-6 lg:justify-center !z-[1000] menu-content`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 lg:hidden flex items-center justify-between w-full bg-[#3F49A7]">
                <MobileLogo fill="#3F49A7" />
                <button onClick={toggleMenu} className="text-white">
                  <FaTimes size={24} />
                </button>
              </div>

              <ul className="flex flex-col lg:flex-row lg:space-x-6 items-start lg:items-center p-4 lg:p-0 bg-headerBg z-[999] h-[110vh] lg:h-full">
                {screenSize === "desktop"
                  ? NAVIGATION_LINKS.map((item, index) => (
                      <li
                        key={index}
                        className="group relative w-full lg:w-auto"
                      >
                        <Link
                          href={item.path}
                          className="py-2 px-[14px] 2xl:px-4 block lg:inline-block text-[#DFDFE0] relative text-base font-normal"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                          <span
                            className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 h-[4px] bg-gradient-to-r from-[#5F80F6] to-[#3F49A7] rounded-full transition-all duration-300 ease-in-out ${
                              pathname.includes(item.path)
                                ? "w-10"
                                : "w-0 group-hover:w-10"
                            }`}
                          ></span>
                        </Link>

                        {item.children && (
                          <ul className="absolute top-full left-0 mt-2 bg-[#030515] shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-[1000] invisible group-hover:visible min-w-[180px]">
                            {item.children.map((child, cIdx) => (
                              <li key={cIdx}>
                                <Link
                                  href={child.path}
                                  className="block px-4 py-2 text-sm text-[#DFDFE0] hover:bg-[#1C1E2B] transition-colors duration-200"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))
                  : footerNavigationData.map((section, index) => (
                      <div key={index} className="border-gray-300 w-full">
                        <button className="w-full text-left py-4 flex justify-between items-center">
                          <h3
                            className="text-xl font-semibold"
                            onClick={() => {
                              router.push(section.path);
                              toggleMenu();
                            }}
                          >
                            {section.title}
                          </h3>
                          <span onClick={() => toggleAccordion(index)}>
                            {openIndex === index ? (
                              <CollapseIcon />
                            ) : (
                              <ExpandIcon />
                            )}
                          </span>
                        </button>
                        {openIndex === index && (
                          <div className="pb-4" onClick={toggleMenu}>
                            {renderList(
                              { content: section.content },
                              shouldAddS,
                              setShouldAddS
                            )}
                          </div>
                        )}
                      </div>
                    ))}
              </ul>
            </nav>

            {/* <div
              className={`flex items-center space-x-2 ${
                isSearchActive ? `lg:py-[1.6rem] ${styles.searchContainer}` : ""
              }`}
            >
              {isSearchActive ? (
                <>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      className="w-80 md:w-72 py-2.5 px-5 text-sm text-white border border-gray-300 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#909193] placeholder:text-[#909193] bg-[#030515]"
                      style={{
                        boxShadow: "0px 8px 34px 0px rgba(34, 43, 75, 0.06)",
                      }}
                      placeholder="type here to search.."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={handleSearchSubmit}
                      autoFocus
                    />
                    <button
                      onClick={cancelSearch}
                      className="absolute right-3 text-gray-500 hover:text-gray-700"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <div className="hidden lg:flex">{buttonComp}</div>
                </>
              ) : (
                <>
                  <BaseButton
                    className="p-2 text-gray-400 lg:hidden"
                    onClick={() => setIsSearchActive(true)}
                    icon={<FaSearch size={20} />}
                  />
                  <div className="hidden lg:flex items-center space-x-4">
                    <BaseButton
                      className="p-2 text-gray-400"
                      onClick={() => setIsSearchActive(true)}
                      icon={<SearchIcon />}
                    />
                    {buttonComp}
                  </div>
                </>
              )}
            </div> */}
          </div>
        </header>
      )}
    </>
  );
};

export default Header;

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import BgLinesSvg from "./svg-components/Bring-change-bgLines";
// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import BringChangeMobile from "./BringChangeMobile";
// import useScreenSize from "@/hooks/useScreenSize";

// /**
//  * this below component used for "What We Value To Bring Change" section in who-we-are page
//  * @param {*} param0
//  * @returns
//  */
// export default function BringChange({
//   Json,
//   heading,
//   staggerVariants,
//   sliderSettings,
// }) {
//   const [isInViewport, setIsInViewport] = useState(false);
//   const cardsRef = useRef(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const device = useScreenSize();
//   const isDesktop = device == "desktop" ? -150 : -80;

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInViewport(entry.isIntersecting);
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     if (cardsRef.current) {
//       observer.observe(cardsRef.current);
//     }

//     return () => {
//       if (cardsRef.current) {
//         observer.unobserve(cardsRef.current);
//       }
//     };
//   }, []);

//   const initialCardPositions = [
//     { x: "91%", y: "10%" },
//     { x: "-55%", y: "-6%" },
//     { x: "91%", y: "-114%" },
//     { x: "-55%", y: "-130%" },
//   ];
//   const targetCardPositions = [
//     { x: "20%", y: "-2%" },
//     { x: "5%", y: "15%" },
//     { x: "20%", y: "-15%" },
//     { x: "5%", y: "2%" },
//   ];
//   return (
//     <div
//       id="values"
//       className="pt-14 md:pt-24 lg:pt-30 md:px-12 px-7 lg:px-10 xl:px-28 bg-white"
//     >
//       <div className="flex justify-center mb-14 lg:mb-20">
//         <h2 className="text-xl md:text-[28px] lg:text-[32px] text-footerBg font-semibold font-inter">
//           {heading}
//         </h2>
//       </div>

//       <div className="hidden md:block">
//         <div className="w-full md:container m-auto">
//           <div
//             ref={cardsRef}
//             className="md:grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 mx-auto"
//           >
//             {/*  Mapping over the Json array to render each card */}
//             <>
//               {Json.map((change, idx) => {
//                 const targetPosition = isInViewport
//                   ? targetCardPositions[idx]
//                   : initialCardPositions[idx];

//                 return (
//                   <motion.div
//                     onMouseEnter={() => setHoveredIndex(change.id)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                     key={change.id}
//                     className={`relative border rounded-3xl shadow-md md:pb-5 flex-col gap-10 md:w-[90%] md:h-[350px] xl:w-[85%] lg:h-[400px] xl:h-[420px] 2xl:h-[550px] bg-[#F2F3FA] overflow-hidden group ${
//                       change?.id % 2 === 0 ? "mt-12" : "mt-15"
//                     }`}
//                     initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
//                     e
//                     animate={{
//                       opacity: 1,
//                       scale: 1,
//                       x: targetPosition.x,
//                       y: targetPosition.y,
//                       transition: {
//                         duration: 0.9,
//                         delay: idx * 0.2,
//                         ease: "linear",
//                       },
//                     }}
//                   >
//                     {change?.id % 2 !== 0 ? (
//                       <motion.div
//                         className={`parent-bg-line-section absolute bottom-1/4 left-[50px] w-4 h-4 bg-[#5F80F6] rounded-full`}
//                         initial={{ scale: 0 }}
//                         animate={{
//                           scale: hoveredIndex === change.id ? 120 : 0,
//                         }}
//                         transition={{ duration: 1.1, ease: "easeInOut" }}
//                         style={{ originX: 0.5, originY: 0.5 }}
//                       />
//                     ) : (
//                       <motion.div
//                         className="absolute w-full h-full flex flex-col justify-center items-start"
//                         initial="hidden"
//                         animate={
//                           hoveredIndex === change.id ? "visible" : "hidden"
//                         }
//                         variants={staggerVariants.parent}
//                       >
//                         {[...Array(6)].map((_, index) => (
//                           <motion.div
//                             key={index}
//                             className={`w-full h-[100%] relative bg-[#3f49a7]`}
//                             variants={staggerVariants.child(index)}
//                             style={{
//                               marginTop: index + 1 === 6 ? "-1px" : "-0.4px",
//                               marginBottom: index + 1 === 6 ? "-1px" : "-0.4px",
//                             }}
//                           />
//                         ))}
//                       </motion.div>
//                     )}

//                     <motion.div className="h-[100%] flex justify-end flex-col relative z-10">
//                       {hoveredIndex === change.id && (
//                         <motion.div
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <BgLinesSvg isHovered={hoveredIndex === change.id} />
//                         </motion.div>
//                       )}

//                       <motion.div
//                         className="slide-up-section px-8  flex flex-col justify-start"
//                         initial={{ y: 0, opacity: 1 }}
//                         animate={{
//                           y: hoveredIndex === change.id ? isDesktop : 0,
//                           x: hoveredIndex === change.id ? 10 : 0,
//                           opacity: hoveredIndex === change.id ? 1 : 1,
//                         }}
//                         transition={{ duration: 1.1 }}
//                       >
//                         {change.img(hoveredIndex === change.id)}{" "}
//                       </motion.div>

//                       <motion.div
//                         className="slide-up-section text-footerBg px-8 flex flex-col justify-start group-hover:text-white"
//                         initial={{ y: 0, opacity: 1 }}
//                         animate={{
//                           y: hoveredIndex === change.id ? -80 : 0,
//                           opacity: hoveredIndex === change.id ? 1 : 1,
//                         }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <h3 className="text-[16px] md:text-[24px] font-semibold">
//                           {change.heading}
//                         </h3>
//                       </motion.div>

//                       <motion.div
//                         className="px-8  text-gray-600 md:hidden md:group-hover:block xl:block  group-hover:text-white"
//                         initial={{ y: 0, opacity: 0 }}
//                         animate={{
//                           y: hoveredIndex === change.id ? -80 : 0,
//                           opacity: hoveredIndex === change.id ? 1 : 0,
//                         }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         {change.desc}
//                       </motion.div>
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//             </>
//           </div>
//         </div>
//       </div>

//       <div className="block md:hidden">
//         <Slider
//           {...sliderSettings}
//           afterChange={(current) => {
//             document.querySelectorAll(".slick-slide").forEach((slide, idx) => {
//               if (idx === current) {
//                 slide.classList.add("is-main");
//               } else {
//                 slide.classList.remove("is-main");
//               }
//             });
//           }}
//         >
//           {Json.map((change, idx) => {
//             const isMainCard = idx + 1 === change?.id;

//             return (
//               <BringChangeMobile
//                 isMainCard={isMainCard}
//                 change={change}
//                 key={change.id}
//               />
//             );
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// }
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BgLinesSvg from "./svg-components/Bring-change-bgLines";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import BringChangeMobile from "./BringChangeMobile";
import useScreenSize from "@/hooks/useScreenSize";
import { FaUserGraduate, FaFlask, FaCogs } from "react-icons/fa";

/**
 * This component renders the "What We Value To Bring Change" section in the Who We Are page.
 */
export default function BringChange({
  heading = "About HawkSims",
  staggerVariants,
  sliderSettings,
}) {
  const [isInViewport, setIsInViewport] = useState(false);
  const cardsRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const device = useScreenSize();
  const isDesktop = device === "desktop" ? -150 : -80;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => {
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  const cardData = [
    {
      id: 1,
      heading: "Expert Team",
      desc: "PhD-level scientists and engineers with industry experience",
      img: (hovered) => (
        <FaUserGraduate size={hovered ? 60 : 40} className="text-[#3F49A7]" />
      ),
    },
    {
      id: 2,
      heading: "Proven Methods",
      desc: "Validated approaches backed by peer-reviewed research",
      img: (hovered) => (
        <FaFlask size={hovered ? 60 : 40} className="text-[#3F49A7]" />
      ),
    },
    {
      id: 3,
      heading: "Custom Solutions",
      desc: "Tailored strategies for your unique research challenges",
      img: (hovered) => (
        <FaCogs size={hovered ? 60 : 40} className="text-[#3F49A7]" />
      ),
    },
    {
      id: 4,
      heading: "Empowering Research Through Technology",
      desc: "We bridge complex scientific challenges with computational solutions to accelerate discovery.",
      img: (hovered) => (
        <svg
          width={hovered ? 60 : 40}
          height={hovered ? 60 : 40}
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" stroke="#3F49A7" strokeWidth="2" />
          <path d="M8 12h8" stroke="#3F49A7" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const initialCardPositions = [
    { x: "91%", y: "10%" },
    { x: "-55%", y: "-6%" },
    { x: "91%", y: "-114%" },
    { x: "-55%", y: "-130%" },
  ];

  const targetCardPositions = [
    { x: "20%", y: "-2%" },
    { x: "5%", y: "15%" },
    { x: "20%", y: "-15%" },
    { x: "5%", y: "2%" },
  ];

  return (
    <div
      id="values"
      className="pt-14 md:pt-24 lg:pt-30 md:px-12 px-7 lg:px-10 xl:px-28 bg-white"
    >
      <div className="flex justify-center mb-14 lg:mb-20">
        <h2 className="text-xl md:text-[28px] lg:text-[32px] text-footerBg font-semibold font-inter">
          {heading}
        </h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="w-full md:container m-auto">
          <div
            ref={cardsRef}
            className="md:grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 mx-auto"
          >
            {cardData.map((change, idx) => {
              const targetPosition = isInViewport
                ? targetCardPositions[idx]
                : initialCardPositions[idx];

              return (
                <motion.div
                  onMouseEnter={() => setHoveredIndex(change.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  key={change.id}
                  className={`relative border rounded-3xl shadow-md md:pb-5 flex-col gap-10 md:w-[90%] md:h-[350px] xl:w-[85%] lg:h-[400px] xl:h-[420px] 2xl:h-[550px] bg-[#F2F3FA] overflow-hidden group ${
                    change?.id % 2 === 0 ? "mt-12" : "mt-15"
                  }`}
                  initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: targetPosition.x,
                    y: targetPosition.y,
                    transition: {
                      duration: 0.9,
                      delay: idx * 0.2,
                      ease: "linear",
                    },
                  }}
                >
                  {/* Background Animation */}
                  {change?.id % 2 !== 0 ? (
                    <motion.div
                      className="absolute bottom-1/4 left-[50px] w-4 h-4 bg-[#5F80F6] rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredIndex === change.id ? 120 : 0 }}
                      transition={{ duration: 1.1, ease: "easeInOut" }}
                      style={{ originX: 0.5, originY: 0.5 }}
                    />
                  ) : (
                    <motion.div
                      className="absolute w-full h-full flex flex-col justify-center items-start"
                      initial="hidden"
                      animate={
                        hoveredIndex === change.id ? "visible" : "hidden"
                      }
                      variants={staggerVariants?.parent}
                    >
                      {[...Array(6)].map((_, index) => (
                        <motion.div
                          key={index}
                          className="w-full h-[100%] relative bg-[#3f49a7]"
                          variants={staggerVariants?.child(index)}
                          style={{
                            marginTop: index + 1 === 6 ? "-1px" : "-0.4px",
                          }}
                        />
                      ))}
                    </motion.div>
                  )}

                  {/* Card Content */}
                  <motion.div className="h-full flex justify-end flex-col relative z-10">
                    {hoveredIndex === change.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <BgLinesSvg isHovered={true} />
                      </motion.div>
                    )}

                    <motion.div
                      className="slide-up-section px-8 flex flex-col justify-start"
                      initial={{ y: 0, opacity: 1 }}
                      animate={{
                        y: hoveredIndex === change.id ? isDesktop : 0,
                        x: hoveredIndex === change.id ? 10 : 0,
                      }}
                      transition={{ duration: 1.1 }}
                    >
                      {change.img(hoveredIndex === change.id)}
                    </motion.div>

                    <motion.div
                      className="text-footerBg px-8 flex flex-col justify-start group-hover:text-white"
                      initial={{ y: 0, opacity: 1 }}
                      animate={{ y: hoveredIndex === change.id ? -80 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-[16px] md:text-[24px] font-semibold">
                        {change.heading}
                      </h3>
                    </motion.div>

                    <motion.div
                      className="px-8 text-gray-600 md:hidden md:group-hover:block xl:block group-hover:text-white"
                      initial={{ y: 0, opacity: 0 }}
                      animate={{
                        y: hoveredIndex === change.id ? -80 : 0,
                        opacity: hoveredIndex === change.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {change.desc}
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <Slider {...sliderSettings}>
          {cardData.map((change, idx) => (
            <BringChangeMobile
              isMainCard={true}
              change={change}
              key={change.id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

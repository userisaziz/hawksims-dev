// import React from "react";
// import styles from "./whoWeAre.module.css";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import LinkedIn from "../Icons/LinkedInIcon/LinkedIn";
// import { leadershipData } from "@/commonJson/WhoWeAre/MeetOurLeadershipTeam";
// /**
//  * LeadershipCard Component
//  *
//  * Displays information about a leader including their image, name, position, description, and a LinkedIn link.
//  * The component is responsive, with hover effects and smooth transitions for a modern user experience.
//  */
// const LeadershipCard = ({ leader }) => (
//   <div
//     className={`w-full max-w-2xl mx-auto mobile:w-[160px] mobile:ml-[20px] md:w-[280px] lg:w-full tablet:h-[346px] tablet:w-[184px] mobile:h-[304px] h-[421px] transition-all duration-800 ease-in-out delay-500 relative ${styles.card2Box}`}
//   >
//     <div
//       className={`${styles?.newBox} mobile:hidden tablet:hidden md:hidden transition-all ease-in-out delay-300 rounded-tl-[54px] mobile:rounded-tl-[22px] mobile:rounded-br-[22px] flex-col items-center justify-center rounded-br-[54px] h-full w-full ${styles.cardHoverBg}`}
//     >
//       <div
//         className={`tablet:text-[12px] mobile:px-[10%] mobile:h-[173px]  mobile:text-[10px] mobile:leading-[18px]  tablet:leading-[20.64px] tablet:max-w-[182px] tablet:font-normal max-w-[216px] md:text-[14px] md:font-normal md:leading-[24.08px]  h-[216px] lg:mt-[17%] md:mt-[12%] text-center text-[#DFDFE0] md:mx-[7%] lg:mx-[11%] relative`}
//       >
//         {leader.description}
//         <Image
//           alt="icon"
//           width={24}
//           height={24}
//           src="/assets/joinusArrow.svg"
//           className="absolute tablet:top-[-19px] top-[-17px] tablet:left-[3%] left-0"
//         />
//       </div>
//       <div
//         className={`flex flex-col w-full px-[3%] mobile:mt-[12%] md:mt-[10%] lg:px-[5%] lg:mt-[34%] xl:mt-[15%]`}
//       >
//         <div className="text-[#FFF] mobile:mt-3 mobile:text-[10px] w-full  flex justify-between   mobile:leading-[20px]  tablet:text-[12px] tablet:leading-[16.8px] md:text-[18px] md:leading-[25.2px]">
//           <span>{leader.name}</span>
//           <span className="cursor-pointer mobile:mr-[10%]">
//             <LinkedIn bgColor="white" inColor="#1A224B" />
//           </span>
//         </div>
//         <div className="font-normal mobile:text-[10px] mobile:leading-[20px] tablet:text-[12px] tablet:leading-[16.8px] md:text-[14px] md:leading-[24.08px] md:max-w-[161px] text-[#909193]">
//           {leader.position}
//         </div>
//       </div>
//     </div>

//     <div
//       className={`w-full mobile:h-[210px] mobile:w-[160px] h-[351px] tablet:h-[231px] relative ${styles.leadershipImg}`}
//     >
//       <div className="bg-[#F0F0F0] mobile:w-[95%] md:bg-[#F0F0F0] mobile:h-[172px] w-full h-[311px] tablet:h-[210px] tablet:top-[20px] rounded-tl-[55px] absolute top-[40px] z-3"></div>
//       <Image
//         alt="leader"
//         src={leader.image}
//         width={100}
//         height={100}
//         className="absolute w-full h-full top-0 z-100"
//       />
//     </div>

//     <div
//       className={`flex flex-col w-full md:mt-[16px] mobile:mt-[7px] tablet:relative ${styles.subContent}`}
//     >
//       <div className="flex items-center space-x-1 tablet:flex-col">
//         <div className="text-[18px] tablet:text-[16px] text-[#01020A] leading-[25.2px] font-semibold mobile:text-[14px] mobile:font-normal mobile:leading-[19.6px]">
//           {leader.name}
//         </div>
//       </div>
//       <div className="text-[14px] leading-[24.08px] text-[#52545B] font-inter font-normal not-italic mobile:text-[12px] mobile:font-normal mobile:leading-[18.48px]">
//         {leader.position}
//       </div>
//     </div>
//   </div>
// );

// /**
//  * MeetOurLeadershipTeam Component for Meet Our Leadership Team section in who-we-are page
//  *
//  * Displays a carousel (for mobile) or a grid (for desktop) of leadership team members using the LeadershipCard component.
//  * The component includes responsive design, custom slider settings for mobile, and a structured layout for desktop.
//  */
// const MeetOurLeadershipTeam = () => {
//   const settings = {
//     dots: true,
//     speed: 500,
//     arrows: false,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     infinite: true,
//     autoplay: false,
//     autoplaySpeed: 1000,
//     appendDots: (dots) => (
//       <div
//         style={{
//           bottom: "-42px",
//           display: "flex",
//           justifyContent: "center",
//           width: "100%",
//           position: "absolute",
//         }}
//       >
//         <ul
//           style={{
//             listStyle: "none",
//             margin: "0",
//             padding: "0",
//           }}
//         >
//           {dots.map((dot, index) => (
//             <li
//               key={index}
//               style={{
//                 display: "inline-block",
//                 margin: "0 2px",
//               }}
//             >
//               {React.cloneElement(dot, {
//                 onClick: dot.props.onClick,
//                 style: {
//                   width: "12px",
//                   height: "12px",
//                   borderRadius: "50%",
//                   background: dot.props.className.includes("slick-active")
//                     ? "linear-gradient(311deg, #5F80F6 20.02%, #3F49A7 112.23%)"
//                     : "#909193",
//                   cursor: "pointer",
//                   border: "none",
//                   fontSize: 0,
//                 },
//               })}
//             </li>
//           ))}
//         </ul>
//       </div>
//     ),
//   };

//   return (
//     <>
//       <div id="team" className="dark:bg-white">
//         <div className="md: max-w-[1440px] md:py-40 mobile:py-14 md:px-[7.7%] tablet:py-24 tablet:px-[7.2%] w-full container m-auto">
//           <h2
//             className="flex max-w-7xl mx-auto justify-center text-[#01020A]  items-center w-full font-inter md:text-[32px] not-italic font-semibold leading-[44.8px]
//         tablet:text-[28px] mobile:text-[20px] mobile:leading-[28px] tablet:leading-[39.2px]"
//           >
//             Meet Our Leadership Team
//           </h2>
//           {/* Mobile view - Slider for leadership cards */}
//           <div
//             className={`tablet:hidden  md:hidden block m-[6%] ${styles.sliderContainer}`}
//           >
//             <Slider {...settings} className="mobile:w-full mobile:block hidden">
//               {leadershipData.map((leader, index) => (
//                 <LeadershipCard key={index} leader={leader} />
//               ))}
//             </Slider>
//           </div>
//           {/* Tablet and Desktop view - Grid layout for leadership cards */}
//           <div
//             className={`grid max-w-7xl mx-auto lg:grid-cols-4 items-center justify-center md:grid-cols-2 mobile:hidden gap-4 md:mt-20 ${styles.cardContainer}`}
//           >
//             {leadershipData.map((leader, index) => (
//               <LeadershipCard key={index} leader={leader} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MeetOurLeadershipTeam;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn, FaXTwitter, FaGlobe } from "react-icons/fa6";

const team = [
  {
    name: "Dr. Sarah Chen",
    title: "CEO & Co-Founder",
    role: "CEO",
    img: "https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11",
    desc: "Former NASA researcher with 20+ years in computational physics. Led breakthrough projects in aerospace simulation.",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    name: "Dr. Michael Rodriguez",
    title: "CTO & Co-Founder",
    role: "CTO",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "AI pioneer from MIT CSAIL. Published 50+ papers on machine learning applications in scientific computing.",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    name: "Dr. Emily Watson",
    title: "Chief Scientific Officer",
    role: "CSO",
    img: "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Former head of computational biology at Stanford. Expert in molecular dynamics and drug discovery algorithms.",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
];

export default function LeadershipTeam() {
  return (
    <div className="overflow-x-hidden bg-[#1f2c3a] text-white pb-16">
      {/* Background Circles */}
      <div className="absolute top-12 -left-32 w-[30vw] h-[30vw] rounded-full bg-gradient-radial from-[#00458f8f] via-transparent to-transparent z-0" />
      <div className="absolute -bottom-20 -right-32 w-[30vw] h-[30vw] rounded-full bg-gradient-radial from-[#00458f8f] via-transparent to-transparent z-0" />

      {/* Header */}
      <header
        className="relative z-10 bg-cover bg-center text-center flex flex-col justify-center items-center px-4 pt-24 pb-16"
        style={{
          backgroundImage:
            "linear-gradient(to top, #1f2c3a 0%, #2f3c4742 100%), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-xl">
          <span className="uppercase tracking-wide text-sm block mb-2">
            Leadership Team
          </span>
          <h1 className="text-2xl md:text-3xl font-bold">
            Meet the visionaries driving innovation at HawkSims
          </h1>
        </div>
      </header>

      {/* Cards */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-10 flex flex-wrap justify-center gap-6">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative p-6 w-[90%] max-w-[320px] text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mx-auto w-28 h-28"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full object-cover object-top w-28 h-28 mx-auto"
              />
            </motion.div>
            <div className="mt-3 space-y-1">
              <p className="text-sm text-[#6ee7b7] font-medium">
                {member.role}
              </p>
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-300">{member.title}</p>
              <p className="text-xs text-gray-400 mt-2">{member.desc}</p>
            </div>
            <div className="mt-4 flex justify-center gap-3">
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0A66C2] transition"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1DA1F2] transition"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href={member.social.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#22d3ee] transition"
              >
                <FaGlobe className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DscCards({
  imgUrl,
  heading,
  list,
  bgColor = "bg-gradient-to-l from-[rgba(238,239,250,0.7)] to-[rgba(153,164,240,0.5)]",
}) {
  return (
    <motion.div
      className={`rounded-xl mt-5 ${bgColor} p-4  shadow-lg flex flex-col md:flex-row md:items-center lg:flex-row lg:items-center items-center lg:p-6`}
      whileHover={{ scale: 1.05, translateY: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left side: Icon and Heading */}
      <div className="flex  md:flex-col items-center  w-full md:items-start md:w-1/3 lg:mb-0 lg:flex-row lg:items-center lg:w-2/5">
        {/* Icon */}
        <div className="flex-shrink-0 w-16 h-16">
          {imgUrl && (
            <Image
              src={imgUrl}
              alt={heading}
              width={64}
              height={64}
              className="object-contain"
            />
          )}
        </div>

        {/* Heading */}
        <h3 className="text-sm font-inter font-semibold text-center text-gray-800  ml-2 md:text-left lg:text-base lg:text-left">
          {heading}
        </h3>
      </div>

      {/* Right side: List */}
      <div className="w-full mt-0 md:mt-0 md:w-2/3 lg:w-3/5 lg:mt-0 lg:pl-6">
        {" "}
        {/* Added padding left for spacing */}
        <ol className="list-none pl-5 lg:pl-0 space-y-2">
          {list?.map((el, idx) => (
            <li
              key={idx}
              className="text-[#52545B] font-inter font-normal text-sm md:font-[12px] lg:font-[16px]  lg:text-base"
            >
              {el}
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
}

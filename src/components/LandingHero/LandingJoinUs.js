"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import MapPinpoint from "@/components/Map";
import useScreenSize from "@/hooks/useScreenSize";
import { mapConfig } from "@/components/constants";

const CONTACT_CONTENT = {
  headline: ["Get In Touch"],
  description:
    "Ready to accelerate your research? Let's discuss how we can help",
  socialLinks: [
    {
      icon: <FaYoutube className="h-6 w-6 md:h-8 md:w-8 lg:h-11 lg:w-11" />,
      href: "#",
    },
    {
      icon: <FaLinkedin className="h-6 w-6 md:h-8 md:w-8 lg:h-11 lg:w-11" />,
      href: "#",
    },
    {
      icon: (
        <FaSquareXTwitter className="h-6 w-6 md:h-8 md:w-8 lg:h-11 lg:w-11" />
      ),
      href: "#",
    },
    {
      icon: (
        <FaSquareInstagram className="h-6 w-6 md:h-8 md:w-8 lg:h-11 lg:w-11" />
      ),
      href: "#",
    },
  ],
  contactDetails: {
    email: "contact@hawksims.com",
    phone: "+1 (555) 123-4567",
    address: "123 Research Park Dr\nInnovation City, IC 12345",
    hours: "Mon–Fri: 9AM–6PM EST",
  },
};

const ContactUs = () => {
  const screenSize = useScreenSize();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, x: -20, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.7, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div
        style={{
          backgroundImage: "url('/assets/image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          variants={imageVariants}
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="container max-w-[1440px] md:mx-auto flex flex-col justify-around lg:flex-row md:flex-col gap-y-8 md:gap-x-16 py-16 px-4 md:px-16 lg:px-32"
        >
          {/* Left: Text & Social */}
          <div className="flex flex-col">
            <h1 className="text-footerBg text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
              {CONTACT_CONTENT.headline[0]}
            </h1>
            <p className="w-full md:w-[385px] text-[#52545B] text-xs md:text-sm my-4 md:my-6 font-semibold">
              {CONTACT_CONTENT.description}
            </p>
            <div className="flex space-x-4 mb-4 text-footerBg">
              {CONTACT_CONTENT.socialLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:max-w-[600px]">
            <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Contact Information Section */}
      {/* Contact Information Section */}
      <div className="bg-[#0F172A] py-12 px-6 md:px-16 lg:px-32 text-white">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-wide">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            {/* Email */}
            <div className="flex flex-col gap-1 border-l-4 border-blue-500 pl-4">
              <p className="text-gray-400 text-xs">📧 EMAIL</p>
              <p className="text-white font-medium">
                {CONTACT_CONTENT.contactDetails.email}
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1 border-l-4 border-blue-500 pl-4">
              <p className="text-gray-400 text-xs">📱 PHONE</p>
              <p className="text-white font-medium">
                {CONTACT_CONTENT.contactDetails.phone}
              </p>
            </div>

            {/* Office Address */}
            <div className="flex flex-col gap-1 border-l-4 border-blue-500 pl-4">
              <p className="text-gray-400 text-xs">📍 OFFICE</p>
              <p className="text-white font-medium whitespace-pre-line">
                {CONTACT_CONTENT.contactDetails.address}
              </p>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col gap-1 border-l-4 border-blue-500 pl-4">
              <p className="text-gray-400 text-xs">🕐 HOURS</p>
              <p className="text-white font-medium">
                {CONTACT_CONTENT.contactDetails.hours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <MapPinpoint
        backgroundImage={mapConfig[screenSize].backgroundImage}
        mapSrc={mapConfig[screenSize].mapSrc}
        hoverEffect={mapConfig[screenSize].hoverEffect}
        pinpoints={mapConfig[screenSize].pinpoints}
      /> */}
    </div>
  );
};

export default ContactUs;

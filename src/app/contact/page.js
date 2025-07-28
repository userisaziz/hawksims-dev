"use client";

import React, { useRef } from "react";
import { mapConfig } from "@/components/constants";
import { motion, useInView } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import MapPinpoint from "@/components/Map";
import useScreenSize from "@/hooks/useScreenSize";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

// Configurable content
const CONTACT_CONTENT = {
  headline: ["Become the", "Next Big Story"],
  description:
    "Get all your questions answered by our business experts anytime, anywhere!",
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
    address: "123 Research Park Dr, Innovation City, IC 12345",
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
      transition: {
        duration: 1.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col pt-[90px] md:pt-[90px]">
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
          <div className="flex flex-col">
            {/* Headline for Desktop */}
            <h1 className="hidden text-footerBg lg:block text-2xl md:text-3xl lg:text-6xl font-semibold">
              {CONTACT_CONTENT.headline[0]}
            </h1>
            <h1 className="hidden text-footerBg lg:block text-2xl md:text-3xl lg:text-6xl font-semibold">
              <span className="bg-custom-gradient text-transparent bg-clip-text">
                {CONTACT_CONTENT.headline[1]}
              </span>
            </h1>

            {/* Headline for Mobile */}
            <p className="lg:hidden text-footerBg text-2xl md:text-3xl lg:text-6xl font-semibold">
              {CONTACT_CONTENT.headline[0]}
            </p>
            <p className="lg:hidden text-2xl md:text-3xl lg:text-6xl font-semibold">
              <span className="bg-custom-gradient text-transparent bg-clip-text">
                {CONTACT_CONTENT.headline[1]}
              </span>
            </p>

            <p className="w-full md:w-[385px] text-[#52545B] text-xs md:text-sm my-6 md:my-8 font-semibold">
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

          <div className="w-full lg:max-w-[600px]">
            <ContactForm />
          </div>
        </motion.div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-[#f8f8f8] py-8 px-6 md:px-16 lg:px-32 text-[#333]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Get In Touch
          </h2>
          <p className="text-sm md:text-base mb-6 max-w-xl">
            Ready to accelerate your research? Let's discuss how we can help.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm font-medium">
            <div>
              <p className="text-gray-500 mb-1">📧 Email</p>
              <p>{CONTACT_CONTENT.contactDetails.email}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">📱 Phone</p>
              <p>{CONTACT_CONTENT.contactDetails.phone}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">📍 Office</p>
              <p>{CONTACT_CONTENT.contactDetails.address}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">🕐 Hours</p>
              <p>{CONTACT_CONTENT.contactDetails.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Component */}
      <MapPinpoint
        backgroundImage={mapConfig[screenSize].backgroundImage}
        mapSrc={mapConfig[screenSize].mapSrc}
        hoverEffect={mapConfig[screenSize].hoverEffect}
        pinpoints={mapConfig[screenSize].pinpoints}
      />
    </div>
  );
};

export default ContactUs;

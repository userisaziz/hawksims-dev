"use client";

import Link from "next/link";
import { accordionData } from "./FooterData";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import { useEffect, useState } from "react";
import CollapseIcon from "../Icons/CollapseIcon";
import ExpandIcon from "../Icons/ExpandIcon.js";
import { renderList } from "../utils";
import { useRouter } from "next/navigation";
import { MobileLogo } from "../Icons/mobileLogo";
import { TabLogo } from "../Icons/tabLogo";
import { HeaderLogo } from "../Icons/headerLogo";

const Footer = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);
  const [shouldAddS, setShouldAddS] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      const storedValue = localStorage.getItem("isSAdded");
      if (storedValue !== null) {
        setShouldAddS(JSON.parse(storedValue));
      }
    }
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const logos = [
    { component: MobileLogo, className: "block md:hidden" },
    { component: TabLogo, className: "hidden md:block lg:hidden" },
    { component: HeaderLogo, className: "hidden lg:block" },
  ];

  return (
    <footer id="footer" className="bg-footerBg">
      <div className="bg-[#0A0B13] text-white pt-8 md:pt-12 pb-8 px-4 md:px-12 lg:px-20">
        <div className="block md:hidden space-y-6">
          {accordionData?.map((section, index) => (
            <div key={index} className="border-gray-300">
              <button className="w-full text-left py-0 md:py-4 flex justify-between items-center">
                <h3
                  className="text-sm font-semibold"
                  onClick={() => {
                    router.push(section.path);
                    toggleAccordion();
                  }}
                >
                  {section.title}
                </h3>
                <span onClick={() => toggleAccordion(index)}>
                  {openIndex === index ? <CollapseIcon /> : <ExpandIcon />}
                </span>
              </button>
              {openIndex === index && (
                <div className="py-4">
                  {renderList(
                    { content: section.content, fromFooter: true },
                    shouldAddS,
                    setShouldAddS
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="tablet:container md:container  mobile:mx-0 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 lg:gap-10 md:gap-6">
          {accordionData?.map((section, index) => (
            <div key={index} className="hidden md:block">
              <p className="text-base font-semibold mb-6">{section.title}</p>
              {renderList(
                { content: section.content },
                shouldAddS,
                setShouldAddS
              )}
            </div>
          ))}

          {/* Column 5: Get in Touch */}
          {/* <div className="mt-8 md:mt-0 lg:mt-0">
            <h3 className="text-sm md:text-base font-semibold mb-3 md:mb-6 sm:mt-6 md:mt-0">
              Get In Touch
            </h3>
            <ul>
              <li className="mb-3 md:mb-4">
                <Link
                  href="/contact"
                  className="text-footerItem hover:underline text-xs md:text-sm font-normal"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2 text-footerItem text-xs md:text-sm font-normal">
                <p>Mail Us:</p>
                <Link
                  href="mailto:contact@solutionec.com"
                  className="hover:underline font-bold text-xs md:text-sm"
                >
                  hello@solutionec.com
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="bg-footerBg text-white pt-6 pb-8 md:py-8 px-4 md:px-12 lg:px-20">
        <div className="md:container tablet:container mx-auto mobile:mx-0 flex flex-col md:grid lg:flex md:flex-row md:justify-between md:grid-cols-3 gap-0 md:gap-0 lg:gap-6">
          {/* Column 1: Logo and Text */}
          <div className="flex flex-col py-3 md:py-0 md:mb-0">
            <div className="flex items-center text-center">
              {logos?.map((logo, index) => (
                <span
                  key={index}
                  className={`${logo?.className} cursor-pointer`}
                >
                  <logo.component />
                </span>
              ))}
            </div>
          </div>
          {/* Column 2: Social Media Icons */}
          <div className="inline-flex space-x-4 lg:items-center py-3 md:py-0 md:w-fit">
            <a href="" className="text-white-400" target="_blank">
              <FaLinkedin size={23} />
            </a>
            <a
              href="https://www.instagram.com/solutionec_stories/profilecard"
              className="text-white-400"
              target="_blank"
            >
              <FaInstagram size={23} />
            </a>
            <a
              href="http://www.youtube.com/@Solutionec"
              className="text-white-400"
              target="_blank"
            >
              <FaYoutube size={23} />
            </a>
            <a href="#" className="text-white-400" target="_blank">
              <FaXTwitter size={23} />
            </a>
          </div>
          {/* Column 3: Privacy Policy and Terms of Service */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
{
  /* <div className="lg:flex lg:gap-[80px]">
<div className="flex md:mb-0 items-center text-sm py-3 md:py-0 md:items-center lg:items-center">
  <Link
    href="/privacy"
    className="text-tertitaryGray hover:underline"
  >
    Privacy Policy
  </Link>
  <span className="w-[4px] h-[4px] bg-[#5F80F6] rounded-full mx-2 md:mt-2 lg:mt-0"></span>
  <Link
    href="/terms"
    className="text-tertitaryGray hover:underline"
  >
    Terms of Service
  </Link>
</div>
{/* Column 4: Copyright Notice */
}
{
  /* <div className="grid lg:place-items-center md:col-span-3">
  <p className="text-tertitaryGray text-sm">
    Hawksims &copy; {new Date().getFullYear()}. All Rights
    Reserved.
  </p>
</div> */
}
// </div> */}

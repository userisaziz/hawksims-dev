"use client";
import { setSuppressHeader, setFooterLinkClickedOnSameRoute } from "@/provider/redux/slice/headerSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

export const renderList = ({
  content,
  fromFooter = false,
  isHeaderSuppress = false,
}, shouldAddS, setShouldAddS) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (path, customScroll) => {
    if (customScroll) {
      const isSectionLink = path.includes("#");

      if (isSectionLink) {
        dispatch(setSuppressHeader(true));
        setTimeout(() => {
          dispatch(setSuppressHeader(false));
        }, 2000);
      }
      const redirectionPath = path.split("/")[1];
      if (pathname === `/${redirectionPath}`) {
        dispatch(setFooterLinkClickedOnSameRoute(true));
      } else {
        dispatch(setFooterLinkClickedOnSameRoute(false));
      }
      let modifiedPath = path;

      if (shouldAddS && modifiedPath.endsWith("s")) {
        modifiedPath = modifiedPath.slice(0, -1); // Remove "s"
      } else if (!shouldAddS && !modifiedPath.endsWith("s")) {
        modifiedPath = modifiedPath + "s"; // Add "s"
      }
      localStorage.setItem("isSAdded", JSON.stringify(!shouldAddS));
      setShouldAddS(!shouldAddS);
      router.push(modifiedPath);
    } else {
      const isSectionLink = path.includes("#");
      if (isSectionLink) {
        dispatch(setSuppressHeader(true));
        setTimeout(() => {
          dispatch(setSuppressHeader(false));
        }, 2000);
      }
    }
  };

  return (
    <ul className={fromFooter && "grid grid-cols-2"}>
      {content?.map((item, index) => (
        <li key={index} className={`mb-4 text-footerItem ${item.order}`}>
          <Link
            href={item.path}
            className="hover:underline text-xs md:text-sm"
            onClick={(e) => {
              item?.customScroll && e.preventDefault();
              handleLinkClick(item.path, item?.customScroll);
            }}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const getMonthNameByMonthNumber = (monthNumber) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Ensure the month number is valid (1 to 12)
  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error(
      "Invalid month number. Please provide a number between 1 and 12."
    );
  }

  return months[monthNumber - 1];
};

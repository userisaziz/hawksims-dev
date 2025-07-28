"use client";
import { useState } from "react";
import CollapseIcon from "../Icons/CollapseIcon";
import ExpandIcon from "../Icons/ExpandIcon.js";
const Accordion = ({
  heading,
  children,
  mainClass,
  containerClass,
  titleClass,
  childClass,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={containerClass}>
      <div
        className={`flex justify-between rounded-t-lg items-center cursor-pointer ${mainClass}`}
        onClick={onToggle}
      >
        <h4 className={`${titleClass}`}>{heading}</h4>
        <button className="text-xl">
          {isOpen ? (
            <CollapseIcon
              outline="#F0F0F0"
              stroke="#909193"
              strokeWidth="1.8"
            />
          ) : (
            <ExpandIcon outline="#F0F0F0" stroke="#909193" strokeWidth="1.8" />
          )}
        </button>
      </div>
      {isOpen && <div className={`${childClass}`}>{children}</div>}
    </div>
  );
};
export default Accordion;

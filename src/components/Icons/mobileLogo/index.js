import React from "react";

export const MobileLogo = ({ fill }) => {
  return (
    <a href="/" className="logo">
      <div className="logo-mark">
        <div className="flow-lines">
          <div className="flow-line"></div>
          <div className="flow-line"></div>
          <div className="flow-line"></div>
          <div className="flow-line"></div>
        </div>
        <div className="curve-top"></div>
        <div className="curve-bottom"></div>
        <div className="center-element"></div>
      </div>
      <div className="logo-text ">
        <span className=" text-white">Hawk</span>
        <span className="text-blue-600">Sims</span>
      </div>
    </a>
  );
};

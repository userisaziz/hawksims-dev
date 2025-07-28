import React from "react";

const CollapseIcon = ({outline, stroke, strokeWidth}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          opacity="0.5"
          d="M16.0007 2.66634C8.63686 2.66634 2.66732 8.63588 2.66732 15.9997C2.66732 23.3635 8.63686 29.333 16.0007 29.333C23.3644 29.333 29.334 23.3635 29.334 15.9997C29.334 8.63588 23.3644 2.66634 16.0007 2.66634Z"
          stroke={outline || "#52545B"}
          stroke-width={strokeWidth || "0.8"}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.707 17.6797L16.0004 12.9864L11.2937 17.6797"
          stroke={stroke || "#F0F0F0"}
          stroke-width={strokeWidth || "0.8"}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default CollapseIcon;

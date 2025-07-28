const ExpandIcon = ({ outline, stroke, strokeWidth }) => {
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
          d="M15.9993 29.3337C23.3631 29.3337 29.3327 23.3641 29.3327 16.0003C29.3327 8.63653 23.3631 2.66699 15.9993 2.66699C8.63555 2.66699 2.66602 8.63653 2.66602 16.0003C2.66602 23.3641 8.63555 29.3337 15.9993 29.3337Z"
          stroke={outline || "#52545B"}
          stroke-width={strokeWidth || "0.8"}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.293 14.3203L15.9996 19.0136L20.7063 14.3203"
          stroke={stroke || "#F0F0F0"}
          stroke-width={strokeWidth || "0.8"}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default ExpandIcon;

import React from "react";
import Spinner from "../Icons/Spinner";

const BaseButton = (props) => {
  const { text, className, onClick, icon: Icon, isLoading,iconClassContainer } = props;
  return (
    <button
      onClick={onClick}
      className={`${className} relative group`}
    >
      <span className={`relative z-10 flex justify-center items-center ${iconClassContainer}`}>
        {isLoading ? <Spinner /> : text}
        {Icon}
      </span>
    </button>
  );
};

export default BaseButton;

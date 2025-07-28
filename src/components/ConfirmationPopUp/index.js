import React from "react";
import { FaTimes } from "react-icons/fa";
import TickIcon from "../Icons/TickIcon";

const ConfirmationPopUp = ({ heading, text, onClose }) => {
  return (
    <div
      className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="bg-white relative w-[352px] flex flex-col items-center p-10 pt-12 pb-12 px-6 rounded-2xl">
        <span
          className="absolute top-[12px] right-[12px] cursor-pointer"
          onClick={onClose}
          style={{ color: "#AEAEAE" }}
        >
          <FaTimes />
        </span>
        <TickIcon />
        {heading && (
          <p className="pt-6 text-footerBg text-lg font-semibold text-center">{heading}</p>
        )}
        {text && (
          <p className="text-center text-footerBg font-normal text-sm">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default ConfirmationPopUp;

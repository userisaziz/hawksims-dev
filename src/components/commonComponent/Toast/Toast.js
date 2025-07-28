import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Toast = ({ setShow, message, type = "info" }) => {
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "info":
      default:
        return "bg-yellow-500";
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div
      className={`fixed p-2 bottom-10 right-10 px-4 py-3 rounded-lg shadow-lg text-white flex items-center  ${getBackgroundColor()}`}
    >
      <span className="text-xl">{message}</span>
      <button onClick={handleClose} className="ml-4">
        <FaTimes />
      </button>
    </div>
  );
};

export default Toast;

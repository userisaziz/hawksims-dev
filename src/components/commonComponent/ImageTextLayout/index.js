import React from "react";
import Image from "next/image";

const ImageTextLayout = ({ data }) => {
  const paddingVal = Array.isArray(data?.description);
  return (
    <>
      <div
        className={`lg:flex flex-col w-full h-full justify-between  lg:flex-row ${
          paddingVal ? "pl-4" : ""
        }`}
      >
        <ul
          className={`${
            data?.imgUrl ? "lg:w-[52%]" : "lg:w-full"
          }  w-full list-disc lg:text-base text-sm  font-normal text-grayText `}
        >
          {Array.isArray(data?.description) ? (
            data?.description?.map((item, i) => (
              <li className="text-grayText">{item?.text}</li>
            ))
          ) : (
            <div>{data?.description}</div>
          )}
        </ul>
      </div>
    </>
  );
};

export default ImageTextLayout;

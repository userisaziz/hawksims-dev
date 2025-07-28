import React from "react";
import { useFormContext } from "react-hook-form";

const BaseInputField = ({
  label,
  name,
  type = "text",
  errors,
  placeholder = "",
  additionalClasses = "",
}) => {
  const { register } = useFormContext();
  return (
    <div className="mb-4 flex flex-col w-full">
      <label className={`font-normal text-sm text-[#52545B]`}>{label}</label>

      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`my-2 block w-full text-footerBg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-[#DFDFE0] p-4 rounded-md h-12  ${additionalClasses} ${
          name === "positionInformation.desiredSalary" ? "rounded-r-none" : ""
        }`}
      />

      {errors && (
        <span className="text-red-500 text-sm">{errors?.message}</span>
      )}
    </div>
  );
};

export default BaseInputField;

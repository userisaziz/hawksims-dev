import React from "react";
import { useFormContext } from "react-hook-form";

const Dropdown = ({
  label,
  name,
  options,
  rules,
  errors,
  additionalClasses = "",
}) => {
  const { register } = useFormContext();
  return (
    <div className={`flex flex-col ${additionalClasses && "w-1/2"}`}>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        id={name}
        {...register(name, rules)}
        className={`block w-full px-3 border text-footerBg rounded-md shadow-sm  sm:text-sm h-12 ${
          errors ? "border-red-500" : "border-gray-300"
        } ${additionalClasses ? additionalClasses : "my-2"}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className={`text-footerBg`}>
            {option.label}
          </option>
        ))}
      </select>

      {errors && (
        <span className="text-sm text-red-500">{errors?.message}</span>
      )}
    </div>
  );
};

export default Dropdown;

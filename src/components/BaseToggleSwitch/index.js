import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const ToggleSwitch = ({
  label,
  name,
  defaultValue = false,
  isShowLabelFirst=false,
  isDisabled=false,
  onChangeCallback,
}) => {
  const { control } = useFormContext();
  return (
    <>
    {isShowLabelFirst && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <div
            onClick={() => {
              const newValue = !value;
              !isDisabled && onChange(!value);
              if (onChangeCallback) {
                onChangeCallback(newValue);
              }
            }}
            className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer 
              ${value ? "bg-blue-600" : "bg-gray-300"}`}
          >
            <span
              className={`inline-block w-4 h-4 transform rounded-full bg-white transition-transform
              ${value ? "translate-x-6" : "translate-x-1"}`}
            />
          </div>
        )}
      />

      {!isShowLabelFirst && <label className="text-sm font-medium text-gray-700">{label}</label>}
    </>
  );
};

export default ToggleSwitch;

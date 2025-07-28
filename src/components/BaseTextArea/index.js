import { useState } from "react";
import { useFormContext } from "react-hook-form";

const BaseTextArea = ({
  label,
  name,
  placeholder = "",
  errors,
  charLimit = 250,
  hintMessage = ""
}) => {
  const { register, setValue, trigger } = useFormContext();
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setCharCount(value.length);
    setValue(name, value);

    await trigger(name);
  };

  return (
    <div className="mb-4">
      <label className="font-medium text-sm text-gray-600">{label}</label>

      <textarea
        id={name}
        {...register(name)}
        placeholder={placeholder}
        rows="5"
        maxLength={charLimit}
        onChange={handleInputChange}
        className={`mt-1 block w-full text-footerBg p-4 border ${errors ? "border-red-500" : "border-gray-300"
          } shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none rounded-lg`}
      />

      <div
        className={`flex ${errors ? "justify-between" : "justify-between"
          } placeholder:text-sm mt-2`}
      >
        <p className={`${errors ? "font-medium text-sm text-red-500" : "font-medium text-sm text-gray-600"}`}>{hintMessage}</p>
        <p>{`${charCount}/${charLimit}`}</p>
      </div>
    </div>
  );
};

export default BaseTextArea;
import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { Controller, useFormContext } from "react-hook-form";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import styles from "./PhoneNumber.module.css";

const PhoneNumberInput = ({ name, label, control, isError }) => {
  console.log('isError: ', isError);
  const { setValue, watch } = useFormContext();
  const phoneNumber = watch(name);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(isError)
  }, [isError]);
  const handlePhoneChange = (value, data) => {
    setError(false)
    if (!data && !value) {
      setIsValid(true);
      return
    }

    setValue(`${name}_countryCode`, data?.countryCode);
    setValue(`${name}_dialCode`, data?.dialCode);

    const fullNumber = `+${value.replace(/\s/g, "")}`;
    const valid = isValidPhoneNumber(fullNumber, data?.countryCode);
    setValue(name, fullNumber);
    try {
      const phoneNumberInstance = parsePhoneNumber(fullNumber);
      const isLengthValid = phoneNumberInstance.isValid();

      setIsValid(valid && isLengthValid);
    } catch (error) {
      setIsValid(false);
    }
  };

  useEffect(() => {
    handlePhoneChange()
  }, [name])
  return (
    <div className="mb-4">
      {label && (
        <label className="font-normal text-sm text-[#52545B]">{label}</label>
      )}

      <div className={`${styles.phoneInput} text-footerBg`}>
        <Controller
          name={name}
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value),
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              country={"in"}
              value={value || ""}
              onChange={handlePhoneChange}
              countryCodeEditable={false}
              inputClass={`${styles.abc} ${!isValid ? styles.invalid : ""}`}
              inputProps={{
                name,
                required: true,
              }}
            />
          )}
        />
      </div>

      {(!isValid || error) && (
        <span className="text-red-500 text-sm">Invalid phone number</span>
      )}
    </div>
  );
};

export default PhoneNumberInput;
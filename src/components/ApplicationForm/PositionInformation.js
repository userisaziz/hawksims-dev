import React from "react";
import { useFormContext } from "react-hook-form";
import BaseInputField from "../BaseInputField";
import Dropdown from "../SelectDropDown";
import Calendar from "../DatePicker";

const PositionInformation = () => {
  const {
    control,
    getValues,
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const currencies = [
    { label: "$USD", value: "$USD" },
    { label: "EUR", value: "EUR" },
    { label: "INR", value: "INR" },
  ];

  const handleSalaryDetailsChange = (field, value) => {
    const currentSalaryDetails = getValues("salaryDetails") || {};
    setValue("salaryDetails", { ...currentSalaryDetails, [field]: value });
  };

  return (
    <form className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-row items-center">
        {/* Desired Salary */}
        <BaseInputField
          label="Desired Salary"
          name="positionInformation.desiredSalary"
          type="number"
          errors={errors?.positionInformation?.desiredSalary}
          onChange={(e) =>
            handleSalaryDetailsChange("desiredSalary", Number(e.target.value))
          }
          placeholder="Enter expected CTC in numbers"
        // {...register("positionInformation.desiredSalary", {
        //   required: "Desired Salary is required",
        // })}
        />

        {/* Currency Dropdown */}
        <Dropdown
          name="positionInformation.currency"
          options={currencies}
          errors={errors?.positionInformation?.currency}
          onChange={(option) =>
            handleSalaryDetailsChange("currency", option.value)
          }
          placeholder="Currency"
          additionalClasses={`mt-3 mb-2 rounded-l-none ${errors?.positionInformation?.desiredSalary ? "mb-6 " : ""}`}
          {...register("positionInformation.currency", {
            required: "Currency is required",
          })}
        />
      </div>

      {/* Can Join From */}
      <Calendar
        name="positionInformation.joinFrom"
        label="Can Join From"
        required="Date is required"
        control={control}
        errors={errors?.positionInformation?.joinFrom?.message}
        enableFromToday={true}
      />
    </form>
  );
};

export default PositionInformation;

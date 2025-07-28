import React from "react";
import BaseInputField from "../BaseInputField";
import BaseTextArea from "../BaseTextArea";
import Calendar from "../DatePicker";
import ToggleSwitch from "../BaseToggleSwitch";
import { useFormContext, useWatch } from "react-hook-form";

const WorkExperience = () => {
  const {
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const currentlyEmployed = useWatch({
    name: "workExperience.currentlyEmployed",
  });

  const empStartDate = watch("workExperience.empStartDate");

  return (
    <form className="space-y-4">
      <div className="md:grid md:grid-cols-2 md:gap-4">
        {/* Most recent employer */}
        <BaseInputField
          label="Most recent employer"
          name="workExperience.recentEmployer"
          rules={{ required: "Most recent employer is required" }}
          errors={errors?.workExperience?.recentEmployer}
          placeholder="Enter last organisation’s name"
        />

        {/* Job Title */}
        <BaseInputField
          label="Job Title"
          name="workExperience.jobTitle"
          rules={{ required: "Job Title is required" }}
          errors={errors?.workExperience?.jobTitle}
          placeholder="Enter job title or role"
        />

        {/* Employment start date */}
        <Calendar
          name="workExperience.empStartDate"
          label="Employment Start Date"
          required="Date is required"
          errors={errors?.workExperience?.empStartDate?.message}
          maxDate={new Date()}
        />

        {/* Employment End date */}
        <Calendar
          name="workExperience.empEndDate"
          label="Employment End Date"
          required="Date is required"
          errors={errors?.workExperience?.empEndDate?.message}
          disabled={!empStartDate || currentlyEmployed}
          compareTo="workExperience.empStartDate"
        />

        {/* Toggle Switch */}
        <div className="flex items-center col-span-2 justify-end space-x-3 mb-4">
          <ToggleSwitch
            label="Currently employed in this organisation"
            name="workExperience.currentlyEmployed"
            defaultValue={false}
            errors={errors?.workExperience?.currentlyEmployed}
            onChangeCallback={(value) => {
              setValue("workExperience.currentlyEmployed", value);
              if (value) {
                setValue("workExperience.empEndDate", null, {
                  shouldValidate: true,
                });
              }
            }}
          />
        </div>

        {/* Responsibilities*/}
        <div className="col-span-2">
          <BaseTextArea
            label="Responsibilities"
            name="workExperience.responsibilities"
            placeholder="Write about your roles and responsibilities in your last organization"
            rules={{ required: "This field is required" }}
            errors={errors?.workExperience?.responsibilities}
            charLimit={250}
            hintMessage="Minimum 10 characters"
          />
        </div>

        {/* Career Start date */}
        <Calendar
          name="workExperience.joinFrom"
          label="Last Day of Work"
          required="Date is required"
          errors={errors?.workExperience?.joinFrom?.message}
          enableFromToday={true}

        />
      </div>
    </form>
  );
};

export default WorkExperience;

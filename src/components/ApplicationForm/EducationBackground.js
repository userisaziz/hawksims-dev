import Dropdown from "../SelectDropDown";
import BaseInputField from "../BaseInputField";
import { useFormContext } from "react-hook-form";

const EducationBackground = () => {
  const {
    formState: { errors },
  } = useFormContext();

  const HIGHER_EDUCATION_OPTIONS = [
    { label: "Select education level", value: "" },
    { label: "Post Graduation", value: "post_graduation" },
    { label: "Graduation", value: "graduation" },
    { label: "Senior Secondary", value: "senior_secondary" },
    { label: "Secondary", value: "secondary" },
  ];

  const GRADUATION_YEAR_OPTIONS = (startYear) => {
    const currentYear = new Date().getFullYear();
    const options = [{ label: "Select year", value: "" }];

    for (let year = currentYear; year >= startYear; year--) {
      options.push({ label: year, value: year });
    }

    return options;
  };

  return (
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Highest Education Dropdown */}
        <Dropdown
          label="Highest level of education"
          name="educationBackground.highestEducation"
          options={HIGHER_EDUCATION_OPTIONS}
          errors={errors?.educationBackground?.highestEducation}
        />

        {/* School/University name */}
        <BaseInputField
          label="School/University name"
          name="educationBackground.schoolUniversityName"
          errors={errors?.educationBackground?.schoolUniversityName}
          placeholder="Enter school/university name"
        />

        {/* Year of graduation dropdown */}
        <Dropdown
          label="Year of graduation"
          name="educationBackground.graduationYear"
          options={GRADUATION_YEAR_OPTIONS(1990)}
          errors={errors?.educationBackground?.graduationYear}
        />
      </div>
    </form>
  );
};

export default EducationBackground;

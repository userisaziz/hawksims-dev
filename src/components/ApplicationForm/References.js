import BaseInputField from "../BaseInputField";
import PhoneNumberInput from "../PhoneNumber";
import { useFormContext } from "react-hook-form";
import Dropdown from "../SelectDropDown";

const References = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const RELATIONSHIP_OPTIONS = [
    { label: "Select relationship", value: "" }, // Placeholder option
    { label: "Professional", value: "professional" },
    { label: "Academic", value: "academic" },
    { label: "Personal", value: "personal" },
  ];
  return (
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Reference Name */}
        <BaseInputField
          label="Full Name"
          name="references.fullName"

          errors={errors?.references?.fullName}
          placeholder="Enter name of the employee who referred you"
        />

        {/* Reference Contact */}
        <PhoneNumberInput
          name="references.referenceNumber"
          label="Reference Contact"
          isError={errors?.references?.referenceNumber}
        />

        {/* Relationship with reference */}
        <Dropdown
          label="Relationship with reference"
          name="references.relation"
          options={RELATIONSHIP_OPTIONS}

          errors={errors?.references?.relation}
        />
      </div>
    </form>
  );
};

export default References;

import React from "react";
import { useFormContext } from "react-hook-form";
import BaseInputField from "../BaseInputField";

const Skills = () => {
   const {

      formState: { errors },
   } = useFormContext();

   return (
      <div>
         <BaseInputField
            label="Relevant Skills"
            name="skills.relevantSkills"
            placeholder="Enter your relevant skills"
            errors={errors.skills?.relevantSkills}
         />
      </div>
   );
};

export default Skills;

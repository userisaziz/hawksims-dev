import BaseTextArea from "../BaseTextArea";
import BaseButton from "../BaseButton";
import { useFormContext } from "react-hook-form";

const AdditionalInformation = ({
  setAuthorizedToWork,
  setFelonyConviction,
  authorizedToWork,
  felonyConviction,
  handleButtonClick, // Receive the function as a prop
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  console.log('errors: ', errors);

  return (
    <form className="md:grid md:grid-cols-2 md:gap-4">
      <div className="md:col-span-2">
        <BaseTextArea
          label="Why are you interested in this position?"
          name="additionalInformation.interest"
          placeholder="Start typing here..."
          errors={errors?.additionalInformation?.interest}
          charLimit={250}
          hintMessage="Minimum 10 characters"
        />
      </div>

      <div className="mb-6">
        <p className="font-medium text-sm text-gray-700">
          Are you authorized to work in this country?
        </p>
        <div className={`mt-2 flex gap-2.5`}>
          <BaseButton
            text="Yes"
            className={`text-base bg-[#F0F0F0] text-[#52545B] rounded-xl p-2.5 w-[200px] ${authorizedToWork === "yes" ? "outline-none ring-2 ring-offset-2" : ""
              }`}
            onClick={(e) => handleButtonClick("authorizedToWork", "yes", e)}
          />
          <BaseButton
            text="No"
            className={`text-base bg-[#F0F0F0] text-[#52545B] rounded-xl p-2.5 w-[200px] ${authorizedToWork === "no" ? "outline-none ring-2 ring-offset-2" : ""
              }`}
            onClick={(e) => handleButtonClick("authorizedToWork", "no", e)}
          />
        </div>
        {errors?.additionalInformation?.authorizedToWork && (
          <p className="text-red-500 text-sm mt-1">
            {errors.additionalInformation.authorizedToWork.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <p className="font-medium text-sm text-gray-700">
          Have you ever been convicted of a felony?
        </p>
        <div className={`mt-2 flex gap-2.5 `}>
          <BaseButton
            text="Yes"
            className={`text-base bg-[#F0F0F0] text-[#52545B] rounded-xl p-2.5 w-[200px] ${felonyConviction === "yes" ? "outline-none ring-2 ring-offset-2" : ""
              }`}
            onClick={(e) => handleButtonClick("felonyConviction", "yes", e)}
          />
          <BaseButton
            text="No"
            className={`text-base bg-[#F0F0F0] text-[#52545B] rounded-xl p-2.5 w-[200px] ${felonyConviction === "no" ? "outline-none ring-2 ring-offset-2" : ""
              }`}
            onClick={(e) => handleButtonClick("felonyConviction", "no", e)}
          />
        </div>
        {errors?.additionalInformation?.felonyConviction && (
          <p className="text-red-500 text-sm mt-1">
            {errors.additionalInformation.felonyConviction.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default AdditionalInformation;
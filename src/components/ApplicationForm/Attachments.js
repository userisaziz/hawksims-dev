import FileUpload from "../FileUpload";
import { useFormContext } from "react-hook-form";

const Attachments = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
      <div className="flex flex-col">
        <div>
          <p className="font-normal text-sm text-[#52545B] mb-2">
            Upload CV/Resume
          </p>
          <FileUpload control={control} name="attachments.CV" />
        </div>
        {errors?.attachments?.CV && (
          <p className="text-red-500 text-sm">
            {errors.attachments.CV.message}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <div>
          <p className="font-normal text-sm text-[#52545B] mb-2">
            Upload Cover Letter (optional)
          </p>
          <FileUpload control={control} name="attachments.coverLetter" />
        </div>
        {errors?.attachments?.coverLetter && (
          <p className="text-red-500 text-sm">
            {errors.attachments.coverLetter.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Attachments;

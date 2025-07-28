import { Controller } from "react-hook-form";
import { CiSignpostDuo1 } from "react-icons/ci";
import Image from "next/image";

const FileUpload = ({ control, name }) => {
  const MAX_FILE_SIZE_MB = 5;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, value, ref, name: fieldName } }) => (
        <div className="flex items-center border border-dashed border-gray-300 rounded-lg p-6 w-full">
          <Image
            src="/assets/document-upload.svg"
            alt="File upload"
            className="mr-4"
            width={50}
            height={50}
          />
          <div className="flex flex-col w-1/2">
            {value ? (
              <div className="flex justify-between items-center">
                <div className="flex flex-col overflow-hidden">
                  <span className="text-blue-600 whitespace-nowrap overflow-ellipsis overflow-hidden">
                    {value.name}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {(value.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                </div>
                <input
                  type="file"
                  accept=".pdf, .doc, .docx"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
                        alert("FIle size must not exceed 5 MB");
                      } else {
                        onChange(file);
                      }
                    }
                  }}
                  className="hidden"
                  id={fieldName}
                  ref={ref}
                />
              </div>
            ) : (
              <>
                <input
                  type="file"
                  accept=".pdf, .doc, .docx"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
                        alert("File size must not exceed 5 MB");
                        e.target.value = null;
                        onChange(null);
                        return;
                      } else {
                        onChange(file);
                      }
                    }
                  }}
                  className="hidden"
                  id={fieldName}
                  ref={ref}
                />
                <label
                  htmlFor={fieldName}
                  className="cursor-pointer text-blue-600 mb-1"
                >
                  Drop your file here or browse
                </label>
                <p className="text-gray-500 text-sm">Maximum file size: 5MB</p>
              </>
            )}
          </div>
          {value && (
            <label htmlFor={fieldName} className="ml-10 cursor-pointer">
              <CiSignpostDuo1 className="w-6 h-6" />
            </label>
          )}
        </div>
      )}
    />
  );
};

export default FileUpload;

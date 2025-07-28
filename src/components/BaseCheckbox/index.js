import { Controller, useFormContext } from "react-hook-form";

const Checkbox = ({ label, name, defaultValue = false }) => {
  const { control } = useFormContext();

  return (
    <div className="flex space-x-4">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
            className="h-4 w-4 text-black border-gray-300 rounded focus:ring-blue-500"
          />
        )}
      />

      <label className="text-sm font-medium text-gray-700">{label}</label>
    </div>
  );
};

export default Checkbox;

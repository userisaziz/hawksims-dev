import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const Calendar = ({
  label,
  name,
  required,
  errors,
  disabled = false,
  enableFromToday = false,
  compareTo = null,
  maxDate
}) => {
  const datePickerRef = useRef();
  const today = new Date();

  const { control, clearErrors, setValue, watch } = useFormContext();

  const compareDate = compareTo ? watch(compareTo) : null;

  const handleChange = (date, onChange) => {
    onChange(date);
    if (date) {

      setValue(name, date, { shouldValidate: true });
      clearErrors(name);
    }
  };

  return (
    <div className="datepicker-container">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="datepicker-input-wrapper">
        <Controller
          name={name}
          rules={{ required: required }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="relative flex items-center">
              <DatePicker
                selected={value}
                onChange={(date) => handleChange(date, onChange)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className="w-full h-12 p-2 my-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-[#DFDFE0] rounded-md"
                isClearable
                ref={datePickerRef}
                onFocus={() => datePickerRef.current.setOpen(true)}
                onClickOutside={() => datePickerRef.current.setOpen(false)}
                wrapperClassName="w-full"
                disabled={disabled}
                minDate={enableFromToday ? today : compareDate}
                maxDate={maxDate}
              />
              {!value && (
                <FaCalendarAlt
                  className="absolute right-3 text-xl cursor-pointer z-10"
                  onClick={() => datePickerRef.current.setOpen(true)}
                />
              )}
            </div>
          )}
        />
      </div>
      {errors && <span className="text-red-500 text-sm mt-1">{errors}</span>}
    </div>
  );
};

export default Calendar;

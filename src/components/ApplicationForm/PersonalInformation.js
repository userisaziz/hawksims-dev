import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import BaseInputField from "../BaseInputField";
import Dropdown from "../SelectDropDown";
import PhoneNumberInput from "@/components/PhoneNumber";

const PersonalInformation = ({ country, region, handleCountryChange, handleRegionChange }) => {
  const {
    formState: { errors },
    setValue,
  } = useFormContext();
  console.log('errors: ', errors);




  return (
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Full Name */}
        <BaseInputField
          label="Full Name"
          name="personalInformation.fullName"
          errors={errors?.personalInformation?.fullName}
          placeholder="Enter your full name"
        />

        {/* Email ID */}
        <BaseInputField
          label="Email ID"
          name="personalInformation.email"
          type="email"
          errors={errors?.personalInformation?.email}
          placeholder="Enter your email ID"
        />

        {/* Phone Number */}

        <PhoneNumberInput
          name="personalInformation.phoneNumber"
          label="Phone Number"
          isError={errors?.personalInformation?.phoneNumber}
          placeholder="Enter your phone number"
        />


        {/* Address */}
        <BaseInputField
          label="Address"
          name="personalInformation.address"
          errors={errors?.personalInformation?.address}
          placeholder="Enter your address"
        />


        {/* Country Dropdown */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Country</label>
          <CountryDropdown
            value={country}
            onChange={handleCountryChange}
            classes="block w-full px-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12 my-2"
          />
          {errors?.personalInformation?.country && !country && (
            <span className="text-sm text-red-500">
              {errors.personalInformation.country.message}
            </span>
          )}
        </div>

        {/* State/Province Dropdown */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">State/Province</label>
          <RegionDropdown
            country={country}
            value={region}
            onChange={handleRegionChange}
            classes="block w-full px-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12 my-2"
          />
          {errors?.personalInformation?.state && !region && (
            <span className="text-sm text-red-500">
              {errors.personalInformation.state.message}
            </span>
          )}
        </div>
        {/* City */}
        <BaseInputField
          label="City"
          name="personalInformation.city"
          errors={errors?.personalInformation?.city}
          placeholder="Enter your city"
        />

        {/* Pin/Postal Code */}
        <BaseInputField
          label="Pin/Postal Code"
          name="personalInformation.pincode"
          errors={errors?.personalInformation?.pincode}
          placeholder="Enter your pincode"
        />
      </div>
    </form>
  );
};

export default PersonalInformation;
"use client";

import React, { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BaseInputField from "../BaseInputField";
import PhoneNumberInput from "../PhoneNumber";
import Dropdown from "../SelectDropDown";
import BaseTextArea from "../BaseTextArea";
import { contactFormSchema } from "./ContactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import BaseButton from "../BaseButton";
import { usePostContactUsDataMutation } from "@/provider/redux/query/ContactUs";
import ConfirmationPopUp from "../ConfirmationPopUp";
import { useGetQueryTypesQuery } from "@/provider/redux/query/FormDataForContactDownload";

export default function ContactForm() {
  const { data, error } = useGetQueryTypesQuery();
  const [isModalOpen, setModalOpen] = useState(false);
  const [postContactData, { isLoading }] = usePostContactUsDataMutation();
  const [validQueryData, setValidQueryData] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([{ label: "Choose your query type", value: "" }]);

  const methods = useForm({
    resolver: zodResolver(contactFormSchema(validQueryData)),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (data && data?.data?.length > 0) {
      let dropdownFeilds = [];
      let validData = [];
      data.data.forEach((item) => {
        dropdownFeilds.push({ label: item?.attributes?.name, value: item?.attributes?.name });
        validData.push(item?.attributes?.name);
      });
      setValidQueryData([...validQueryData, ...validData]);
      setDropdownOptions([...dropdownOptions, ...dropdownFeilds]);
    }
  }, [data]);

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
  } = methods;
  console.log('errors: ', errors);

  const customReset = () => {
    reset({
      contactFullName: "",
      contactEmail: "",
      contactPhoneNumber: "+91",
      contactQueryType: "",
      contactMessage: "",
    });
  };

  const onSubmit = async (payload) => {
    const postData = {
      data: {
        name: payload.contactFullName,
        email: payload.contactEmail,
        phone: payload.contactPhoneNumber,
        query_type: payload.contactQueryType,
        message: payload.contactMessage,
      },
    };

    try {
      const { data, error } = await postContactData(postData);

      if (data) {
        customReset();
        setModalOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 shadow-form-shadow rounded-[16px]"
        >
          {/* Full Name */}
          <div className="mb-8">
            <BaseInputField
              label="Full Name"
              name="contactFullName"
              errors={errors?.contactFullName}
              placeholder="Enter your full name"
            />
          </div>

          {/* Email ID */}
          <div className="mb-8">
            <BaseInputField
              label="Email ID"
              name="contactEmail"
              type="email"
              errors={errors?.contactEmail}
              placeholder="Enter your email ID"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-8">
            <PhoneNumberInput
              control={control}
              name="contactPhoneNumber"
              label="Phone Number"
              isError={errors?.contactPhoneNumber}
            />
          </div>

          {/* Type of Query */}
          <div className="mb-8">
            <Dropdown
              label="Type of query"
              name="contactQueryType"
              options={dropdownOptions}
              errors={errors?.contactQueryType}
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <BaseTextArea
              label="Your Message"
              name="contactMessage"
              errors={errors?.contactMessage?.message}
              placeholder="Type your message here..."
              charLimit={250}
              hintMessage="Minimum 10 characters"
            />
          </div>

          {/* Submit Button */}
          <BaseButton
            text="Send Message"
            className={`w-full font-bold py-2 px-4 rounded-[1.25rem] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${isValid
              ? "bg-[linear-gradient(311deg,#5F80F6_20.02%,#3F49A7_112.23%)] text-white"
              : "bg-[#AEAEAE] text-white cursor-not-allowed"
              }`}
            disabled={!isValid}
            isLoading={isLoading}
          />
        </form>
      </FormProvider>

      {isModalOpen && (
        <ConfirmationPopUp
          heading="Thank you for contacting us!"
          text=" We have received your query, our team will get back to you soon."
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
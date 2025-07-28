"use client";

import { useForm, FormProvider, Controller } from "react-hook-form";
import Accordion from "../Accordian";
import PositionInformation from "./PositionInformation";
import PersonalInformation from "./PersonalInformation";
import EducationBackground from "./EducationBackground";
import WorkExperience from "./WorkExperience";
import BaseInputField from "../BaseInputField";
import References from "./References";
import AdditionalInformation from "./AdditionalInformation";
import Attachments from "./Attachments";
import Checkbox from "../BaseCheckbox";
import BaseButton from "../BaseButton";
import { useState, useEffect } from "react";
import { useApplyToJobMutation } from "@/provider/redux/query/Jobs";
import ConfirmationPopUp from "../ConfirmationPopUp";
import { applicationFormSchema } from "./ApplicationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Skills from "./Skills";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSuppressHeader } from "@/provider/redux/slice/headerSlice";
const ApplicationForm = ({ jobDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applyToJob] = useApplyToJobMutation();
  const { position, jobId } = jobDetails;
  const [openIndex, setOpenIndex] = useState(0);
  const [authorizedToWork, setAuthorizedToWork] = useState(false);
  const [felonyConviction, setFelonyConviction] = useState(false);
  const dispatch = useDispatch()
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(applicationFormSchema),
    mode: "onBlur",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    setValue
  } = methods;

  const hasErrors = (section) => {
    return Object.keys(errors).some((key) => key === section || key.startsWith(`${section}.`));
  };

  useEffect(() => {
    const firstErrorSection = applicationFormData.findIndex(data => hasErrors(data?.section));
    if (firstErrorSection !== -1) {
      setOpenIndex(firstErrorSection);
      router.push(`#section-${firstErrorSection}`);
      const sectionElement = document.getElementById(`section-${firstErrorSection}`);
      if (sectionElement) {

        // Update the URL hash
        router.push(`#section-${firstErrorSection}`);
        dispatch(setSuppressHeader(true));
        setTimeout(() => {
          dispatch(setSuppressHeader(false));
        }, 1000);


      }
    }
  }, [errors]);


  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);

    const sectionElement = document.getElementById(`section-${index}`);
    if (sectionElement) {
      const offset = 90; // Adjust this value to match your header's height
      const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      // Update the URL hash
      router.push(`#section-${index}`);
      dispatch(setSuppressHeader(true));
      setTimeout(() => {
        dispatch(setSuppressHeader(false));
      }, 1000);
      // Smoothly scroll to the offset position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleConfirmCloseClick = () => {
    reset({
      personalInformation: {
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
      },
      positionInformation: {
        desiredSalary: "",
        currency: "",
        joinFrom: null,
      },
      educationBackground: {
        highestEducation: "",
        schoolUniversityName: "",
        graduationYear: "",
      },
      workExperience: {
        recentEmployer: "",
        jobTitle: "",
        empStartDate: null,
        empEndDate: null,
        currentlyEmployed: false,
        responsibilities: "",
        joinFrom: null,
      },
      skills: {
        relevantSkills: "",
      },
      references: {
        fullName: "",
        referenceNumber: "",
        relation: "",
      },
      additionalInformation: {
        interest: "",
      },
      attachments: {
        CV: {},
        coverLetter: null,
      },
      termsAccepted: {
        terms: false,
      },
      alert: {
        futureAlert: false,
      },
    });
    setAuthorizedToWork(false);
    setFelonyConviction(false);
    setIsModalOpen(false);
  };

  const onSubmit = async (data) => {

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: data?.personalInformation?.fullName || "",
        email: data?.personalInformation?.email || "",
        phone_number: data?.personalInformation?.phoneNumber || "",
        address: data?.personalInformation?.address || "",
        city: data?.personalInformation?.city || "",
        country: data?.personalInformation?.country || "",
        state: data?.personalInformation?.state || "",
        pincode: data?.personalInformation?.pincode || "",
        desired_salary: String(
          data?.positionInformation?.desiredSalary || "00"
        ),
        desired_salary_currency: data?.positionInformation?.currency || "",
        can_join_from: data?.positionInformation?.joinFrom
          ? new Date(data?.positionInformation?.joinFrom)
            .toISOString()
            .split("T")[0]
          : null,
        education_level: data?.educationBackground?.highestEducation || "",
        university: data?.educationBackground?.schoolUniversityName || "",
        graduation_year: String(
          data?.educationBackground?.graduationYear || "2024"
        ),
        recent_employer: data?.workExperience?.recentEmployer || "",
        job_title: data?.workExperience?.jobTitle || "",
        employment_start_date: data?.workExperience?.empStartDate
          ? new Date(data?.workExperience?.empStartDate)
            .toISOString()
            .split("T")[0]
          : null,
        employment_end_date: data?.workExperience?.empEndDate
          ? new Date(data?.workExperience?.empEndDate)
            .toISOString()
            .split("T")[0]
          : null,
        currently_employed: data?.workExperience?.currentlyEmployed || false,
        responsibilities: data?.workExperience?.responsibilities || "",
        career_start_date: data?.workExperience?.joinFrom || "",
        skills: data?.skills?.relevantSkills || "",
        refrence_name: data?.references?.fullName || "",
        refrence_contact: data?.references?.referenceNumber || "",
        relationship: data?.references?.relation || "",
        interest: data?.additionalInformation?.interest || "",
        authorised_to_work: authorizedToWork === "yes",
        convicted_of_felony: felonyConviction === "yes",
        terms_conditions: data.termsAccepted.terms,
        alerts: data.alert.futureAlert,
      })
    );
    if (data?.attachments?.CV) {
      formData.append("files.resume", data?.attachments.CV);
    }
    if (data.attachments.coverLetter) {
      formData.append("files.cover_letter", data.attachments.coverLetter);
    } else {
      formData.append("files.cover_letter", null);
    }


    try {
      const { data } = await applyToJob(formData).unwrap();
      if (data) {
        setIsModalOpen(true);
      }
      console.log("Application submitted successfully");
    } catch (error) {
      console.error("Error submitting application", error);
    }
    reset({
      personalInformation: {
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
      },
      positionInformation: {
        desiredSalary: "",
        currency: "",
        joinFrom: null,
      },
      educationBackground: {
        highestEducation: "",
        schoolUniversityName: "",
        graduationYear: "",
      },
      workExperience: {
        recentEmployer: "",
        jobTitle: "",
        empStartDate: null,
        empEndDate: null,
        currentlyEmployed: false,
        responsibilities: "",
        joinFrom: null,
      },
      skills: {
        relevantSkills: "",
      },
      references: {
        fullName: "",
        referenceNumber: "",
        relation: "",
      },
      additionalInformation: {
        interest: "",
      },
      attachments: {
        CV: {},
        coverLetter: null,
      },
      termsAccepted: {
        terms: false,
      },
      alert: {
        futureAlert: false,
      },
    });
    setAuthorizedToWork(false);
    setFelonyConviction(false);
  };


  const handleCancelClick = () => {
    reset({
      personalInformation: {
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
      },
      positionInformation: {
        desiredSalary: "",
        currency: "",
        joinFrom: null,
      },
      educationBackground: {
        highestEducation: "",
        schoolUniversityName: "",
        graduationYear: "",
      },
      workExperience: {
        recentEmployer: "",
        jobTitle: "",
        empStartDate: null,
        empEndDate: null,
        currentlyEmployed: false,
        responsibilities: "",
        joinFrom: null,
      },
      skills: {
        relevantSkills: "",
      },
      references: {
        fullName: "",
        referenceNumber: "",
        relation: "",
      },
      additionalInformation: {
        interest: "",
      },
      attachments: {
        CV: {},
        coverLetter: null,
      },
      termsAccepted: {
        terms: false,
      },
      alert: {
        futureAlert: false,
      },
    });
    setAuthorizedToWork(false);
    setFelonyConviction(false);
    setIsModalOpen(false);
    router.back();
  };



  //Personal Information
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleCountryChange = (val) => {
    setCountry(val);
    setValue("personalInformation.country", val);
  };

  const handleRegionChange = (val) => {
    setRegion(val);
    setValue("personalInformation.state", val);
  };

  ///

  const handleButtonClick = (question, answer, e) => {
    e.preventDefault();
    if (question === "authorizedToWork") {
      setAuthorizedToWork(answer);
      setValue("additionalInformation.authorizedToWork", answer);
      clearErrors("additionalInformation.authorizedToWork");
    } else if (question === "felonyConviction") {
      setFelonyConviction(answer);
      setValue("additionalInformation.felonyConviction", answer);
      clearErrors("additionalInformation.felonyConviction");
    }
  };
  const applicationFormData = [
    {
      id: 1, title: "Personal Information", content: <PersonalInformation
        country={country} region={region} handleCountryChange={handleCountryChange} handleRegionChange={handleRegionChange}
      />, section: "personalInformation"
    },
    { id: 2, title: "Position Information", content: <PositionInformation />, section: "positionInformation" },
    { id: 3, title: "Education Background", content: <EducationBackground />, section: "educationBackground" },
    { id: 4, title: "Work Experience", content: <WorkExperience />, section: "workExperience" },
    { id: 5, title: "Skills", content: <Skills />, section: "skills" },
    { id: 6, title: "References", content: <References />, section: "references" },
    { id: 7, title: "Attachments", content: <Attachments />, section: "attachments" },
    {
      id: 8, title: "Additional Information", content: <AdditionalInformation
        setAuthorizedToWork={setAuthorizedToWork}
        setFelonyConviction={setFelonyConviction}
        authorizedToWork={authorizedToWork}
        felonyConviction={felonyConviction}
        handleButtonClick={handleButtonClick}
      />, section: "additionalInformation"
    },
  ];
  return (
    <>
      <FormProvider {...methods}>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="px-4 md:px-28 mt-28 2xl:px-0  2xl:max-w-7xl mx-auto">
            <p>
              <span className="cursor-pointer hover:underline text-footerBg" onClick={() => { router.push("/join-us#openings") }}>Join Us / </span>
              <span className="text-[#3F49A7]">{position}</span>
            </p>
            <p className="text-xl font-semibold text-footerBg mt-12 md:text-3xl">
              {position}
            </p>
            <p className="mt-2 text-footerBg">Job Id : {jobId}</p>
          </div>
          <div className="p-4 md:px-28 py-12 2xl:px-0 text-footerBg 2xl:max-w-7xl mx-auto">
            {applicationFormData.map((data, index) => (
              <div id={`section-${index}`} key={index}>
                <Accordion
                  heading={data.title}
                  mainClass={`py-4 ${hasErrors(data?.section) ? 'border-b border-red-500' : ''}`}
                  titleClass="text-2xl font-semibold"
                  childClass="py-2 bg-white border-t"
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                >
                  {data.content}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="md:flex justify-between p-5 bg-white shadow-white-shadow 2xl:container 2xl:mx-auto">
            <div className="space-y-4">
              <Controller
                name="termsAccepted.terms"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label={
                      <span>
                        I agree to the{" "}
                        <Link href="/privacy" passHref target="_blank">
                          <span className="text-[#3F49A7]">privacy policy</span>
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms" passHref target="_blank">
                          <span className="text-[#3F49A7]">
                            terms & conditions
                          </span>
                        </Link>
                      </span>
                    }
                  />
                )}
              />
              {errors?.termsAccepted?.terms && (
                <p className="text-red-500">
                  {errors?.termsAccepted?.terms?.message}
                </p>
              )}
              <Controller
                name="alert.futureAlert"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label="I would like to receive alerts for future openings in solutionec"
                  />
                )}
              />
            </div>
            <div className="flex justify-center md:justify-end gap-4 mt-6 md:mt-0">
              <BaseButton
                text="Cancel"
                className="text-base h-fit font-medium focus:ring-0 text-[#3F49A7] rounded-e-full rounded-s-full p-2.5 w-[160px] border border-indigo-400"
                onClick={handleCancelClick}
              />
              <BaseButton
                text="Submit"
                className={`text-white h-fit font-medium focus:ring-0  ${Object.keys(errors).length === 0
                  ? "bg-[#3F49A7]"
                  : "bg-[#AEAEAE]"
                  } rounded-e-full rounded-s-full p-2.5 w-[160px]`}
                disabled={Object.keys(errors).length > 0}
              />
            </div>
          </div>
        </form>
      </FormProvider>
      {isModalOpen && (
        <ConfirmationPopUp
          heading="Your job application is submitted successfully!"
          text=""
          onClose={() => handleConfirmCloseClick()}
        />
      )}
    </>
  );
};

export default ApplicationForm;
import React, { useEffect } from "react";
import styles from "./JoinUs.module.css";
import Image from "next/image";
import StarIcon from "../Icons/JoinUsAccordionIcon/StarIcon";
import LocationIcon from "../Icons/JoinUsAccordionIcon/LocationIcon";
import { useGetJobDetailsQuery } from "@/provider/redux/query/Jobs";
import { useRouter } from "next/navigation";
import BaseButton from "../BaseButton";

const JobDescription = ({ jobId }) => {
  const { data, error, isLoading } = useGetJobDetailsQuery(jobId);
  const router = useRouter();
  const onJobClick = (position, jobId) => {
    router.push(
      `/join-us/jobs?position=${encodeURIComponent(position)}&jobId=${jobId}`
    );
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      const ulElements = document.querySelectorAll(
        ".dynamic-html-container ul"
      );
      ulElements.forEach((ul) => {
        ul.classList.add("!list-disc", "!list-inside");
      });
    }
  }, [data]);

  return (
    <>
      <div className={`md:px-[7.78%] bg-white mobile:px-[3.33%] mt-[80px] tablet:px-[7.29%] mx-auto 2xl:max-w-7xl ${styles.jobContainer}`}>
        <>
          <div className="h-[24px] mt-6 pt-3 w-full flex ">
            <p
              className="cursor-pointer hover:underline text-[#52545B]  mobile:text-[12px] mobile:leading-[20.64px] tablet:text-[12px] tablet:leading-[20px] md:w-[50px] font-inter md:text-[14px] font-normal md:leading-[24.08px] "
              onClick={() => {
                router.push("/join-us#openings");
              }}
            >
              Join Us
            </p>

            <p className="ml-[6px] md:w-[5px] text-footerBg">/</p>
            <p className="ml-[6px] tablet:text-[12px] mobile:text-[12px] mobile:leading-[20px] tablet:leading-[20px] text-[#3F49A7] font-inter md:text-[14px] font-normal md:leading-[24.08px]">
              {/* {job.attributes.job_name} */}
              {data?.data.attributes.job_name}
            </p>
          </div>
          <div className="w-full  mobile:mt-10 mt-[56px] ">
            <h1 className="text-[#01020A] mobile:text-[20px] mobile:leading-[28px]  tablet:text-[28px] tablet:leading-[39.2px]  font-inter md:text-[32px] font-semibold md:leading-[44.8px]">
              {data?.data.attributes.job_name}
            </h1>
            <p className="text-[#52545B] mobile:mt-[8px] mobile:leading-[20.64px] mobile:text-[12px] tablet:text-[14px] tablet:leading-[24px] tablet:mt-3  md:mt-1 md:font-[16px]  font-normal  font-inter md:leading-[27.52px] ">
              Job Id : {data?.data.attributes.job_id}
            </p>
          </div>

          {/* about the job  */}
          <div className=" md:mt-12 tablet:mt-0  2xl:max-w-7xl mx-auto flex tablet:flex-col-reverse md:flex md:justify-between mobile:flex-col-reverse w-full h-full">
            <div className="tablet:mt-12">
              <h2 className="text-[#01020A] mobile:text-[18px] mobile:leading-[25.2px] tablet:leading-[33.6px] text-[24px] font-inter font-semibold md:leading-[38.4px]">
                About the Company
              </h2>

              <p
                className="dynamic-html-container mobile:mt-4 mobile:text-[14px] mobile:leading-[19.6px] md:max-w-[765px]   tablet:mt-4 tablet:text-[14px]  tablet:leading-[24.08px] md:text-[16px] font-normal list-disc list-inside  md:leading-[27.52px] text-[#52545B] md:mt-6"
                dangerouslySetInnerHTML={{
                  __html: data?.data?.attributes?.about,
                }}
              ></p>
            </div>

            {/* card */}

            <div
              className={`md:w-[368px] mobile:w-full mobile:h-[114px] md:h-[344px] mobile:my-10 tablet:mt-12 tablet:h-[120px] tablet:max-w-[656px] tablet:ml-0 md:ml-[8%] bg-[#FFF] tablet:my-[12] tablet:w-full md:rounded-[16px] ${styles.cardContainer}`}
            >
              <div
                className={`py-8 pl-8 mobile:px-4 mobile:py-6 tablet:px-8 tablet:flex mobile:flex h-full w-full items-center  justify-between ${styles.cardContent}`}
              >
                <p className="tablet:hidden mobile:hidden md:block text-[24px] font-semibold leading-[38.4px] font-inter text-[#151515]">
                  Key Details
                </p>
                <div className="md:mt-9  tablet:mt-0 flex mobile:flex-col mobile:w-[49px]">
                  <div className="mobile:flex mobile:items-center mobile:justify-center md:mt-1">
                    <span className="mobile:w-[18px] mobile:h-[18px]">
                      <LocationIcon />
                    </span>
                  </div>
                  <div className="flex flex-col mobile:items-center mobile:justify-center  mobile:ml-0 ml-[16px] md:w-[145px] mobile:w-full tablet:w-full">
                    <span className="text-[#52545B] mobile:mt-2 mobile:text-[12px] mobile:leading-[18px] text-[14px] font-normal tablet:leading-[24px] md:leading-[24.08px] font-inter ">
                      Location
                    </span>

                    <div className="text-[#01020A]  md:mt-1 mobile:text-center mobile:w-[100px] mobile:text-[14px] mobile:leading-[19.6px] md:text-[16px] md:leading-[22.4px] font-semibold font-inter">
                      {data?.data.attributes.location}
                    </div>
                  </div>
                </div>

                <div className="md:mt-7  tablet:mt-0 flex mobile:w-[114px]  mobile:flex-col">
                  <div className="mobile:flex mobile:items-center mobile:justify-center  md:mt-1">
                    <span className="mobile:w-[18px] mobile:h-[18px]">
                      <StarIcon />
                    </span>
                  </div>
                  <div className="flex flex-col  mobile:items-center mobile:justify-center mobile:ml-0 ml-[16px] md:w-[145px]  tablet:w-full">
                    <span className="text-[#52545B]  mobile:mt-2 mobile:text-[12px] mobile:leading-[18.24px] text-[14px] font-normal tablet:leading-[24px] md:leading-[24.08px] font-inter ">
                      Experience required
                    </span>

                    <span className="text-[#01020A]  md:mt-1  mobile:text-[14px] mobile:leading-[19.6px] md:text-[16px] md:leading-[22.4px] font-semibold font-inter">
                      {data?.data.attributes.experience_required} Years
                    </span>
                  </div>
                </div>

                <div className="md:mt-7 tablet:mt-0 flex  mobile:flex-col">
                  <span className="mobile:flex mobile:items-center mobile:justify-center  md:mt-1">
                    <Image
                      alt="hybrid"
                      width={24}
                      height={24}
                      src={"/assets/hybridJoinUs.svg"}
                      className="mobile:w-[18px] mobile:h-[18px] w-6 h-6"
                    />
                  </span>
                  <div className="flex flex-col mobile:items-center mobile:justify-center mobile:ml-0 ml-[16px] md:w-[145px] tablet:w-full">
                    <span className="text-[#52545B] mobile:text-[12px] mobile:mt-2 mobile:leading-[18.24px] text-[14px] font-normal tablet:leading-[24px] md:leading-[24.08px] font-inter ">
                      Shift type
                    </span>
                    <span className="text-[#01020A] md:mt-1  mobile:text-[14px] mobile:leading-[19.6px] md:text-[16px] md:leading-[22.4px] font-semibold font-inter">
                      {data?.data.attributes.shift_type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* responsibilities */}
          <div className="mt-14 max-w-[765px] tablet:mt-12 mobile:mt-10">
            <h2 className="text-[#01020A] mobile:text-[18px] mobile:leading-[25.2px]  tablet:leading-[33.6px] text-[24px] font-semibold md:leading-[38.4px] font-inter ">
              Responsibilities
            </h2>
            <p
              className="dynamic-html-container mobile:mt-4 mobile:text-[14px] mobile:leading-[19.6px]  mt-6 text-[#52545B]  tablet:mt-4 tablet:text-[14px] tablet:leading-[24px] md:text-[16px] font-normal md:leading-[27.52px] md:font-inter"
              dangerouslySetInnerHTML={{
                __html: data?.data?.attributes?.responsibilities,
              }}
            ></p>
          </div>
          {/* requirements */}
          <div className="mt-14 max-w-[765px] mobile:mt-10  tablet:mt-12">
            <h2 className="text-[#01020A] mobile:text-[18px] mobile:leading-[25.2px]  text-[24px] tablet:leading-[33.6px] font-semibold md:leading-[38.4px] font-inter ">
              Requirements
            </h2>

            <p
              className="dynamic-html-container mt-6 mobile:mt-4 mobile:leading-[19.6px] mobile:text-[14px] text-[#52545B] tablet:mt-4 tablet:text-[14px] tablet:leading-[24px]  md:text-[16px] font-normal md:leading-[27.52px] md:font-inter"
              dangerouslySetInnerHTML={{
                __html: data?.data?.attributes?.requirements,
              }}
            ></p>
          </div>
          {/* skill required */}

          <div className="md:mt-14 w-full mobile:mt-10 h-full md:max-w-[768px] lg:w-[768px] tablet:mt-12">
            <h2 className="text-[#151515] mobile:text-[18px] mobile:leading-[25.2px] tablet:leading-[33px] text-[24px] font-semibold md:leading-[38.4px] md:font-inter">
              Good to have Skills 
            </h2>
            <div className="md:mt-10 w-full h-full justify-between flex flex-col tablet:mt-8 mobile:mt-8">
              <div className="flex w-full md:gap-4 h-full   flex-wrap gap-3">
                {data?.data?.attributes?.skills?.data.map((skill, index) => (
                  <h2
                    key={index}
                    className="text-[#3F49A7]  mobile:text-[12px] mobile:font-bold mobile:leading-[16.8px]  tablet:text-[14px] tablet:leading-[19px] px-[20px] py-[10px]  font-inter md:text-[16px] font-semibold md:leading-[22.4px] rounded-full bg-[#F2F3FA]"
                  >
                    {skill?.attributes?.name}
                  </h2>
                ))}
              </div>
            </div>
          </div>

          <div className="md:mt-16 md:py-5  tablet:mt-3 tablet:py-3  flex justify-start  mobile:py-3 mobile:px-4  mobile:mt-11">
            <BaseButton
              onClick={() =>
                onJobClick(
                  data?.data?.attributes?.job_name,
                  data?.data?.attributes?.job_id
                )
              }
              className="lg:py-3 py-2 flex lg:px-6  relative px-4 items-center  text-xs md:text-sm border rounded-full font-inter font-medium leading-[22.4px]
border-[#5F80F6] lg:text-lg  justify-center overflow-hidden text-[#3F49A7] transition-all before:absolute before:h-0 before:w-0 before:rounded-full hover:text-[#FFF]
before:bg-gradient-to-l from-[#5F80F6] to-[#3F49A7] hover:border-transparent before:duration-300 before:ease-out hover:before:h-56 hover:before:w-56"
              text="Apply Now"
            />
          </div>
        </>
      </div>
    </>
  );
};

export default JobDescription;

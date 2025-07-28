"use client";

import Accordion from "../Accordian";
import StarIcon from "../Icons/JoinUsAccordionIcon/StarIcon";
import LocationIcon from "../Icons/JoinUsAccordionIcon/LocationIcon";
import { useRouter } from "next/navigation";
import { useRef, useState , useEffect } from "react";
import { useGetDepartmentsWithJobsQuery } from "@/provider/redux/query/Jobs";
import { motion, useInView } from "framer-motion";

const ExploreASolutionEcCareer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [totalJobOpenings , setTotalJobOpening]=useState(0);
  const router = useRouter();
  // here we are fetching data from the job api
  const { data } = useGetDepartmentsWithJobsQuery({
    page: 1,
    pageSize: 10,
  });

  useEffect(()=>{
    if(data?.data.length>0){
        let totalCount=0;
        data?.data?.forEach((item)=>{
          const count= item?.attributes?.jobs?.data.length;
          totalCount+=count;
         });
    setTotalJobOpening(totalCount);
    }
  },[data]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
// this function will pass the job id as query param 
  const onJobClick = (id) => {
    if (id) {
      router.push(`/join-us/current-openings?jobId=${id}`);
    }
  };
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  // below code is used for animation
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, x: -50, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <motion.div
        id="openings"
        variants={imageVariants}
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="bg-[#030515] lg:px-[7.78%] mobile:px-[3.3%] px-[6%] py-14 lg:py-20 "
      >
        <h2 className="2xl:max-w-7xl mx-auto flex mobile:text-[20px] mobile:leading-[28px] items-center justify-center text-[28px]  leading-[39.2px] lg:text-[36px] font-semibold lg:leading-[50.4px] font-inter text-[#FFF] mobile:px-[60px] text-center">
          Explore a Solutionec Career suited for you
        </h2>
        <div className="lg:mt-20 mt-12 mobile:mt-10 2xl:max-w-7xl mx-auto">
          <p className="text-[#909193] text-[14px] leading-[19.6px] fobt-semibold pb-8 border-b-[1px] border-b-[rgba(82,84,91,0.6)] lg:text-[16px] lg:leading-[27.52px] font-inter lg:font-normal">
            Total Job Openings : {totalJobOpenings}
          </p>
{/* below code will show the job openings  */}
          {data?.data.map((department) => (
            <Accordion
              key={department.id}
              heading={department.attributes.name}
              titleClass="lg:text-[24px] text-[18px] leading-[25.2px] lg:leading-[38.4px] font-inter font-semibold text-[#FFF]"
              mainClass="pt-8 pb-6 border-t-[1px] border-t-[rgba(82,84,91,0.6)]"
              childClass=""
              isOpen={openIndex === department.id}
              onToggle={() => handleToggle(department.id)}
            >
              {department.attributes.jobs.data.map((job) => (
                <div
                  key={job.id}
                  className="flex cursor-pointer flex-col mobile:p-2 p-3 rounded-[4px] hover:bg-[rgba(82,84,91,0.4)] mt-4 mobile:mt-2"
                  onClick={() => onJobClick(job.id)}
                >
                  <p className="font-inter mobile:text-[14px] mobile:leading-[19.6px] text-[18px] leading-[25.2px] text-[#DFDFE0] lg:text-[24px] font-semibold lg:leading-[38.4px]">
                    {job.attributes.job_name}
                  </p>
                  <div className="mobile:flex justify-between mobile:mt-2 w-full">
                    <p className="flex mobile:mt-0 mt-4 lg:mt-6">
                      <span className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px]">
                        <LocationIcon bgColor={"#FFF"} />
                      </span>
                      <span className="pl-4 text-[14px] mobile:leading-[19.6px] leading-[24.08px] font-inter font-normal lg:leading-[28.8px] lg:text-[18px] text-[#DFDFE0]">
                        {job.attributes.location}
                      </span>
                    </p>

                    <p className="flex mobile:mt-0 mt-2 lg:mt-3">
                      <span className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px]">
                        <StarIcon bgColor={"#FFF"} />
                      </span>
                      <span className="pl-4 text-[#DFDFE0] mobile:leading-[19.6px] text-[14px] leading-[24.08px] font-inter font-normal lg:leading-[28.8px] lg:text-[18px]">
                        {job.attributes.experience_required} Years
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </Accordion>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ExploreASolutionEcCareer;

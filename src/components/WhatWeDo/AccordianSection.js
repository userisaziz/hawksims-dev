import Accordion from "@/components/Accordian";
import ImageTextLayout from "@/components/commonComponent/ImageTextLayout";

export const AccordionSection = ({
  parentTitle,
  title,
  titleClass,
  data,
  openIndex,
  handleToggle,
}) => {
  return (
    <div className="bg-headerBg">
      <div className="container mx-auto max-w-[1440px] py-14  pb-4 px-[6.6%] mobile:px-[3.3%] lg:px-[7.7%] lg:py-[80px] ">
        {parentTitle?.length && (
          <h2
            className={`text-white  mb-1 text-xl font-semibold md:text-[28px] lg:text-[32px] lg:leading-[44.8px] mt-3`}
          >
            {parentTitle}
          </h2>
        )}
        <h3
          className={`text-white text-base md:text-lg lg:text-2xl font-semibold ${titleClass}`}
        >
          {title}
        </h3>
        <div className="pt-5">
          {data?.map((item, i) => (
            <Accordion
              key={i}
              heading={item?.heading}
              titleClass="text-base leading-[25.2px] font-inter font-semibold text-[#FFF] md:text-lg lg:text-2xl"
              mainClass={`pt-6 ${
                i === 0 ? "" : "border-t-[1px] border-t-[rgba(82,84,91,0.6)]"
              }`}
              childClass="pt-4 text-sm text-grayText lg:text-base"
              containerClass="pt-7 text-white"
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            >
              {item?.description}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

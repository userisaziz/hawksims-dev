export default function HoverCards({
  heading,
  subHeading,
  bgColor = "bg-[rgb(238,239,250)] bg-gradient-to-t from-[rgba(153,164,240,1)] to-[rgba(238,239,250,1)]",
}) {
  return (
    <>
      <div
        className={`${bgColor} w-full p-2 sm:p-5 md:p-2 rounded-lg flex flex-col justify-center`}
      >
        <h1 className="text-[10px] md:text-[12px] lg:text-[14px] font-bold">
          {heading}
        </h1>
      </div>
    </>
  );
}

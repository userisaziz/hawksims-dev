import React from "react";
import DscCards from "@/components/Dsc/Cards/Cards";
import WireAnimation from "@/components/Dsc/WireAnimation/WireAnimation";
import { dscJson } from "@/commonJson/dscContants/DscConstants";
import { hoverCardsJson } from "@/commonJson/dscContants/DscConstants";

export default function Dsc({ heading = "What's It About" }) {
  return (
    <div className="max-w-7xl  mx-auto px-4 bg-white">
      {/* Added padding on both sides */}
      <div className="py-10">
        <h2 className="text-center md:text-[17px] md:leading-[24px] dark:text-footerBg font-bold mb-10 lg:text-3xl">
          {heading}
        </h2>
        <div className="flex flex-col justify-between items-center md:flex-row bg-white">
          {/* Left Side: Cards Content */}
          <div className="w-full md:w-[45%] order-2 md:order-1 mb-8 lg:mb-0 lg:order-1">
            {dscJson?.map((el, idx) => (
              <React.Fragment key={idx}>
                <DscCards
                  imgUrl={el?.imgUrl}
                  heading={el?.heading}
                  list={el?.list}
                />
              </React.Fragment>
            ))}
          </div>

          {/* Right Side: WireAnimation */}
          <div className="w-full  order-1 mb-20 md:order-2 md:w-[45%] lg:mb-0 lg:order-2">
            <WireAnimation
              video={"/assets/services/wireanimation2.mp4"}
              hoverCardsJson={hoverCardsJson}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

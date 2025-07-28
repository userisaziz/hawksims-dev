import Image from "next/image";
import SmsIcon from "../Icons/smsIcon";
import "../../app/globals.css";
import { useEffect , useState } from "react";
/**
 * MapPinpoint Component used for "Our Presence" section in who-we-are and in contact-us page
 * 
 * This component displays an interactive map with clickable pinpoints representing different office locations.
 * - **Background Image**: The component has a customizable background image for the map section.
 * - **Map and Pinpoints**: It renders a map with specified `mapSrc` and dynamically places pinpoints on the map. Each pinpoint is associated with a location, address, email, and image.
 * - **Hover Effect**: When the user hovers over a pinpoint, a tooltip appears showing detailed information about that location.
 * - **Tooltip Visibility**: The tooltip visibility is controlled by hover events, and only the active pinpoint's tooltip will be shown.
 * 
 * Use of `useEffect`:
 * - By default, the component activates the second pinpoint and enables the hover effect on mount.
 */
const MapPinpoint = ({ backgroundImage, mapSrc, pinpoints }) => {
  const [activePin, setActivePin] = useState(null);
  const [isShowHoverEffect , setHoverEffect]=useState(false);
  useEffect(()=>{
      setActivePin(2);
      setHoverEffect(true);
  },[]);

  const handleTooltipControl=(index)=>{
    setActivePin(index);
    setHoverEffect(false);
  };
  return (
    <div
      id="offices"
      className="relative w-full h-[650px] md:h-[836px] lg:h-[836px]  flex flex-col items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-white text-xl md:text-[28px] lg:text-[32px] font-semibold leading-[44.8px] mt-20 text-center font-inter">
         Our Presence
      </p>

      <div className="relative mt-28">
        {/* Map Image */}
        <Image
          src={mapSrc}
          alt="Solutionec Office Map"
          objectFit="cover"
          quality={100}
          width={1090}
          height={516}
        />

        {/* Loop through Pinpoints */}
        {pinpoints.map((pin, index) => (
          <div
            key={index}
            className={`absolute ${pin.top} ${pin.left} group`}
            style={{
              top: pin.topPosition,
              left: pin.leftPosition,
              right: pin.rightPosition,
            }}
            onMouseEnter={() => handleTooltipControl(index)} 
            onMouseLeave={() => handleTooltipControl(null)} 
          >
            <div
              className={`w-11 h-11 rounded-full bg-green-500 opacity-10 group-hover:opacity-100`}
              style={{
                backgroundColor: "rgba(133, 181, 95, 0.40)",
              }}
            ></div>
            <div
              className={`flex justify-between ${activePin === index ? "visible" : "invisible"} group-hover:visible w-[328px] lg:w-[431px] absolute ${pin.hoverEffect} bg-headerBg rounded-2xl p-3 lg:p-6 shadow-lg shadow-[#3F49A7]`}
            >
              <div className="w-[222px] md:w-[295px]">
                <p className="pb-2 text-white text-sm lg:text-base">
                  {pin.location}
                </p>
                <p className="text-[#909193] text-xs lg:text-sm">
                  {pin.address}
                </p>
                <p className="pt-4 flex items-center space-x-2 text-[#909193] text-xs lg:text-sm">
                  <span>
                    <SmsIcon />
                  </span>
                  <span>{pin.email}</span>
                </p>
              </div>
              <div className="relative w-[82px] md:w-[104px] lg:w-[110px] h-[96px] md:h-[120px] lg:h-[140px]">
                <Image
                  src={pin.image}
                  alt="building"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapPinpoint;

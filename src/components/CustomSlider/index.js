import React,{useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomSlider = ({settings,children,sliderRef})=>{
    const ref = useRef();
    return (
        <>
        <Slider {...settings}  ref={sliderRef}>
             {children}
        </Slider>
        </>
    )
}
export default CustomSlider;
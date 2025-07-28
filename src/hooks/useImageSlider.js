"use client";
import { useState, useEffect } from "react";

const useImageSlider = (images, interval = 3000) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(imageInterval);
  }, [images?.length, interval]);

  return currentImageIndex;
};

export default useImageSlider;

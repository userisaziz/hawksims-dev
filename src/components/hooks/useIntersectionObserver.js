import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (threshold = 0.2) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            // Only set to false if all entries are out of view.
            if (entries.every((entry) => !entry.isIntersecting)) {
              setIsInView(false);
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { isInView, sectionRef };
};

export default useIntersectionObserver;

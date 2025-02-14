import React, { useEffect, useRef, useState } from "react";


import i1 from "../../assets/ARABIC CLG BUILDING/KBA ENTRANCE 1.JPG";
import i2 from "../../assets/Ceremonies/1.JPG";
import i3 from "../../assets/library Pic/8.JPG";
import i4 from "../../assets/Faculties/FeaturedFac.png";
import i5 from "../../assets/LAB PIC/3.JPG";

function Gallerysample() {
 
  const images = [i1, i2, i3, i4,i5, i1, i2, i3, i4];
  const scrollContainerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(false);
  const scrollInterval = 3000; // Interval of 3 seconds

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let currentIndex = 0;
    let intervalId;

    if (autoScroll) {
      intervalId = setInterval(() => {
        if (scrollContainer) {
          currentIndex++;
          if (currentIndex >= images.length) {
            currentIndex = 0;
          }
          const scrollPosition = currentIndex * scrollContainer.clientWidth;
          scrollContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }
      }, scrollInterval);
    }

    return () => clearInterval(intervalId);
  }, [autoScroll, images.length]);

  const handleDoubleClick = () => {
    setAutoScroll(!autoScroll);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);


  return (
    <div
      ref={scrollContainerRef}
      onDoubleClick={handleDoubleClick}
      className="flex overflow-x-scroll lg:w-auto md:gap-8 py-10 lg:gap-12 xl:gap-12 2xl:gap-24 2xl:mx-48 gap-12 relative justify-center md:justify-start lg:justify-start md:m-12 lg:m-8 scrollbar-hide cursor-pointer"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {images.map((item, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 left-48 md:left-0 transition-transform duration-500 ease-in-out "
        >
          {/* Image with Zoom Effect */}
          <img
            src={item}
            alt={`Image ${index + 1}`}
            className="rounded-3xl h-[250px] w-[340px] md:w-[320px] lg:w-[280px] object-cover transition-all duration-500 hover:scale-110"
            
          />

         
        </div>
      ))}
    </div>
  );
}

export default Gallerysample;

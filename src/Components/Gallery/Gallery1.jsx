import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import i1 from "../../assets/ARABIC CLG BUILDING/KBA ENTRANCE 1.JPG";
import i2 from "../../assets/EVENT/FEATUREDIMG.jpg";
import i3 from "../../assets/Faculties/FeaturedFac.png";
import i4 from "../../assets/LAB PIC/3.JPG";

function Gallery1() {
  const places = ["CAMPUS", "EVENTS", "FACULTIES", "CEREMONIES"];
  const images = [i1, i2, i3, i4, i1, i2, i3, i4];
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

  const navigate = useNavigate();

  const handleImageClick = (index) => {
    const paths = ["/campusimg", "/eventsimg", "/facultiesimg", "/ceremoniesimg"];
    navigate(paths[index % paths.length]);
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
            onClick={() => handleImageClick(index)}
          />

          {/* Banner Section */}
          <div className="bg-[#FFFFFFEF] border-2 flex flex-col p-3 rounded-3xl absolute bottom-0 left-5 right-5 opacity-90">
            <a
              href="blog-detail-left-sidebar.html"
              className="font-Poppins tracking-[0.03rem] text-[16px] font-medium leading-[1.3] text-center text-[#3d4750]"
            >
              {places[index % places.length]}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery1;

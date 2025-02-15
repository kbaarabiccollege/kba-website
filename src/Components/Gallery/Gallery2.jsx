import React, { useEffect } from 'react';
import img1 from "../../assets/LAB PIC/FeaturedLab.png";
import img2 from "../../assets/library Pic/5.JPG";
import img3 from "../../assets/SPORTS PIC/1.JPG";
import { useNavigate } from 'react-router-dom';

function Gallery2() {
  const places = ["LAB", "LIBRARY", "SPORTS"];
  const images = [img1, img2, img3];
  const navigate = useNavigate();

const handleImageClick = (index) => {
  const paths = ["/labimg", "/libraryimg", "/sportsimg"];
  navigate(paths[index % paths.length]);
};
useEffect(() => {
  window.scrollTo(0, 0); // Scrolls to the top when the component mounts
}, []);

  return (<>
     <div className='mb-24 overflow-x-hidden'>
      <div
        className='grid grid-cols-2 place-self-center ml-5 md:flex justify-center w-full gap-y-10 md:gap-12 md:-ml-10 lg:gap-10 lg:w-auto mt-20 mobile-l:pl-8 md:pl-10 lg:pl-2 lg:mx-10 xl:mx-32 xl:gap-8'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          overflow: 'hidden', // Add this line to handle overflow
        }}
      >
        {images.map((item, index) => (
          <div key={index} className="relative flex-shrink-0 transition-transform duration-300 ease-in-out">
            {/* Image with Zoom on Hover */}
            <img 
              src={item} 
              alt={`Gallery Image ${index + 1}`} 
              onClick={() => handleImageClick(index)}
              className='rounded-3xl w-[150px] h-[150px] mobile-l:w-[100px] mobile-l:h-[100px] md:w-[150px] md:h-[150px] lg:w-[160px] lg:h-[160px] xl:w-[250px] xl:h-[250px] xl:mt-10 lg:mr-7 object-cover transition-all duration-500 hover:scale-110'
            />
            {places[index] && (
              <h3 className='text-[#3D4750] md:text-[22px] font-quicksand bg-white px-6 py-2  rounded-3xl absolute left-[37.5%] md:left-1/2 lg:left-20 xl:left-32 -bottom-2 transform -translate-x-1/2'>
                {places[index]}
              </h3>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Gallery2;

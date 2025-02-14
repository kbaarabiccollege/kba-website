"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ImagesSlider } from "../ui/images-slider";

// Importing local images
import Image1 from "../../assets/Image_slider/building.jpeg";
import Image2 from "../../assets/Image_slider/Auditorium.jpeg";
import Image3 from "../../assets/Image_slider/Guest.jpeg";
import Image4 from "../../assets/Image_slider/staffs.jpeg";
import Image5 from "../../assets/Image_slider/lab.jpeg";
import Image6 from "../../assets/Image_slider/read.jpeg";
import Image7 from "../../assets/Image_slider/sports.jpeg";
import Image8 from "../../assets/Image_slider/library.jpeg";
import Nav2 from "./Nav2";
import ApplyNowButton from "../ui/ApplyButton";

export function Bg_Carousel() {
  const [images, setImages] = useState([
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ]);

  return (
    <>
      <div className="h-[100%] w-full bg-gradient-to-b from-blue-400 to-blue-500 opacity-90 mix-blend-multiply relative font- ">
        
      <p className="font-bold lg:text-5xl w-fit   mx-auto absolute xl:top-[35%] text-white z-30 brightness-200 font-opensans text-3xl top-10 left-[30%] md:left-[30%] md:top-[27%] lg:top-[38%] lg:left-[25%]   xl:right-[25%]  xl:text-[3rem]  ">Admissions  <br className="md:hidden" /><span className="font-Roboto relative left-3 md:left-0 font-bold w-fit  text-[#A02021]">Open 2025</span></p>
      {/* <span className="font-opensans font-bold lg:text-3xl w-fit   mx-auto absolute xl:top-[35%] xl:left-[40%] text-red-500 z-30 brightness-200 text-2xl  top-20 left-[37%] md:left-[45%] md:top-[33%] hidden">Open 2025</span>               */}
      <p className="font-bold text-3xl w-fit my-2  mx-auto absolute top-[48%]  left-[38%] text-white z-30 md:left-[45%] md:top-[32%] lg:top-[46%] xl:top-[44%] xl:left-[46%] xl:text-[3rem]"><ApplyNowButton/></p>
           
      <div className=" opacity-90 ">
        <ImagesSlider className="h-60 md:h-[45rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            {/* Add content here if needed */}
          </motion.div>
          
        </ImagesSlider>
      </div>
      </div>
    </>
  );
}

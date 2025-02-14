import React, { useEffect } from 'react'
import Nav2 from '../Components/Home/Nav2'
import Nav from '../Components/Home/Nav'
import Logos from '../Components/Home/Logos'
import Footer from '../Components/Home/Footer'
import Gallery1 from '../Components/Gallery/Gallery1'
import Gallery2 from '../Components/Gallery/Gallery2'

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  return (
    <>
    <div className="sticky top-0 z-30 bg-white shadow-md ">
       <Nav2  text_color={"text-[#1C315E]"}/>
     </div>

     <Nav />
     <div className='md:pt-32 lg:pt-20 xl:mt-32 h-auto'>
       {/* <Founder/> */}
       {/* <p className='font-bold h-[50vh] flex justify-center items-center'>WELCOME TO GALLERY PAGE</p> */}

       <Gallery1/>
       <Gallery2/>
       <Logos/>
       <Footer/>
       </div>
   </>
  )
}

export default Gallery
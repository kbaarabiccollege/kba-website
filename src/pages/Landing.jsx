import React, { useEffect } from 'react';
import { Bg_Carousel } from '../Components/Home/Bg_Carousel';
import Hero from '../Components/Home/Hero';
import Endline from '../Components/Home/Endline';
import Founder from '../Components/Home/Founder';
import EventsSlider from '../Components/Home/Eventslider';
import HomePopUp from '../Components/Home/HomePopUp';
import Button from '../Components/ui/Button';
import { Link } from 'react-router-dom';
import Gallerysample from '../Components/Home/Gallerysample';



function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      {/* <HomePopUp/> */}
      <Bg_Carousel />
      <div className='flex justify-center pt-14'>
      {/* <Button name={"Online Admissions"} /> */}
      </div>
      <Founder />
      <Hero />
      <EventsSlider />
      <div className='py-5'>
      <Gallerysample/>
      <div className='flex justify-center py-10 md:pb-10'>
      <Link to="/gallery"><Button name={"View more"} /></Link></div>
      </div>
      
    </>
  );
}

export default Landing;

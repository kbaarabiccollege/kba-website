import React, { useEffect } from 'react';
import Founder from '../Components/Home/Founder';
import Nav from '../Components/Home/Nav';
import Nav2 from '../Components/Home/Nav2';
import Hero from '../Components/Home/Hero';
import Logos from '../Components/Home/Logos';
import Footer from '../Components/Home/Footer';
import Button from '../Components/ui/Button';

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  return (
    <>
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <Nav2 text_color={"text-[#1C315E]"} />
      </div>
      <Nav />
      <div className='md:pt-32'>
        {/* <Founder/> */}
        <h3 className='text-[24px] font-semibold text-center m-5 lg:my-5'>
      WELCOME TO <span className='text-uppercase text-red-500'>Kilakarai Bukhari Aalim Arabic College</span>
    </h3>
        <Hero />
        <div className='m-6 md:mx-auto w-fit'>
          <Button name={"view more"} />
        </div>
        <Logos />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;

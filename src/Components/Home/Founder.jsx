import React, { useState } from 'react'
import founder from "../../assets/hero/main.jpeg"
import { Link } from 'react-router-dom';
import Button from '../ui/Button';


function Founder() {

  const Founder_msg=["Kilakarai Bukhari Aalim Arabic College, established in 2000 by Alhaj Dr. B.S. Abdur Rahman, was founded with the vision of blending Islamic studies with modern education. Our unique 5-year integrated program enables students to earn dual degrees in Islamic studies and business management. We aim to cultivate scholars who excel in both religious knowledge and modern sciences, empowering them to bring positive change to society. With a commitment to quality education, we aspire to create leaders who will uphold the values of the Quran and Sunnah while contributing to the betterment of humanity."]

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the scale after 200ms
  };

  return (<><div className='text-center mt-8'>
   
    <h3 className='text-[24px] font-semibold m-5 lg:my-5'>
      WELCOME TO <span className='text-uppercase text-red-500'>Kilakarai Bukhari Aalim Arabic College</span>
    </h3>
    </div>
    <div className='flex justify-center flex-col gap-8 lg:justify-center mt-8 md:gap-16 lg:gap-32  md:flex-row items-center mx-4 lg:mx-24'>

      <div className=' rounded-3xl   '>

      <img 
  src={founder} 
  alt="principal" 
  className='w-[180px] lg:w-[230px] lg:h-[230px] rounded-sm' 
  style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }} 
/>
<p className='text-center font-semibold text-lg font-serif py-3 md:text-sm lg:text-base text-gray-900'>B.S Abdul Rahman</p>

        </div>
      <div className='flex flex-col gap-2 md:w-3/4'>

        <h1 className='text-[30px] font-sans text-[#252525] font-bold'>Founder's Message</h1>
        <p className='text-[#6B6B6B] text-[16px] font-Roboto  '>
         {Founder_msg}</p><br />
        <h2 className='text-[24px] font-semibold'>Alhaj Dr. B.S. Abdur Rahman</h2>
        <h4 className='text-[15px] text-[#6B6B6B] font-semibold'>Founder, Kilakarai Bukhari Aalim Arabic College</h4>
        <div></div>
        <Link to="/about" ><Button name={"About"}  /></Link>
       
      </div>
    </div>
  </>
  )
}

export default Founder
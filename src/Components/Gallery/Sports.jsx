import React, { useEffect } from 'react';
import i1 from '../../assets/SPORTS PIC/1.JPG';
import i2 from '../../assets/SPORTS PIC/2.JPG';
import i3 from '../../assets/SPORTS PIC/3.JPG';
import i4 from '../../assets/SPORTS PIC/3.JPG';
import i5 from '../../assets/SPORTS PIC/1.JPG';
import i6 from '../../assets/SPORTS PIC/2.JPG';
import i7 from '../../assets/SPORTS PIC/1.JPG';
import i8 from '../../assets/SPORTS PIC/2.JPG';

function SportsImg() {
    // Array of campus images
    const CampusImages = [
        { image: i1, name: "Campus View 1" },
        { image: i2, name: "Campus View 2" },
        { image: i3, name: "Campus View 3" },
        { image: i4, name: "Campus View 4" },
        { image: i5, name: "Campus View 5" },
        { image: i6, name: "Campus View 6" },
        { image: i7, name: "Campus View 7" },
        { image: i8, name: "Campus View 8" }
    ];
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts
      }, []);
    return (
        <>
            <div className='bg-[#EDF0F2] lg:px-20'>
                <div className='md:pt-32 lg:pt-44 px-6 py-20'>
                    <h5 className='text-[#07294D] text-[18px] font-bold font-montserrat'>Our Playgrounds</h5>
                    <hr className='border-[#07294D] border-2 my-2 w-10' />
                    <h2 className='font-bold text-[26px] lg:text-[48px] font-montserrat md:text-[26px]'>
                        Enjoy our Games
                    </h2>
                </div>

                {/* Grid of campus images */}
                <div className="container mx-auto px-4 pb-24">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-16 ">
                        {CampusImages.map((campus, index) => (
                           
                                <img 
                                    src={campus.image} 
                                    alt={campus.name} 
                                    className="w-full h-60 md:h-72 lg:h-64  rounded-xl object-cover"
                                />
                          
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SportsImg;

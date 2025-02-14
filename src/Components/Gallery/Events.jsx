import React, { useEffect } from 'react';
import i1 from '../../assets/EVENT/1.jpg';
import i2 from '../../assets/EVENT/2.jpg';
import i3 from '../../assets/EVENT/3.jpg';
import i4 from '../../assets/EVENT/3.jpg';
import i5 from '../../assets/EVENT/4.jpg';
import i6 from '../../assets/EVENT/6.jpg';
import i7 from '../../assets/EVENT/7.jpg';
import i8 from '../../assets/EVENT/8.jpg';
import i9 from '../../assets/EVENT/9.jpg';
import i10 from '../../assets/EVENT/10.JPG';
import i11 from '../../assets/EVENT/11.jpg';
import i12 from '../../assets/EVENT/12.jpg';
import i13 from '../../assets/EVENT/13.jpg';
import i14 from '../../assets/EVENT/14.jpg';
import i15 from '../../assets/EVENT/15.jpg';
import i16 from '../../assets/EVENT/16.jpg';
import i17 from '../../assets/EVENT/17.jpg';
import i18 from '../../assets/EVENT/18.jpg';
import i19 from '../../assets/EVENT/19.jpg';
import i20 from '../../assets/EVENT/20.jpg';
import i21 from '../../assets/EVENT/21.jpg';
import i22 from '../../assets/EVENT/22.jpg';
import i23 from '../../assets/EVENT/23.jpg';
import i24 from '../../assets/EVENT/24.jpg';
import i25 from '../../assets/EVENT/25.jpg';
import i26 from '../../assets/EVENT/25.jpg';
import i27 from '../../assets/EVENT/26.jpg';
import i28 from '../../assets/EVENT/27.jpg';
// import j1 from "../../assets/EVENT/girls/1.jpg"

function EventsImg() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts
      }, []);
    // Array of campus images
    const CampusImages = [
        { image: i1, name: "Campus View 1" },
        { image: i2, name: "Campus View 2" },
        { image: i3, name: "Campus View 3" },
        { image: i4, name: "Campus View 4" },
        { image: i5, name: "Campus View 5" },
        { image: i6, name: "Campus View 6" },
        { image: i7, name: "Campus View 7" },
        { image: i8, name: "Campus View 8" },
        { image: i9, name: "Campus View 1" },
        { image: i10, name: "Campus View 2" },
        { image: i11, name: "Campus View 3" },
        { image: i12, name: "Campus View 4" },
        { image: i13, name: "Campus View 5" },
        { image: i14, name: "Campus View 6" },
        { image: i15, name: "Campus View 7" },
        { image: i16, name: "Campus View 8" },
        { image: i17, name: "Campus View 1" },
        { image: i18, name: "Campus View 2" },
        { image: i19, name: "Campus View 1" },
        { image: i20, name: "Campus View 2" },
        { image: i21, name: "Campus View 3" },
        { image: i22, name: "Campus View 4" },
        { image: i23, name: "Campus View 4" },
        { image: i24, name: "Campus View 5" },
        { image: i25, name: "Campus View 6" },
        { image: i26, name: "Campus View 7" },
        { image: i27, name: "Campus View 8" },
        { image: i28, name: "Campus View 1" },
        // { image: i29, name: "Campus View 2" },
        // { image: i30, name: "Campus View 3" },
        // { image: i31, name: "Campus View 4" },
        // { image: i32, name: "Campus View 5" },
       
    ];

    return (
        <>
            <div className='bg-[#EDF0F2] lg:px-20'>
                <div className='md:pt-32 lg:pt-44 px-6 py-20'>
                    <h5 className='text-[#07294D] text-[18px] font-bold font-montserrat'>Our Campus</h5>
                    <hr className='border-[#07294D] border-2 my-2 w-10' />
                    <h2 className='font-bold text-[26px] lg:text-[48px] font-montserrat md:text-[26px]'>
                        Visit our Campus
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

export default EventsImg;

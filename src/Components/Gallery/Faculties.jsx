import React, { useEffect } from 'react';
import img1 from "../../assets/Faculties/syed_masood_jamali.png";
import img2 from "../../assets/Faculties/abdul_hai_nadwi.png";
import img3 from "../../assets/Faculties/yoosuf_jamali.png";
import img4 from "../../assets/Faculties/abdus_samad_nadwi.jpg";
import img5 from "../../assets/Faculties/usman.png";
import img6 from "../../assets/Faculties/Mr. Abdul kareem.png";
import img7 from "../../assets/Faculties/ahamedullah.png";
import img8 from "../../assets/Faculties/Ali Gousi.png";
import img9 from "../../assets/Faculties/M.png";
import img10 from "../../assets/Faculties/Dr. MOHAMMAD FAISAL 2.png";
import img11 from "../../assets/Faculties/Dr. Yasar Arafath Ali.png";
import img12 from "../../assets/Faculties/Mr. Abubaker Siddique.png";
import img13 from "../../assets/Faculties/Mr. Hamsath Khan.png";
import img14 from "../../assets/Faculties/Mr. Dhamim Anzar.png";
import img15 from "../../assets/Faculties/Mr. Mohamed Azarudeen2.png";
import img16 from "../../assets/Faculties/abuthahir.png";

function FacultiesImg() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts
      }, []);
    // Array of campus images
   const facultyMembers = [
        { name: "Dr. Syed Masood Jamali", role: "Principal", image: img1 },
        { name: "Dr. Abdul Hai Hasani Nadwi", role: "Academic Dean", image: img2 },
        { name: "Dr. Yoosuf Jamali", role: "Professor", image: img3 },
        { name: "Dr. Abdus Samad Nadwi", role: "Asst. Professor", image: img4 },
        { name: "Dr.Usman Ali Hasani", role: "Asst. Professor", image: img5 },
        { name: "Mr. Abdul kareem", role: "Asst. Professor", image: img6 },
        { name: "Dr. Ahamedullah AlBukhari", role: "Asst. Professor", image: img7 },
        { name: "Mr. Mohamed Ali Gousi", role: "Asst. Professor", image: img8 },
        { name: "Dr. Mohamed Rafiq", role: "Asst. Professor", image: img9 },
        { name: "Dr. Mohammad Faisal", role: "Asst. Professor", image: img10 },
        { name: "Dr. Yasar Arafath Ali Bukhari Thaqaufi", role: "Asst. Professor", image: img11},
        { name: "Mr. Abubaker Siddique Bukhari Nadwi", role: "Lecturer", image: img12 },
        { name: "Mr. Hamsath Khan", role: "Lecturer", image: img13},
        { name: "Mr. Dhamim Anzar", role: "Lecturer", image: img14 },
        { name: "Mr. Mohamed Azarudeen", role: "Librarian", image: img15},
        { name: "Mr. Abuthahir", role: "Accountant", image: img16 },
   ]

    return (
        <>
            <div className='bg-[#EDF0F2] lg:px-20'>
                <div className='md:pt-32 lg:pt-44 px-6 py-20'>
                    <h5 className='text-[#07294D] text-[18px] font-bold font-montserrat'>Our Faculties</h5>
                    <hr className='border-[#07294D] border-2 my-2 w-10' />
                    <h2 className='font-bold text-[26px] lg:text-[48px] font-montserrat md:text-[26px]'>
                        Meet our faculties
                    </h2>
                </div>

                {/* Grid of campus images */}
                <div className="container mx-auto px-4 pb-24">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8 ">
                        {facultyMembers.map((faculty, index) => (
                           
                                <img 
                                    src={faculty.image} 
                                    alt={faculty.name} 
                                    className="w-full h-60 md:h-72 lg:h-64  xl:h-96 rounded-xl object-cover"
                                />
                          
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default  FacultiesImg;

import React from 'react';
import main from "../../assets/hero/main.jpeg";
import Banner from './Banner';

const heroContent = {
    intro: {
        image: main,
        alt: "B.S Abdul Rahman",
        paragraphs: [
            "Kilakarai Bukhari Aalim Arabic College was established in 2000 fulfilling the dream of its founder Alhaj Dr. B.S.Abdur Rahman who wished to start an Arabic college where Islamic religious studies and modern curriculum are taught together.",
            
        ],
        paragraphs2:["The college has designed a 5-year integrated academic programme which enables its students to acquire twin degrees, one in Islamic studies and the other in business management. It has become a unique institution that promotes exemplary Muslim scholars (Ulamas) who excel both in revealed knowledge and modern sciences."]
    },
    vision: {
        title: "Our Vision",
        description: "The college looks forward to be a pioneer in the field of Islamic Studies to promote Islamic Scholars, capable of bringing about positive change for the betterment of self, family, society and humanity on the basis of moderate ideology derived from the Holy Quran and Sunnah."
    },
    mission: {
        title: "Our Mission",
        description: "The college is committed:",
        points: [
            "To provide revealed and scientific knowledge in UG., PG. and Research programmes.",
            "To develop various necessary skills through training, workshops, Seminars and fieldworks.",
            "To develop analytical and critical thinking in students by adopting modern scientific teaching methodology."
        ]
    },
    facilities: {
        title: "Infrastructure and Facilities",
        description: "The college provides all facilities in excellent standard: Hostel building with all facilities and amenities required to ensure a comfortable and pleasant stay for the students. Well-equipped library having around 15,000 volumes of books in Arabic, English, Tamil and Urdu. Well-furnished Auditorium. Computer lab with high-speed Internet facilities. Playground facilities for all games."
    },
    admission: {
        title: "Admission",
        description: "Application forms are issued during the month of April every year. After scrutinizing the filled-in applications, students are called for an Entrance examination. Results of the Entrance test, Quran recitation test and 10th standard marks are taken into consideration for selection. Admission will be given only on the basis of merit.",
        qualifications: [
            "A pass certificate in S.S.L.C / Matriculation or any other equivalent examination.",
            "Ability to recite the Holy Quran.",
            "Upper age limit is 17 years."
        ]
    }
};

function Hero() {
    return (
        <>
            <div className='flex mx-5 lg:mx-14 -mt-16  text-lg font-Roboto text-[#6B6B6B]   md:mt-0 md:gap-10 md:text-[14px] lg:text-[16px] lg:mt-[2%] pt-10'>
                <div>
                    {/* <img
                        src={heroContent.intro.image}
                        alt={heroContent.intro.alt}
                        className='w-56 lg:w-64 md:w-44 md:h-52 lg:h-60 mx-auto md:float-left md:mr-8 lg:mb-2'
                    /> */}
                    {heroContent.intro.paragraphs.map((paragraph, index) => (
                        <p key={index} className='mt-10 md:mt-0  md:leading-relaxed'>
                            {paragraph}
                        </p>
                        
                    ))}
                    {heroContent.intro.paragraphs2.map((paragraph, index) => (
                        <p key={index} className='mt-10  md:mt-8  md:leading-relaxed'>
                            {paragraph}
                        </p>
                        
                    ))}

                    <div className='md:hidden  lg:text-[16px]  lg:block'>
                        <h2 className='font-semibold mt-10 text-lg'>{heroContent.vision.title}</h2>
                        <p className='mt-2 lg:leading-relaxed'>{heroContent.vision.description}</p>

                        <h2 className='font-semibold mt-10 text-lg'>{heroContent.mission.title}</h2>
                        <p className='mt-2'>{heroContent.mission.description}</p>
                        <ul className='list-disc ml-5 lg:leading-relaxed'>
                            {heroContent.mission.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            <div className='hidden md:block lg:hidden xl:hidden md:mx-5  lg:mx-14 md:text-[14px] lg:text-[16px] md:leading-relaxed'>
                <h2 className='font-semibold text-lg '>{heroContent.vision.title}</h2>
                <p className='mt-2 lg:leading-relaxed md:leading-relaxed'>{heroContent.vision.description}</p>

                <h2 className='font-semibold mt-10 text-lg'>{heroContent.mission.title}</h2>
                <p className='mt-2 md:leading-relaxed'>{heroContent.mission.description}</p>
                <ul className='list-disc ml-5 lg:leading-relaxed'>
                    {heroContent.mission.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>

            <div className='lg:mx-14 md:mx-5 mx-5 md:text-[14px] lg:text-[16px] md:leading-relaxed font-Roboto text-[#6B6B6B]   '>
                <h2 className='font-semibold mt-10 text-lg md:leading-relaxed'>{heroContent.facilities.title}</h2>
                <p className='mt-2 md:leading-relaxed'>{heroContent.facilities.description}</p>

                <h2 className='font-semibold mt-10 text-lg md:leading-relaxed'>{heroContent.admission.title}</h2>
                <p className='mt-2 lg:leading-relaxed'>{heroContent.admission.description}</p>

                <h2 className='font-semibold mt-10 text-lg'>Qualification for Admission:</h2>
                <ul className='list-disc ml-5 mt-2 flex flex-col gap-2 pb-5'>
                    {heroContent.admission.qualifications.map((qualification, index) => (
                        <li key={index}>{qualification}</li>
                    ))}
                </ul>
            </div>
        </>
    ); 
}

export default Hero;

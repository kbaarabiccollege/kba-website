import React, { useEffect } from 'react';
import Logos from '../Components/Home/Logos';
import Footer from '../Components/Home/Footer';
import Nav2 from '../Components/Home/Nav2';
import Nav from '../Components/Home/Nav';

// Import faculty images

import Faculty from '../Components/Faculties/Faculty';




function Faculties() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className="sticky top-0 z-30 bg-white shadow-md">
                <Nav2 text_color={"text-[#1C315E]"} />
            </div>
            <Nav />
            <Faculty/>
            <Logos />
            <Footer />
        </>
    );
}

export default Faculties;

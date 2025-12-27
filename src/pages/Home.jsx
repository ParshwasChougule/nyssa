import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import CentreOfExcellence from '../components/home/CentreOfExcellence';

import MeetSurgeon from '../components/home/MeetSurgeon';
import FirstStep from '../components/home/FirstStep';

import Clinics from '../components/home/Clinics';
import Contact from '../components/home/Contact';

import FeaturedTreatments from '../components/home/FeaturedTreatments';
import BookAppointment from '../components/home/BookAppointment';





const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <Hero />
            <CentreOfExcellence />
            <FeaturedTreatments />

            <MeetSurgeon />
            <FirstStep />
            <BookAppointment />

            {/* <Clinics />
            <Contact /> */}

        </>
    );
};

export default Home;

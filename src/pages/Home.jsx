import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import CentreOfExcellence from '../components/home/CentreOfExcellence';

import MeetSurgeon from '../components/home/MeetSurgeon';
import FirstStep from '../components/home/FirstStep';
import Philosophy from '../components/home/Philosophy';
import PatientJourney from '../components/home/PatientJourney';
import FeaturedMedia from '../components/home/FeaturedMedia';
import Testimonials from '../components/home/Testimonials';
import Clinics from '../components/home/Clinics';
import Contact from '../components/home/Contact';

import FeaturedTreatments from '../components/home/FeaturedTreatments';
import BookAppointment from '../components/home/BookAppointment';

import InspirationAndBlog from '../components/home/InspirationAndBlog';

import ImageMarquee from '../components/home/ImageMarquee';

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
            <InspirationAndBlog />
            <PatientJourney />
            <Philosophy />
            <Testimonials />
            <FeaturedMedia />
            {/* <Clinics />
            <Contact /> */}
            <ImageMarquee />
        </>
    );
};

export default Home;

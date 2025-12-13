import React, { useEffect } from 'react';
import Clinics from '../components/home/Clinics';
import Contact from '../components/home/Contact';

const ClinicsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '100px' }}>
            {/* Hero Section */}
            <div style={{
                backgroundColor: '#FCF8ED',
                color: 'var(--secondary)',
                padding: '80px 0',
                textAlign: 'center',
                marginBottom: '60px'
            }}>
                <div className="container">
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '20px' }}>Our Clinics</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
                        State-of-the-art facilities designed for your comfort, privacy, and safety.
                    </p>
                </div>
            </div>

            <Clinics />

            <div style={{ marginTop: '60px' }}>
                <Contact />
            </div>
        </div>
    );
};

export default ClinicsPage;

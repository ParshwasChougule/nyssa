import React, { useEffect } from 'react';
import MeetSurgeon from '../components/home/MeetSurgeon';
import BrandStory from '../components/home/BrandStory';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '100px' }}>
            {/* Hero Section */}
            <div style={{
                backgroundColor: '#c99d99',
                color: 'var(--secondary)',
                padding: '80px 0',
                textAlign: 'center',
                marginBottom: '60px'
            }}>
                <div className="container">
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '20px' }}>About Nyssa</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9, color: 'var(--text-light)' }}>
                        Redefining the standards of cosmetic gynecology with a perfect blend of medical expertise and artistic vision.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container" style={{ marginBottom: '100px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--secondary)', marginBottom: '30px', fontSize: '2.5rem' }}>
                            Our Story
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '20px' }}>
                            Nyssa Clinic was founded with a singular vision: to create a safe, empowering space where women can address their intimate health and aesthetic concerns without judgment.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '20px' }}>
                            Under the leadership of Dr. Monica Kullolli, we have grown into a centre of excellence, known for our pioneering techniques in cosmetic gynecology and our unwavering commitment to patient care.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                            We believe that every woman deserves to feel confident and comfortable in her own body. Our holistic approach ensures that we treat not just the physical symptoms, but the whole woman.
                        </p>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Clinic Interior"
                            style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }}
                        />
                    </div>
                </div>
            </div>

            <MeetSurgeon />

            <BrandStory />
        </div>
    );
};

export default About;

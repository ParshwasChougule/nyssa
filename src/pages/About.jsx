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
                            Nyssa was created with a simple thought in mind — that many people live with small discomforts, changes, or doubts without realising that these are signs their body is asking for care. Often, these things are ignored because they feel "too small," "too awkward," or "not serious enough." At Nyssa, we understand this silence. We know that most people don't avoid care because they don't care — they avoid it because they don't feel comfortable talking about it.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                            That's where Nyssa comes in. We believe healing begins the moment someone feels safe enough to speak. Our space is built on listening, understanding, and gentle guidance. We help people recognise what their body is trying to tell them and support them with care that is respectful, thoughtful, and never rushed. Because when you feel heard, supported, and understood, healing doesn't feel intimidating — it begins naturally, from within.
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

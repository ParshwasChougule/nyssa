import React, { useEffect } from 'react';
import Contact from '../components/home/Contact';
import SectionTitle from '../components/common/SectionTitle';

const ContactPage = () => {
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
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '20px' }}>Contact Us</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
                        We are here to answer your questions and guide you on your journey.
                    </p>
                </div>
            </div>

            <Contact />

            <div className="container" style={{ paddingBottom: '100px', marginTop: '60px' }}>
                <SectionTitle title="Get in Touch" subtitle="We'd Love to Hear From You" />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px',
                    marginTop: '50px'
                }}>
                    <div style={{
                        padding: '40px',
                        backgroundColor: 'var(--white)',
                        borderRadius: '12px',
                        boxShadow: 'var(--shadow-md)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📞</div>
                        <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Phone</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '5px' }}>+91 98765 43210</p>
                        <p style={{ color: 'var(--text-light)' }}>Mon-Sat: 10am - 7pm</p>
                    </div>

                    <div style={{
                        padding: '40px',
                        backgroundColor: 'var(--white)',
                        borderRadius: '12px',
                        boxShadow: 'var(--shadow-md)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>✉️</div>
                        <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Email</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '5px' }}>info@nyssaclinic.com</p>
                        <p style={{ color: 'var(--text-light)' }}>We reply within 24 hours</p>
                    </div>

                    <div style={{
                        padding: '40px',
                        backgroundColor: 'var(--white)',
                        borderRadius: '12px',
                        boxShadow: 'var(--shadow-md)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📍</div>
                        <h3 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Visit Us</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '5px' }}>123 Wellness Ave</p>
                        <p style={{ color: 'var(--text-light)' }}>Beauty City, India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

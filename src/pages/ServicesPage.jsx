import React, { useEffect } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ServicesGrid from '../components/home/ServicesGrid';

const ServicesPage = () => {
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
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '20px' }}>Our Services</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
                        World-class surgical and non-surgical treatments tailored to your unique needs.
                    </p>
                </div>
            </div>

            <ServicesGrid />
        </div>
    );
};

export default ServicesPage;

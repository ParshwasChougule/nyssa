import React from 'react';
import SectionTitle from '../common/SectionTitle';

const WhyNyssa = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--secondary)', color: 'var(--white)' }}>
            <div className="container">
                <SectionTitle title="Why Choose Nyssa?" subtitle="The Gold Standard" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'center' }}>
                    <div>
                        <h3 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '10px' }}>15+</h3>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '10px' }}>5k+</h3>
                        <p>Happy Patients</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '10px' }}>100%</h3>
                        <p>Safety Record</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '10px' }}>Top</h3>
                        <p>Rated Clinic</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyNyssa;

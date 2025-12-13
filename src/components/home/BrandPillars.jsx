import React from 'react';
import CardSoft from '../ui/CardSoft';

const BrandPillars = () => {
    const pillars = [
        { title: 'Expert Care', desc: 'Board-certified surgeons with decades of experience.' },
        { title: 'Advanced Tech', desc: 'State-of-the-art equipment for safe and effective results.' },
        { title: 'Personalized', desc: 'Tailored treatment plans designed just for you.' },
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {pillars.map((pillar, index) => (
                        <CardSoft key={index} style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--primary)',
                                borderRadius: '50%',
                                margin: '0 auto 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '1.5rem'
                            }}>
                                {index + 1}
                            </div>
                            <h3 style={{ marginBottom: '15px' }}>{pillar.title}</h3>
                            <p style={{ color: 'var(--text-light)' }}>{pillar.desc}</p>
                        </CardSoft>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandPillars;

import React from 'react';
import SectionTitle from '../common/SectionTitle';
import CardSoft from '../ui/CardSoft';

const Clinics = () => {
    const clinics = [
        { name: 'Nyssa Downtown', location: 'City Center', img: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
        { name: 'Nyssa West', location: 'Westside Plaza', img: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
        { name: 'Nyssa North', location: 'North Hills', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    ];

    return (
        <section className="section">
            <div className="container">
                <SectionTitle title="Our Clinics" subtitle="Visit Us" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {clinics.map((clinic, index) => (
                        <CardSoft key={index} style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={clinic.img} alt={clinic.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.2rem' }}>{clinic.name}</h3>
                                <p style={{ color: 'var(--text-light)' }}>{clinic.location}</p>
                            </div>
                        </CardSoft>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clinics;

import React from 'react';
import { Link } from 'react-router-dom';

const MeetSurgeon = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            width: '100%',
                            height: '100%',
                            border: '2px solid var(--primary)',
                            zIndex: 0
                        }}></div>
                        <img
                            src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="Dr. Surgeon"
                            style={{
                                width: '100%',
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        />
                    </div>
                    <div style={{ flex: 1.2, minWidth: '300px' }}>
                        <span style={{
                            color: 'var(--primary)',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            marginBottom: '10px',
                            display: 'block'
                        }}>
                            Founder & Chief Surgeon
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                            marginBottom: '25px',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)'
                        }}>
                            Meet Dr. Monica Kullolli
                        </h2>
                        <p style={{ marginBottom: '20px', color: 'var(--text-light)', fontSize: '1.1rem' }}>
                            A pioneer in cosmetic gynecology and aesthetic medicine, Dr. Monica Kullolli brings over 25 years of surgical excellence. Dedicated to empowering women, she combines artistic vision with medical precision to deliver results that look and feel natural.
                        </p>
                        <p style={{ marginBottom: '30px', color: 'var(--text-light)', fontSize: '1.1rem' }}>
                            "My mission is to help every woman regain her confidence and feel comfortable in her own skin."
                        </p>
                        <div style={{ display: 'flex', gap: '40px', marginBottom: '30px' }}>
                            <div>
                                <h4 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--primary)', marginBottom: '5px' }}>25+</h4>
                                <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999' }}>Years Exp.</span>
                            </div>
                            <div>
                                <h4 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--primary)', marginBottom: '5px' }}>5k+</h4>
                                <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999' }}>Procedures</span>
                            </div>
                        </div>
                        <Link to="/about" className="btn btn-outline">
                            Read Full Profile
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetSurgeon;

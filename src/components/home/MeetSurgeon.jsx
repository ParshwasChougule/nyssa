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
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#D1A3A2',
                            borderRadius: '12px',
                            zIndex: 0
                        }}></div>
                        <img
                            src="/monica kullolli.png"
                            alt="Nyssa Healthcare"
                            style={{
                                width: '100%',
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: 'var(--shadow-lg)',
                                borderRadius: '12px'
                            }}
                        />
                    </div>
                    <div style={{ flex: 1.2, minWidth: '300px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                            marginBottom: '30px',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            lineHeight: '1.2'
                        }}>
                            Nyssa was created with a simple belief — healthcare should feel safe, respectful, and personal.
                        </h2>
                        <p style={{ marginBottom: '25px', color: 'var(--text-light)', fontSize: '1.15rem', lineHeight: '1.8' }}>
                            Many people delay treatment because they feel embarrassed, unsure, or uncomfortable. Nyssa exists to change that experience.
                        </p>
                        <div style={{
                            marginBottom: '30px',
                            paddingLeft: '20px',
                            borderLeft: '3px solid var(--primary)'
                        }}>
                            <p style={{ marginBottom: '12px', color: 'var(--secondary)', fontSize: '1.1rem', fontWeight: '500' }}>
                                Here, you don't need perfect words.
                            </p>
                            <p style={{ marginBottom: '12px', color: 'var(--secondary)', fontSize: '1.1rem', fontWeight: '500' }}>
                                You don't need explanations.
                            </p>
                            <p style={{ marginBottom: '0', color: 'var(--secondary)', fontSize: '1.1rem', fontWeight: '500' }}>
                                You just need to feel safe.
                            </p>
                        </div>
                        <Link to="/about" className="btn btn-outline">
                            Learn More About Nyssa
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetSurgeon;

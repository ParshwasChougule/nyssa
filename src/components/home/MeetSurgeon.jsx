import React from 'react';
import { Link } from 'react-router-dom';

const MeetSurgeon = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                {/* Centered Section Title */}
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.2rem)',
                    marginBottom: '60px',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--secondary)',
                    lineHeight: '1.2',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textAlign: 'center'
                }}>
                    ABOUT THE FOUNDER
                </h2>

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
                        <h3 style={{
                            fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
                            marginBottom: '20px',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            lineHeight: '1.3',
                            fontWeight: '600'
                        }}>
                            Dr. Monika Vijay Kullolli
                        </h3>

                        <p style={{ marginBottom: '25px', color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Dr. Monika Kullolli is a senior Consultant Gynaecologist and Medical Superintendent with decades of experience in women's health, pelvic care, and advanced gynaecological procedures.
                        </p>

                        <p style={{ marginBottom: '25px', color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            She is the Head of the Department of OBG at Kullolli Institute of Health Services, Sangli.
                        </p>

                        <h4 style={{
                            fontSize: '1.3rem',
                            marginBottom: '20px',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            fontWeight: '600'
                        }}>
                            Professional Highlights:
                        </h4>

                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            marginBottom: '30px'
                        }}>
                            <li style={{
                                marginBottom: '12px',
                                paddingLeft: '25px',
                                position: 'relative',
                                color: 'var(--text-light)',
                                fontSize: '1.05rem',
                                lineHeight: '1.6'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    color: 'var(--primary)',
                                    fontSize: '1.2rem'
                                }}>•</span>
                                Gold Medalist in Quality Management
                            </li>
                            <li style={{
                                marginBottom: '12px',
                                paddingLeft: '25px',
                                position: 'relative',
                                color: 'var(--text-light)',
                                fontSize: '1.05rem',
                                lineHeight: '1.6'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    color: 'var(--primary)',
                                    fontSize: '1.2rem'
                                }}>•</span>
                                Trained in Pelviscopy (Germany)
                            </li>
                            <li style={{
                                marginBottom: '12px',
                                paddingLeft: '25px',
                                position: 'relative',
                                color: 'var(--text-light)',
                                fontSize: '1.05rem',
                                lineHeight: '1.6'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    color: 'var(--primary)',
                                    fontSize: '1.2rem'
                                }}>•</span>
                                Specialist in Cosmetic Gynaecology & Pelvic Floor Care
                            </li>
                            <li style={{
                                marginBottom: '12px',
                                paddingLeft: '25px',
                                position: 'relative',
                                color: 'var(--text-light)',
                                fontSize: '1.05rem',
                                lineHeight: '1.6'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    color: 'var(--primary)',
                                    fontSize: '1.2rem'
                                }}>•</span>
                                Certified in Colposcopy, Ultrasound & OASIS Repair
                            </li>
                            <li style={{
                                marginBottom: '12px',
                                paddingLeft: '25px',
                                position: 'relative',
                                color: 'var(--text-light)',
                                fontSize: '1.05rem',
                                lineHeight: '1.6'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    color: 'var(--primary)',
                                    fontSize: '1.2rem'
                                }}>•</span>
                                International faculty for surgical workshops
                            </li>
                            <li style={{
                                marginBottom: '12px',
                                paddingLeft: '25px',
                                position: 'relative',
                                color: 'var(--text-light)',
                                fontSize: '1.05rem',
                                lineHeight: '1.6'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    color: 'var(--primary)',
                                    fontSize: '1.2rem'
                                }}>•</span>
                                Author of multiple research papers
                            </li>
                            <li style={{
                                marginBottom: '0',
                                paddingLeft: '25px',
                                position: 'relative',
                                color: 'var(--text-light)',
                                fontSize: '1.05rem',
                                lineHeight: '1.6'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    color: 'var(--primary)',
                                    fontSize: '1.2rem'
                                }}>•</span>
                                Awarded for excellence in healthcare and social service
                            </li>
                        </ul>

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

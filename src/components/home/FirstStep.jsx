import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const FirstStep = () => {
    return (
        <section className="section" style={{ backgroundColor: '#f9f9f9', overflow: 'hidden' }}>
            <div className="container">
                <div className="split-section-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>

                    {/* Left Content */}
                    <div className="split-content-left" style={{ flex: '1 1 500px', paddingRight: '50px', marginBottom: '40px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <span style={{
                                    fontFamily: 'cursive',
                                    color: 'var(--primary)',
                                    fontSize: '1.2rem',
                                    marginRight: '15px'
                                }}>the</span>
                                <h2 style={{
                                    fontSize: '3.5rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--secondary)',
                                    lineHeight: '1'
                                }}>First Step</h2>
                            </div>

                            <h3 style={{
                                fontSize: '2.5rem',
                                fontWeight: '300',
                                marginBottom: '20px',
                                color: 'var(--secondary-light)'
                            }}>
                                Towards being the <br />
                                <span style={{ fontWeight: '600' }}>healthiest you</span>
                            </h3>

                            <div style={{
                                width: '60px',
                                height: '2px',
                                backgroundColor: 'var(--accent)',
                                marginBottom: '30px'
                            }}></div>

                            <p style={{
                                color: 'var(--primary)',
                                fontStyle: 'italic',
                                marginBottom: '40px',
                                fontSize: '1.1rem'
                            }}>
                                regain your confidence and youthful appearance
                            </p>

                            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                                <div style={{ flex: 1, minWidth: '250px' }}>
                                    <p style={{ color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '20px' }}>
                                        Cosmetic Gynaecological procedures are a personal decision taken after much consideration. Nyssa Clinic provides personalized treatments that maintain the highest standard of excellence.
                                    </p>

                                    {/* Video Thumbnail Placeholder */}
                                    <div style={{
                                        width: '100%',
                                        height: '180px',
                                        backgroundColor: 'var(--secondary)', // Dark red/brown from image
                                        borderRadius: '10px',
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        boxShadow: '0 10px 30px rgba(163, 51, 61, 0.3)'
                                    }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            border: '2px solid white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'
                                        }}>
                                            <FaPlay style={{ marginLeft: '4px' }} />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ flex: 1, minWidth: '250px' }}>
                                    <p style={{ color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '20px' }}>
                                        With an accurate diagnosis and treatment plan that is tailored to their specific condition, each patient experiences safe and ethical treatments, conducted by pioneers in the industry.
                                    </p>
                                    <p style={{ color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '30px' }}>
                                        At Nyssa, we give you the freedom of choice, and knowledge, through counseling sessions. Right from your initial consultation to post-op check-ups.
                                    </p>
                                    <Link to="/services">
                                        <button style={{
                                            padding: '12px 30px',
                                            border: '1px solid var(--secondary)',
                                            background: 'transparent',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            Explore
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: '1 1 400px', position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80" // Dancer/Woman image
                                alt="Healthiest You"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    filter: 'grayscale(100%) contrast(1.1)' // Black and white effect as per image
                                }}
                            />
                            {/* Decorative Number */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                right: '-50px',
                                transform: 'translateY(-50%)',
                                fontSize: '15rem',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--primary)',
                                opacity: '0.1',
                                zIndex: -1,
                                pointerEvents: 'none'
                            }}>
                                79
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FirstStep;

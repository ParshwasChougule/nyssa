import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const FirstStep = () => {
    return (
        <section className="section" style={{ backgroundColor: '#f9f9f9', overflow: 'hidden' }}>
            <div className="container">
                {/* Nyssa Brand Story Section */}
                <div style={{
                    display: 'flex',
                    gap: '80px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    marginBottom: '100px',
                    padding: '60px 0'
                }}>
                    {/* Left Side - Main Belief */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ flex: '1 1 400px' }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
                            marginBottom: '0',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            lineHeight: '1.4',
                            fontWeight: '700',
                            letterSpacing: '-0.5px'
                        }}>
                            Nyssa was created with a simple belief — healthcare should feel safe, respectful, and personal.
                        </h2>
                    </motion.div>

                    {/* Right Side - Supporting Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ flex: '1 1 400px' }}
                    >
                        <p style={{
                            marginBottom: '35px',
                            color: 'var(--text-light)',
                            fontSize: '1.05rem',
                            lineHeight: '1.8',
                            opacity: '0.9'
                        }}>
                            Many people delay treatment because they feel embarrassed, unsure, or uncomfortable. Nyssa exists to change that experience.
                        </p>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            <p style={{
                                margin: '0',
                                color: 'var(--secondary)',
                                fontSize: '1rem',
                                fontWeight: '500',
                                lineHeight: '1.6'
                            }}>
                                Here, you don't need perfect words.
                            </p>
                            <p style={{
                                margin: '0',
                                color: 'var(--secondary)',
                                fontSize: '1rem',
                                fontWeight: '500',
                                lineHeight: '1.6'
                            }}>
                                You don't need explanations.
                            </p>
                            <p style={{
                                margin: '0',
                                color: 'var(--secondary)',
                                fontSize: '1rem',
                                fontWeight: '500',
                                lineHeight: '1.6'
                            }}>
                                You just need to feel safe.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="split-section-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>


                    {/* Left Side - OUR VISION */}
                    <div className="split-content-left" style={{ flex: '1 1 450px', paddingRight: '40px', marginBottom: '40px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--secondary)',
                                marginBottom: '25px',
                                fontWeight: '700'
                            }}>
                                OUR VISION
                            </h2>

                            <div style={{
                                width: '60px',
                                height: '3px',
                                background: 'linear-gradient(90deg, var(--primary), #d4a5a5)',
                                marginBottom: '30px'
                            }}></div>

                            <p style={{
                                color: 'var(--text-light)',
                                lineHeight: '1.8',
                                fontSize: '1.15rem',
                                marginBottom: '0'
                            }}>
                                To create a trusted space where people can talk openly about personal health — without fear, judgement, or discomfort.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side - OUR MISSION */}
                    <div style={{ flex: '1 1 450px', position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--secondary)',
                                marginBottom: '25px',
                                fontWeight: '700'
                            }}>
                                OUR MISSION
                            </h2>

                            <div style={{
                                width: '60px',
                                height: '3px',
                                background: 'linear-gradient(90deg, var(--primary), #d4a5a5)',
                                marginBottom: '30px'
                            }}></div>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px'
                            }}>
                                {[
                                    'Compassionate and judgement-free care',
                                    'Medically sound and ethical treatment',
                                    'Inclusive and respectful environment',
                                    'Focus on long-term well-being'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '15px'
                                        }}
                                    >
                                        <div style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--primary)',
                                            flexShrink: 0,
                                            marginTop: '8px'
                                        }}></div>
                                        <span style={{
                                            fontSize: '1.1rem',
                                            color: 'var(--text-light)',
                                            lineHeight: '1.6'
                                        }}>
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>


                </div>




                {/* BLOG IDEAS Section */}
                <div style={{ marginTop: '100px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            marginBottom: '60px',
                            fontWeight: '700',
                            textAlign: 'center'
                        }}>
                            BLOG IDEAS
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '30px'
                        }}>
                            {[
                                'Why We Ignore Health Concerns and Why We Shouldn\'t',
                                'When Is It Time to See a Doctor for Intimate Health Issues?',
                                'Understanding Skin Changes: What\'s Normal and What\'s Not',
                                'Post-Pregnancy Body Changes Nobody Talks About',
                                'How Stress Affects Skin, Hair and Overall Health'
                            ].map((blog, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{
                                        padding: '30px 25px',
                                        backgroundColor: 'var(--white)',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        borderLeft: '4px solid var(--primary)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    whileHover={{
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 30px rgba(181, 131, 131, 0.15)'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '15px'
                                    }}>
                                        <span style={{
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            color: 'var(--primary)',
                                            fontFamily: 'var(--font-heading)',
                                            flexShrink: 0,
                                            lineHeight: '1'
                                        }}>
                                            {index + 1}.
                                        </span>
                                        <h3 style={{
                                            fontSize: '1.1rem',
                                            color: 'var(--secondary)',
                                            lineHeight: '1.6',
                                            margin: 0,
                                            fontWeight: '600'
                                        }}>
                                            {blog}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FirstStep;

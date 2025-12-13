import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    const heroStyle = {
        minHeight: '95vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'var(--white)',
        padding: '0 5%',
        position: 'relative',
        overflow: 'hidden',
    };

    const bgStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/banner.png")',
        zIndex: 0
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section style={heroStyle}>
            {/* Background Image */}
            <div className="hero-bg" style={bgStyle}></div>

            {/* Decorative overlay gradient */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)',
                zIndex: 1
            }}></div>

            <motion.div
                className="hero-content"
                style={{ maxWidth: '700px', textAlign: 'left', position: 'relative', zIndex: 2 }}
                initial="hidden"
                animate="visible"
                variants={contentVariants}
            >
                <motion.span variants={itemVariants} style={{
                    display: 'inline-block',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    marginBottom: '20px',
                    fontSize: '0.9rem',
                    background: 'rgba(255,255,255,0.15)',
                    padding: '10px 20px',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>
                    Centre of Excellence
                </motion.span>

                <motion.h1 variants={itemVariants} style={{
                    fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                    marginBottom: '25px',
                    color: 'var(--white)',
                    lineHeight: '1.1',
                    fontFamily: 'var(--font-heading)',
                    textShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}>
                    NYSSA <br />
                    <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Love Thyself</span>
                </motion.h1>

                <motion.p variants={itemVariants} style={{
                    fontSize: '1.3rem',
                    marginBottom: '50px',
                    opacity: '0.9',
                    fontWeight: '300',
                    maxWidth: '500px',
                    lineHeight: '1.6'
                }}>
                    Delivering women what they want. World-class cosmetic gynecology and aesthetic procedures.
                </motion.p>

                <motion.div className="hero-buttons" variants={itemVariants} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <Link to="/contact">
                        <motion.button
                            className="btn"
                            whileHover={{ scale: 1.05, backgroundColor: 'var(--primary-light)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: 'var(--white)',
                                color: 'var(--secondary)',
                                padding: '16px 40px',
                                fontSize: '1rem',
                                border: 'none',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                            }}
                        >
                            Book Appointment
                        </motion.button>
                    </Link>
                    <Link to="/services">
                        <motion.button
                            className="btn"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                border: '1px solid var(--white)',
                                color: 'var(--white)',
                                padding: '16px 40px',
                                fontSize: '1rem',
                                background: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            Explore Services
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

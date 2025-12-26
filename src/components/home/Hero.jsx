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

            {/* Hero Content Container */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '1400px',
                gap: '60px',
                position: 'relative',
                zIndex: 2,
                flexWrap: 'wrap'
            }}>
                {/* Left Side - Main Content */}
                <motion.div
                    className="hero-content"
                    style={{ maxWidth: '600px', textAlign: 'left', flex: '1 1 500px' }}
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
                        A Safe Space
                    </motion.span>

                    <motion.h1 variants={itemVariants} style={{
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        marginBottom: '25px',
                        color: 'var(--white)',
                        lineHeight: '1.1',
                        fontFamily: 'var(--font-heading)',
                        textShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        A Safe Space for Personal & Intimate Healthcare
                    </motion.h1>

                    <motion.p variants={itemVariants} style={{
                        fontSize: '1.3rem',
                        marginBottom: '50px',
                        opacity: '0.9',
                        fontWeight: '300',
                        maxWidth: '500px',
                        lineHeight: '1.6'
                    }}>
                        Where you can speak freely — without fear or judgement.
                    </motion.p>

                    <motion.div className="hero-buttons" variants={itemVariants} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Link to="/#book-appointment">
                            <motion.button
                                className="btn"
                                whileHover={{ scale: 1.05, backgroundColor: 'var(--primary)' }}
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
                                Book a Private Consultation
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
                                Speak to Our Expert
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Side - Brand Message */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        maxWidth: '500px',
                        flex: '1 1 400px',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(20px)',
                        padding: '40px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                    }}
                >
                    <p style={{
                        fontSize: '1.15rem',
                        lineHeight: '1.8',
                        color: 'var(--white)',
                        margin: 0,
                        fontWeight: '300'
                    }}>
                        Nyssa is a trusted healthcare space offering compassionate, confidential, and expert care for skin, hair, and intimate health concerns. Here, you are heard first. Treated with respect. And cared for with dignity.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

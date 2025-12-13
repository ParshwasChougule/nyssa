import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const CentreOfExcellence = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            display: 'block',
                            marginBottom: '20px'
                        }}>
                            Welcome to Nyssa
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            color: 'var(--secondary)',
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '30px',
                            lineHeight: '1.3'
                        }}>
                            Centre of Excellence for <br />
                            <span style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Cosmetic Gynecology</span>
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-light)',
                            lineHeight: '1.8',
                            marginBottom: '40px'
                        }}>
                            We are dedicated to empowering women by providing world-class aesthetic and functional treatments.
                            Our clinic combines medical expertise with artistic precision to help you regain your confidence
                            and embrace the best version of yourself. From non-surgical rejuvenation to advanced surgical procedures,
                            we deliver results that speak for themselves.
                        </p>
                        <div style={{ width: '80px', height: '3px', backgroundColor: 'var(--primary)', margin: '0 auto' }}></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CentreOfExcellence;

import React from 'react';
import { motion } from 'framer-motion';

const FeaturedMedia = () => {
    const logos = [
        "VOGUE", "FEMINA", "COSMOPOLITAN", "ELLE", "GRAZIA"
    ];

    return (
        <section style={{ padding: '60px 0', backgroundColor: '#f9f9f9', borderTop: '1px solid #eee' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: '#999',
                    fontSize: '0.8rem',
                    marginBottom: '40px'
                }}>
                    As Featured In
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '60px'
                }}>
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: '#ccc',
                                fontFamily: 'serif',
                                cursor: 'default'
                            }}
                            whileHover={{ color: 'var(--primary)', scale: 1.05 }}
                        >
                            {logo}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedMedia;

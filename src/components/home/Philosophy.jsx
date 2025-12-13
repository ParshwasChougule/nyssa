import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const Philosophy = () => {
    const items = [
        {
            title: "Safety & Ethics",
            desc: "We adhere to the highest international standards of medical safety and ethical practice. Your well-being is our non-negotiable priority.",
            icon: "🛡️"
        },
        {
            title: "Artistic Precision",
            desc: "Cosmetic gynecology is where science meets art. We sculpt and rejuvenate with a keen eye for detail and natural aesthetics.",
            icon: "✨"
        },
        {
            title: "Holistic Care",
            desc: "We believe in treating the whole woman. Our approach integrates physical transformation with emotional empowerment and confidence.",
            icon: "🌿"
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--secondary)', color: 'var(--white)', padding: '100px 0' }}>
            <div className="container">
                <SectionTitle title="Our Philosophy" subtitle="The Nyssa Standard" />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                textAlign: 'center',
                                padding: '40px 20px',
                                border: '1px solid rgba(197, 160, 89, 0.2)',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(255,255,255,0.02)'
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{item.icon}</div>
                            <h3 style={{
                                color: 'var(--primary)',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.5rem',
                                marginBottom: '15px'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;

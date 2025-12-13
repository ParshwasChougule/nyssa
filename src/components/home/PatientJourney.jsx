import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const PatientJourney = () => {
    const steps = [
        {
            number: "01",
            title: "Consultation",
            desc: "Begin with a private, in-depth consultation with Dr. Monica to discuss your concerns and goals."
        },
        {
            number: "02",
            title: "Custom Plan",
            desc: "Receive a tailored treatment plan designed specifically for your anatomy and desired outcome."
        },
        {
            number: "03",
            title: "Procedure",
            desc: "Experience world-class care during your treatment, performed with precision and safety protocols."
        },
        {
            number: "04",
            title: "Aftercare",
            desc: "Enjoy comprehensive follow-up care to ensure a smooth recovery and optimal results."
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <SectionTitle title="Your Journey" subtitle="Seamless & Supportive" />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '30px',
                    marginTop: '50px'
                }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{ position: 'relative', padding: '20px' }}
                        >
                            <span style={{
                                fontSize: '4rem',
                                color: 'rgba(197, 160, 89, 0.15)',
                                fontWeight: '700',
                                position: 'absolute',
                                top: '0',
                                left: '10px',
                                lineHeight: '1'
                            }}>
                                {step.number}
                            </span>
                            <div style={{ position: 'relative', zIndex: 1, paddingTop: '40px' }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    color: 'var(--secondary)',
                                    marginBottom: '15px',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{ color: 'var(--text-light)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PatientJourney;

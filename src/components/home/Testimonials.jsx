import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const Testimonials = () => {
    const reviews = [
        {
            text: "I regained my confidence after the Mommy Makeover. The results are natural and exactly what I wanted. Dr. Nyssa and her team are simply the best.",
            author: "Sarah J.",
            procedure: "Mommy Makeover"
        },
        {
            text: "The vaginal rejuvenation treatment was life-changing. I felt comfortable throughout the entire process, and the care was exceptional.",
            author: "Priya M.",
            procedure: "Laser Rejuvenation"
        },
        {
            text: "Professional, ethical, and highly skilled. I traveled from another city just for Dr. Nyssa, and it was worth every mile.",
            author: "Emily R.",
            procedure: "Labiaplasty"
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <SectionTitle title="Patient Stories" subtitle="Real Experiences" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                backgroundColor: 'var(--white)',
                                padding: '40px',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-sm)',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                fontSize: '4rem',
                                color: 'var(--primary-light)',
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                fontFamily: 'serif',
                                lineHeight: '1'
                            }}>
                                "
                            </div>
                            <p style={{
                                position: 'relative',
                                zIndex: 1,
                                fontSize: '1.1rem',
                                color: 'var(--text-main)',
                                fontStyle: 'italic',
                                marginBottom: '30px',
                                lineHeight: '1.6'
                            }}>
                                {review.text}
                            </p>
                            <div>
                                <h4 style={{ color: 'var(--secondary)', marginBottom: '5px', fontFamily: 'var(--font-heading)' }}>{review.author}</h4>
                                <span style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{review.procedure}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

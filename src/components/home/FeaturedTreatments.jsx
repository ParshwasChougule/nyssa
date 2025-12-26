import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CardSoft from '../ui/CardSoft';

const FeaturedTreatments = () => {
    const treatments = [
        {
            title: 'Vaginal Rejuvenation',
            image: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            desc: 'Restore the youthfulness and aesthetic appeal to your vagina, with procedures designed specifically for your condition.',
            link: '/services'
        },
        {
            title: 'Labiaplasty',
            image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            desc: 'Enhance the function and appearance of your vagina, with an efficient, accurate, and world-class procedure that reshapes your Labia.',
            link: '/services'
        },
        {
            title: 'Vaginal Tightening',
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            desc: 'Get rid of the unwanted changes in your body, with a smoother, tighter, and strengthened the vaginal area, and feel your absolute best.',
            link: '/services'
        }
    ];

    return (
        <section className="section" style={{
            background: 'linear-gradient(135deg, #f5f0ed 0%, #faf8f7 50%, #f0e8e4 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background elements */}
            <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(181,131,131,0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-150px',
                left: '-150px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(181,131,131,0.08) 0%, transparent 70%)',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ width: '100%' }}
                    >
                        {/* Main Heading */}
                        <h2 style={{
                            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                            color: 'var(--secondary)',
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '20px',
                            lineHeight: '1.2',
                            fontWeight: '700',
                            letterSpacing: '-0.5px'
                        }}>
                            OUR APPROACH TO CARE
                        </h2>

                        {/* Decorative line */}
                        <div style={{
                            width: '80px',
                            height: '4px',
                            background: 'linear-gradient(90deg, var(--primary), #d4a5a5)',
                            margin: '0 auto 30px',
                            borderRadius: '2px'
                        }}></div>

                        {/* Subheading */}
                        <p style={{
                            fontSize: '1.4rem',
                            color: 'var(--secondary)',
                            lineHeight: '1.6',
                            marginBottom: '60px',
                            fontWeight: '500',
                            fontStyle: 'italic'
                        }}>
                            We believe healthcare should feel human.
                        </p>


                        {/* Heading */}
                        <h3 style={{
                            fontSize: '1.6rem',
                            color: 'var(--secondary)',
                            marginBottom: '40px',
                            fontWeight: '700',
                            fontFamily: 'var(--font-heading)',
                            textAlign: 'center'
                        }}>
                            At Nyssa
                        </h3>

                        {/* Items in a row */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '40px',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            marginBottom: '50px'
                        }}>
                            {[
                                { text: 'You are never rushed', icon: '⏱️' },
                                { text: 'You are never judged', icon: '🤝' },
                                { text: 'You are always heard', icon: '👂' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.15) }}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '15px',
                                        padding: '0',
                                        minWidth: '180px',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, #d4a5a5, #c99d99)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        fontSize: '1.5rem',
                                        boxShadow: '0 4px 15px rgba(181, 131, 131, 0.25)'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <span style={{
                                        fontSize: '1.05rem',
                                        color: 'var(--secondary)',
                                        lineHeight: '1.5',
                                        fontWeight: '500'
                                    }}>
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Closing message with enhanced styling */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            style={{
                                maxWidth: '850px',
                                margin: '0 auto',
                                padding: '35px 40px',
                                background: 'linear-gradient(135deg, rgba(181,131,131,0.08) 0%, rgba(181,131,131,0.04) 100%)',
                                borderRadius: '16px',
                                border: '1px solid rgba(181, 131, 131, 0.15)'
                            }}
                        >
                            <p style={{
                                fontSize: '1.15rem',
                                color: 'var(--text-light)',
                                lineHeight: '1.8',
                                margin: 0
                            }}>
                                We combine <strong style={{ color: 'var(--primary)' }}>medical expertise</strong> with <strong style={{ color: 'var(--primary)' }}>emotional understanding</strong> to ensure every patient feels comfortable, respected, and confident throughout their care journey.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTreatments;

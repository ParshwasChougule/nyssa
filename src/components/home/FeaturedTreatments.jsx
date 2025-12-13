import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CardSoft from '../ui/CardSoft';

const FeaturedTreatments = () => {
    const treatments = [
        {
            title: 'Vaginal Rejuvenation',
            image: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Placeholder: Woman holding flower or similar
            desc: 'Restore the youthfulness and aesthetic appeal to your vagina, with procedures designed specifically for your condition.',
            link: '/services'
        },
        {
            title: 'Labiaplasty',
            image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Placeholder: Hands forming heart or similar
            desc: 'Enhance the function and appearance of your vagina, with an efficient, accurate, and world-class procedure that reshapes your Labia.',
            link: '/services'
        },
        {
            title: 'Vaginal Tightening',
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Placeholder: Woman body or similar
            desc: 'Get rid of the unwanted changes in your body, with a smoother, tighter, and strengthened the vaginal area, and feel your absolute best.',
            link: '/services'
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <div className="featured-treatments-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px'
                }}>
                    {treatments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div style={{
                                backgroundColor: 'var(--white)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{ height: '300px', overflow: 'hidden' }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontFamily: 'var(--font-heading)',
                                        marginBottom: '15px',
                                        color: 'var(--secondary)'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <div style={{
                                        width: '50px',
                                        height: '2px',
                                        backgroundColor: 'var(--accent)', // Using accent color (pinkish) as per image
                                        marginBottom: '20px'
                                    }}></div>
                                    <p style={{
                                        color: 'var(--text-light)',
                                        marginBottom: '30px',
                                        lineHeight: '1.6',
                                        flex: 1
                                    }}>
                                        {item.desc}
                                    </p>
                                    <Link to={item.link}>
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            style={{
                                                background: 'transparent',
                                                border: '1px solid var(--secondary)',
                                                padding: '10px 25px',
                                                textTransform: 'uppercase',
                                                fontSize: '0.8rem',
                                                letterSpacing: '1px',
                                                cursor: 'pointer',
                                                color: 'var(--secondary)'
                                            }}
                                        >
                                            Explore
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTreatments;

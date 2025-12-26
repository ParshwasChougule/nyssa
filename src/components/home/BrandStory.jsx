import React from 'react';
import { motion } from 'framer-motion';
import CardSoft from '../ui/CardSoft';

const BrandStory = () => {
    const brandSections = [
        {
            title: 'Vision',
            content: 'To create a safe, trusted space where people can talk about personal health without fear, judgement, or discomfort.'
        },
        {
            title: 'Mission',
            content: 'Nyssa\'s mission is to make healthcare more humane by:',
            points: [
                'Creating a judgement-free environment where people feel comfortable to speak',
                'Offering expert care with empathy, respect, and sensitivity',
                'Helping individuals heal with confidence - physically, emotionally, and mentally'
            ]
        }
    ];

    const brandEssence = {
        title: 'Brand Essence',
        intro: 'Nyssa is a space where people can finally exhale.',
        points: [
            'A space where nothing has to be explained, justified, or hidden.',
            'Where discomfort is met with understanding, not awkwardness.',
            'Where care begins with listening.'
        ],
        closing: 'Nyssa exists to hold space - gently, respectfully, and without judgement. Not to fix people, but to help them feel whole again.',
        tagline: 'Because healing begins the moment someone feels safe enough to speak.'
    };

    const philosophy = {
        title: 'Brand Philosophy',
        tagline: '"Nyssa se kaho."',
        subtitle: 'This isn\'t just a line. It\'s a feeling.',
        meaning: [
            'You don\'t have to filter your words here',
            'You don\'t have to feel awkward',
            'You don\'t have to carry discomfort alone'
        ],
        beliefs: [
            'The hardest part of healing is speaking up',
            'Silence often hurts more than symptoms',
            'Being heard is the first step toward recovery'
        ],
        closing: 'Here, conversations are held with care. And healing begins with trust.'
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="section" style={{ backgroundColor: '#faf8f7' }}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        color: 'var(--secondary)',
                        marginBottom: '20px'
                    }}>
                        Our Brand Story
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-light)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontStyle: 'italic'
                    }}>
                        "If you can't say it out loud... you can say it here."
                    </p>
                </motion.div>

                {/* Vision & Mission Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px',
                        marginBottom: '60px'
                    }}
                >
                    {brandSections.map((section, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <CardSoft style={{
                                padding: '40px',
                                height: '100%',
                                backgroundColor: 'var(--white)',
                                border: '1px solid rgba(181, 131, 131, 0.1)'
                            }}>
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.8rem',
                                    color: 'var(--primary)',
                                    marginBottom: '20px'
                                }}>
                                    {section.title}
                                </h3>
                                <p style={{
                                    fontSize: '1.05rem',
                                    color: 'var(--text-light)',
                                    lineHeight: '1.8',
                                    marginBottom: section.points ? '15px' : '0'
                                }}>
                                    {section.content}
                                </p>
                                {section.points && (
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {section.points.map((point, idx) => (
                                            <li key={idx} style={{
                                                fontSize: '1.05rem',
                                                color: 'var(--text-light)',
                                                lineHeight: '1.8',
                                                marginBottom: '10px',
                                                paddingLeft: '25px',
                                                position: 'relative'
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: 'var(--primary)',
                                                    fontWeight: 'bold'
                                                }}>•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </CardSoft>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Brand Essence - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginBottom: '60px' }}
                >
                    <CardSoft style={{
                        padding: '50px',
                        backgroundColor: 'var(--white)',
                        border: '2px solid var(--primary)',
                        textAlign: 'center'
                    }}>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '2rem',
                            color: 'var(--primary)',
                            marginBottom: '25px'
                        }}>
                            {brandEssence.title}
                        </h3>
                        <p style={{
                            fontSize: '1.3rem',
                            color: 'var(--secondary)',
                            fontWeight: '600',
                            marginBottom: '30px',
                            fontStyle: 'italic'
                        }}>
                            {brandEssence.intro}
                        </p>
                        <div style={{
                            maxWidth: '800px',
                            margin: '0 auto 30px',
                            textAlign: 'left'
                        }}>
                            {brandEssence.points.map((point, idx) => (
                                <p key={idx} style={{
                                    fontSize: '1.1rem',
                                    color: 'var(--text-light)',
                                    lineHeight: '1.8',
                                    marginBottom: '10px'
                                }}>
                                    {point}
                                </p>
                            ))}
                        </div>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-light)',
                            lineHeight: '1.8',
                            marginBottom: '20px',
                            maxWidth: '800px',
                            margin: '0 auto 20px'
                        }}>
                            {brandEssence.closing}
                        </p>
                        <p style={{
                            fontSize: '1.15rem',
                            color: 'var(--primary)',
                            fontWeight: '600',
                            fontStyle: 'italic'
                        }}>
                            {brandEssence.tagline}
                        </p>
                    </CardSoft>
                </motion.div>

                {/* Brand Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <CardSoft style={{
                        padding: '50px',
                        backgroundColor: 'var(--secondary)',
                        color: 'var(--white)'
                    }}>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '2rem',
                                color: 'var(--white)',
                                marginBottom: '20px'
                            }}>
                                {philosophy.title}
                            </h3>
                            <p style={{
                                fontSize: '2.5rem',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--primary)',
                                marginBottom: '10px',
                                fontStyle: 'italic'
                            }}>
                                {philosophy.tagline}
                            </p>
                            <p style={{
                                fontSize: '1.2rem',
                                fontStyle: 'italic',
                                opacity: 0.9
                            }}>
                                {philosophy.subtitle}
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '40px',
                            marginBottom: '40px'
                        }}>
                            <div>
                                <h4 style={{
                                    fontSize: '1.3rem',
                                    marginBottom: '20px',
                                    color: 'var(--primary)'
                                }}>
                                    It means:
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {philosophy.meaning.map((item, idx) => (
                                        <li key={idx} style={{
                                            fontSize: '1.05rem',
                                            lineHeight: '1.8',
                                            marginBottom: '10px',
                                            paddingLeft: '25px',
                                            position: 'relative',
                                            opacity: 0.9
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: 'var(--primary)',
                                                fontWeight: 'bold'
                                            }}>•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 style={{
                                    fontSize: '1.3rem',
                                    marginBottom: '20px',
                                    color: 'var(--primary)'
                                }}>
                                    Nyssa believes that:
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {philosophy.beliefs.map((item, idx) => (
                                        <li key={idx} style={{
                                            fontSize: '1.05rem',
                                            lineHeight: '1.8',
                                            marginBottom: '10px',
                                            paddingLeft: '25px',
                                            position: 'relative',
                                            opacity: 0.9
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: 'var(--primary)',
                                                fontWeight: 'bold'
                                            }}>•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p style={{
                            fontSize: '1.15rem',
                            textAlign: 'center',
                            fontStyle: 'italic',
                            color: 'var(--primary)',
                            fontWeight: '600'
                        }}>
                            {philosophy.closing}
                        </p>
                    </CardSoft>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandStory;

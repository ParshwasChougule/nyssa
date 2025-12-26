import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const FirstStep = () => {
    return (
        <section className="section" style={{ backgroundColor: '#f9f9f9', overflow: 'hidden' }}>
            <div className="container">
                <div className="split-section-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>


                    {/* Left Side - OUR VISION */}
                    <div className="split-content-left" style={{ flex: '1 1 450px', paddingRight: '40px', marginBottom: '40px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--secondary)',
                                marginBottom: '25px',
                                fontWeight: '700'
                            }}>
                                OUR VISION
                            </h2>

                            <div style={{
                                width: '60px',
                                height: '3px',
                                background: 'linear-gradient(90deg, var(--primary), #d4a5a5)',
                                marginBottom: '30px'
                            }}></div>

                            <p style={{
                                color: 'var(--text-light)',
                                lineHeight: '1.8',
                                fontSize: '1.15rem',
                                marginBottom: '0'
                            }}>
                                To create a trusted space where people can talk openly about personal health — without fear, judgement, or discomfort.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side - OUR MISSION */}
                    <div style={{ flex: '1 1 450px', position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--secondary)',
                                marginBottom: '25px',
                                fontWeight: '700'
                            }}>
                                OUR MISSION
                            </h2>

                            <div style={{
                                width: '60px',
                                height: '3px',
                                background: 'linear-gradient(90deg, var(--primary), #d4a5a5)',
                                marginBottom: '30px'
                            }}></div>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px'
                            }}>
                                {[
                                    'Compassionate and judgement-free care',
                                    'Medically sound and ethical treatment',
                                    'Inclusive and respectful environment',
                                    'Focus on long-term well-being'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '15px'
                                        }}
                                    >
                                        <div style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--primary)',
                                            flexShrink: 0,
                                            marginTop: '8px'
                                        }}></div>
                                        <span style={{
                                            fontSize: '1.1rem',
                                            color: 'var(--text-light)',
                                            lineHeight: '1.6'
                                        }}>
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>


                </div>

                {/* SERVICES Section */}
                <div style={{ marginTop: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            marginBottom: '60px',
                            fontWeight: '700',
                            textAlign: 'center'
                        }}>
                            SERVICES
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '40px'
                        }}>
                            {[
                                {
                                    title: 'Medical Dermatology',
                                    items: [
                                        'Acne and acne scar treatment',
                                        'Pigmentation and melasma',
                                        'Psoriasis, eczema and skin infections',
                                        'Vitiligo and chronic skin conditions',
                                        'Skin cancer screening',
                                        'Mole, wart and cyst removal'
                                    ]
                                },
                                {
                                    title: 'Advanced Skin & Aesthetic Treatments',
                                    items: [
                                        'Chemical peels',
                                        'PRP for skin rejuvenation',
                                        'Microneedling',
                                        'Botox and injectables',
                                        'Laser treatments',
                                        'Tattoo removal'
                                    ]
                                },
                                {
                                    title: 'Hair & Scalp Care',
                                    items: [
                                        'Hair fall treatment',
                                        'PRP for hair regrowth',
                                        'Alopecia management',
                                        'Hair restoration therapies'
                                    ]
                                },
                                {
                                    title: 'Intimate & Pelvic Health Care',
                                    items: [
                                        'Vaginal dryness and laxity',
                                        'Post-delivery recovery',
                                        'Urinary incontinence',
                                        'Pelvic floor rehabilitation',
                                        'Cervical health concerns'
                                    ]
                                },
                                {
                                    title: 'Laser & Advanced Procedures',
                                    items: [
                                        'CO2 Laser',
                                        'Nd:YAG Laser',
                                        'Laser hair reduction',
                                        'Skin rejuvenation',
                                        'Scar and pigmentation treatments'
                                    ]
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{
                                        padding: '30px',
                                        backgroundColor: 'var(--white)',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                    }}
                                    whileHover={{
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 30px rgba(181, 131, 131, 0.15)'
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '1.3rem',
                                        color: 'var(--secondary)',
                                        marginBottom: '20px',
                                        fontWeight: '700',
                                        fontFamily: 'var(--font-heading)'
                                    }}>
                                        {service.title}
                                    </h3>

                                    <div style={{
                                        width: '40px',
                                        height: '3px',
                                        background: 'linear-gradient(90deg, var(--primary), #d4a5a5)',
                                        marginBottom: '20px'
                                    }}></div>

                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '12px',
                                                marginBottom: '12px',
                                                color: 'var(--text-light)',
                                                fontSize: '0.95rem',
                                                lineHeight: '1.6'
                                            }}>
                                                <span style={{
                                                    color: 'var(--primary)',
                                                    fontSize: '1.2rem',
                                                    lineHeight: '1',
                                                    marginTop: '2px'
                                                }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ABOUT THE FOUNDER Section */}
                <div style={{ marginTop: '100px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            marginBottom: '60px',
                            fontWeight: '700',
                            textAlign: 'center'
                        }}>
                            ABOUT THE FOUNDER
                        </h2>

                        <div style={{
                            display: 'flex',
                            gap: '50px',
                            flexWrap: 'wrap',
                            alignItems: 'flex-start'
                        }}>
                            {/* Left Side - Bio */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{ flex: '1 1 400px' }}
                            >
                                <h3 style={{
                                    fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--secondary)',
                                    marginBottom: '15px',
                                    fontWeight: '700'
                                }}>
                                    Dr. Monika Vijay Kullolli
                                </h3>

                                <div style={{
                                    width: '80px',
                                    height: '3px',
                                    background: 'linear-gradient(90deg, var(--primary), #d4a5a5)',
                                    marginBottom: '30px',
                                    borderRadius: '2px'
                                }}></div>

                                <p style={{
                                    fontSize: '1.1rem',
                                    color: 'var(--text-light)',
                                    lineHeight: '1.8',
                                    marginBottom: '25px'
                                }}>
                                    Dr. Monika Kullolli is a senior Consultant Gynaecologist and Medical Superintendent with decades of experience in women's health, pelvic care, and advanced gynaecological procedures.
                                </p>

                                <p style={{
                                    fontSize: '1.05rem',
                                    color: 'var(--text-light)',
                                    lineHeight: '1.8',
                                    marginBottom: '0',
                                    fontWeight: '500'
                                }}>
                                    She is the Head of the Department of OBG at Kullolli Institute of Health Services, Sangli.
                                </p>
                            </motion.div>

                            {/* Right Side - Professional Highlights */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{ flex: '1 1 400px' }}
                            >
                                <h4 style={{
                                    fontSize: '1.4rem',
                                    color: 'var(--secondary)',
                                    marginBottom: '25px',
                                    fontWeight: '700',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    Professional Highlights:
                                </h4>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px'
                                }}>
                                    {[
                                        'Gold Medalist in Quality Management',
                                        'Trained in Pelviscopy (Germany)',
                                        'Specialist in Cosmetic Gynaecology & Pelvic Floor Care',
                                        'Certified in Colposcopy, Ultrasound & OASIS Repair',
                                        'International faculty for surgical workshops',
                                        'Author of multiple research papers',
                                        'Awarded for excellence in healthcare and social service'
                                    ].map((highlight, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.1 + (index * 0.08) }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '15px'
                                            }}
                                        >
                                            <div style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: 'var(--primary)',
                                                flexShrink: 0,
                                                marginTop: '8px'
                                            }}></div>
                                            <span style={{
                                                fontSize: '1.05rem',
                                                color: 'var(--text-light)',
                                                lineHeight: '1.6'
                                            }}>
                                                {highlight}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* BLOG IDEAS Section */}
                <div style={{ marginTop: '100px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            marginBottom: '60px',
                            fontWeight: '700',
                            textAlign: 'center'
                        }}>
                            BLOG IDEAS
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '30px'
                        }}>
                            {[
                                'Why We Ignore Health Concerns and Why We Shouldn\'t',
                                'When Is It Time to See a Doctor for Intimate Health Issues?',
                                'Understanding Skin Changes: What\'s Normal and What\'s Not',
                                'Post-Pregnancy Body Changes Nobody Talks About',
                                'How Stress Affects Skin, Hair and Overall Health'
                            ].map((blog, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{
                                        padding: '30px 25px',
                                        backgroundColor: 'var(--white)',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        borderLeft: '4px solid var(--primary)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    whileHover={{
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 30px rgba(181, 131, 131, 0.15)'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '15px'
                                    }}>
                                        <span style={{
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            color: 'var(--primary)',
                                            fontFamily: 'var(--font-heading)',
                                            flexShrink: 0,
                                            lineHeight: '1'
                                        }}>
                                            {index + 1}.
                                        </span>
                                        <h3 style={{
                                            fontSize: '1.1rem',
                                            color: 'var(--secondary)',
                                            lineHeight: '1.6',
                                            margin: 0,
                                            fontWeight: '600'
                                        }}>
                                            {blog}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FirstStep;

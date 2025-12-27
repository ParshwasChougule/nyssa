import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUserMd, FaShieldAlt, FaUniversalAccess, FaHandHoldingMedical } from 'react-icons/fa';

const CentreOfExcellence = () => {
    const features = [
        {
            icon: <FaHeart />,
            title: 'Calm Environment',
            desc: 'A judgement-free space where you can relax.'
        },
        {
            icon: <FaUserMd />,
            title: 'Expert Care',
            desc: 'Medical excellence delivered with empathy.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Complete Privacy',
            desc: 'Discretion and confidentiality guaranteed.'
        },
        {
            icon: <FaUniversalAccess />,
            title: 'Inclusive Approach',
            desc: 'Gender-neutral care respecting every identity.'
        },
        {
            icon: <FaHandHoldingMedical />,
            title: 'Ethical Treatments',
            desc: 'Evidence-based procedures you can trust.'
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: '#fff5f5', padding: '100px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            color: 'var(--secondary)',
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '20px',
                            fontWeight: '700'
                        }}
                    >
                        WHY NYSSA?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: '100px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            height: '3px',
                            backgroundColor: 'var(--primary)',
                            margin: '0 auto 30px'
                        }}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-light)',
                            lineHeight: '1.8'
                        }}
                    >
                        At Nyssa, we understand that some health concerns are difficult to talk about. That hesitation is natural — and that's exactly where we begin.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    justifyContent: 'center'
                }}>
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(181, 131, 131, 0.2)' }}
                            style={{
                                backgroundColor: 'var(--white)',
                                padding: '40px 30px',
                                borderRadius: '16px',
                                textAlign: 'center',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(181, 131, 131, 0.1)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                backgroundColor: '#fff0f0',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                color: 'var(--primary)',
                                fontSize: '1.8rem'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                color: 'var(--secondary)',
                                marginBottom: '10px',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: '600'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                fontSize: '0.95rem',
                                color: 'var(--text-light)',
                                lineHeight: '1.6'
                            }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        textAlign: 'center',
                        marginTop: '80px',
                        padding: '40px',
                        backgroundColor: 'rgba(181, 131, 131, 0.1)',
                        borderRadius: '20px',
                        maxWidth: '900px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    <p style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                        color: 'var(--secondary)',
                        fontFamily: 'var(--font-heading)',
                        fontStyle: 'italic',
                        marginBottom: '0',
                        fontWeight: '500'
                    }}>
                        "Because healing starts when you feel safe enough to speak."
                    </p>
                </motion.div>

                {/* SERVICES Section */}
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
            </div>
        </section>
    );
};

export default CentreOfExcellence;

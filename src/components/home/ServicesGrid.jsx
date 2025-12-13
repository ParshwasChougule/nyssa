import React from 'react';
import { motion } from 'framer-motion';
import CardSoft from '../ui/CardSoft';
import SectionTitle from '../common/SectionTitle';
import {
    FaCompressArrowsAlt,
    FaSpa,
    FaUserMd,
    FaDna,
    FaBriefcaseMedical,
    FaTint,
    FaRunning,
    FaClock,
    FaChild,
    FaFemale,
    FaHandHoldingMedical,
    FaSyringe
} from 'react-icons/fa';

const ServicesGrid = () => {
    const services = [
        {
            title: 'Vaginal Tightening',
            desc: 'Non-surgical solutions for improved tightness and sensation.',
            icon: <FaCompressArrowsAlt size={35} color="var(--primary)" />
        },
        {
            title: 'Vaginal Rejuvenation',
            desc: 'Revitalize and restore natural function with advanced care.',
            icon: <FaSpa size={35} color="var(--primary)" />
        },
        {
            title: 'Cervical Rejuvenation',
            desc: 'Specialized treatments for cervical health and wellness.',
            icon: <FaUserMd size={35} color="var(--primary)" />
        },
        {
            title: 'Exosome Therapy',
            desc: 'Regenerative therapy using exosomes for tissue repair.',
            icon: <FaDna size={35} color="var(--primary)" />
        },
        {
            title: 'Cervical Erosion',
            desc: 'Effective treatment for cervical erosion and discomfort.',
            icon: <FaBriefcaseMedical size={35} color="var(--primary)" />
        },
        {
            title: 'Urinary Incontinence',
            desc: 'Comprehensive solutions for bladder control and confidence.',
            icon: <FaTint size={35} color="var(--primary)" />
        },
        {
            title: 'Stress Urinary Incontinence (SUI)',
            desc: 'Treat leaks during physical activity like coughing or sneezing.',
            icon: <FaRunning size={35} color="var(--primary)" />
        },
        {
            title: 'Urge Incontinence',
            desc: 'Manage sudden, intense urges to urinate.',
            icon: <FaClock size={35} color="var(--primary)" />
        },
        {
            title: 'Pelvic Floor Rehabilitation',
            desc: 'Strengthen and restore pelvic floor muscles.',
            icon: <FaFemale size={35} color="var(--primary)" />
        },
        {
            title: 'Lichen Sclerosus',
            desc: 'Specialized care for this chronic skin condition.',
            icon: <FaHandHoldingMedical size={35} color="var(--primary)" />
        },
        {
            title: 'Kama Sutra Shot | PRP Therapy',
            desc: 'Platelet-Rich Plasma therapy for enhanced sensitivity.',
            icon: <FaSyringe size={35} color="var(--primary)" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="section" style={{ backgroundColor: 'transparent' }}>
            <div className="container">
                <SectionTitle title="Our Expertise" subtitle="Specialized Care" />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                    }}
                >
                    {services.map((service, index) => (
                        <motion.div variants={itemVariants} key={index} style={{ height: '100%' }}>
                            <CardSoft style={{
                                padding: '40px 30px',
                                textAlign: 'center',
                                border: '1px solid var(--primary)',
                                borderRadius: '20px',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'var(--white)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            >
                                <div style={{
                                    marginBottom: '25px',
                                    background: '#FFF0F5', // Light pink background
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 'inset 0 0 20px rgba(212, 140, 149, 0.2)'
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ marginBottom: '15px', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--secondary)' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-light)', lineHeight: '1.6', fontSize: '0.95rem' }}>{service.desc}</p>
                            </CardSoft>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesGrid;

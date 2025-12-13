import React from 'react';
import { motion } from 'framer-motion';
import CardSoft from '../ui/CardSoft';
import SectionTitle from '../common/SectionTitle';
import {
    FaFemale,
    FaTint,
    FaNotesMedical,
    FaSpa,
    FaGem,
    FaHeart,
    FaRunning,
    FaCheck
} from 'react-icons/fa';

const ServicesGrid = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const categories = [
        {
            title: 'Vulvovaginal Conditions',
            icon: <FaFemale size={30} color="var(--primary)" />,
            items: [
                'Vaginal tightening for Laxity',
                'Vaginal tissue hydration & Lubrication',
                'Vaginismus (Painful touch)',
                'Vaginal Rejuvenation post child birth',
                'Post menopausal Vaginal atrophy',
                'Genito Urinary syndrome of Menopause',
                'Vulvo Vaginal Lichen Sclerosus',
                'PRP Therapy',
                'Plasmaporation'
            ]
        },
        {
            title: 'Urinary Conditions',
            icon: <FaTint size={30} color="var(--primary)" />,
            items: [
                'Urge Incontinence (Bladder Oversensitivity)',
                'Mild to Moderate Stress Incontinence',
                'Voiding Dysfunction'
            ]
        },
        {
            title: 'Cervical Conditions',
            icon: <FaNotesMedical size={30} color="var(--primary)" />,
            items: [
                'Cervical Erosion (Ectopy)',
                'Cervical HPV Infections',
                'Cervical Discharges & Infections',
                'Cervical Rejuvenation'
            ]
        },
        {
            title: 'Feminine Rejuvenation',
            icon: <FaSpa size={30} color="var(--primary)" />,
            items: [
                'Vulval Rejuvenation',
                'Vaginal Rejuvenation',
                'Cervical Rejuvenation',
                'Sexual Rejuvenation'
            ]
        },
        {
            title: 'Cosmetic Procedures',
            icon: <FaGem size={30} color="var(--primary)" />,
            items: [
                'Mommy Makeover',
                'Vulval Fillers',
                'Labial Firming & Lifting',
                'Labial Fillers',
                'Intimate Bleaching'
            ]
        },
        {
            title: 'Sexual Rejuvenation',
            icon: <FaHeart size={30} color="var(--primary)" />,
            items: [
                'Kamasutra Shot',
                'O-Shot',
                'G-Shot',
                'Hydration IV Drip'
            ]
        },
        {
            title: 'Pelvic Floor Rehabilitation',
            icon: <FaRunning size={30} color="var(--primary)" />,
            items: [
                'Bladder Oversensitivity',
                'Voiding Dysfunction',
                'Detrusor Overactivity',
                'Stress Urinary Incontinence',
                'Recurrent UTI',
                'Dyspareunia (Painful Coitus)',
                'Perineal & Pelvic Pain',
                'Vaginal Laxity',
                'Lower Abdominal Wall Laxity',
                '1st Degree Pelvic Organ Prolapse',
                'Anal Incontinence'
            ]
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
                <SectionTitle title="Comprehensive Care" subtitle="Our Specialized Services" />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px',
                        alignItems: 'start'
                    }}
                >
                    {categories.map((category, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={index}
                            style={{ height: 'auto' }}
                            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                            onClick={() => isMobile && setHoveredIndex(hoveredIndex === index ? null : index)}
                        >
                            <CardSoft style={{
                                padding: '40px',
                                border: '1px solid rgba(181, 131, 131, 0.2)',
                                borderRadius: '24px',
                                height: 'auto', // Changed from 100% to auto
                                minHeight: '160px', // Just enough for icon + title
                                backgroundColor: 'var(--white)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center' // Center vertically when collapsed
                            }}
                                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(181, 131, 131, 0.15)' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: hoveredIndex === index ? '25px' : '0', // Adjust margin
                                    borderBottom: hoveredIndex === index ? '1px solid rgba(181, 131, 131, 0.1)' : 'none',
                                    paddingBottom: hoveredIndex === index ? '20px' : '0',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{
                                        marginRight: '20px',
                                        background: 'rgba(181, 131, 131, 0.08)',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        {category.icon}
                                    </div>
                                    <h3 style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '1.5rem',
                                        color: 'var(--secondary)',
                                        margin: 0
                                    }}>
                                        {category.title}
                                    </h3>
                                </div>

                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: hoveredIndex === index ? 'auto' : 0,
                                        opacity: hoveredIndex === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {category.items.map((item, idx) => (
                                            <li key={idx} style={{
                                                marginBottom: '12px',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                fontSize: '0.95rem',
                                                color: 'var(--text-light)',
                                                lineHeight: '1.5'
                                            }}>
                                                <span style={{
                                                    color: 'var(--primary)',
                                                    marginRight: '12px',
                                                    marginTop: '4px',
                                                    fontSize: '0.8rem'
                                                }}>
                                                    <FaCheck />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </CardSoft>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesGrid;

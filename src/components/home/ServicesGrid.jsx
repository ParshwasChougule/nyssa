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
    FaCheck,
    FaBacteria,
    FaPalette,
    FaUserMd,
    FaCut,
    FaStethoscope,
    FaMicroscope,
    FaBolt,
    FaFlask,
    FaSyringe,
    FaMagic,
    FaVenusMars,
    FaVenus
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
        // A. MEDICAL DERMATOLOGY
        {
            title: 'Skin Infections & Medical Conditions',
            icon: <FaBacteria size={30} color="var(--primary)" />,
            items: [
                'Fungal infections',
                'Psoriasis',
                'Eczema',
                'Lichen planus',
                'Bullous disorders',
                'Bacterial & viral infections',
                'Leprosy',
                'Sexually Transmitted Diseases (STDs)'
            ]
        },
        {
            title: 'Pigmentation & Skin Brightening',
            icon: <FaPalette size={30} color="var(--primary)" />,
            items: [
                'Melasma',
                'Vitiligo',
                'Dark circles',
                'Uneven skin tone',
                'Hyperpigmentation'
            ]
        },
        {
            title: 'Acne & Scar Management',
            icon: <FaUserMd size={30} color="var(--primary)" />,
            items: [
                'Acne treatment',
                'Acne scar treatment',
                'Nodulocystic acne',
                'Scar revision',
                'Microneedling',
                'Microneedling with iPRF'
            ]
        },
        {
            title: 'Hair & Scalp Treatments',
            icon: <FaCut size={30} color="var(--primary)" />,
            items: [
                'PRP therapy for hair',
                'Alopecia areata treatment'
            ]
        },
        {
            title: 'Skin Growth & Lesion Removal',
            icon: <FaStethoscope size={30} color="var(--primary)" />,
            items: [
                'Skin tags',
                'DPN',
                'Warts',
                'Molluscum',
                'Milia',
                'Sebaceous cyst',
                'Mole removal'
            ]
        },
        {
            title: 'Advanced Dermatology',
            icon: <FaMicroscope size={30} color="var(--primary)" />,
            items: [
                'Intralesional steroid therapy (ILS)',
                'Dermoscopy',
                'Skin biopsy'
            ]
        },
        {
            title: 'Laser & Energy-Based Treatments',
            icon: <FaBolt size={30} color="var(--primary)" />,
            items: [
                'CO2 Laser',
                'Nd:YAG Laser',
                'Fractional Laser',
                'Diode Laser',
                'IPL',
                'Tattoo removal'
            ]
        },

        // B. AESTHETIC & COSMETIC DERMATOLOGY
        {
            title: 'Chemical Peels',
            icon: <FaFlask size={30} color="var(--primary)" />,
            items: [
                'Glycolic peel',
                'Salicylic peel',
                'TCA peel',
                'Yellow peel',
                'No-melan peel'
            ]
        },
        {
            title: 'Injectables & Aesthetics',
            icon: <FaSyringe size={30} color="var(--primary)" />,
            items: [
                'Botox',
                'Fillers',
                'Skin boosters'
            ]
        },
        {
            title: 'Skin Rejuvenation',
            icon: <FaMagic size={30} color="var(--primary)" />,
            items: [
                'PRP with Dermapen',
                'Anti-aging therapies'
            ]
        },
        {
            title: 'Hair Restoration',
            icon: <FaCut size={30} color="var(--primary)" />,
            items: [
                'PRP hair therapy',
                'Hair transplant'
            ]
        },

        // C. VULVOVAGINAL & INTIMATE HEALTH
        {
            title: 'Vulvovaginal Conditions',
            icon: <FaFemale size={30} color="var(--primary)" />,
            items: [
                'Vaginal laxity',
                'Vaginal dryness',
                'Vaginismus',
                'Post childbirth rejuvenation',
                'Post menopausal atrophy',
                'Lichen sclerosus'
            ]
        },
        {
            title: 'Cervical Conditions',
            icon: <FaNotesMedical size={30} color="var(--primary)" />,
            items: [
                'Cervical erosion',
                'Cervical ectopy',
                'HPV infections',
                'Cervical infections',
                'Cervical rejuvenation'
            ]
        },
        {
            title: 'Urinary Conditions',
            icon: <FaTint size={30} color="var(--primary)" />,
            items: [
                'Urge incontinence',
                'Stress incontinence'
            ]
        },

        // D. PELVIC FLOOR REHABILITATION
        {
            title: 'Pelvic Floor Rehabilitation',
            icon: <FaRunning size={30} color="var(--primary)" />,
            items: [
                'Bladder hypersensitivity',
                'Voiding dysfunction',
                'Recurrent UTI',
                'Pelvic pain',
                'Vaginal laxity',
                'Pelvic organ prolapse',
                'Anal incontinence'
            ]
        },

        // E. FEMININE & SEXUAL WELLNESS
        {
            title: 'Feminine & Sexual Wellness',
            icon: <FaVenusMars size={30} color="var(--primary)" />,
            items: [
                'Vulval rejuvenation',
                'Vaginal rejuvenation',
                'Cervical rejuvenation',
                'O-shot',
                'G-shot',
                'Kamasutra shot'
            ]
        },

        // F. COSMETIC & BODY AESTHETICS
        {
            title: 'Cosmetic & Body Aesthetics',
            icon: <FaVenus size={30} color="var(--primary)" />,
            items: [
                'Mamma makeover',
                'Vulval fillers',
                'Labial fillers',
                'Labial tightening',
                'Intimate bleaching',
                'Sclerotherapy'
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
                <SectionTitle title="Our Complete Range of Services" subtitle="Medical Dermatology, Aesthetics & Intimate Wellness" />
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

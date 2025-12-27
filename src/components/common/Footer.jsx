import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#111',
        color: 'var(--white)',
        padding: '80px 0 20px',
        borderTop: '5px solid var(--primary)',
        textAlign: 'center'
    };

    const columnStyle = {
        flex: '1 1 250px',
        padding: '0 20px',
        marginBottom: '30px'
    };

    const headingStyle = {
        color: 'var(--primary)',
        marginBottom: '25px',
        fontSize: '1.1rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: '600'
    };

    const linkStyle = {
        display: 'block',
        color: '#aaa',
        marginBottom: '10px',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        fontSize: '0.95rem'
    };

    const socialIconStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--white)',
        cursor: 'pointer'
    };



    const socialLinks = [
        { icon: <FaFacebookF />, key: 'fb', url: 'https://www.facebook.com/profile.php?id=61584980792095' },
        { icon: <FaInstagram />, key: 'ig', url: 'https://www.instagram.com/nyssa_health/?fbclid=IwY2xjawO8Z1VleHRuA2FlbQIxMQBicmlkETFJYzVqMnRJcmpMWmJWN2RDc3J0YwZhcHBfaWQBMAABHmB4x0SGawY4keoGNy4De6593RkHtyeeE2MJGtSXGIU1Tix-moVWfyJWcP4G_aem_bjkSpFruYMCZ66HHHQLd4Q' },
        { icon: <FaLinkedinIn />, key: 'li', url: '#' },
        { icon: <FaYoutube />, key: 'yt', url: '#' }
    ];

    return (
        <footer style={footerStyle}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '0 auto', gap: '40px' }}>

                {/* Brand Column */}
                <div style={{ ...columnStyle, textAlign: 'left' }}>
                    <Link to="/" style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--white)', textDecoration: 'none', display: 'block', marginBottom: '20px' }}>
                        NYSSA<span style={{ color: 'var(--primary)' }}>.</span>
                    </Link>
                    <p style={{ color: '#888', lineHeight: '1.8', marginBottom: '30px' }}>
                        Centre of Excellence for Cosmetic Gynecology. <br />
                        Empowering women through science, art, and compassionate care.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '15px' }}>
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.key}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={socialIconStyle}
                                whileHover={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', color: '#000' }}
                            >
                                <span style={{ fontSize: '1rem', display: 'flex' }}>{social.icon}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Treatments Column */}
                <div style={{ ...columnStyle, textAlign: 'left' }}>
                    <h4 style={headingStyle}>Treatments</h4>
                    <Link to="/services" style={linkStyle}>Medical Dermatology</Link>
                    <Link to="/services" style={linkStyle}>Advanced Skin & Aesthetic Treatments</Link>
                    <Link to="/services" style={linkStyle}>Hair & Scalp Care</Link>
                    <Link to="/services" style={linkStyle}>Intimate & Pelvic Health Care</Link>
                    <Link to="/services" style={linkStyle}>Laser & Advanced Procedures</Link>
                </div>

                {/* Patient Info Column */}
                <div style={{ ...columnStyle, textAlign: 'left' }}>
                    <h4 style={headingStyle}>Patient Info</h4>
                    <Link to="/about" style={linkStyle}>About Dr. Monica</Link>
                    <Link to="/contact" style={linkStyle}>Book Consultation</Link>
                    <Link to="/contact" style={linkStyle}>Privacy Policy</Link>
                </div>

                {/* Contact Column */}
                <div style={{ ...columnStyle, textAlign: 'left' }}>
                    <h4 style={headingStyle}>Contact Us</h4>
                    <p style={{ color: '#aaa', marginBottom: '15px', display: 'flex', justifyContent: 'flex-start' }}>
                        <span style={{ color: 'var(--primary)', marginRight: '10px', marginTop: '3px' }}><FaMapMarkerAlt /></span>
                        Vinaya residency , 1st floor, Vishrambag, Sangli 416 415
                    </p>
                    <p style={{ color: '#aaa', marginBottom: '15px', display: 'flex', justifyContent: 'flex-start' }}>
                        <span style={{ color: 'var(--primary)', marginRight: '10px', marginTop: '3px' }}><FaPhoneAlt /></span>
                        +91 9322667372
                    </p>
                    <p style={{ color: '#aaa', marginBottom: '15px', display: 'flex', justifyContent: 'flex-start' }}>
                        <span style={{ color: 'var(--primary)', marginRight: '10px', marginTop: '3px' }}><FaEnvelope /></span>
                        nyssahealth@gmail.com
                    </p>
                    <p style={{ color: '#aaa', display: 'flex', justifyContent: 'flex-start' }}>
                        <span style={{ color: 'var(--primary)', marginRight: '10px', marginTop: '3px' }}><FaClock /></span>
                        Mon - Sat: 10:00 AM - 7:00 PM
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container" style={{
                borderTop: '1px solid rgba(255,255,255,0.05)',
                marginTop: '50px',
                paddingTop: '25px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
                color: '#666',
                fontSize: '0.9rem'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left' }}>
                    <p>&copy; {new Date().getFullYear()} Nyssa Clinic. All rights reserved.</p>
                    <p style={{ opacity: 0.8 }}>
                        Designed & Developed by <motion.a
                            href="https://digisahyadri.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'inherit', textDecoration: 'none', display: 'inline-block' }}
                            whileHover={{ color: '#007bff' }}
                        >
                            digisahyadri.com
                        </motion.a>
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

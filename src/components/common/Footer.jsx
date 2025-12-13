import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#111',
        color: 'var(--white)',
        padding: '80px 0 20px',
        borderTop: '5px solid var(--primary)'
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
        marginRight: '15px',
        color: 'var(--white)',
        cursor: 'pointer'
    };



    const socialLinks = [
        { icon: <FaFacebookF />, key: 'fb' },
        { icon: <FaInstagram />, key: 'ig' },
        { icon: <FaLinkedinIn />, key: 'li' },
        { icon: <FaYoutube />, key: 'yt' }
    ];

    return (
        <footer style={footerStyle}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '0 -20px' }}>

                {/* Brand Column */}
                <div style={columnStyle}>
                    <Link to="/" style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--white)', textDecoration: 'none', display: 'block', marginBottom: '20px' }}>
                        NYSSA<span style={{ color: 'var(--primary)' }}>.</span>
                    </Link>
                    <p style={{ color: '#888', lineHeight: '1.8', marginBottom: '30px' }}>
                        Centre of Excellence for Cosmetic Gynecology. <br />
                        Empowering women through science, art, and compassionate care.
                    </p>
                    <div style={{ display: 'flex' }}>
                        {socialLinks.map((social) => (
                            <motion.div
                                key={social.key}
                                style={socialIconStyle}
                                whileHover={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', color: '#000' }}
                            >
                                <span style={{ fontSize: '1rem', display: 'flex' }}>{social.icon}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Treatments Column */}
                <div style={columnStyle}>
                    <h4 style={headingStyle}>Treatments</h4>
                    <Link to="/services" style={linkStyle}>Vaginal Rejuvenation</Link>
                    <Link to="/mommy-makeover" style={linkStyle}>Mommy Makeover</Link>
                    <Link to="/services" style={linkStyle}>Labiaplasty</Link>
                    <Link to="/services" style={linkStyle}>Hymenoplasty</Link>
                    <Link to="/services" style={linkStyle}>O-Shot (PRP)</Link>
                    <Link to="/services" style={linkStyle}>Laser Tightening</Link>
                </div>

                {/* Patient Info Column */}
                <div style={columnStyle}>
                    <h4 style={headingStyle}>Patient Info</h4>
                    <Link to="/about" style={linkStyle}>About Dr. Monica</Link>
                    <Link to="/clinics" style={linkStyle}>Our Clinics</Link>
                    <Link to="/contact" style={linkStyle}>Book Consultation</Link>
                    <Link to="/contact" style={linkStyle}>International Patients</Link>
                    <Link to="/contact" style={linkStyle}>Financing Options</Link>
                    <Link to="/contact" style={linkStyle}>Privacy Policy</Link>
                </div>

                {/* Contact Column */}
                <div style={columnStyle}>
                    <h4 style={headingStyle}>Contact Us</h4>
                    <p style={{ color: '#aaa', marginBottom: '15px', display: 'flex' }}>
                        <span style={{ color: 'var(--primary)', marginRight: '10px', marginTop: '3px' }}><FaMapMarkerAlt /></span>
                        123 Wellness Ave, Beauty City, India
                    </p>
                    <p style={{ color: '#aaa', marginBottom: '15px', display: 'flex' }}>
                        <span style={{ color: 'var(--primary)', marginRight: '10px', marginTop: '3px' }}><FaPhoneAlt /></span>
                        +91 98765 43210
                    </p>
                    <p style={{ color: '#aaa', marginBottom: '15px', display: 'flex' }}>
                        <span style={{ color: 'var(--primary)', marginRight: '10px', marginTop: '3px' }}><FaEnvelope /></span>
                        info@nyssaclinic.com
                    </p>
                    <p style={{ color: '#aaa', display: 'flex' }}>
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
                flexWrap: 'wrap',
                color: '#666',
                fontSize: '0.9rem'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <p>&copy; {new Date().getFullYear()} Nyssa Clinic. All rights reserved.</p>
                    <p style={{ opacity: 0.8 }}>
                        Designed By <motion.a
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
                <div style={{ display: 'flex', gap: '20px' }}>
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                    <span>Sitemap</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

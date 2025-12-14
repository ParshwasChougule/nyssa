import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    // Top Bar Styles
    const topBarStyle = {
        backgroundColor: '#111',
        color: 'var(--white)',
        padding: '10px 0',
        fontSize: '0.8rem',
        transition: 'all 0.4s ease',
        height: scrolled ? '0' : '40px',
        overflow: 'hidden',
        opacity: scrolled ? 0 : 1,
        display: mobileMenuOpen ? 'none' : 'block' // Hide on mobile menu open
    };

    const navStyle = {
        position: 'fixed',
        top: scrolled ? '0' : '40px', // Move up when top bar disappears
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: scrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 5px 30px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '15px 0' : '25px 0',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.1)',
    };

    // Adjust top position for mobile/responsive where top bar might be hidden via CSS
    // We'll handle responsive top bar hiding in CSS global styles if needed, 
    // but for now inline styles control the logic.

    const linkStyle = {
        color: scrolled || !isHome ? 'var(--secondary)' : 'var(--white)',
        fontWeight: '500',
        marginLeft: '40px',
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        position: 'relative',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)'
    };

    const logoStyle = {
        fontSize: '2rem',
        fontWeight: '700',
        color: scrolled || !isHome || mobileMenuOpen ? 'var(--secondary)' : 'var(--white)',
        fontFamily: 'var(--font-heading)',
        letterSpacing: '1px',
        zIndex: 1001,
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    };

    // Button styles based on state (Preserving user rules)
    let btnBg, btnColor, btnBorder;
    if (isHome && !mobileMenuOpen) {
        btnBg = scrolled ? '#000000' : 'transparent';
        btnColor = scrolled ? '#ffffff' : '#ffffff';
        btnBorder = scrolled ? 'none' : '1px solid #ffffff';
    } else {
        btnBg = '#000000';
        btnColor = '#ffffff';
        btnBorder = 'none';
    }

    const btnHoverBg = 'var(--primary)';
    const btnHoverColor = 'var(--white)';

    // Mobile Menu Styles
    const mobileMenuStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)'
    };

    return (
        <>
            {/* Top Bar - Desktop Only usually, but we'll render it and hide via CSS on mobile if needed */}
            <div className="top-bar" style={topBarStyle}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaPhoneAlt style={{ color: 'var(--primary)', fontSize: '0.8rem' }} /> +91 123 456 7890
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaEnvelope style={{ color: 'var(--primary)', fontSize: '0.9rem' }} /> info@nyssaclinic.com
                        </span>
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <FaFacebookF style={{ cursor: 'pointer', color: '#fff' }} />
                        <FaInstagram style={{ cursor: 'pointer', color: '#fff' }} />
                        <FaYoutube style={{ cursor: 'pointer', color: '#fff' }} />
                    </div>
                </div>
            </div>

            <nav style={navStyle}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ ...logoStyle, margin: '-10px 0' }} onClick={() => setMobileMenuOpen(false)}>
                        <img src="/logo.png" alt="NYSSA" style={{ height: '70px', width: 'auto' }} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center' }}>
                        {['Home', 'About', 'Services', 'Clinics', 'Blogs', 'Contact'].map((item) => {
                            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            return (
                                <Link key={item} to={path} style={linkStyle}>
                                    <motion.div
                                        style={{ position: 'relative' }}
                                        whileHover="hover"
                                    >
                                        <span style={{ position: 'relative', zIndex: 1 }}>{item}</span>
                                        <motion.span
                                            variants={{
                                                hover: { width: '100%' }
                                            }}
                                            initial={{ width: '0%' }}
                                            style={{
                                                position: 'absolute',
                                                bottom: '-5px',
                                                left: 0,
                                                height: '1px',
                                                backgroundColor: 'var(--primary)',
                                                zIndex: 0
                                            }}
                                        />
                                    </motion.div>
                                </Link>
                            );
                        })}

                        <Link to="/#book-appointment" style={{ textDecoration: 'none' }}>
                            <motion.div
                                initial={{ backgroundColor: btnBg, color: btnColor, border: btnBorder }}
                                animate={{ backgroundColor: btnBg, color: btnColor, border: btnBorder }}
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: btnHoverBg,
                                    color: btnHoverColor,
                                    border: '1px solid var(--primary)',
                                    boxShadow: '0 5px 15px rgba(181, 131, 131, 0.4)'
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="btn"
                                style={{
                                    marginLeft: '40px',
                                    padding: '10px 28px',
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    borderRadius: '0', // More professional square/sharp look or keep pill? User had pill. Let's keep pill but refined.
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Book Appointment
                            </motion.div>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="mobile-toggle" style={{ zIndex: 1001, cursor: 'pointer' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <div style={{
                            width: '24px',
                            height: '2px',
                            backgroundColor: scrolled || !isHome || mobileMenuOpen ? 'var(--secondary)' : 'var(--white)',
                            marginBottom: '6px',
                            transition: 'all 0.3s ease',
                            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
                        }}></div>
                        <div style={{
                            width: '24px',
                            height: '2px',
                            backgroundColor: scrolled || !isHome || mobileMenuOpen ? 'var(--secondary)' : 'var(--white)',
                            marginBottom: '6px',
                            transition: 'all 0.3s ease',
                            opacity: mobileMenuOpen ? 0 : 1
                        }}></div>
                        <div style={{
                            width: '24px',
                            height: '2px',
                            backgroundColor: scrolled || !isHome || mobileMenuOpen ? 'var(--secondary)' : 'var(--white)',
                            transition: 'all 0.3s ease',
                            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
                        }}></div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div style={mobileMenuStyle}>
                    {['Home', 'About', 'Services', 'Clinics', 'Blogs', 'Contact'].map((item) => {
                        const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                        return (
                            <Link key={item} to={path} onClick={() => setMobileMenuOpen(false)} style={{
                                fontSize: '2rem',
                                fontWeight: '300',
                                color: 'var(--secondary)',
                                margin: '15px 0',
                                fontFamily: 'var(--font-heading)',
                                textDecoration: 'none'
                            }}>
                                {item}
                            </Link>
                        );
                    })}
                    <Link to="/#book-appointment" onClick={() => setMobileMenuOpen(false)} style={{ marginTop: '30px' }}>
                        <button style={{
                            backgroundColor: 'var(--primary)',
                            color: 'var(--white)',
                            padding: '15px 50px',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}>
                            Book Appointment
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

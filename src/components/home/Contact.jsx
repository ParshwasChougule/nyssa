import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        maritalStatus: '',
        city: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, maritalStatus, city, message } = formData;

        const whatsappMessage = ` *NYSSA CLINIC - Contact Form* \n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
            ` *Contact Details*\n` +
            ` Name: ${name}\n` +
            ` Phone: ${phone}\n` +
            ` Email: ${email}\n\n` +
            ` *Additional Information*\n` +
            ` Marital Status: ${maritalStatus || 'Not specified'}\n` +
            ` City: ${city || 'Not specified'}\n\n` +
            ` *Message*\n${message || 'No message provided'}\n\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `_Submitted via Nyssa Clinic Website_`;

        const whatsappUrl = `https://wa.me/919322667372?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');

        setFormData({
            name: '',
            phone: '',
            email: '',
            maritalStatus: '',
            city: '',
            message: ''
        });
    };

    return (
        <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="container">
                {/* Get in Touch Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <p style={{
                        color: 'var(--primary)',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginBottom: '15px'
                    }}>
                        WE'D LOVE TO HEAR FROM YOU
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--secondary)',
                        marginBottom: '15px',
                        fontWeight: '700'
                    }}>
                        Get in Touch
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '3px',
                        background: 'linear-gradient(90deg, var(--primary), #d4a5a5)',
                        margin: '0 auto'
                    }}></div>
                </motion.div>

                {/* Contact Info Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    marginBottom: '80px'
                }}>
                    {[
                        {
                            icon: <FaPhoneAlt size={40} />,
                            title: 'Phone',
                            line1: '+91 98765 43210',
                            line2: 'Mon-Sat: 10am - 7pm'
                        },
                        {
                            icon: <FaEnvelope size={40} />,
                            title: 'Email',
                            line1: 'info@nyssaclinic.com',
                            line2: 'We reply within 24 hours'
                        },
                        {
                            icon: <FaMapMarkerAlt size={40} />,
                            title: 'Visit Us',
                            line1: '123 Wellness Ave',
                            line2: 'Beauty City, India'
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                padding: '40px 30px',
                                backgroundColor: 'var(--white)',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                color: 'var(--primary)',
                                marginBottom: '20px',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                color: 'var(--secondary)',
                                marginBottom: '15px',
                                fontWeight: '700',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                color: 'var(--text-light)',
                                marginBottom: '5px',
                                fontSize: '1rem'
                            }}>
                                {item.line1}
                            </p>
                            <p style={{
                                color: 'var(--text-light)',
                                fontSize: '0.95rem'
                            }}>
                                {item.line2}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        padding: '60px 50px',
                        backgroundColor: 'var(--white)',
                        borderRadius: '16px',
                        boxShadow: '0 8px 30px rgba(181, 131, 131, 0.12)'
                    }}
                >
                    {/* Header */}
                    <div style={{ textAlign: 'left', marginBottom: '50px' }}>
                        <p style={{
                            color: 'var(--primary)',
                            fontSize: '0.9rem',
                            marginBottom: '10px',
                            fontStyle: 'italic'
                        }}>
                            the
                        </p>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            marginBottom: '15px',
                            fontWeight: '700'
                        }}>
                            Nyssa Clinic
                        </h2>
                        <h3 style={{
                            fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            marginBottom: '30px',
                            fontWeight: '400'
                        }}>
                            Share your concern here — and begin to heal within
                        </h3>
                        <div style={{
                            width: '100px',
                            height: '2px',
                            backgroundColor: 'var(--primary)',
                            marginBottom: '20px'
                        }}></div>
                        <p style={{
                            color: 'var(--primary)',
                            fontSize: '0.95rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginBottom: '20px'
                        }}>
                            BOOK AN APPOINTMENT
                        </p>
                        <p style={{
                            color: 'var(--text-light)',
                            fontSize: '1rem',
                            lineHeight: '1.6'
                        }}>
                            We look forward to understanding the enhancement you desire and making your dreams a reality.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Row 1: Name and Phone */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    padding: '18px 20px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    color: 'var(--text-light)',
                                    backgroundColor: '#f9f9f9',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone*"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{
                                    padding: '18px 20px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    color: 'var(--text-light)',
                                    backgroundColor: '#f9f9f9',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                            />
                        </div>

                        {/* Row 2: Email and Marital Status */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail*"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    padding: '18px 20px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    color: 'var(--text-light)',
                                    backgroundColor: '#f9f9f9',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                            />
                            <input
                                type="text"
                                name="maritalStatus"
                                placeholder="Marital Status*"
                                value={formData.maritalStatus}
                                onChange={handleChange}
                                style={{
                                    padding: '18px 20px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    color: 'var(--text-light)',
                                    backgroundColor: '#f9f9f9',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                            />
                        </div>


                        {/* Row 3: City */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <input
                                type="text"
                                name="city"
                                placeholder="City*"
                                value={formData.city}
                                onChange={handleChange}
                                style={{
                                    padding: '18px 20px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    color: 'var(--text-light)',
                                    backgroundColor: '#f9f9f9',
                                    outline: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                            />
                        </div>

                        {/* Message Field */}
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            style={{
                                padding: '18px 20px',
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                color: 'var(--text-light)',
                                backgroundColor: '#f9f9f9',
                                outline: 'none',
                                resize: 'vertical',
                                fontFamily: 'inherit',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                        ></textarea>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                padding: '18px 40px',
                                backgroundColor: 'var(--secondary)',
                                color: 'var(--white)',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                alignSelf: 'flex-start',
                                boxShadow: '0 4px 15px rgba(163, 51, 61, 0.3)'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = 'var(--primary)';
                                e.target.style.boxShadow = '0 6px 20px rgba(181, 131, 131, 0.4)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'var(--secondary)';
                                e.target.style.boxShadow = '0 4px 15px rgba(163, 51, 61, 0.3)';
                            }}
                        >
                            Submit Form
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

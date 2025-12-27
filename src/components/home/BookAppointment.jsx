import React from 'react';
import { motion } from 'framer-motion';

const BookAppointment = () => {
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

        const whatsappMessage = `NYSSA CLINIC - New Appointment Request\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
            ` *Patient Details*\n` +
            ` Name: ${name}\n` +
            ` Phone: ${phone}\n` +
            ` Email: ${email}\n\n` +
            ` *Additional Information*\n` +
            ` Marital Status: ${maritalStatus || 'Not specified'}\n` +
            ` City: ${city || 'Not specified'}\n\n` +
            ` *Message*\n${message || 'No message provided'}\n\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `_Submitted via Nyssa Clinic Website_`;

        const whatsappUrl = `https://wa.me/918149923900?text=${encodeURIComponent(whatsappMessage)}`;
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

    const inputStyle = {
        width: '100%',
        padding: '15px',
        border: '1px solid #eee',
        outline: 'none',
        fontSize: '0.9rem',
        color: 'var(--text-main)',
        backgroundColor: '#fbfbfb',
        transition: 'border-color 0.3s ease'
    };

    const focusStyle = (e) => {
        e.target.style.borderColor = 'var(--primary)';
    };

    const blurStyle = (e) => {
        e.target.style.borderColor = '#eee';
    };

    return (
        <section className="section" id="book-appointment" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            padding: '100px 0',
            position: 'relative'
        }}>
            {/* Dark Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="appointment-card"
                        style={{
                            backgroundColor: 'var(--white)',
                            padding: '60px',
                            maxWidth: '600px',
                            width: '100%',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <span style={{
                                fontFamily: 'cursive',
                                color: 'var(--primary)',
                                fontSize: '1.2rem',
                                marginRight: '15px'
                            }}>the</span>
                            <h3 style={{
                                fontSize: '1.8rem',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--secondary)',
                                margin: 0
                            }}>Nyssa Clinic</h3>
                        </div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--secondary)',
                            marginBottom: '30px',
                            lineHeight: '1.2'
                        }}>
                            Share your concern here — and begin to heal within
                        </h2>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--primary)', marginRight: '15px' }}></div>
                            <span style={{ textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--primary)', letterSpacing: '1px' }}>book an appointment</span>
                        </div>

                        <p style={{ color: 'var(--text-light)', marginBottom: '40px', lineHeight: '1.6' }}>
                            We look forward to understanding the enhancement you desire and making your dreams a reality.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="appointment-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name*"
                                    style={inputStyle}
                                    onFocus={focusStyle}
                                    onBlur={blurStyle}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone*"
                                    style={inputStyle}
                                    onFocus={focusStyle}
                                    onBlur={blurStyle}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail*"
                                    style={inputStyle}
                                    onFocus={focusStyle}
                                    onBlur={blurStyle}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="maritalStatus"
                                    placeholder="Marital Status*"
                                    style={inputStyle}
                                    onFocus={focusStyle}
                                    onBlur={blurStyle}
                                    value={formData.maritalStatus}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City*"
                                    style={inputStyle}
                                    onFocus={focusStyle}
                                    onBlur={blurStyle}
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                style={{ ...inputStyle, width: '100%', marginBottom: '30px', resize: 'none' }}
                                onFocus={focusStyle}
                                onBlur={blurStyle}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>

                            <button type="submit" style={{
                                backgroundColor: 'transparent',
                                border: '1px solid var(--secondary)',
                                color: 'var(--secondary)',
                                padding: '15px 40px',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => { e.target.style.backgroundColor = 'var(--secondary)'; e.target.style.color = 'var(--white)'; }}
                                onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--secondary)'; }}
                            >
                                Submit Form
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;

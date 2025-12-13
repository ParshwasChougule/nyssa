import React from 'react';
import SectionTitle from '../common/SectionTitle';

const Contact = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <SectionTitle title="Get in Touch" subtitle="Start Your Journey" />
                    <p style={{ marginBottom: '30px', color: 'var(--text-light)' }}>
                        Ready to transform your look? Schedule a consultation with our experts today.
                    </p>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{ padding: '15px', borderRadius: 'var(--radius-md)', border: '1px solid #ddd' }}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            style={{ padding: '15px', borderRadius: 'var(--radius-md)', border: '1px solid #ddd' }}
                        />
                        <textarea
                            rows="4"
                            placeholder="How can we help you?"
                            style={{ padding: '15px', borderRadius: 'var(--radius-md)', border: '1px solid #ddd' }}
                        ></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

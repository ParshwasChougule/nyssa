import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

const MommyMakeover = () => {
    return (
        <section className="section">
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '50px' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="Mommy Makeover"
                            style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)' }}
                        />
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <SectionTitle title="Mommy Makeover" subtitle="Restore & Rejuvenate" align="left" />
                        <p style={{ marginBottom: '20px', color: 'var(--text-light)', fontSize: '1.1rem' }}>
                            Our signature Mommy Makeover package is designed to help you regain your pre-pregnancy body.
                            Combining breast rejuvenation, tummy tuck, and liposuction, we tailor the procedure to your specific goals.
                        </p>
                        <ul style={{ marginBottom: '30px', color: 'var(--secondary)' }}>
                            <li style={{ marginBottom: '10px' }}>✓ Personalized consultation</li>
                            <li style={{ marginBottom: '10px' }}>✓ Combined procedures for optimal results</li>
                            <li style={{ marginBottom: '10px' }}>✓ Rapid recovery protocols</li>
                        </ul>
                        <Link to="/mommy-makeover" className="btn btn-primary">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MommyMakeover;

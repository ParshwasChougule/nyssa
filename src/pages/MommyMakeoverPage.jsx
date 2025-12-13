import React, { useEffect } from 'react';
import SectionTitle from '../components/common/SectionTitle';

const MommyMakeoverPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                <SectionTitle title="Mommy Makeover" subtitle="Reclaim Your Body" />
                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="Mommy Makeover"
                            style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)' }}
                        />
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3 style={{ marginBottom: '20px', color: 'var(--secondary)' }}>What is a Mommy Makeover?</h3>
                        <p style={{ marginBottom: '20px', color: 'var(--text-light)' }}>
                            A Mommy Makeover is a combination of cosmetic procedures designed to address the physical changes that often occur after pregnancy and breastfeeding. It typically includes a tummy tuck, breast augmentation or lift, and liposuction.
                        </p>
                        <h4 style={{ marginBottom: '15px', color: 'var(--secondary)' }}>Key Benefits:</h4>
                        <ul style={{ marginBottom: '20px', color: 'var(--text-light)', listStyle: 'disc', paddingLeft: '20px' }}>
                            <li>Restores abdominal tightness and removes excess skin</li>
                            <li>Lifts and reshapes breasts</li>
                            <li>Contours the body for a more youthful silhouette</li>
                            <li>Boosts self-confidence</li>
                        </ul>
                        <button className="btn btn-primary">Schedule Consultation</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MommyMakeoverPage;

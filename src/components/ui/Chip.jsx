import React from 'react';

const Chip = ({ label, active = false }) => {
    const styles = {
        display: 'inline-block',
        padding: '8px 16px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: active ? 'var(--primary)' : 'var(--surface)',
        color: active ? 'var(--white)' : 'var(--text-light)',
        fontSize: '0.9rem',
        fontWeight: '600',
        marginRight: '8px',
        marginBottom: '8px',
        transition: 'all 0.3s ease',
    };

    return (
        <span style={styles}>
            {label}
        </span>
    );
};

export default Chip;

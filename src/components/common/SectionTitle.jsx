import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
    const style = {
        textAlign: align,
        marginBottom: '60px',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        marginBottom: '15px',
        color: 'var(--secondary)',
    };

    const subtitleStyle = {
        color: 'var(--primary)',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: '700',
        fontSize: '0.9rem',
        marginBottom: '10px',
        display: 'block',
    };

    return (
        <div style={style}>
            {subtitle && <span style={subtitleStyle}>{subtitle}</span>}
            <h2 style={titleStyle}>{title}</h2>
            <div style={{
                width: '60px',
                height: '3px',
                backgroundColor: 'var(--primary)',
                margin: align === 'center' ? '0 auto' : '0'
            }}></div>
        </div>
    );
};

export default SectionTitle;


import React from 'react';
import { motion } from 'framer-motion';

const ImageMarquee = () => {
    const images = [
        '/Footer-2-a-2.webp',
        '/footer-4.webp',
        '/Footer-5-b.webp',
        '/Footer-8.webp',
        '/Footer-2-b.webp' // Repeating one to maintain length or add more if available
    ];

    // Duplicate images to ensure seamless scrolling
    const marqueeImages = [...images, ...images, ...images, ...images];

    return (
        <section className="marquee-section" style={{
            backgroundColor: '#f5f5f5',
            padding: '100px 0',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            minHeight: '700px'
        }}>
            {/* Gallery Label - Moved to Right */}
            <div className="marquee-label" style={{
                position: 'absolute',
                right: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                {/* <span style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    color: '#000', 
                    letterSpacing: '4px',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-body)',
                    opacity: 0.6,
                    transform: 'rotate(180deg)'
                }}>
                    Get in Touch
                </span>
                <div style={{
                    width: '1px',
                    height: '100px',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)' 
                }}></div> */}
            </div>

            <motion.div
                className="marquee-track"
                style={{ display: 'flex', gap: '40px', paddingLeft: '50px' }}
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40
                }}
            >
                {marqueeImages.map((img, index) => (
                    <div key={index} className="marquee-item" style={{
                        minWidth: '350px',
                        height: '500px',
                        flexShrink: 0,
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: index % 2 === 0 ? '0px' : '80px', // Staggered effect
                        boxShadow: '0 30px 60px rgba(0,0,0,0.3)', // Strong shadow
                        backgroundColor: '#000'
                    }}>
                        <img
                            src={img}
                            alt={`Gallery ${index} `}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'sepia(40%) contrast(1.1) brightness(0.9)'
                            }}
                        />
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default ImageMarquee;

import React from 'react';
import { motion } from 'framer-motion';

const CardSoft = ({ children, className = '', style = {}, ...props }) => {
  const defaultStyles = {
    background: 'var(--white)',
    borderRadius: 'var(--radius-lg)',
    padding: '2rem',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid rgba(0,0,0,0.03)',
    position: 'relative',
    overflow: 'hidden',
    ...style
  };

  return (
    <motion.div
      className={`card-soft ${className}`}
      style={defaultStyles}
      whileHover={{
        y: -10,
        boxShadow: 'var(--shadow-lg)',
        borderColor: 'rgba(197, 160, 89, 0.3)'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default CardSoft;

import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = {
    padding: '0.75rem 1.5rem',
    borderRadius: '12px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition)',
    fontSize: '0.95rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  if (variant === 'primary') {
    Object.assign(styles, {
      background: 'var(--primary)',
      color: 'white',
      boxShadow: '0 4px 20px var(--primary-glow)',
    });
  } else {
    Object.assign(styles, {
      background: 'transparent',
      color: 'var(--text-main)',
      border: '1px solid var(--card-border)',
    });
  }

  return (
    <button 
      className={`btn-${variant} ${className}`} 
      style={styles}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        if (variant === 'primary') e.currentTarget.style.boxShadow = '0 8px 30px var(--primary-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        if (variant === 'primary') e.currentTarget.style.boxShadow = '0 4px 20px var(--primary-glow)';
      }}
      {...props}
    >
      {children}
    </button>
  );
}

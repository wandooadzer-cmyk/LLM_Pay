import React from 'react';

export default function GlassCard({ children, title, className = '', ...props }) {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {title && <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{title}</h3>}
      {children}
    </div>
  );
}

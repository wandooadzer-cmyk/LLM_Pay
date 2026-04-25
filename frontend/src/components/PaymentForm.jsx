import React from 'react';
import GlassCard from './GlassCard';
import Button from './Button';

export default function PaymentForm() {
  return (
    <GlassCard title="Create New Payment" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Recipient Address</label>
          <input 
            type="text" 
            placeholder="G... or federation address" 
            style={inputStyle}
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Amount</label>
            <input 
              type="number" 
              placeholder="0.00" 
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Asset</label>
            <select style={inputStyle}>
              <option>XLM</option>
              <option>USDC</option>
              <option>ARS</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Memo (Optional)</label>
          <input 
            type="text" 
            placeholder="Payment reference" 
            style={inputStyle}
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <Button style={{ width: '100%', justifyContent: 'center' }}>Execute Payment</Button>
        </div>
      </form>
    </GlassCard>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  background: 'hsla(var(--bg-h), var(--bg-s), 30%, 0.1)',
  border: '1px solid var(--card-border)',
  borderRadius: '10px',
  color: 'white',
  fontFamily: 'inherit',
  fontSize: '1rem',
  outline: 'none',
  transition: 'var(--transition)',
};

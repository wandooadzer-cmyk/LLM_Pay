import React from 'react';

export default function Layout({ children, activeTab, onTabChange }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside className="glass-effect" style={{
        width: '280px',
        padding: '2rem',
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        borderRight: '1px solid var(--card-border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'var(--primary)',
            borderRadius: '10px',
            display: 'grid',
            placeContent: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: 'white'
          }}>LP</div>
          <h1 style={{ fontSize: '1.25rem' }}>LLM-Pay</h1>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <NavItem icon="📊" label="Dashboard" active={activeTab === 'dashboard'} onClick={() => onTabChange('dashboard')} />
          <NavItem icon="💸" label="Payments" active={activeTab === 'payments'} onClick={() => onTabChange('payments')} />
          <NavItem icon="🕒" label="History" active={activeTab === 'history'} onClick={() => onTabChange('history')} />
          <NavItem icon="🤖" label="AI Agent" active={activeTab === 'agent'} onClick={() => onTabChange('agent')} />
          <NavItem icon="⚙️" label="Settings" active={activeTab === 'settings'} onClick={() => onTabChange('settings')} />
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          <div>
            <h2 style={{ fontSize: '2rem' }}>Welcome back, Agent</h2>
            <p style={{ color: 'var(--text-muted)' }}>Automated financial flow is running stable.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="glass-effect" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '10px', height: '10px', background: 'var(--success)', borderRadius: '50%' }}></div>
              <span>Stellar Mainnet</span>
            </div>
            <div className="glass-effect" style={{ padding: '0.5rem 1rem' }}>
              GB...XY2
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.8rem 1rem',
      borderRadius: '12px',
      background: active ? 'hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.1)' : 'transparent',
      color: active ? 'var(--primary)' : 'var(--text-muted)',
      cursor: 'pointer',
      transition: 'var(--transition)',
      fontWeight: active ? '600' : '400'
    }}
    onMouseEnter={(e) => {
      if (!active) {
        e.currentTarget.style.background = 'hsla(var(--bg-h), var(--bg-s), 20%, 0.2)';
        e.currentTarget.style.color = 'var(--text-main)';
      }
    }}
    onMouseLeave={(e) => {
      if (!active) {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--text-muted)';
      }
    }}>
      <span style={{ fontSize: '1.2rem' }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

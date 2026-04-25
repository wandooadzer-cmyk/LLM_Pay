import React from 'react';
import GlassCard from './GlassCard';
import Button from './Button';

export default function Dashboard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
      {/* Wallet Balance Card */}
      <GlassCard title="Total Balance" className="balance-card">
        <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          4,280.50 <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>XLM</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--success)', fontSize: '0.9rem', fontWeight: '600' }}>
          <span>↑ 12.5%</span>
          <span style={{ color: 'var(--text-muted)', fontWeight: '400' }}>from last month</span>
        </div>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <Button>Send</Button>
          <Button variant="secondary">Receive</Button>
        </div>
      </GlassCard>

      {/* AI Agent Insights */}
      <GlassCard title="AI Agent Insights" style={{ borderLeft: '4px solid var(--primary)' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
          "I've detected a 15% increase in transaction fees on Ethereum. Recommending shifting scheduled payroll to Stellar for a savings of $45.20."
        </p>
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.05)', borderRadius: '12px' }}>
          <span style={{ fontWeight: '600', color: 'var(--primary)' }}>Auto-Sweep: </span>
          <span style={{ color: 'var(--text-muted)' }}>Active</span>
        </div>
      </GlassCard>

      {/* Recent Activity */}
      <GlassCard title="Recent Activity" style={{ gridColumn: '1 / -1' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <ActivityItem icon="💰" label="Payroll Executed" amount="-1,200 XLM" status="Success" time="2h ago" />
          <ActivityItem icon="📥" label="Received from Exchange" amount="+500 XLM" status="Success" time="5h ago" />
          <ActivityItem icon="🤖" label="AI Rebalancer" amount="Internal" status="Success" time="1d ago" />
        </div>
      </GlassCard>
    </div>
  );
}

function ActivityItem({ icon, label, amount, status, time }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderRadius: '12px', background: 'hsla(var(--bg-h), var(--bg-s), 20%, 0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ fontSize: '1.5rem' }}>{icon}</div>
        <div>
          <div style={{ fontWeight: '600' }}>{label}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{time}</div>
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontWeight: '700' }}>{amount}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--success)' }}>{status}</div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import PaymentForm from './components/PaymentForm';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'payments' && <PaymentForm />}
      {activeTab !== 'dashboard' && activeTab !== 'payments' && (
        <div style={{ display: 'grid', placeContent: 'center', height: '100%', opacity: 0.5 }}>
          <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} view coming soon...</h3>
        </div>
      )}
    </Layout>
  );
}

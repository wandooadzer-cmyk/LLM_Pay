'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Puzzle, ArrowRight } from 'lucide-react';

export default function Integrations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const integrations = [
    { name: 'Slack', category: 'Communication' },
    { name: 'Google Workspace', category: 'Productivity' },
    { name: 'Microsoft 365', category: 'Productivity' },
    { name: 'Salesforce', category: 'CRM' },
    { name: 'QuickBooks', category: 'Accounting' },
    { name: 'NetSuite', category: 'ERP' },
    { name: 'Xero', category: 'Accounting' },
    { name: 'HubSpot', category: 'CRM' },
    { name: 'SAP', category: 'ERP' },
    { name: 'Oracle', category: 'ERP' },
    { name: 'Workday', category: 'HR' },
    { name: 'Expensify', category: 'Expenses' },
    { name: 'Concur', category: 'Expenses' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'PayPal', category: 'Payments' },
    { name: 'Plaid', category: 'Banking' },
    { name: 'Yodlee', category: 'Banking' },
    { name: 'Zapier', category: 'Automation' },
    { name: 'Make', category: 'Automation' },
    { name: 'Airtable', category: 'Database' },
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            200+ <span className="gradient-text">Integrations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with your existing tools seamlessly
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Puzzle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{integration.name}</p>
                  <p className="text-xs text-gray-500">{integration.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all integrations CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 cursor-pointer group">
            <span>View all 200+ integrations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Custom integration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-center"
        >
          <p className="text-gray-300 mb-4">
            Don&apos;t see your integration? Our API makes it easy to build custom connections.
          </p>
          <div className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 cursor-pointer">
            <span>Explore our API documentation</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

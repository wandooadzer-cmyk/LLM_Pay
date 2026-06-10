'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Receipt, Shield, Calculator, CheckCircle, FileSearch, Landmark } from 'lucide-react';
import GlassCard from './GlassCard';

export default function AIAgents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  const agents = [
    {
      icon: Receipt,
      name: 'Receipt Agent',
      description: 'Automatically extracts data from receipts and categorizes expenses',
      color: 'from-blue-500 to-cyan-500',
      status: 'Processing 2,345 receipts today',
    },
    {
      icon: Shield,
      name: 'Policy Agent',
      description: 'Enforces spending policies in real-time with intelligent alerts',
      color: 'from-purple-500 to-pink-500',
      status: 'Blocked 127 policy violations',
    },
    {
      icon: Calculator,
      name: 'Accounting Agent',
      description: 'Handles bookkeeping, reconciliation, and financial reporting',
      color: 'from-green-500 to-emerald-500',
      status: 'Reconciled 8,456 transactions',
    },
    {
      icon: CheckCircle,
      name: 'Approval Agent',
      description: 'Routes and approves requests based on smart rules',
      color: 'from-orange-500 to-red-500',
      status: 'Approved 1,234 requests',
    },
    {
      icon: FileSearch,
      name: 'Audit Agent',
      description: 'Conducts continuous audits and generates compliance reports',
      color: 'from-indigo-500 to-violet-500',
      status: 'Completed 456 audits',
    },
    {
      icon: Landmark,
      name: 'Treasury Agent',
      description: 'Optimizes cash flow and manages banking operations',
      color: 'from-teal-500 to-cyan-500',
      status: 'Optimized $12.3M cash flow',
    },
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
            AI agents working while your team <span className="gradient-text">sleeps</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Intelligent agents that handle financial operations 24/7 with zero human intervention
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3.5 + (index % 4) * 0.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.25,
              }}
            >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredAgent(agent.name)}
              onMouseLeave={() => setHoveredAgent(null)}
            >
              <GlassCard
                delay={index * 0.1}
                className={`p-8 relative overflow-hidden ${
                  hoveredAgent === agent.name ? 'border-indigo-500/50' : ''
                }`}
              >
                {/* Floating animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"
                  animate={{
                    opacity: hoveredAgent === agent.name ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-6 relative z-10`}
                  animate={{
                    y: hoveredAgent === agent.name ? -5 : 0,
                    rotate: hoveredAgent === agent.name ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <agent.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-white relative z-10">
                  {agent.name}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed relative z-10">
                  {agent.description}
                </p>

                <motion.div
                  className="flex items-center gap-2 text-sm text-indigo-400 relative z-10"
                  animate={{
                    opacity: hoveredAgent === agent.name ? 1 : 0.7,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>{agent.status}</span>
                </motion.div>

                {/* Glow effect on hover */}
                {hoveredAgent === agent.name && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </GlassCard>
            </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '24/7', label: 'Availability' },
            { value: '99.9%', label: 'Accuracy rate' },
            { value: '< 1s', label: 'Response time' },
            { value: '∞', label: 'Scalability' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

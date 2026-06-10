'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';
import GlassCard from './GlassCard';

export default function LiveStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: 'Transactions processed', value: 32414, icon: '📊' },
    { label: 'Policies enforced', value: 22651, icon: '🔒' },
    { label: 'Agent actions', value: 57556, icon: '🤖' },
    { label: 'Invoices reviewed', value: 12876, icon: '📄' },
    { label: 'Compliance checks', value: 8230, icon: '✅' },
    { label: 'Expenses approved', value: 18901, icon: '💳' },
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <motion.span
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">
              Live
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Live <span className="gradient-text">Platform Activity</span>
          </h2>
          <p className="text-xl text-gray-400">
            Real-time metrics from our AI-powered financial operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <GlassCard key={stat.label} delay={index * 0.1} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{stat.icon}</span>
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                />
              </div>
              <AnimatedCounter
                value={stat.value}
                live
                className="text-3xl font-bold mb-2 tabular-nums"
              />
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Updating every second • Last updated: Just now
          </p>
        </motion.div>
      </div>
    </section>
  );
}

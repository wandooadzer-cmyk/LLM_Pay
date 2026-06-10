'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check, ArrowRight, Zap } from 'lucide-react';
import GlassCard from './GlassCard';

export default function Workflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const traditionalTools = [
    { name: 'Expense Reports', status: 'manual' },
    { name: 'Invoice Processing', status: 'manual' },
    { name: 'Policy Enforcement', status: 'manual' },
    { name: 'Approval Workflows', status: 'manual' },
    { name: 'Compliance Checks', status: 'manual' },
    { name: 'Financial Reporting', status: 'manual' },
  ];

  const aiFeatures = [
    { name: 'AI Expense Capture', status: 'automated' },
    { name: 'Smart Invoice Processing', status: 'automated' },
    { name: 'Real-time Policy AI', status: 'automated' },
    { name: 'Intelligent Approvals', status: 'automated' },
    { name: 'Automated Compliance', status: 'automated' },
    { name: 'Live Financial Insights', status: 'automated' },
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Before vs. <span className="gradient-text">After</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See the transformation from disconnected tools to a unified AI operating system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-stretch">
          {/* Before - Traditional Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-400">
                Traditional Finance Stack
              </h3>
              <p className="text-gray-500 text-sm">Disconnected tools, manual processes, endless paperwork</p>
            </div>

            <div className="space-y-3">
              {traditionalTools.map((tool, index) => (
                <GlassCard key={tool.name} delay={index * 0.05} className="p-4 flex items-center justify-between">
                  <span className="text-gray-400">{tool.name}</span>
                  <X className="w-5 h-5 text-red-500" />
                </GlassCard>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <p className="text-red-400 text-sm font-medium">
                ⚠️ Average time to process expense: 5-7 days
              </p>
            </div>
          </motion.div>

          {/* Animated flow connector */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block relative w-16"
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 64 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="workflowFlowGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="32" y1="0" x2="32" y2="100" stroke="url(#workflowFlowGradient)" strokeWidth="2" />
              <motion.line
                x1="32"
                y1="0"
                x2="32"
                y2="100"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="4 14"
                strokeLinecap="round"
                animate={{ strokeDashoffset: [0, -36] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              />
            </svg>

            {/* Flowing data particles */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_3px_rgba(129,140,248,0.6)]"
                style={{ x: '-50%' }}
                animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.8,
                }}
              />
            ))}

            {/* Center icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center glow-effect"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30"
                animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* After - AI Operating System */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 gradient-text">
                AI Operating System
              </h3>
              <p className="text-gray-400 text-sm">Unified platform, intelligent automation, real-time insights</p>
            </div>

            <div className="space-y-3">
              {aiFeatures.map((feature, index) => (
                <GlassCard key={feature.name} delay={index * 0.05} className="p-4 flex items-center justify-between border-indigo-500/30">
                  <span className="text-white">{feature.name}</span>
                  <Check className="w-5 h-5 text-green-500" />
                </GlassCard>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-green-400 text-sm font-medium">
                ✨ Average time to process expense: Instant
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 cursor-pointer">
            <span>See the complete transformation</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

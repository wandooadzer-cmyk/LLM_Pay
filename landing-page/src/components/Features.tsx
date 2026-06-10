'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CreditCard, FileText, ShieldCheck, Wallet, BarChart3 } from 'lucide-react';
import GlassCard from './GlassCard';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: CreditCard,
      title: 'Expense Management',
      description: 'Automatically capture, categorize, and approve expenses with AI-powered receipt recognition.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Accounts Payable Automation',
      description: 'Streamline invoice processing with intelligent matching and automatic payment scheduling.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: ShieldCheck,
      title: 'AI Compliance Monitoring',
      description: 'Real-time policy enforcement with automated alerts and audit trails for complete compliance.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: CreditCard,
      title: 'Smart Corporate Cards',
      description: 'Virtual and physical cards with spend controls, real-time limits, and instant freeze capabilities.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Wallet,
      title: 'Treasury & Banking',
      description: 'Optimize cash flow with automated treasury management and multi-bank account integration.',
      color: 'from-indigo-500 to-violet-500',
    },
    {
      icon: BarChart3,
      title: 'Financial Reporting',
      description: 'Generate real-time financial reports and dashboards with AI-powered insights and forecasting.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            One platform. <span className="gradient-text">Infinite AI agents.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A complete financial operating system powered by intelligent automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard key={feature.title} delay={index * 0.1} className="p-8 group">
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group/link"
                whileHover={{ x: 5 }}
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            Plus 50+ more features to power your financial operations
          </p>
          <div className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 cursor-pointer">
            <span>Explore all features</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

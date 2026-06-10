'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Play, Star } from 'lucide-react';
import GlassCard from './GlassCard';
import Button from './Button';

export default function CustomerStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" id="customers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Customer <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how leading companies transform their financial operations with LLM Pay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-8 relative overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center relative">
                <motion.button
                  className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-white fill-white group-hover:scale-110 transition-transform" />
                </motion.button>
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-white">John Davidson</p>
                  <p className="text-sm text-gray-400">CFO, Enterprise Corp</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quote and metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Quote className="w-12 h-12 text-indigo-500 mb-6 opacity-50" />
            
            <blockquote className="text-2xl font-medium text-white mb-8 leading-relaxed">
              &ldquo;LLM Pay completely transformed our financial operations. We went from spending 40 hours a week on expense management to just 2 hours. The ROI was immediate and substantial.&rdquo;
            </blockquote>

            <div className="flex items-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: '95%', label: 'Time saved' },
                { value: '$2.3M', label: 'Annual savings' },
                { value: '40x', label: 'Faster processing' },
                { value: '100%', label: 'Policy compliance' },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="text-3xl font-bold gradient-text mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" className="w-full">
              Read Full Case Study
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

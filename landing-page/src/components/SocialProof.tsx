'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import GlassCard from './GlassCard';

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const logos = [
    { name: 'Stripe', color: '#635BFF' },
    { name: 'Shopify', color: '#96BF48' },
    { name: 'Notion', color: '#FFFFFF' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Linear', color: '#8B92F8' },
    { name: 'Vercel', color: '#FFFFFF' },
    { name: 'Airbnb', color: '#FF5A5F' },
    { name: 'Slack', color: '#ECB22E' },
  ];

  const testimonials = [
    {
      quote: 'LLM Pay transformed our financial operations. We automated 95% of our expense workflows and saved countless hours.',
      author: 'Sarah Chen',
      role: 'CFO, TechCorp',
      company: 'TechCorp',
      rating: 5,
    },
    {
      quote: 'The AI agents are incredible. They catch policy violations before they happen and handle approvals automatically.',
      author: 'Michael Rodriguez',
      role: 'VP Finance, StartupXYZ',
      company: 'StartupXYZ',
      rating: 5,
    },
    {
      quote: 'Best financial platform we have ever used. The automation is seamless and the support is world-class.',
      author: 'Emily Watson',
      role: 'Director of Operations, GrowthCo',
      company: 'GrowthCo',
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">
            Trusted by 70,000+ companies worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -2 }}
                className="group flex items-center justify-center h-16 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-colors duration-300"
              >
                <span
                  className="text-lg sm:text-xl font-bold tracking-tight text-gray-500 transition-colors duration-300 group-hover:text-[var(--brand-color)]"
                  style={{ '--brand-color': logo.color } as React.CSSProperties}
                >
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={testimonial.author} delay={index * 0.2} className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-indigo-500 mb-4 opacity-50" />
              <p className="text-gray-300 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Growth metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '300%', label: 'Faster approvals' },
            { value: '85%', label: 'Cost reduction' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24/7', label: 'AI monitoring' },
          ].map((metric) => (
            <div key={metric.label}>
              <div className="text-4xl font-bold gradient-text mb-2">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

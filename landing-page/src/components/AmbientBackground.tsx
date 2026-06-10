'use client';

import { motion } from 'framer-motion';

// Deterministic "random-ish" particle field so server and client markup match (no Math.random at render time).
const PARTICLES = Array.from({ length: 32 }).map((_, i) => {
  const left = (i * 37) % 100;
  const top = (i * 53 + i * 7) % 100;
  const size = 1 + (i % 3);
  const duration = 14 + (i % 7) * 2.5;
  const delay = (i % 8) * 0.9;
  const drift = 30 + (i % 5) * 12;
  return { id: i, left, top, size, duration, delay, drift };
});

export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Large slow-moving gradient orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-indigo-500/10 blur-[120px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full bg-purple-500/10 blur-[130px]"
        animate={{
          x: [0, -60, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[34rem] h-[34rem] rounded-full bg-cyan-500/5 blur-[120px]"
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -p.drift, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

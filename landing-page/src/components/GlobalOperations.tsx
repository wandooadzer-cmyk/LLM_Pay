'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Globe, MapPin } from 'lucide-react';

// Approximate equirectangular projection (percent of container width/height).
const CITIES = [
  { name: 'New York', region: 'Americas', transactions: '2.3M', x: 22, y: 32 },
  { name: 'London', region: 'Europe', transactions: '1.8M', x: 47, y: 22 },
  { name: 'Lagos', region: 'Africa', transactions: '650K', x: 49, y: 60 },
  { name: 'Dubai', region: 'Middle East', transactions: '890K', x: 64, y: 40 },
  { name: 'Singapore', region: 'Asia Pacific', transactions: '1.5M', x: 79, y: 64 },
  { name: 'Tokyo', region: 'Asia Pacific', transactions: '1.2M', x: 89, y: 30 },
] as const;

const CONNECTIONS: [string, string][] = [
  ['New York', 'London'],
  ['London', 'Lagos'],
  ['London', 'Dubai'],
  ['Dubai', 'Lagos'],
  ['Dubai', 'Singapore'],
  ['Singapore', 'Tokyo'],
  ['Tokyo', 'New York'],
  ['New York', 'Dubai'],
];

function findCity(name: string) {
  return CITIES.find((c) => c.name === name)!;
}

export default function GlobalOperations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCity, setActiveCity] = useState<string | null>(null);

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
            <Globe className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-semibold tracking-widest text-indigo-300 uppercase">
              Global Network
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Global <span className="gradient-text">Operations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Processing transactions across 6 continents in real-time
          </p>
        </motion.div>

        {/* Network map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative h-[360px] sm:h-[420px] md:h-[480px] rounded-3xl glass-card overflow-hidden"
        >
          {/* Backdrop grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />

          {/* Connection paths */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
          >
            {CONNECTIONS.map(([fromName, toName], index) => {
              const from = findCity(fromName);
              const to = findCity(toName);
              const cx = (from.x + to.x) / 2;
              const cy = Math.max(Math.min(from.y, to.y) - Math.abs(to.x - from.x) * 0.18, 4);
              const isHighlighted =
                activeCity === fromName || activeCity === toName || activeCity === null;
              const path = `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;

              return (
                <g key={`${fromName}-${toName}`}>
                  <path
                    d={path}
                    stroke="rgba(129,140,248,0.15)"
                    strokeWidth="0.3"
                    vectorEffect="non-scaling-stroke"
                  />
                  <motion.path
                    d={path}
                    stroke="#a78bfa"
                    strokeWidth="0.4"
                    strokeLinecap="round"
                    strokeDasharray="2 6"
                    vectorEffect="non-scaling-stroke"
                    animate={{
                      strokeDashoffset: [0, -16],
                      opacity: isHighlighted ? [0.2, 0.9, 0.2] : 0.05,
                    }}
                    transition={{
                      strokeDashoffset: { duration: 1.6, repeat: Infinity, ease: 'linear' },
                      opacity: { duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 },
                    }}
                  />
                  <motion.circle
                    r="0.6"
                    fill="#c4b5fd"
                    animate={{
                      cx: [from.x, cx, to.x],
                      cy: [from.y, cy, to.y],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.4,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* City nodes */}
          {CITIES.map((city, index) => (
            <motion.div
              key={city.name}
              className="absolute z-10"
              style={{ left: `${city.x}%`, top: `${city.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div
                className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onMouseEnter={() => setActiveCity(city.name)}
                onMouseLeave={() => setActiveCity(null)}
              >
                <div className="w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_12px_4px_rgba(129,140,248,0.5)]" />
                <motion.div
                  className="absolute inset-0 w-3 h-3 rounded-full bg-indigo-400"
                  animate={{ scale: [1, 2.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                />

                {activeCity === city.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
                  >
                    <p className="font-semibold text-white text-sm">{city.name}</p>
                    <p className="text-xs text-gray-400">{city.region}</p>
                    <p className="text-xs text-indigo-300">{city.transactions} transactions</p>
                  </motion.div>
                )}

                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-medium text-gray-300 whitespace-nowrap">
                  {city.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* City stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {CITIES.map((city) => (
            <div
              key={city.name}
              className={`p-4 rounded-lg bg-white/5 border text-center transition-all cursor-pointer ${
                activeCity === city.name ? 'border-indigo-500/60 bg-white/10' : 'border-white/10 hover:border-indigo-500/50'
              }`}
              onMouseEnter={() => setActiveCity(city.name)}
              onMouseLeave={() => setActiveCity(null)}
            >
              <MapPin className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
              <p className="font-semibold text-white text-sm">{city.name}</p>
              <p className="text-xs text-gray-400">{city.transactions}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

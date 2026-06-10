'use client';

import { motion, useInView, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  /** Keep ticking the value up by small random increments after the reveal animation, to simulate a live feed. */
  live?: boolean;
  /** [min, max] amount added on each live tick. */
  liveIncrement?: [number, number];
  /** Average milliseconds between live ticks. */
  liveInterval?: number;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
  live = false,
  liveIncrement = [1, 7],
  liveInterval = 1800,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      setCount(decimals > 0 ? Number(latest.toFixed(decimals)) : Math.round(latest));
    });
  }, [spring, decimals]);

  useEffect(() => {
    if (!live || !isInView) return undefined;

    let interval: ReturnType<typeof setInterval> | undefined;
    const startDelay = setTimeout(() => {
      interval = setInterval(() => {
        const [min, max] = liveIncrement;
        const increment = Math.floor(Math.random() * (max - min + 1)) + min;
        spring.set(spring.get() + increment);
      }, liveInterval + Math.random() * 1200);
    }, 2200);

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
    };
  }, [live, isInView, spring, liveIncrement, liveInterval]);

  return (
    <motion.div ref={ref} className={className}>
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.div>
  );
}

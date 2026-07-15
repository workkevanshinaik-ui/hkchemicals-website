'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
  const items = [
    'Water Treatment',
    'Textile Bleaching',
    'Sanitation & Disinfection',
    'Food Processing',
    'Swimming Pools',
    'Industrial Cleaning',
    'Pharmaceutical',
    'Chemical Manufacturing',
  ];

  return (
    <section className="relative py-16 bg-gradient-to-r from-cyan-500 to-teal-500 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex space-x-16 pr-16"
        >
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <span key={index} className="text-4xl md:text-6xl font-bold text-slate-950/30">
              {item} •
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

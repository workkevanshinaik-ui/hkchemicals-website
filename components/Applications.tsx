'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplet, Shirt, Utensils, Waves, Building2, Sparkles } from 'lucide-react';

const applications = [
  {
    icon: Droplet,
    title: 'Water Treatment',
    description: 'Disinfection of municipal water supply, swimming pools, and industrial water treatment facilities.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shirt,
    title: 'Textile Bleaching',
    description: 'Bleaching of cotton, linen, and other natural fabrics in textile manufacturing processes.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Sanitation & Disinfection',
    description: 'Surface disinfection in hospitals, food processing facilities, and public spaces.',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Utensils,
    title: 'Food Processing',
    description: 'Sanitization of equipment, surfaces, and water used in food and beverage industries.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Waves,
    title: 'Swimming Pools',
    description: 'Effective pool water disinfection for residential, commercial, and public swimming facilities.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Building2,
    title: 'Industrial Cleaning',
    description: 'Cleaning and disinfection in pharmaceutical, chemical, and manufacturing industries.',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Applications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="applications" className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-cyan-400 font-semibold mb-4 tracking-wider uppercase text-sm">Applications</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Diverse Industry
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Applications
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our sodium hypochlorite solutions serve a wide range of industries, 
            providing reliable disinfection, bleaching, and sanitization capabilities.
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-slate-100 mb-3">{app.title}</h3>
                <p className="relative text-slate-400 leading-relaxed">{app.description}</p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-8 right-8 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">Need a custom concentration or bulk order?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Discuss Your Requirements
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

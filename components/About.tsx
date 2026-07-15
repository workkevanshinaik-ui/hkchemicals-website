'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, TrendingUp, Globe, Shield } from 'lucide-react';

const manifesto = [
  {
    number: '01',
    title: 'Quality First',
    description: 'Every batch of sodium hypochlorite undergoes rigorous quality control testing to ensure consistent purity and concentration levels.',
    icon: Shield,
  },
  {
    number: '02',
    title: 'Innovation Driven',
    description: 'Leveraging cutting-edge manufacturing processes and technology to deliver superior chemical solutions.',
    icon: TrendingUp,
  },
  {
    number: '03',
    title: 'Global Standards',
    description: 'Adhering to international quality standards and environmental regulations in every aspect of production.',
    icon: Globe,
  },
  {
    number: '04',
    title: 'Customer Excellence',
    description: 'Building long-term partnerships through reliable supply, competitive pricing, and exceptional customer service.',
    icon: Award,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-cyan-400 font-semibold mb-4 tracking-wider uppercase text-sm">About Us</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Chemical Excellence
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Since 1999
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            H. K. Chemicals Industries has been a pioneer in sodium hypochlorite manufacturing for over 25 years. 
            Based in Dahej GIDC, Gujarat, we serve industries across India, UAE, Saudi Arabia, Kenya, and Bangladesh 
            with unwavering commitment to quality and reliability.
          </p>
        </motion.div>

        {/* Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {manifesto.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-500"
              >
                {/* Number */}
                <div className="absolute top-8 right-8 text-7xl font-bold text-slate-800/50 group-hover:text-cyan-500/20 transition-colors duration-500">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-slate-950" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-100 mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed relative z-10">{item.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Company Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl"
        >
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3000+ MT</div>
            <div className="text-slate-400">Monthly Production Capacity</div>
          </div>
          <div className="text-center md:text-left border-l border-r border-slate-700 md:px-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2% - 14%</div>
            <div className="text-slate-400">NaOCl Concentration Range</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold text-cyan-400 mb-2">5+ Countries</div>
            <div className="text-slate-400">Global Export Markets</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

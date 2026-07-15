'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Factory, Gauge, ShieldCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: Factory,
    title: 'State-of-the-Art Facility',
    description: 'Modern manufacturing plant in Dahej GIDC with advanced production equipment',
  },
  {
    icon: Gauge,
    title: '3000+ MT Monthly',
    description: 'High production capacity to meet large-scale industrial demands',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    description: 'Rigorous testing at every stage ensures consistent product quality',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Efficient logistics network for on-time delivery across India and abroad',
  },
];

export default function Manufacturing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="manufacturing" className="relative py-32 bg-slate-950 overflow-hidden grain-overlay">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-cyan-400 font-semibold mb-4 tracking-wider uppercase text-sm">Manufacturing</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            World-Class
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Production Facility
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Dahej Industrial Estate, GIDC, Gujarat — India's premier chemical manufacturing hub. 
            Our facility combines advanced technology with stringent quality controls.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Our Facility</h3>
              <div className="space-y-4 text-slate-300">
                <div>
                  <span className="text-cyan-400 font-semibold">Location:</span>
                  <p className="mt-1">D-2/CH - 214, Dahej Industrial Estate, GIDC, Dahej</p>
                  <p>Ta. Vagra, Bharuch, Gujarat 392130, India</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">Production Capacity:</span>
                  <p className="mt-1 text-3xl font-bold text-cyan-400">3,000+ MT/Month</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">Operating Since:</span>
                  <p className="mt-1 text-2xl font-bold">1999 (25+ Years)</p>
                </div>
              </div>
            </div>

            {/* Map Link */}
            <motion.a
              href="https://www.google.com/maps?q=21.7051,72.5347"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="block p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-slate-100 font-semibold mb-1">View on Google Maps</div>
                  <div className="text-sm text-slate-400">Dahej GIDC, Gujarat, India</div>
                </div>
                <svg className="w-6 h-6 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-slate-950" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Process Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl text-center"
        >
          <h3 className="text-3xl font-bold text-slate-100 mb-4">Certified Manufacturing Process</h3>
          <p className="text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our production follows international standards with comprehensive quality checks at every stage. 
            From raw material sourcing to final packaging, we maintain the highest standards of safety and quality.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-cyan-400 text-2xl font-bold">ISO Compliant</div>
              <div className="text-slate-500 text-sm">Quality Standards</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-cyan-400 text-2xl font-bold">24/7 Operation</div>
              <div className="text-slate-500 text-sm">Continuous Production</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-cyan-400 text-2xl font-bold">Expert Team</div>
              <div className="text-slate-500 text-sm">Skilled Professionals</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

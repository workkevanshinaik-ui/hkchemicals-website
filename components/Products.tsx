'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Beaker, CheckCircle2 } from 'lucide-react';

const productFeatures = [
  'High purity NaOCl (2% - 14% concentration)',
  'Consistent quality across all batches',
  'Available in bulk quantities',
  'Timely delivery across India and abroad',
  'Competitive pricing',
  'Technical support and documentation',
];

const specifications = [
  { label: 'Chemical Formula', value: 'NaOCl' },
  { label: 'Concentration', value: '2% - 14%' },
  { label: 'Appearance', value: 'Clear greenish-yellow liquid' },
  { label: 'pH Level', value: '11 - 13' },
  { label: 'Storage', value: 'Cool, dark place away from heat' },
  { label: 'Packaging', value: 'HDPE containers / Tankers' },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="products" className="relative py-32 bg-slate-950 overflow-hidden grain-overlay">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-cyan-400 font-semibold mb-4 tracking-wider uppercase text-sm">Our Products</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Premium
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Sodium Hypochlorite
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            High-quality sodium hypochlorite solutions for diverse industrial applications. 
            Available in concentrations ranging from 2% to 14%, tailored to meet your specific requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden group">
              {/* Chemical Molecule Illustration */}
              <div className="relative z-10 flex items-center justify-center h-96">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Droplets className="w-32 h-32 text-cyan-400/30" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <Beaker className="w-40 h-40 text-cyan-400" />
                  </motion.div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-4 -right-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold rounded-full shadow-xl"
            >
              2% - 14% Concentration
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Product Features</h3>
              <div className="space-y-3">
                {productFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3 group"
                  >
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-300 group-hover:text-slate-100 transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700 last:border-0">
                    <span className="text-slate-400">{spec.label}</span>
                    <span className="text-slate-100 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="block w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold rounded-xl text-center hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Request Product Specifications
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

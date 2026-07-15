'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Award, Truck, DollarSign, Users, Zap } from 'lucide-react';

const advantages = [
  {
    icon: TrendingUp,
    title: 'Large Production Capacity',
    description: '3000+ MT monthly production ensures we can fulfill bulk orders without delays',
  },
  {
    icon: Award,
    title: 'Consistent Quality',
    description: 'Rigorous testing and quality control at every production stage',
  },
  {
    icon: Truck,
    title: 'Timely Delivery',
    description: 'Efficient logistics network for on-time delivery across India and internationally',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Best market rates without compromising on product quality',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Technical assistance and customer service from experienced professionals',
  },
  {
    icon: Zap,
    title: '25+ Years Experience',
    description: 'Quarter-century of expertise in sodium hypochlorite manufacturing',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-cyan-400 font-semibold mb-4 tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Your Trusted
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Chemical Partner
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            With over 25 years of excellence in sodium hypochlorite manufacturing, 
            we've built lasting relationships with clients across India, UAE, Saudi Arabia, Kenya, and Bangladesh.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-slate-950" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-100 mb-3">{advantage.title}</h3>
                <p className="text-slate-400 leading-relaxed">{advantage.description}</p>

                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Export Markets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl text-center"
        >
          <h3 className="text-3xl font-bold text-slate-100 mb-6">Serving Global Markets</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            {['India', 'UAE', 'Saudi Arabia', 'Kenya', 'Bangladesh'].map((country, index) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
              >
                {country}
              </motion.div>
            ))}
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Partner With Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

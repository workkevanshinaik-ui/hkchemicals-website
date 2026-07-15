'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', href: '#about' },
      { name: 'Products', href: '#products' },
      { name: 'Applications', href: '#applications' },
      { name: 'Manufacturing', href: '#manufacturing' },
    ],
    'Services': [
      { name: 'Water Treatment Solutions', href: '#applications' },
      { name: 'Textile Chemicals', href: '#applications' },
      { name: 'Industrial Supplies', href: '#applications' },
      { name: 'Bulk Orders', href: '#contact' },
    ],
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="https://static.prod-images.emergentagent.com/jobs/4cd3afaa-6491-4fb6-b567-b4a5f2ffc8c8/images/a36aa0b2ee48d734e2282b31a07bc71dce25c0bddc0c9b1fead3a7586f880a9b.png"
              alt="H. K. Chemicals Industries"
              className="h-12 w-auto mb-6"
            />
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Leading sodium hypochlorite manufacturer & exporter with 25+ years of excellence. 
              Serving industries across India, UAE, Saudi Arabia, Kenya, and Bangladesh.
            </p>
            <div className="space-y-3">
              <a href="tel:+919825644881" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+91-98256-44881</span>
              </a>
              <a href="mailto:hk.chemicalsindustries@yahoo.in" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>hk.chemicalsindustries@yahoo.in</span>
              </a>
              <a 
                href="https://www.google.com/maps?q=21.7051,72.5347" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>D-2/CH - 214, Dahej Industrial Estate, GIDC, Dahej, Ta. Vagra, Bharuch, Gujarat 392130</span>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-slate-100 font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} H. K. Chemicals Industries. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-slate-400 text-sm">ISO Compliant</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 text-sm">Quality Certified</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 text-sm">Export Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-slate-950 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.a>
    </footer>
  );
}

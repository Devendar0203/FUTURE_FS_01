import React from 'react';
import { Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';

export const MeetDeveloper: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-slate-900 to-slate-950 text-white relative overflow-hidden">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating accent glow */}
      <div className="glow-circle w-[400px] h-[400px] bg-primary/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-10">
        
        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <span className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-primary flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
            <Terminal className="w-4.5 h-4.5 animate-pulse" />
            Backend & Frontend
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white">
            Meet the Developer
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
        </div>

        {/* Circular Framed Photo with Glowing Outer Rings */}
        <div className="relative w-48 h-48 md:w-56 md:h-56">
          {/* Animated Glow Rings */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-purple-600 rounded-full filter blur-lg opacity-40 animate-pulse-slow" />
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/60 pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            className="absolute inset-2 rounded-full border border-dotted border-secondary/60 pointer-events-none"
          />

          {/* Actual Circular Image */}
          <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900">
            <img
              src="/images/profile/devendar05.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                // Fallback image
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500';
              }}
            />
          </div>
        </div>

        {/* Quote and Profile Details */}
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-medium italic text-slate-200 leading-relaxed font-sans px-4">
              "{personalInfo.developerQuote}"
            </p>
          </motion.div>

          <div className="pt-6 border-t border-slate-800 max-w-sm mx-auto">
            <h4 className="font-display font-extrabold text-base tracking-tight text-white mb-0.5">
              {personalInfo.name}
            </h4>
            <p className="text-[10px] md:text-xs font-mono text-primary font-bold tracking-wider uppercase">
              {personalInfo.degree} &middot; {personalInfo.year}
            </p>
            <p className="text-[11px] font-mono text-slate-500 mt-1">
              KLH University &middot; Bachupally, Hyderabad
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

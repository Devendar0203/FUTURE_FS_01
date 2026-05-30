import React from 'react';
import { Award, CheckCircle, ExternalLink, Bookmark } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { motion } from 'framer-motion';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-slate-900/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[11px] font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            05. Certifications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Qualifications & Badges
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            return (
              <motion.div
                key={cert.title + cert.issuer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 hover:border-secondary/30 dark:hover:border-secondary/30 flex flex-col justify-between text-left relative overflow-hidden group"
              >
                
                {/* Decorative background watermark */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-100 dark:text-slate-800 opacity-20 pointer-events-none group-hover:scale-110 transition-transform">
                  <Award className="w-full h-full" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <Award className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider">
                      <Bookmark className="w-3 h-3 text-secondary" />
                      Credential
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-slate-900 dark:text-white tracking-tight leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                    ISSUER: <span className="font-sans font-bold text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                  </p>

                  {cert.credentialId && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mb-4">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>

                {/* Verification Footer Link */}
                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between mt-4">
                  <span className="text-[10px] text-emerald-500 dark:text-emerald-400 font-mono font-bold flex items-center gap-1 uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Active
                  </span>
                  
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold uppercase tracking-wider text-primary hover:text-primary-dark dark:hover:text-primary-light flex items-center gap-1 transition-colors"
                    >
                      Verify
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

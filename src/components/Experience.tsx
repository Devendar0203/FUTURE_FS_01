import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-900/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[11px] font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            03. Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            My professional journey
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical central connector line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent md:hidden" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={exp.company + exp.role} className="relative flex flex-col md:flex-row items-stretch mb-12 last:mb-0">
                
                {/* Connector Dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-900 border-4 border-primary z-20 -translate-x-1/2 shadow-lg shadow-primary/20 hidden md:block" />
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-900 border-4 border-primary z-20 -translate-x-1/2 shadow-lg shadow-primary/20 md:hidden" />

                {/* Timeline Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/20 transition-all duration-300 relative"
                  >
                    {/* Header elements */}
                    <div className={`flex flex-col mb-4 ${isEven ? 'md:items-end' : 'items-start'}`}>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                        {exp.role}
                      </span>
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                        {exp.company}
                      </h3>
                      
                      <div className={`flex flex-wrap gap-3 text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-2 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-secondary" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Accomplishments details */}
                    <ul className={`space-y-3 mb-6 ${isEven ? 'md:text-right list-none' : 'text-left list-none'}`}>
                      {exp.description.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className={`text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-[11px] font-mono font-semibold tracking-wide text-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                </div>

                {/* Empty side for layout spacing */}
                <div className="hidden md:block w-1/2" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

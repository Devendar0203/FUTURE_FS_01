import React from 'react';
import { BookOpen, GraduationCap, MapPin, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[11px] font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            01. About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-8">
            The person behind the code
          </h2>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-slate-200/40 dark:border-slate-800/40 mt-10">
            <div className="text-left">
              <span className="text-3xl md:text-4xl font-mono font-black text-primary block">3+</span>
              <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Years Coding</span>
            </div>
            <div className="text-left">
              <span className="text-3xl md:text-4xl font-mono font-black text-primary block">10+</span>
              <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Projects Built</span>
            </div>
            <div className="text-left">
              <span className="text-3xl md:text-4xl font-mono font-black text-primary block">150+</span>
              <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">LeetCode Solves</span>
            </div>
            <div className="text-left">
              <span className="text-3xl md:text-4xl font-mono font-black text-primary block">6+</span>
              <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Certifications</span>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Bio text column */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-display font-bold tracking-tight text-slate-800 dark:text-slate-200">
              Transforming Ideas Into Clean Code
            </h3>
            {personalInfo.aboutText.map((paragraph, index) => (
              <p key={index} className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {paragraph}
              </p>
            ))}

            <div className="p-6 rounded-2xl glass-card border-l-4 border-l-primary flex items-start gap-4">
              <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-display font-bold tracking-tight text-slate-800 dark:text-slate-100 mb-1">My Focus</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  I specialize in Java, Spring Boot microservices, and React.js frontend interfaces. I'm actively expanding my knowledge in AWS Cloud architectures and AI integrations to build modern full-stack systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Details Cards Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            {/* Card: Education */}
            <div className="p-6 rounded-2xl glass-card glass-card-hover text-left flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 font-bold dark:text-slate-400 uppercase tracking-wider block mb-1">Education</span>
                <h4 className="text-base font-display font-bold text-slate-900 dark:text-white tracking-tight">
                  {personalInfo.degree}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{personalInfo.college}</p>
                <span className="inline-block mt-2 text-xs font-mono font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary">
                  {personalInfo.year}
                </span>
              </div>
            </div>

            {/* Card: Location */}
            <div className="p-6 rounded-2xl glass-card glass-card-hover text-left flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 font-bold dark:text-slate-400 uppercase tracking-wider block mb-1">Location</span>
                <h4 className="text-base font-display font-bold text-slate-900 dark:text-white tracking-tight">
                  Hyderabad, India
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{personalInfo.location}</p>
              </div>
            </div>

            {/* Card: Technical Approach */}
            <div className="p-6 rounded-2xl glass-card glass-card-hover text-left flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 font-bold dark:text-slate-400 uppercase tracking-wider block mb-1">Key Interests</span>
                <h4 className="text-base font-display font-bold text-slate-900 dark:text-white tracking-tight">
                  Java Development & AI
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Building backend rest APIs, implementing secure JWT systems, and designing responsive React interfaces.
                </p>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

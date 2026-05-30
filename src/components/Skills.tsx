import React, { useState } from 'react';
import { skills } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Code, 
  Layers, 
  Server, 
  Database, 
  Cloud, 
  Terminal, 
  Cpu, 
  Wrench, 
  Sparkles,
  GitBranch
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Skills', icon: Sparkles },
  { id: 'languages', label: 'Languages', icon: Code },
  { id: 'frontend', label: 'Frontend', icon: Layers },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'database', label: 'Databases', icon: Database },
  { id: 'cloud', label: 'Cloud', icon: Cloud },
  { id: 'tools', label: 'Tools', icon: Wrench },
  { id: 'ai', label: 'AI Tools', icon: Cpu },
  { id: 'other', label: 'Others', icon: Terminal },
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = skills.filter((skill) => {
    if (activeTab === 'all') return true;
    return skill.category === activeTab;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages': return <Code className="w-5 h-5 text-indigo-500" />;
      case 'frontend': return <Layers className="w-5 h-5 text-blue-500" />;
      case 'backend': return <Server className="w-5 h-5 text-purple-500" />;
      case 'database': return <Database className="w-5 h-5 text-emerald-500" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-cyan-500" />;
      case 'tools': return <GitBranch className="w-5 h-5 text-amber-500" />;
      case 'ai': return <Cpu className="w-5 h-5 text-rose-500" />;
      default: return <Terminal className="w-5 h-5 text-slate-500" />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 300, damping: 25 } }
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background glow node */}
      <div className="glow-circle w-[400px] h-[400px] bg-primary/10 top-1/3 right-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[11px] font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            02. Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            My technical toolkit
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-lg shadow-primary/20 scale-105'
                    : 'glass-card border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/30 dark:hover:border-primary/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      {getCategoryIcon(skill.category)}
                    </span>
                    <span className="text-xs font-mono font-bold text-primary dark:text-primary-50">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <h3 className="text-sm font-mono font-bold tracking-wide text-slate-800 dark:text-white mb-3 text-left">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

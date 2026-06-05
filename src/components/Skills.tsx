import React, { useState } from 'react';
import { skills } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Database, 
  Cloud, 
  Terminal, 
  Cpu, 
  Wrench, 
  Sparkles,
  Shield,
  Layout
} from 'lucide-react';

const ARCHITECTURE_LAYERS = [
  {
    id: 'backend',
    label: 'BACKEND & SECURITY',
    accent: 'text-purple-500',
    accentBg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    hoverRing: 'hover:ring-1 hover:ring-purple-500/50',
    icon: Server,
    skillNames: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'JWT Authentication', 'C', 'API Integration', 'Role-Based Access Control', 'System Design Fundamentals']
  },
  {
    id: 'frontend',
    label: 'FRONTEND & UI',
    accent: 'text-blue-500',
    accentBg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    hoverRing: 'hover:ring-1 hover:ring-blue-500/50',
    icon: Layout,
    skillNames: ['JavaScript', 'HTML5', 'CSS3', 'React.js', 'Tailwind CSS']
  },
  {
    id: 'cloud',
    label: 'DATABASES & CLOUD',
    accent: 'text-emerald-500',
    accentBg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    hoverRing: 'hover:ring-1 hover:ring-emerald-500/50',
    icon: Database,
    skillNames: ['MySQL', 'SQL', 'PostgreSQL (Basics)', 'AWS', 'GCP Basics', 'Vercel', 'Render']
  },
  {
    id: 'tools',
    label: 'TOOLS & AI',
    accent: 'text-amber-500',
    accentBg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    hoverRing: 'hover:ring-1 hover:ring-amber-500/50',
    icon: Wrench,
    skillNames: ['GitHub', 'Postman', 'Notion', 'ChatGPT', 'GitHub Copilot', 'Cursor', 'Prompt Engineering']
  }
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Layers', icon: Sparkles },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'cloud', label: 'Data & Cloud', icon: Database },
  { id: 'tools', label: 'Tools & AI', icon: Wrench },
];

const getSkillIcon = (skillName: string) => {
  const frontendSkills = ['JavaScript', 'HTML5', 'CSS3', 'React.js', 'Tailwind CSS'];
  const dbSkills = ['MySQL', 'SQL', 'PostgreSQL (Basics)'];
  const cloudSkills = ['AWS', 'GCP Basics', 'Vercel', 'Render'];
  const aiSkills = ['ChatGPT', 'GitHub Copilot', 'Cursor', 'Prompt Engineering'];
  const securitySkills = ['Role-Based Access Control', 'Spring Security', 'JWT Authentication'];
  
  if (frontendSkills.includes(skillName)) return <Code className="w-4 h-4" />;
  if (dbSkills.includes(skillName)) return <Database className="w-4 h-4" />;
  if (cloudSkills.includes(skillName)) return <Cloud className="w-4 h-4" />;
  if (aiSkills.includes(skillName)) return <Cpu className="w-4 h-4" />;
  if (securitySkills.includes(skillName)) return <Shield className="w-4 h-4" />;
  
  return <Terminal className="w-4 h-4" />;
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="py-20 relative">
      {/* Background glow node */}
      <div className="glow-circle w-[400px] h-[400px] bg-primary/10 top-1/3 right-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[11px] font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            02. Technical Architecture
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            System Blueprint
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-lg scale-105'
                    : 'glass-card border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Architecture Stack Layout */}
        <div className="flex flex-col gap-6 md:gap-8">
          {ARCHITECTURE_LAYERS.map((layer, index) => {
            const isActive = activeTab === 'all' || activeTab === layer.id;
            const LayerIcon = layer.icon;

            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`transition-all duration-500 rounded-2xl border overflow-hidden ${
                  isActive 
                    ? 'border-slate-200/60 dark:border-slate-700/60 shadow-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md scale-100 opacity-100' 
                    : 'border-slate-200/20 dark:border-slate-800/20 bg-slate-50/30 dark:bg-slate-900/20 scale-[0.98] opacity-40 grayscale-[30%]'
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left Column: Layer Label */}
                  <div className="md:w-1/3 lg:w-1/4 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200/50 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/20">
                    <div className="flex items-center md:items-start md:flex-col gap-4">
                      <div className={`p-3 rounded-xl inline-flex ${layer.accentBg} ${layer.accent}`}>
                        <LayerIcon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-display font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
                          {layer.label.split(' & ')[0]}
                          <br className="hidden md:block" />
                          <span className={`${layer.accent} block mt-1`}>
                            & {layer.label.split(' & ')[1]}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Skill Chips */}
                  <div className="md:w-2/3 lg:w-3/4 p-6 md:p-8 flex items-center">
                    <div className="flex flex-wrap gap-3">
                      {layer.skillNames.map((skillName) => {
                        const skillData = skills.find(s => s.name === skillName);
                        // Optional proficiency progress bar inside chip
                        const proficiency = skillData ? skillData.proficiency : 80;
                        
                        return (
                          <motion.div
                            key={skillName}
                            whileHover={isActive ? { y: -2, scale: 1.05 } : {}}
                            className={`group relative overflow-hidden flex flex-col gap-2 px-4 py-3 rounded-xl border transition-all duration-300 ${
                              isActive 
                                ? `bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:shadow-lg ${layer.hoverRing}` 
                                : 'bg-transparent border-slate-200 dark:border-slate-800 text-slate-500'
                            }`}
                          >
                            <div className="flex items-center gap-2 relative z-10">
                              <span className={`${isActive ? layer.accent : 'text-slate-400'}`}>
                                {getSkillIcon(skillName)}
                              </span>
                              <span className="text-sm font-mono font-bold tracking-wide">
                                {skillName}
                              </span>
                            </div>
                            
                            {/* Subdued Progress Bar inside chip */}
                            <div className="w-full h-1 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden mt-1 relative z-10">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: isActive ? `${proficiency}%` : 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className={`h-full bg-current ${layer.accent}`}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

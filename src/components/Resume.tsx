import React from 'react';
import { Download, FileText, Mail, Phone, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalInfo, skills, experiences, projects } from '../data/portfolioData';
import { motion } from 'framer-motion';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[11px] font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            06. Resume
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            My qualifications details
          </h2>
        </div>

        {/* Outer Grid */}
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
          
          {/* High Fidelity Styled CSS Resume Preview Mock */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-3xl glass-card border border-slate-200/50 dark:border-slate-800/80 shadow-2xl p-8 md:p-12 text-left relative overflow-hidden"
          >
            
            {/* Watermark Logo */}
            <div className="absolute top-8 right-8 text-primary/10 dark:text-primary/5 text-7xl font-mono font-black select-none pointer-events-none">
              CV
            </div>

            {/* Header info */}
            <div className="border-b border-slate-200/60 dark:border-slate-800/60 pb-8 mb-8">
              <h3 className="text-3xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-primary font-mono text-sm font-bold tracking-wide mb-4">{personalInfo.roles.join(' | ')}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  {personalInfo.phone}
                </span>
                <span className="flex items-center gap-2 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Grid for content columns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Column (8 cols) */}
              <div className="md:col-span-8 space-y-8">
                
                {/* Section: Education */}
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Education
                  </h4>
                  <div className="pl-7 border-l-2 border-slate-200/50 dark:border-slate-800/50 relative">
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-primary -left-[6px] top-1.5" />
                    <h5 className="font-display font-bold text-slate-800 dark:text-white text-base tracking-tight">
                      {personalInfo.degree} - <span className="font-mono text-sm">{personalInfo.year}</span>
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">{personalInfo.college}</p>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Bachupally, Hyderabad</p>
                  </div>
                </div>

                {/* Section: Experience */}
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-secondary" />
                    Internships & Work
                  </h4>
                  <div className="space-y-6">
                    {experiences.map((exp, idx) => (
                      <div key={idx} className="pl-7 border-l-2 border-slate-200/50 dark:border-slate-800/50 relative">
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-secondary -left-[6px] top-1.5" />
                        <h5 className="font-display font-bold text-slate-800 dark:text-white text-base tracking-tight">
                          {exp.role}
                        </h5>
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                          {exp.company} &middot; <span className="font-normal">{exp.period}</span>
                        </p>
                        <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
                          {exp.description.slice(0, 3).map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="leading-relaxed">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Major Projects */}
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-accent" />
                    Academic Projects
                  </h4>
                  <div className="space-y-6">
                    {projects.map((proj, idx) => (
                      <div key={idx} className="pl-7 border-l-2 border-slate-200/50 dark:border-slate-800/50 relative">
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-accent -left-[6px] top-1.5" />
                        <h5 className="font-display font-bold text-slate-800 dark:text-white text-base tracking-tight">
                          {proj.title}
                        </h5>
                        <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1 mb-2">
                          {proj.subtitle}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                          {proj.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (4 cols) */}
              <div className="md:col-span-4 space-y-8">
                
                {/* Section: Core Skills */}
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    Top Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 14).map((skill) => (
                      <span
                        key={skill.name}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section: Credentials */}
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-secondary" />
                    Cloud & AI
                  </h4>
                  <ul className="text-xs font-mono text-slate-500 dark:text-slate-400 space-y-2">
                    <li>&bull; Microsoft Azure AI Fundamentals</li>
                    <li>&bull; AWS Cloud Practitioner</li>
                    <li>&bull; IBM Cloud & Git/GitHub</li>
                  </ul>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Download Action Button */}
          <a
            href="/resume.pdf"
            download="Bandaru_Devendar_Resume.pdf"
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-primary via-secondary to-purple-600 text-white font-mono font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-lg"
          >
            <Download className="w-5 h-5 animate-bounce" />
            Download Full Resume PDF
          </a>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ShieldCheck, Database, LayoutTemplate, ServerCrash, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface ArchNode {
  id: string;
  name: string;
  sub: string;
  details: string;
  color: string;
  icon: React.ReactNode;
}

export const ArchitectureDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>('client');

  const nodes: ArchNode[] = [
    {
      id: 'client',
      name: 'Client Application (React)',
      sub: 'Vite | Tailwind | Axios',
      details: 'Frontend layer sending HTTP request headers with JWT authorization tokens. Implements local route guards based on role-based states.',
      color: 'from-blue-500 to-cyan-400',
      icon: <LayoutTemplate className="w-5 h-5 text-white" />
    },
    {
      id: 'auth',
      name: 'Security Gate (Spring Security)',
      sub: 'JWT Validator | CORS | RBAC',
      details: 'Intercepts requests, validates JWT expiration, extracts user claims, and checks permissions against requested endpoints.',
      color: 'from-purple-600 to-indigo-500',
      icon: <ShieldCheck className="w-5 h-5 text-white" />
    },
    {
      id: 'backend',
      name: 'REST Controller & Service',
      sub: 'Spring Boot APIs | Hibernate',
      details: 'Handles routing, executes transactional business logic, aggregates data, and enforces validation (DTO patterns).',
      color: 'from-pink-500 to-rose-500',
      icon: <Cpu className="w-5 h-5 text-white" />
    },
    {
      id: 'db',
      name: 'Relational Database',
      sub: 'MySQL Server | JPA JPA',
      details: 'Stores users, groups, tasks, categories, and audit logs. Structured with optimized indexes and foreign key cascades.',
      color: 'from-emerald-500 to-teal-400',
      icon: <Database className="w-5 h-5 text-white" />
    }
  ];

  return (
    <div className="w-full p-6 rounded-2xl bg-slate-900/5 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 text-left">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
          <ServerCrash className="w-4.5 h-4.5 text-primary" />
          Interactive System Architecture
        </h4>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Click node to inspect</span>
      </div>

      {/* Visual Flow diagram container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center relative mb-8">
        
        {nodes.map((node, index) => {
          const isActive = activeNode === node.id;
          return (
            <React.Fragment key={node.id}>
              {/* Node Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveNode(node.id)}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 relative ${
                  isActive 
                    ? 'bg-slate-100 dark:bg-slate-800 border-primary shadow-lg shadow-primary/10' 
                    : 'glass-card border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Visual indicator */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-xl bg-gradient-to-r ${node.color}`} />
                
                <div className="flex items-center gap-3 mt-1.5 mb-2">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center`}>
                    {node.icon}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 dark:text-white leading-tight">
                      {node.name.split(' ')[0]}
                    </h5>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase">
                      {node.id}
                    </span>
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 truncate">
                  {node.sub}
                </p>
              </motion.div>

              {/* Connector Arrows (Only on desktop) */}
              {index < nodes.length - 1 && (
                <div className="hidden md:flex justify-center items-center h-0 pointer-events-none relative">
                  <div className="w-full h-0.5 border-t border-dashed border-slate-300 dark:border-slate-700 absolute z-0" />
                  <span className="text-slate-400 dark:text-slate-600 font-bold z-10 bg-slate-50 dark:bg-[#0b0f19] px-1 text-xs">→</span>
                </div>
              )}
            </React.Fragment>
          );
        })}

      </div>

      {/* Selected Node Details Drawer */}
      <div className="p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/30">
        {activeNode ? (
          <div>
            <h5 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
              <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${nodes.find(n => n.id === activeNode)?.color}`} />
              {nodes.find(n => n.id === activeNode)?.name}
            </h5>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
              Stack: <span className="font-semibold text-slate-600 dark:text-slate-300">{nodes.find(n => n.id === activeNode)?.sub}</span>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
              {nodes.find(n => n.id === activeNode)?.details}
            </p>
          </div>
        ) : (
          <p className="text-sm text-slate-400 italic">Select any node above to analyze details...</p>
        )}
      </div>

    </div>
  );
};

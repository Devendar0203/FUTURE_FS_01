import React, { useState } from 'react';
import { KeyRound, ShieldAlert, FileText, Database } from 'lucide-react';

interface IntegrityStep {
  label: string;
  sub: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

export const IntegrityDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: IntegrityStep[] = [
    {
      label: 'Input File Scan',
      sub: 'Monitor Target',
      desc: 'System watches designated folders containing sensitive digital evidence files (e.g., sample.txt).',
      icon: <FileText className="w-5 h-5 text-white" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      label: 'SHA-256 Hash',
      sub: 'Cryptographic Sign',
      desc: 'Computes a unique 256-bit cryptographic signature representing the exact binary contents of the file.',
      icon: <KeyRound className="w-5 h-5 text-white" />,
      color: 'from-amber-500 to-orange-500'
    },
    {
      label: 'State Comparison',
      sub: 'Integrity Audit',
      desc: 'Compares the newly generated hash against the baseline signature in the secure state database.',
      icon: <Database className="w-5 h-5 text-white" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      label: 'Alert Trigger',
      sub: 'Tamper Flagged',
      desc: 'If hashes differ, or files are missing, the system generates MODIFIED or DELETED critical security alerts.',
      icon: <ShieldAlert className="w-5 h-5 text-white" />,
      color: 'from-rose-500 to-red-600'
    }
  ];

  return (
    <div className="w-full p-6 rounded-2xl bg-slate-900/5 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 text-left">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
          <ShieldAlert className="w-4.5 h-4.5 text-primary" />
          File Integrity Verification Flow
        </h4>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Click state to view details</span>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={step.label}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-300 relative focus:outline-none ${
                isActive
                  ? 'bg-slate-100 dark:bg-slate-800 border-primary shadow-lg shadow-primary/10'
                  : 'glass-card border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${step.color}`} />
              
              <div className="flex items-center gap-2 mt-1.5">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                  {step.icon}
                </div>
                <div>
                  <h5 className="text-[11px] font-black text-slate-800 dark:text-white leading-tight">
                    {step.label}
                  </h5>
                  <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase block mt-0.5">
                    {step.sub}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Details drawer */}
      <div className="p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/30">
        <h5 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-1.5">
          <span className="text-primary font-black uppercase text-[10px]">Phase 0{activeStep + 1}:</span>
          {steps[activeStep].label}
        </h5>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          {steps[activeStep].desc}
        </p>
      </div>

    </div>
  );
};

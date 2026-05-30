import React, { useState } from 'react';
import { Upload, Sliders, BrainCircuit, HeartHandshake } from 'lucide-react';

interface Step {
  stepNum: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
}

export const WorkflowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      stepNum: '01',
      title: 'Leaf Image Upload',
      desc: 'User takes a photograph of the infected plant leaf and uploads it via the Streamlit web client (supports JPG/PNG file uploads).',
      icon: <Upload className="w-5 h-5 text-white" />,
      color: 'from-blue-500 to-cyan-400',
      badge: 'Input Phase'
    },
    {
      stepNum: '02',
      title: 'Preprocessing Pipeline',
      desc: 'The uploaded file is converted to a NumPy array, resized to 224x224 pixels (MobileNetV2 standard dimensions), normalized to [0,1], and expanded to match the batch dimensions (1, 224, 224, 3).',
      icon: <Sliders className="w-5 h-5 text-white" />,
      color: 'from-amber-500 to-orange-400',
      badge: 'Data Prep'
    },
    {
      stepNum: '03',
      title: 'MobileNetV2 Inference',
      desc: 'The TensorFlow/Keras deep learning model executes inference on the preprocessed image tensor, extracting hierarchical spatial features and producing softmax classification probabilities.',
      icon: <BrainCircuit className="w-5 h-5 text-white" />,
      color: 'from-purple-500 to-pink-500',
      badge: 'Deep Learning'
    },
    {
      stepNum: '04',
      title: 'Diagnosis & Treatment',
      desc: 'The software resolves the class index, fetches the disease metadata, calculates confidence, and provides organic biological remedies along with links to fertilizers.',
      icon: <HeartHandshake className="w-5 h-5 text-white" />,
      color: 'from-emerald-500 to-teal-400',
      badge: 'Actionable Advice'
    }
  ];

  return (
    <div className="w-full p-6 rounded-2xl bg-slate-900/5 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 text-left">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
          <BrainCircuit className="w-4.5 h-4.5 text-primary" />
          AI Diagnosis Workflow
        </h4>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Click step to view detail</span>
      </div>

      {/* Stepper bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={step.stepNum}
              onClick={() => setActiveStep(idx)}
              className={`flex-1 p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 relative focus:outline-none ${
                isActive
                  ? 'bg-slate-100 dark:bg-slate-800 border-primary shadow-lg shadow-primary/10'
                  : 'glass-card border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${step.color}`} />
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-black text-slate-400 dark:text-slate-600">STEP {step.stepNum}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400">
                  {step.badge}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                  {step.icon}
                </div>
                <h5 className="text-xs font-bold text-slate-800 dark:text-white leading-tight">
                  {step.title}
                </h5>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Explanation Card */}
      <div className="p-5 rounded-xl bg-slate-100/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/30">
        <h5 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
          <span className="text-primary font-black uppercase text-xs">Step {steps[activeStep].stepNum}:</span>
          {steps[activeStep].title}
        </h5>
        <span className="inline-block text-[10px] font-bold text-primary px-2 py-0.5 rounded bg-primary/10 mb-3">
          {steps[activeStep].badge}
        </span>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {steps[activeStep].desc}
        </p>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { testimonials } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50/20 dark:bg-slate-900/5 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="glow-circle w-[300px] h-[300px] bg-secondary/10 top-10 right-10 animate-float" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="p-2.5 rounded-full bg-secondary/10 text-secondary inline-flex mb-4">
            <MessageSquare className="w-5 h-5" />
          </span>
          <h2 className="text-3xl font-display font-black tracking-tight text-slate-900 dark:text-white mb-2">
            Feedback & Reviews
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Carousel Slider */}
        <div className="relative p-6 sm:p-12 rounded-3xl glass-card border border-slate-200/50 dark:border-slate-800/80 shadow-xl text-center">
          
          <Quote className="w-12 h-12 text-secondary/35 mx-auto mb-6 animate-pulse" />

          <div className="min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div>
                  <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base tracking-tight">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-xs font-mono font-bold text-primary mt-1">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          {testimonials.length > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full glass-card border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                {activeIndex + 1} / {testimonials.length}
              </span>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full glass-card border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

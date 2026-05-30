import React, { useState } from 'react';
import { ExternalLink, Play, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { VideoModal } from './VideoModal';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { WorkflowDiagram } from './WorkflowDiagram';
import { IntegrityDiagram } from './IntegrityDiagram';
import { motion, AnimatePresence } from 'framer-motion';

const GithubIcon = () => (
  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const Projects: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);
  
  // Track active slide index for each project carousel
  const [carouselIndices, setCarouselIndices] = useState<Record<string, number>>({
    taskflow: 0,
    'plant-disease': 0,
    'tamper-detection': 0,
  });

  const nextSlide = (projectId: string, maxLength: number) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % maxLength,
    }));
  };

  const prevSlide = (projectId: string, maxLength: number) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + maxLength) % maxLength,
    }));
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Decorative ambient glows */}
      <div className="glow-circle w-[500px] h-[500px] bg-secondary/5 top-1/4 left-10 animate-float" />
      <div className="glow-circle w-[400px] h-[400px] bg-primary/5 bottom-1/4 right-10 animate-float" style={{ animationDelay: '-3s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-20">
          <span className="text-[11px] font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            04. Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Stuff I have built
          </h2>
        </div>

        {/* Project List */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const currentSlide = carouselIndices[project.id] || 0;
            const isEven = index % 2 === 0;
            const currentImgSrc = project.screenshots[currentSlide];

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6"
              >
                {/* Visual Carousel Column */}
                <div className={`lg:col-span-6 flex flex-col gap-6 ${isEven ? '' : 'lg:order-last'}`}>
                  
                  {/* Browser Mockup Wrapper */}
                  <div className="relative aspect-video rounded-3xl overflow-hidden glass-card border border-slate-200/50 dark:border-slate-800/80 shadow-2xl group flex flex-col">
                    
                    {/* Browser Top Bar */}
                    <div className="flex items-center justify-between h-9 px-4 bg-slate-100/75 dark:bg-slate-900/60 border-b border-slate-200/50 dark:border-slate-800/50 select-none">
                      {/* Window Controls */}
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block" />
                      </div>
                      
                      {/* Address Bar */}
                      <div className="flex-1 flex justify-center max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto">
                        <div className="w-full px-3 py-0.5 rounded bg-slate-200/40 dark:bg-slate-800/40 text-[10px] text-slate-500 dark:text-slate-400 font-mono text-center truncate">
                          {project.id === 'taskflow' 
                            ? 'taskflow-frontend-final-tnsd-nine.vercel.app/filters-labels' 
                            : 'plant-disease-detection-ai.streamlit.app'}
                        </div>
                      </div>
                      
                      {/* Spacer to balance */}
                      <div className="w-12 h-3" />
                    </div>

                    {/* Slides Area */}
                    <div 
                      className="w-full flex-1 relative bg-slate-950 overflow-hidden cursor-zoom-in group/slide"
                      onClick={() => setLightboxImg({ src: currentImgSrc, alt: `${project.title} Screenshot ${currentSlide + 1}` })}
                    >
                      {/* Glass Hover Zoom Tag */}
                      <div className="absolute top-3 right-3 z-20 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-white flex items-center gap-1 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300">
                        <ZoomIn className="w-3.5 h-3.5" />
                        Click to Expand
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentSlide}
                          src={currentImgSrc}
                          alt={`${project.title} Screenshot ${currentSlide + 1}`}
                          className="w-full h-full object-contain object-top bg-[#090d16] filter contrast-[1.02] brightness-[1.01]"
                          style={{
                            imageRendering: '-webkit-optimize-contrast',
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            imageRendering: 'crisp-edges'
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          onError={(e) => {
                            const fallbacks: Record<string, string> = {
                              taskflow: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
                              'plant-disease': 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=1000'
                            };
                            (e.target as HTMLImageElement).src = fallbacks[project.id] || fallbacks.taskflow;
                          }}
                        />
                      </AnimatePresence>
                    </div>

                    {/* Navigation Buttons (Only visible on hover) */}
                    {project.screenshots.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevSlide(project.id, project.screenshots.length);
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextSlide(project.id, project.screenshots.length);
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                          aria-label="Next slide"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Bullet Indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {project.screenshots.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCarouselIndices(prev => ({ ...prev, [project.id]: dotIdx }));
                          }}
                          className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                            currentSlide === dotIdx ? 'bg-primary w-4' : 'bg-white/50 hover:bg-white/80'
                          }`}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                  </div>

                  {/* Tech Stack List */}
                  <div className="flex flex-wrap gap-2 justify-start">
                    {project.techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2 py-0.5 rounded bg-primary/10 border border-primary/10 dark:bg-primary/5 text-primary text-[11px] font-mono font-semibold tracking-wide"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Information Info Column */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left">
                  <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
                    {project.subtitle}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-base">
                    {project.description}
                  </p>

                  {/* Embed custom interactive diagrams inside the detail description */}
                  <div className="mb-8">
                    {project.id === 'taskflow' && <ArchitectureDiagram />}
                    {project.id === 'plant-disease' && <WorkflowDiagram />}
                    {project.id === 'tamper-detection' && <IntegrityDiagram />}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3.5 items-center">
                    {project.videoUrl && (
                      <button
                        onClick={() => setActiveVideo({ url: project.videoUrl!, title: project.title })}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                      >
                        <Play className="w-4.5 h-4.5 fill-current" />
                        Watch Demo
                      </button>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl glass-card border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <GithubIcon />
                      Source Code
                    </a>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl glass-card border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                      >
                        <ExternalLink className="w-4.5 h-4.5" />
                        Live App
                      </a>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Demo Video Modal Popup */}
      <VideoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        videoUrl={activeVideo?.url || ''}
        projectTitle={activeVideo?.title || ''}
      />

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-zoom-out"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Header */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
                <span className="text-xs text-slate-400 font-semibold">{lightboxImg.alt}</span>
                <button
                  onClick={() => setLightboxImg(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Enhanced image content */}
              <div className="flex-1 overflow-y-auto p-4 flex items-start justify-center bg-slate-950">
                <img
                  src={lightboxImg.src}
                  alt={lightboxImg.alt}
                  className="max-w-full h-auto max-h-[75vh] object-contain rounded border border-slate-800/80 filter contrast-[1.03] saturate-[1.01]"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    imageRendering: 'crisp-edges'
                  }}
                  onError={(e) => {
                    const fallback = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000';
                    (e.target as HTMLImageElement).src = fallback;
                  }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

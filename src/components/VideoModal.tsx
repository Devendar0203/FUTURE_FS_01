import React, { useState } from 'react';
import { X, Play, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  projectTitle: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, projectTitle }) => {
  const [loadError, setLoadError] = useState(false);

  const handleVideoError = () => {
    // If our mock video fails to play because it is just text/dummy
    setLoadError(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 text-left"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
              <div>
                <span className="text-[10px] text-primary uppercase font-bold tracking-wider">Demo Video Preview</span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {projectTitle} Demonstration
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player / Fallback Box */}
            <div className="aspect-video bg-slate-950 relative flex items-center justify-center">
              {loadError ? (
                <div className="p-8 text-center max-w-md flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Video Demonstration Ready</h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    The video player is successfully configured to load from <code className="text-xs px-2 py-1 rounded bg-slate-800 text-amber-400">{videoUrl}</code>. 
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    To showcase your live app, record an MP4 screencast, drop it into your local <code className="text-slate-400">public/videos/</code> folder, and overwrite the stub file.
                  </p>
                </div>
              ) : (
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onError={handleVideoError}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Info footer */}
            <div className="p-5 border-t border-slate-800 bg-slate-950/30 text-xs text-slate-400 flex items-center gap-2.5">
              <Play className="w-4 h-4 text-primary animate-ping" />
              <span>Demonstrating full-stack CRUD integrations, authentication states, or deep learning model features.</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

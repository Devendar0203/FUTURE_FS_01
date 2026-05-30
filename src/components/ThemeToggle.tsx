import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl glass-card border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer overflow-hidden transition-all duration-300 focus:outline-none"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ y: 30, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -30, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.25 }}
            className="text-amber-400"
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 30, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -30, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.25 }}
            className="text-indigo-600"
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

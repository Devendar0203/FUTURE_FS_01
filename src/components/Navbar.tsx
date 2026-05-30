import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection tracker
      const scrollPosition = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-lg shadow-slate-900/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl flex items-center gap-1.5 focus:outline-none">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-mono font-black text-xs tracking-wider">
            BD
          </span>
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent font-display font-extrabold tracking-tight">
            Devendar
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary focus:outline-none ${
                  isActive ? 'text-primary' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl glass-card border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass-nav border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold py-1.5 transition-colors ${
                      isActive ? 'text-primary pl-2 border-l-2 border-primary' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

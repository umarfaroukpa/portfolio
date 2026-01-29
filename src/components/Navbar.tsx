'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#projects', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },    
  ];

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: '0%',
      transition: { type: 'spring', damping: 25, stiffness: 180 }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'bg-white/95 dark:bg-slate-950/95 shadow-lg backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50' 
            : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-b border-transparent'
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Umar Farouk
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group text-sm font-medium"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-slate-900 dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}

            {/* Contact CTA - Now scrolls to contact section */}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm hover:shadow-md"
            >
              Contact
            </a>

            {/* Theme Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Theme Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900 dark:text-white" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white dark:bg-slate-950 shadow-2xl"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-xl font-bold text-slate-900 dark:text-white">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6 text-lg">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Contact - Now scrolls to contact section */}
                  <a
                    href="#contact"
                    className="mt-6 px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-center font-medium hover:opacity-90 transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get in touch
                  </a>
                </nav>

                <div className="mt-auto pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400">
                  Abuja, Nigeria • {new Date().getFullYear()}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content jump when navbar becomes fixed */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
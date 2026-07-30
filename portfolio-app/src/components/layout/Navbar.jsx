import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'About',      href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Profiles',   href: '#profiles' },
  { name: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen]               = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();
  const { theme, toggle } = useTheme();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60);
  });

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <>
      <motion.header
        className="fixed top-0 w-full z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className="transition-all duration-500"
          style={{
            background: scrolled ? 'var(--nav-bg)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
          }}
        >
          <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center h-16 md:h-[70px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold font-sora tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Pradeepa
                <span className="text-blue-gradient">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => scrollTo(e, link.href)}
                        className="relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                        style={{ color: isActive ? '#0d9488' : 'var(--text-secondary)' }}
                        onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-primary)'; }}
                        onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)'; }}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-indicator"
                            className="absolute inset-0 rounded-md"
                            style={{ background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.2)' }}
                            transition={{ type: 'spring', duration: 0.4 }}
                          />
                        )}
                        <span className="relative z-10">{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="w-px h-5 mx-3" style={{ background: 'var(--border-color)' }} />

              {/* Theme toggle */}
              <motion.button
                onClick={toggle}
                className="theme-toggle mr-3"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'flex' }}
                  >
                    {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              <a href="/Pradeepa_CV.pdf" download className="btn-primary text-sm">
                Resume
              </a>
            </nav>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                onClick={toggle}
                className="theme-toggle"
                aria-label="Toggle theme"
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
              </motion.button>
              <button
                className="transition-colors p-1"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
              style={{ background: 'var(--glass-bg2)', borderBottom: '1px solid var(--border-color)' }}
            >
              <ul className="flex flex-col px-6 py-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className="block py-3 px-4 font-medium rounded-md transition-colors"
                      style={{ color: 'var(--text-secondary)', border: '1px solid transparent' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#0d9488'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'transparent'; }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <li className="pt-3 mt-2" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <a href="/Pradeepa_CV.pdf" download className="btn-primary w-full justify-center">
                    Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

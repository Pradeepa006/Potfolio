import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { icon: <FaGithub />, href: 'https://github.com/Pradeepa006', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/pradeepa-subramani', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:pradeepasubramani8@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{ background: '#0a0b0f', borderTop: '1px solid #1e2330' }}
      className="py-12 relative"
    >
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-dark-border">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
              Pradeepa<span className="text-blue-gradient">.</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Building digital experiences that are fast, beautiful, and meaningful.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-600 mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {LINKS.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm text-slate-500 hover:text-brand-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-600 mb-4">Connect</p>
            <div className="flex gap-3">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-dark-border flex items-center justify-center text-slate-500 hover:text-white hover:border-dark-border-light transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-700">
          <p>&copy; {new Date().getFullYear()} Pradeepa Subramani. All rights reserved.</p>
          <p className="font-mono">Designed & Built with ♥</p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-5 right-6 md:right-10 w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
          color: '#0a0b0f',
          boxShadow: '0 4px 20px rgba(59,130,246,0.3)',
        }}
      >
        <FaChevronUp />
      </button>
    </footer>
  );
}

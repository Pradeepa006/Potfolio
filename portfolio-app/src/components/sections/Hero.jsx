import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks, SiCodeforces } from 'react-icons/si';

const SOCIAL = [
  { icon: FaGithub, href: 'https://github.com/Pradeepa006', label: 'GitHub', hoverColor: '#ffffff' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/pradeepa-subramani', label: 'LinkedIn', hoverColor: '#0a66c2' },
  { icon: FaEnvelope, href: 'mailto:pradeepasubramani8@gmail.com', label: 'Email', hoverColor: '#3b82f6' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/Pradeepa__S', label: 'LeetCode', hoverColor: '#ffa116' },
  { icon: SiHackerrank, href: 'https://www.hackerrank.com/profile/pradeepasubrama1', label: 'HackerRank', hoverColor: '#00ea64' },
  { icon: SiGeeksforgeeks, href: 'https://www.geeksforgeeks.org/profile/pradeepa06', label: 'GeeksforGeeks', hoverColor: '#2f8d46' },
  { icon: SiCodechef, href: 'https://www.codechef.com/users/pradeepa006', label: 'CodeChef', hoverColor: '#5B4638' },
  { icon: SiCodeforces, href: 'https://codeforces.com/profile/Pradeepa_S', label: 'Codeforces', hoverColor: '#1F8ACB' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 z-0">
        {/* Radial glow center */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(13,148,136,0.07) 0%, transparent 65%)' }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full animate-blob blur-[100px]"
          style={{ background: 'var(--orb-teal)' }} />
        <div className="absolute top-1/3 right-[10%] w-[400px] h-[400px] rounded-full animate-blob animation-delay-2000 blur-[100px]"
          style={{ background: 'var(--orb-cyan)' }} />
        <div className="absolute bottom-[15%] left-[40%] w-[350px] h-[350px] rounded-full animate-blob animation-delay-4000 blur-[80px]"
          style={{ background: 'var(--orb-teal)' }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg" />

        {/* Decorative SVG — morphing shape */}
        <div className="absolute right-[5%] top-[20%] w-72 h-72 opacity-[0.035] animate-morph rounded-full"
          style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)' }} />

        {/* Corner SVG circuit */}
        <svg className="absolute left-0 bottom-0 w-64 h-64 opacity-[0.04]" viewBox="0 0 200 200" fill="none">
          <circle cx="30" cy="170" r="80" stroke="#0d9488" strokeWidth="0.6" strokeDasharray="4 4" />
          <circle cx="30" cy="170" r="50" stroke="#0891b2" strokeWidth="0.4" />
          <line x1="30" y1="90" x2="30" y2="200" stroke="#0d9488" strokeWidth="0.5" />
          <line x1="0" y1="170" x2="110" y2="170" stroke="#0d9488" strokeWidth="0.5" />
          <circle cx="30" cy="170" r="4" fill="#0d9488" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-10 relative z-10 max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-12 lg:gap-24">

          {/* ===== Text side ===== */}
          <div className="flex-1 text-center md:text-left">

            {/* Status badge */}
            <motion.div {...fadeUp(0.1)} className="flex justify-center md:justify-start mb-8">
              <div className="badge flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                Open to Full-Time Opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-5 tracking-tight"
              style={{ fontFamily: 'Sora, Inter, sans-serif' }}
            >
              Pradeepa
              <br />
              <span className="text-blue-gradient">Subramani</span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div {...fadeUp(0.35)} className="mb-6 h-10 flex items-center justify-center md:justify-start">
              <TypeAnimation
                sequence={[
                  'Ex Software Engineering Intern @ ABB',
                  2200,
                  'Full-Stack Web Developer',
                  2000,
                  'AI Application Builder',
                  2000,
                  'Aspiring Software Engineer',
                  2000,
                ]}
                wrapper="p"
                speed={55}
                repeat={Infinity}
                className="text-lg md:text-xl font-medium text-slate-400"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.45)}
              className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-10"
            >
              Building scalable full-stack applications, integrating AI into real products,
              and crafting experiences that matter — drawing from my time as a Software Engineering Intern at ABB and innovative side projects.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.55)}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10"
            >
              <a href="/Pradeepa_CV.pdf" download className="btn-primary">
                Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              {...fadeUp(0.65)}
              className="flex items-center justify-center md:justify-start gap-3 flex-wrap"
            >
              {SOCIAL.map(({ icon: Icon, href, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group flex items-center justify-center w-10 h-10 rounded-lg border border-dark-border text-slate-500 hover:text-white hover:border-dark-border-light transition-all duration-300"
                  style={{ '--hover-color': hoverColor }}
                  onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}
                >
                  <Icon size={18} />
                </a>
              ))}
              <div className="w-px h-6 bg-dark-border mx-1" />
              <span className="text-xs text-slate-600 font-mono tracking-widest">AVAILABLE FOR HIRE</span>
            </motion.div>
          </div>

          {/* ===== Visual side ===== */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 60%, rgba(13,148,136,0.5) 80%, rgba(13,148,136,0.15) 90%, transparent 100%)',
                  padding: 2,
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                }}
              />
              {/* Inner counter-rotating ring */}
              <div
                className="absolute rounded-full animate-spin-slow-r"
                style={{
                  inset: '12px',
                  background: 'conic-gradient(from 180deg, transparent 70%, rgba(8,145,178,0.35) 90%, transparent 100%)',
                  borderRadius: '50%',
                }}
              />
              {/* Main avatar circle */}
              <div
                className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center animate-float"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  boxShadow: '0 0 60px rgba(13,148,136,0.1), 0 40px 80px rgba(0,0,0,0.3)',
                }}
              >
                {/* Replace with <img> once photo is available */}
                <div className="text-center">
                  <div
                    className="text-6xl md:text-7xl font-black mb-1"
                    style={{ fontFamily: 'Sora, Inter, sans-serif' }}
                  >
                    <span className="text-blue-gradient">P.</span>
                  </div>
                  <p className="text-xs text-slate-600 font-mono tracking-widest uppercase">Add Photo</p>
                </div>

                {/* Corner badges */}
                <div className="absolute -top-3 -right-3 badge text-xs">React</div>
                <div className="absolute -bottom-3 -left-3 badge-emerald badge text-xs">Spring Boot</div>
              </div>

              {/* Glow underneath */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/5 h-8 rounded-full blur-xl"
                style={{ background: 'rgba(13,148,136,0.15)' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-brand-blue transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <FaArrowDown size={12} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

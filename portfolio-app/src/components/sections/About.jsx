import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaServer, FaLightbulb } from 'react-icons/fa';

const CARDS = [
  {
    icon: <FaCode />,
    title: 'Frontend Development',
    desc: 'Building responsive, accessible user interfaces with React, Angular, and modern CSS frameworks.',
    color: '#3b82f6',
  },
  {
    icon: <FaServer />,
    title: 'Backend Engineering',
    desc: 'Designing RESTful APIs and robust backend services using Spring Boot, Flask, and C#.',
    color: '#10b981',
  },
  {
    icon: <FaLightbulb />,
    title: 'AI Integration',
    desc: 'Leveraging Generative AI (Gemini, GPT) to build intelligent features inside real applications.',
    color: '#3b82f6',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label">About Me</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            Building software that
            <span className="text-blue-gradient"> solves real problems</span>
          </h2>
          <p className="mt-5 text-slate-500 text-lg leading-relaxed max-w-2xl">
            I'm an aspiring Computer Science and Engineering student with hands-on experience in enterprise software development, full-stack web development, and AI integration. I thrive in collaborative environments and consistently ship production-quality code.
          </p>
        </motion.div>

        {/* Capability cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
        >
          {CARDS.map((card, i) => (
            <motion.div key={i} variants={item} className="glass-card p-7 group relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${card.color}06, transparent 70%)` }}
              />
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-5 text-lg"
                style={{ color: card.color, background: `${card.color}12`, border: `1px solid ${card.color}20` }}
              >
                {card.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-100 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10 relative overflow-hidden"
        >
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
            style={{ background: 'rgba(59,130,246,0.06)' }}
          />
          <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
            >
              <FaGraduationCap size={22} style={{ color: '#3b82f6' }} />
            </div>
            <div className="flex-1">
              <div className="section-label mb-2">Education</div>
              <h3 className="text-xl font-bold text-white">B.E. Computer Science and Engineering</h3>
              <p className="text-slate-400 mt-1">K.S. Rangasamy College of Technology · Tiruchengode, Tamil Nadu</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
                <div className="text-xs text-slate-500 mb-1">CGPA</div>
                <div className="text-lg font-bold text-brand-blue">8.52</div>
              </div>
              <div className="px-4 py-2 rounded-lg text-center" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}>
                <div className="text-xs text-slate-500 mb-1">Graduating</div>
                <div className="text-lg font-bold text-brand-emerald">May 2027</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

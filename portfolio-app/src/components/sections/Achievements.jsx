import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal } from 'react-icons/fa';
import { SiMeta, SiGithub, SiInfosys } from 'react-icons/si';
import { HiAcademicCap } from 'react-icons/hi';

const ACHIEVEMENTS = [
  {
    icon: <FaTrophy />,
    color: '#f59e0b',
    title: 'ABB Hackathon 2025 — Winner',
    desc: 'Developed an innovative software solution in a cross-functional team at one of the largest industrial automation companies in the world.',
    type: 'Award',
  },
];

const CERTIFICATIONS = [
  {
    icon: <SiMeta size={22} />,
    color: '#0866ff',
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    type: 'Professional Certificate',
    date: '2025',
  },
  {
    icon: <SiGithub size={22} />,
    color: '#3b82f6',
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    type: 'Certification',
    date: '2025',
  },
  {
    icon: <SiInfosys size={22} />,
    color: '#007cc3',
    title: 'Java Developer Certificate',
    issuer: 'Infosys Springboard',
    type: 'Developer Certificate',
    date: '2024',
  },
  {
    icon: <HiAcademicCap size={22} />,
    color: '#10b981',
    title: 'Internet of Things 2.0',
    issuer: 'NPTEL',
    type: 'Online Course',
    date: '2024',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(17,19,24,0.5) 50%, transparent 100%)' }}
    >
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label">Honors</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Achievements & <span className="text-blue-gradient">Certifications</span>
          </h2>
        </motion.div>

        {/* Achievement cards */}
        {ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="glass-card p-8 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(circle at 0% 50%, ${item.color}06, transparent 60%)` }}
            />
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
              style={{ background: `${item.color}12`, border: `1px solid ${item.color}25`, color: item.color }}
            >
              {item.icon}
            </div>
            <div>
              <div className="badge mb-2">{item.type}</div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-slate-500 text-sm mt-1.5 leading-relaxed max-w-2xl">{item.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* Certifications grid */}
        <div>
          <div className="section-label mb-6">Certifications</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card p-6 flex flex-col group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${cert.color}50, transparent)` }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}20`, color: cert.color }}
                >
                  {cert.icon}
                </div>
                <div
                  className="text-xs font-mono mb-1.5"
                  style={{ color: cert.color }}
                >
                  {cert.type}
                </div>
                <h3 className="text-sm font-semibold text-slate-200 mb-1 flex-1">{cert.title}</h3>
                <p className="text-xs text-slate-600 mt-auto pt-4 flex items-center justify-between border-t border-dark-border">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

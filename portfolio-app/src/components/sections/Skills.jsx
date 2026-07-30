import React from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    emoji: '💻',
    color: '#0d9488',
    skills: ['Java', 'Python', 'C#', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    color: '#0891b2',
    skills: ['React.js', 'Next.js', 'Angular', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'],
  },
  {
    id: 'backend',
    label: 'Backend',
    emoji: '⚙️',
    color: '#0d9488',
    skills: ['Spring Boot', 'Flask', 'FastAPI', 'RESTful APIs', 'JWT Auth'],
  },
  {
    id: 'databases',
    label: 'Data & Infra',
    emoji: '🗄️',
    color: '#0891b2',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Docker Compose'],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    emoji: '🛠️',
    color: '#0d9488',
    skills: ['Git', 'GitHub', 'Azure DevOps', 'SonarQube', 'Postman', 'Figma', 'Jira', 'VS Code'],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    emoji: '🤖',
    color: '#0891b2',
    skills: ['Gemini AI', 'OpenAI API', 'LangChain', 'AI Integration', 'NLP Basics'],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.04, duration: 0.28, ease: 'easeOut' },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-blob"
          style={{ background: 'var(--orb-teal)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] animate-blob animation-delay-4000"
          style={{ background: 'var(--orb-cyan)' }} />

        {/* SVG circuit graphic */}
        <svg className="absolute right-0 top-0 w-64 h-64 opacity-[0.04]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#0d9488" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="60" stroke="#0d9488" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" stroke="#0891b2" strokeWidth="0.5" strokeDasharray="2 6" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="#0d9488" strokeWidth="0.4" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="#0d9488" strokeWidth="0.4" />
        </svg>

        {/* Floating dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-blob"
            style={{
              background: i % 2 === 0 ? '#0d9488' : '#0891b2',
              opacity: 0.25,
              left: `${10 + i * 11}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-10 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="section-label justify-center">Technical Arsenal</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Skills &amp; <span className="text-blue-gradient">Technologies</span>
          </h2>
          
        </motion.div>

        {/* All categories — no clicks, always visible */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              className="skill-category-card group"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {cat.emoji}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-base font-bold" style={{ color: cat.color }}>
                    {cat.label}
                  </h3>
                  <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    {cat.skills.length} technologies
                  </p>
                </div>
                {/* Animated dot */}
                <div
                  className="w-2 h-2 rounded-full animate-pulse-glow"
                  style={{ background: cat.color }}
                />
              </div>

              {/* Skill tags — clean, no proficiency */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={tagVariants}
                    className="skill-tag cursor-default select-none"
                    whileHover={{ scale: 1.07, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ABB note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm"
            style={{ background: 'rgba(13,148,136,0.07)', border: '1px solid rgba(13,148,136,0.2)' }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#2dd4bf' }} />
            <span style={{ color: 'var(--text-secondary)' }}>
              Applied in enterprise-grade systems during{' '}
              <span style={{ color: '#2dd4bf', fontWeight: 600 }}>ABB Software Engineering Internship, Bangalore</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

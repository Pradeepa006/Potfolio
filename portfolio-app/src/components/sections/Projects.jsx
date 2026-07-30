import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaRobot, FaGamepad, FaFileAlt, FaCode, FaShoppingCart } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { SiNextdotjs, SiReact, SiSpring, SiTypescript, SiPostgresql, SiRedis, SiDocker, SiTailwindcss, SiRedux } from 'react-icons/si';

/* ==============================
   DATA
   ============================== */

const NOVA_FEATURES = [
  { icon: <FaRobot />,        title: 'Context-Aware AI Tutor',    desc: 'Understands video transcripts and answers coding questions in real-time with contextual accuracy.' },
  { icon: <FaFileAlt />,      title: 'ATS Resume Builder',        desc: 'Resume analysis with ATS scoring, keyword optimisation, and AI-generated improvement suggestions.' },
  { icon: <HiLightningBolt />,title: 'Career Roadmap Generator',  desc: 'Creates personalised learning paths based on your career goals and current skill level.' },
  { icon: <FaCode />,         title: 'Interactive Code Sandbox',  desc: 'Supports Java, Python, JavaScript, C++ with real-time AI-powered code reviews and hints.' },
  { icon: <HiSparkles />,     title: 'Gamification Engine',       desc: 'XP points, daily streaks, achievements, and badges to keep learners engaged and motivated.' },
  { icon: <FaStar />,         title: 'Certificate Verification',  desc: 'Unique certificate IDs with blockchain-inspired verification logs for tamper-proof credentials.' },
];

const NOVA_TECH = {
  Frontend:       [{ name: 'Next.js 15', icon: <SiNextdotjs /> }, { name: 'React 19', icon: <SiReact /> }, { name: 'TypeScript', icon: <SiTypescript /> }, { name: 'Tailwind CSS', icon: <SiTailwindcss /> }, { name: 'Redux Toolkit', icon: <SiRedux /> }, { name: 'Framer Motion', icon: null }],
  Backend:        [{ name: 'Spring Boot 3.3', icon: <SiSpring /> }, { name: 'Spring Security', icon: null }, { name: 'JWT Auth', icon: null }, { name: 'JPA/Hibernate', icon: null }, { name: 'Mail Service', icon: null }],
  Infrastructure: [{ name: 'PostgreSQL', icon: <SiPostgresql /> }, { name: 'Redis', icon: <SiRedis /> }, { name: 'Docker', icon: <SiDocker /> }, { name: 'Docker Compose', icon: null }],
};

// Each project structured like an experience card
const OTHER_PROJECTS = [
  {
    icon: <FaShoppingCart />,
    color: '#0d9488',
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack Web Application',
    duration: '2025',
    type: 'Full-Stack Project',
    points: [
      'Built a complete e-commerce platform with product catalogue, cart management, and order tracking.',
      'Implemented secure user authentication with JWT, role-based access (admin/customer), and profile management.',
      'Designed responsive UI with React.js and integrated RESTful Spring Boot APIs for seamless data flow.',
      'Integrated payment gateway simulation and admin dashboard for order and inventory management.',
    ],
    tags: ['React.js', 'Express.js', 'MySQL', 'Google OAuth 2.0', 'Tailwind CSS'],
    github: '#',
    live: '#',
  },
  {
    icon: <FaRobot />,
    color: '#0891b2',
    title: 'AI Document Analyzer',
    subtitle: 'AI-Powered Analysis Platform',
    duration: '2024',
    type: 'AI Project',
    points: [
      'Built an AI-powered platform for intelligent document summarisation, keyword extraction, and Q&A.',
      'Supports PDF, DOCX, and TXT file formats with semantic search powered by Gemini AI.',
      'Designed a modern dashboard with real-time analysis results and export capabilities.',
      'Integrated SQLite for session management and analysis history storage.',
    ],
    tags: ['React.js', 'Flask', 'Gemini AI', 'SQLite', 'Python'],
    github: 'https://github.com/Pradeepa006/Document_analyzer',
    live: '#',
  },
  {
    icon: <FaCode />,
    color: '#0d9488',
    title: 'AI UI Code Generator',
    subtitle: 'Prompt-to-UI Code Tool',
    duration: '2024',
    type: 'AI Powered Full-Stack Project',
    points: [
      'Generate production-ready frontend UI code from natural language prompts in seconds.',
      'Supports React component generation with Tailwind CSS styling and a live browser preview.',
      'Provides one-click code export with clean, formatted component output.',
      'Built with Next.js and TypeScript for type-safe, scalable architecture.',
    ],
    tags: ['Next.js', 'TypeScript', 'MongoDB',  'OpenAI', 'Tailwind CSS'],
    github: 'https://github.com/Pradeepa006/NextGen-HMI-Context-Aware-Industrial-Interface',
    live: '#',
  },
  {
    icon: <FaRobot />,
    color: '#0891b2',
    title: 'Resume Reality Check',
    subtitle: 'ATS Resume Analyser',
    duration: '2024',
    type: 'AI Project',
    points: [
      'AI-powered resume analyser providing ATS scoring and recruiter-style feedback.',
      'Extracts and highlights keywords matching top company job descriptions.',
      'PDF upload support with a dashboard displaying actionable improvement suggestions.',
      'Powered by Gemini AI with Flask backend for fast, accurate analysis.',
    ],
    tags: ['React.js', 'Flask', 'MongoDB','Gemini AI', 'SQLite'],
    github: 'https://github.com/Pradeepa006/Resume-Reality-Check',
    live: '#',
  },
  {
    icon: <FaGamepad />,
    color: '#a78bfa',
    title: 'Rock Paper Scissors',
    subtitle: 'Interactive Browser Game',
    duration: '2023',
    type: 'Mini Project',
    points: [
      'Built a modern Rock Paper Scissors game with polished animations and score tracking.',
      'Implemented responsive mobile-first design with smooth Framer Motion transitions.',
      'Added AI opponent logic and real-time result animations for engaging gameplay.',
    ],
    tags: ['React.js', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/Pradeepa006/Rock_paper_scissors',
    live: '#',
  },
  {
    icon: <FaCode />,
    color: '#ec4899',
    title: 'Quizzer',
    subtitle: 'Interactive Quiz Application',
    duration: '2024',
    type: 'Frontend Project',
    points: [
      'Developed a fast and responsive quiz application using React and Vite.',
      'Configured Vite plugins for rapid Fast Refresh during development.',
      'Implemented custom ESLint configurations to ensure high code quality.',
    ],
    tags: ['React.js', 'Vite', 'JavaScript', 'CSS'],
    github: 'https://github.com/Pradeepa006/Quizzer',
    live: '#',
  },
];

/* ==============================
   NOVA LEARN SHOWCASE
   ============================== */
function NovaLearnShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-24 rounded-2xl overflow-hidden"
      style={{ border: '1px solid var(--border-color)', boxShadow: '0 40px 100px rgba(0,0,0,0.3)' }}
    >
      {/* Animated background */}
      <div className="absolute inset-0" style={{ background: 'var(--card-bg)', backdropFilter: 'blur(20px)' }} />

      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(13,148,136,0.6), transparent)' }} />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 blur-[60px] pointer-events-none"
        style={{ background: 'rgba(13,148,136,0.07)' }} />

      {/* Decorative SVG orbit rings */}
      <div className="absolute right-8 top-8 w-32 h-32 opacity-[0.06]">
        <svg viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" stroke="#0d9488" strokeWidth="0.8" strokeDasharray="3 3" className="animate-spin-slow" style={{ transformOrigin: '64px 64px' }} />
          <circle cx="64" cy="64" r="40" stroke="#0891b2" strokeWidth="0.6" className="animate-spin-slow-r" style={{ transformOrigin: '64px 64px' }} />
          <circle cx="64" cy="64" r="4" fill="#0d9488" />
        </svg>
      </div>

      <div className="relative z-10 p-8 md:p-12 lg:p-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="badge">Flagship Project</div>
              <div className="badge-emerald badge">In Development</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
              Nova Learn
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              A next-generation AI-powered online learning platform delivering a highly interactive,
              personalised, and gamified learning experience — far beyond traditional platforms like Udemy or Coursera.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="https://github.com/Pradeepa006/AI_Powered_Learning_Platform" className="btn-outline text-sm" target="_blank" rel="noreferrer">
              <FaGithub size={14} /> GitHub
            </a>
            
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {NOVA_FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="nova-feature-card group"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 text-base transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.18)', color: '#0d9488' }}>
                {feat.icon}
              </div>
              <h4 className="text-sm font-semibold text-slate-200 mb-1.5">{feat.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="divider my-8" />

        {/* Tech stack */}
        <div>
          <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-6">Tech Stack</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-8">
            {Object.entries(NOVA_TECH).map(([category, techs]) => (
              <div key={category}>
                <p className="text-xs text-slate-600 mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span key={tech.name} className="flex items-center gap-1.5 skill-tag">
                      {tech.icon && <span className="text-xs">{tech.icon}</span>}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ==============================
   PROJECT TIMELINE CARD (Experience-style)
   ============================== */
function ProjectTimelineCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-0">
      {/* Timeline node */}
      <div
        className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center z-10 flex-shrink-0 text-base"
        style={{
          background: `${project.color}18`,
          border: `2px solid ${project.color}50`,
          boxShadow: `0 0 20px ${project.color}25`,
          color: project.color,
        }}
      >
        {project.icon}
      </div>

      {/* Card content */}
      <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="project-timeline-card p-7 group"
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(to right, transparent, ${project.color}50, transparent)` }} />

          {/* Shine effect on hover */}
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ left: '-33%', animation: 'none' }} />
          </div>

          {/* Header row */}
          <div className={`flex items-start gap-3 mb-4 ${isEven ? 'flex-row md:flex-row-reverse' : ''}`}>
            <div>
              <div className={`flex flex-wrap gap-2 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
                <span className="badge text-xs">{project.type}</span>
                <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{project.duration}</span>
              </div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
              <h4 className="font-semibold mt-0.5 text-sm" style={{ color: project.color }}>{project.subtitle}</h4>
            </div>
          </div>

          {/* Bullet points */}
          <ul className={`space-y-2.5 mb-5 ${isEven ? 'md:text-right' : ''}`}>
            {project.points.map((pt, i) => (
              <li key={i} className={`flex gap-2.5 items-start text-sm leading-relaxed ${isEven ? 'md:flex-row-reverse' : ''}`}
                style={{ color: 'var(--text-secondary)' }}>
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: project.color }} />
                {pt}
              </li>
            ))}
          </ul>

          {/* Tags + links */}
          <div className={`flex flex-wrap items-center gap-2 pt-4 border-t ${isEven ? 'md:justify-end' : ''}`}
            style={{ borderColor: 'var(--border-color)' }}>
            {project.tags.map((tag, i) => (
              <span key={i} className="skill-tag text-xs">{tag}</span>
            ))}
            <div className={`flex gap-3 ml-auto ${isEven ? 'md:mr-auto md:ml-0' : ''}`}>
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                className="transition-colors duration-200 hover:text-white"
                style={{ color: 'var(--text-muted)' }}>
                <FaGithub size={15} />
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo"
                className="transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = project.color}
                onMouseLeave={e => e.currentTarget.style.color = ''}>
                <FaExternalLinkAlt size={13} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ==============================
   MAIN EXPORT
   ============================== */
export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-30 animate-blob"
          style={{ background: 'radial-gradient(ellipse, rgba(13,148,136,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-32 left-0 w-80 h-80 rounded-full blur-[100px] animate-blob animation-delay-4000"
          style={{ background: 'var(--orb-cyan)' }} />

        {/* Decorative corner hexagon */}
        <svg className="absolute left-0 bottom-0 w-48 h-48 opacity-[0.03]" viewBox="0 0 100 100" fill="none">
          <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" stroke="#0d9488" strokeWidth="1" fill="none" />
          <polygon points="50,20 75,34 75,66 50,80 25,66 25,34" stroke="#0891b2" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="10" stroke="#0d9488" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-10 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label">Portfolio</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Featured <span className="text-blue-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl">
            A selection of projects showcasing full-stack engineering, AI integration, and real-world problem solving.
          </p>
        </motion.div>

        {/* Nova Learn Flagship */}
        <NovaLearnShowcase />

        {/* Other Projects — Experience-style timeline */}
        <div>
          <div className="section-label mb-8">Other Projects</div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
              style={{ background: 'linear-gradient(to bottom, transparent, var(--border-color) 10%, var(--border-color) 90%, transparent)' }}
            />

            <div className="space-y-12">
              {OTHER_PROJECTS.map((project, index) => (
                <ProjectTimelineCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

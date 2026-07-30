import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    role: 'Software Engineering Intern',
    company: 'ABB',
    type: 'Ex-Intern',
    duration: 'Aug 2025 – May 2026',
    location: 'Bangalore, India',
    color: '#3b82f6',
    points: [
      'Developed API and UI components using C# and Angular for enterprise industrial automation applications.',
      'Performed unit testing and regression testing, improving software quality across 25+ enterprise applications.',
      'Resolved security hotspots and code quality issues using SonarQube following secure coding best practices.',
      'Collaborated via Azure DevOps to support CI/CD pipelines and SDLC processes.',
    ],
    tags: ['C#', 'Angular', 'Azure DevOps', 'SonarQube', 'REST APIs'],
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Calanjiyam Consultancies',
    type: 'WDI Program',
    duration: 'Jun 2025 – Aug 2025',
    location: 'Erode, Tamil Nadu',
    color: '#10b981',
    points: [
      'Led a team of 4 developers to build a full-stack quiz application from design to deployment.',
      'Developed responsive user interfaces using React.js and integrated RESTful backend services.',
      'Designed and implemented RESTful APIs using Java Spring Boot.',
      'Created UI/UX prototypes in Figma and worked within an Agile sprint methodology.',
    ],
    tags: ['React.js', 'Spring Boot', 'Java', 'Figma', 'Agile'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(17,19,24,0.5) 50%, transparent 100%)' }}
    >
      <div className="container mx-auto px-6 lg:px-10 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label">Career</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Work <span className="text-blue-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, #1e2330 10%, #1e2330 90%, transparent)' }}
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center gap-0">
                  {/* Timeline node */}
                  <div
                    className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center z-10 flex-shrink-0"
                    style={{
                      background: `${exp.color}15`,
                      border: `2px solid ${exp.color}50`,
                      boxShadow: `0 0 20px ${exp.color}20`,
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: exp.color }} />
                  </div>

                  {/* Left padding for mobile / right content on desktop */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="glass-card p-7 group relative overflow-hidden"
                    >
                      {/* Color accent top border */}
                      <div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{ background: `linear-gradient(to right, transparent, ${exp.color}50, transparent)` }}
                      />

                      <div className={`flex items-start gap-3 mb-4 ${isEven ? 'flex-row md:flex-row-reverse' : ''}`}>
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="badge text-xs">{exp.type}</span>
                            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                              {exp.duration}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          <h4 className="font-semibold mt-0.5" style={{ color: exp.color }}>{exp.company}</h4>
                          <p className="text-xs text-slate-600 mt-0.5 font-mono">{exp.location}</p>
                        </div>
                      </div>

                      <ul className={`space-y-2.5 mb-5 ${isEven ? 'md:text-right' : ''}`}>
                        {exp.points.map((pt, i) => (
                          <li key={i} className={`flex gap-2.5 items-start text-sm text-slate-400 leading-relaxed ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: exp.color }} />
                            {pt}
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="skill-tag">{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

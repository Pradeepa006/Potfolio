import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

export default function Resume() {
  return (
    <section
      id="resume"
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(17,19,24,0.5) 50%, transparent 100%)' }}
    >
      <div className="container mx-auto px-6 lg:px-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-14 text-center relative overflow-hidden"
        >
          {/* Glow */}
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-[60px] pointer-events-none"
            style={{ background: 'rgba(59,130,246,0.07)' }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.4), transparent)' }}
          />

          <div className="relative z-10">
            <div className="section-label justify-center mb-6">Resume</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pradeepa Subramani
            </h2>
            <p className="text-slate-500 mb-10 max-w-lg mx-auto">
              Software Engineer · Full-Stack Developer · Ex Software Engineering Intern @ ABB
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Pradeepa_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <FaEye size={14} /> Preview Resume
              </a>
              <a
                href="/Pradeepa_CV.pdf"
                download
                className="btn-primary"
              >
                <FaDownload size={13} /> Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiCheckCircle, HiXCircle, HiExternalLink } from 'react-icons/hi';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const IS_CONFIGURED = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY
  && SERVICE_ID !== 'YOUR_SERVICE_ID';

const INPUT_CLASS = `
  w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3.5
  text-slate-200 text-sm placeholder-slate-600
  focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20
  transition-all duration-200
`;

const FIELDS = [
  { name: 'name',    label: 'Name',    type: 'text',  placeholder: 'John Doe',                       half: true  },
  { name: 'email',   label: 'Email',   type: 'email', placeholder: 'john@email.com',                 half: true  },
  { name: 'subject', label: 'Subject', type: 'text',  placeholder: 'Job Opportunity / Collaboration', half: false },
];

const QUICK_LINKS = [
  { icon: <FaEnvelope />,  label: 'pradeepasubramani8@gmail.com', href: 'mailto:pradeepasubramani8@gmail.com', color: '#0d9488' },
  { icon: <FaLinkedin />,  label: 'linkedin.com/in/pradeepa-subramani', href: 'https://www.linkedin.com/in/pradeepa-subramani', color: '#0891b2' },
  { icon: <FaGithub />,    label: 'github.com/Pradeepa006', href: 'https://github.com/Pradeepa006', color: '#94a3b8' },
];

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | unconfigured

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    if (!IS_CONFIGURED) {
      setStatus('unconfigured');
      return;
    }

    setStatus('loading');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/4 right-0 w-72 h-72 rounded-full blur-[100px] animate-blob animation-delay-2000"
          style={{ background: 'rgba(13,148,136,0.05)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full blur-[80px] animate-blob animation-delay-4000"
          style={{ background: 'rgba(8,145,178,0.04)' }}
        />
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
          <div className="section-label">Contact</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Let's <span className="text-blue-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl">
            Whether it's a job opportunity, collaboration, or just a chat about tech — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            <div
              className="absolute -top-16 right-1/4 w-64 h-32 rounded-full blur-[60px] pointer-events-none"
              style={{ background: 'rgba(13,148,136,0.06)' }}
            />

            {/* EmailJS config warning banner */}
            {!IS_CONFIGURED && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-start gap-3 p-4 rounded-lg border text-sm"
                style={{ background: 'rgba(234,179,8,0.06)', border: '1px solid rgba(234,179,8,0.25)' }}
              >
                <span className="text-yellow-400 text-lg mt-0.5">⚠️</span>
                <div>
                  <p className="text-yellow-400 font-semibold mb-1">EmailJS not configured yet</p>
                  <p className="text-slate-500 leading-relaxed">
                    Add your credentials to the <code className="text-yellow-300 text-xs bg-yellow-400/10 px-1 rounded">.env</code> file to enable the contact form.{' '}
                    <a
                      href="https://www.emailjs.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-yellow-400 underline underline-offset-2 hover:text-yellow-300 inline-flex items-center gap-1"
                    >
                      Set up EmailJS <HiExternalLink size={12} />
                    </a>
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={onSubmit} className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {FIELDS.filter(f => f.half).map(field => (
                  <div key={field.name}>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-widest mb-2 font-mono">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={onChange}
                      required
                      placeholder={field.placeholder}
                      className={INPUT_CLASS}
                    />
                  </div>
                ))}
              </div>

              {FIELDS.filter(f => !f.half).map(field => (
                <div key={field.name} className="mb-5">
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-widest mb-2 font-mono">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={onChange}
                    placeholder={field.placeholder}
                    className={INPUT_CLASS}
                  />
                </div>
              ))}

              <div className="mb-8">
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-widest mb-2 font-mono">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  className={`${INPUT_CLASS} resize-none`}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full sm:w-auto disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <FaPaperPlane size={12} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm text-teal-400"
                  >
                    <HiCheckCircle size={18} /> Message sent successfully!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm text-red-400"
                  >
                    <HiXCircle size={18} /> Send failed — please try again.
                  </motion.p>
                )}
                {status === 'unconfigured' && (
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm text-yellow-400"
                  >
                    <HiXCircle size={18} /> EmailJS not configured. See the banner above.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

          {/* ── Side info ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {/* Quick reach */}
            <div className="glass-card p-7">
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-5">Quick Reach</p>
              <div className="flex flex-col gap-4">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${link.color}15`, border: `1px solid ${link.color}25`, color: link.color }}
                    >
                      {link.icon}
                    </div>
                    <span className="truncate">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="glass-card p-7 relative overflow-hidden"
              style={{ borderColor: 'rgba(13,148,136,0.2)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(13,148,136,0.5), transparent)' }}
              />
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">Available for Hire</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open to full-time software engineering roles. Background includes enterprise experience at{' '}
                <span className="text-teal-400 font-semibold">ABB India</span> and full-stack internships.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

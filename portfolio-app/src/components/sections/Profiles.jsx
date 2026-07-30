import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';

const PROFILES = [
  {
    name: 'GitHub',
    username: 'Pradeepa006',
    icon: <FaGithub />,
    href: 'https://github.com/Pradeepa006',
    color: '#e2e8f0',
    bgColor: 'rgba(226,232,240,0.06)',
    stat: 'Repos & Contributions',
  },
  {
    name: 'LinkedIn',
    username: 'pradeepa-subramani',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/pradeepa-subramani',
    color: '#0a66c2',
    bgColor: 'rgba(10,102,194,0.08)',
    stat: 'Professional Network',
  },
  {
    name: 'LeetCode',
    username: 'Pradeepa__S',
    icon: <SiLeetcode />,
    href: 'https://leetcode.com/u/Pradeepa__S',
    color: '#f7a01d',
    bgColor: 'rgba(247,160,29,0.08)',
    stat: 'Problem Solving',
  },
  {
    name: 'HackerRank',
    username: 'pradeepasubrama1',
    icon: <SiHackerrank />,
    href: 'https://www.hackerrank.com/profile/pradeepasubrama1',
    color: '#00ea64',
    bgColor: 'rgba(0,234,100,0.06)',
    stat: 'Skill Badges',
  },
  {
    name: 'CodeChef',
    username: 'pradeepa006',
    icon: <SiCodechef />,
    href: 'https://www.codechef.com/users/pradeepa006',
    color: '#8c4a2f',
    bgColor: 'rgba(140,74,47,0.08)',
    stat: 'Competitive Coding',
  },
  {
    name: 'GeeksforGeeks',
    username: 'pradeepa06',
    icon: <SiGeeksforgeeks />,
    href: 'https://www.geeksforgeeks.org/profile/pradeepa06',
    color: '#2f8d46',
    bgColor: 'rgba(47,141,70,0.08)',
    stat: 'DSA Practice',
  },
  {
    name: 'Codeforces',
    username: 'Pradeepa_S',
    icon: <SiCodeforces />,
    href: 'https://codeforces.com/profile/Pradeepa_S',
    color: '#1f8dd6',
    bgColor: 'rgba(31,141,214,0.08)',
    stat: 'Competitive Programming',
  },
  {
    name: 'HackerEarth',
    username: 'pradeepa',
    icon: <span className="font-black text-sm">HE</span>,
    href: '#',
    color: '#2c3e9a',
    bgColor: 'rgba(44,62,154,0.08)',
    stat: 'Hackathons',
  },
];

export default function Profiles() {
  return (
    <section id="profiles" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label">Online Presence</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Coding <span className="text-blue-gradient">Profiles</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl">
            My presence across developer platforms and competitive programming communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROFILES.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className="glass-card p-6 flex flex-col group relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${profile.color}50, transparent)` }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: profile.bgColor, border: `1px solid ${profile.color}15`, color: profile.color }}
              >
                {profile.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-100 mb-0.5">{profile.name}</h3>
                <p className="text-xs text-slate-600 font-mono mb-1">@{profile.username}</p>
                <p className="text-xs text-slate-500">{profile.stat}</p>
              </div>

              <div className="pt-5 mt-4 border-t border-dark-border">
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                  style={{ color: '#475569' }}
                  onMouseEnter={e => (e.currentTarget.style.color = profile.color)}
                  onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
                >
                  <FaExternalLinkAlt size={10} />
                  Visit Profile
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

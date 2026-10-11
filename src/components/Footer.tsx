import React from 'react';
import { ArrowUp, FileText, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LeetCodeIcon } from './LeetCodeIcon';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#090c11',
        padding: '4rem 0 2rem 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand & Bio */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2))',
                  border: '1px solid rgba(34, 211, 238, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: '#22d3ee',
                }}
              >
                SS
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#f8fafc' }}>
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              {PERSONAL_INFO.title} at {PERSONAL_INFO.college}. Building systems where algorithms meet high-performance execution.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
              <span>Bhopal, India &middot; Open to Opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.85rem' }}>
                Navigation
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                <li><a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</a></li>
                <li><a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none' }}>Projects</a></li>
                <li><a href="#skills" style={{ color: '#94a3b8', textDecoration: 'none' }}>Skills</a></li>
                <li><a href="#profiles" style={{ color: '#94a3b8', textDecoration: 'none' }}>Profiles</a></li>
                <li><a href="#education" style={{ color: '#94a3b8', textDecoration: 'none' }}>Education</a></li>
                <li><a href="#achievements" style={{ color: '#94a3b8', textDecoration: 'none' }}>Achievements</a></li>
                <li><a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.85rem' }}>
                Profiles
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.825rem' }}>
                <li>
                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#ffa116', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
                  >
                    <LeetCodeIcon size={14} color="#ffa116" />
                    <span>LeetCode</span>
                    <ExternalLink size={12} color="#64748b" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#94a3b8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                    <ExternalLink size={12} color="#64748b" />
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#38bdf8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                    <ExternalLink size={12} color="#64748b" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.85rem' }}>
                Actions
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <button
                  onClick={onOpenResume}
                  className="btn btn-secondary btn-sm"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}
                >
                  <FileText size={14} color="#22d3ee" />
                  View Resume
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="btn btn-secondary btn-sm"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}
                >
                  <Send size={14} />
                  Email Sumit
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#64748b',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All verified portfolio systems & case studies.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

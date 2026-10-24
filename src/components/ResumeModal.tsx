import React, { useEffect } from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '720px',
          border: '1px solid rgba(34, 211, 238, 0.3)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(34, 211, 238, 0.1)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '8px',
                background: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#22d3ee',
              }}
            >
              <FileText size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', fontWeight: 700 }}>
                Curriculum Vitae / Resume
              </h3>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                {PERSONAL_INFO.name} &middot; {PERSONAL_INFO.title}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '0.4rem',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Resume Snapshot Card */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: '#f8fafc', fontWeight: 700 }}>{PERSONAL_INFO.name}</h4>
                <div style={{ fontSize: '0.85rem', color: '#22d3ee', fontFamily: 'var(--font-mono)' }}>{PERSONAL_INFO.email}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#94a3b8' }}>
                Bhopal, India &middot; {PERSONAL_INFO.phone}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', fontSize: '0.85rem' }}>
              <div>
                <div style={{ color: '#64748b', fontSize: '0.72rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                  Education
                </div>
                <div style={{ color: '#e2e8f0', fontWeight: 600 }}>{EDUCATION_DATA[0].degree}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{EDUCATION_DATA[0].institution} ({EDUCATION_DATA[0].duration})</div>
                <div style={{ color: '#22d3ee', fontWeight: 600, marginTop: '0.2rem' }}>CGPA: {EDUCATION_DATA[0].cgpa}</div>
              </div>

              <div>
                <div style={{ color: '#64748b', fontSize: '0.72rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                  Top Achievement
                </div>
                <div style={{ color: '#e2e8f0', fontWeight: 600 }}>{ACHIEVEMENTS_DATA[0].title}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>State-Level Hackathon &middot; Urban Blooms</div>
                <div style={{ color: '#fbbf24', fontWeight: 600, marginTop: '0.2rem' }}>1st Place Winner</div>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ color: '#64748b', fontSize: '0.72rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                Verified Core Skills
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['Java', 'Python', 'C++', 'C', 'Git', 'VS Code', 'Microsoft Azure'].map((tech) => (
                  <span
                    key={tech}
                    className="tech-chip highlight"
                    style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Download Row */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <ExternalLink size={16} />
              <span>Open PDF in New Tab</span>
            </a>

            <a
              href="/resume.pdf"
              download="Sumit_Soni_Resume.pdf"
              className="btn btn-secondary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: '0.75rem 1.25rem' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

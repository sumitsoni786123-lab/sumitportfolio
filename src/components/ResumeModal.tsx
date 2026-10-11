import React, { useEffect } from 'react';
import { X, Download, FileText, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';

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
              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc' }}>
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
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Important File Notice */}
          <div
            style={{
              background: 'rgba(34, 211, 238, 0.06)',
              border: '1px solid rgba(34, 211, 238, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <AlertCircle size={20} color="#22d3ee" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>
                Resume PDF Location Indicator
              </div>
              <div style={{ fontSize: '0.825rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                The link points directly to <code style={{ background: 'rgba(0,0,0,0.4)', padding: '0.15rem 0.4rem', borderRadius: '4px', color: '#22d3ee' }}>/resume.pdf</code>. A valid placeholder has been provided. To show your official customized PDF, copy your official document to <strong style={{ color: '#fff' }}>sumitportfolio/public/resume.pdf</strong>.
              </div>
            </div>
          </div>

          {/* Resume Snapshot Card */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#f8fafc' }}>{PERSONAL_INFO.name}</h4>
                <div style={{ fontSize: '0.85rem', color: '#22d3ee' }}>{PERSONAL_INFO.email}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#94a3b8' }}>
                Bhopal, India
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', fontSize: '0.85rem' }}>
              <div>
                <div style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Education</div>
                <div style={{ color: '#e2e8f0', fontWeight: 600 }}>{EDUCATION_DATA[0].degree}</div>
                <div style={{ color: '#94a3b8' }}>{EDUCATION_DATA[0].institution} ({EDUCATION_DATA[0].duration})</div>
                <div style={{ color: '#22d3ee', fontWeight: 600 }}>CGPA: {EDUCATION_DATA[0].cgpa}</div>
              </div>

              <div>
                <div style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Honors</div>
                <div style={{ color: '#e2e8f0', fontWeight: 600 }}>Codictive 3.0 Hackathon Winner</div>
                <div style={{ color: '#94a3b8' }}>1st Place State-Level (2025)</div>
                <div style={{ color: '#a855f7' }}>Backend Developer - Urban Blooms</div>
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
              style={{ flex: 1 }}
            >
              <Download size={16} />
              Open / Download resume.pdf
            </a>

            <button
              onClick={onClose}
              className="btn btn-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { ProjectCaseStudy } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const accentColorMap = {
    cyan: {
      border: 'rgba(34, 211, 238, 0.4)',
      text: '#22d3ee',
      glow: 'rgba(34, 211, 238, 0.15)',
      badgeBg: 'rgba(34, 211, 238, 0.1)',
    },
    violet: {
      border: 'rgba(168, 85, 247, 0.4)',
      text: '#c084fc',
      glow: 'rgba(168, 85, 247, 0.15)',
      badgeBg: 'rgba(168, 85, 247, 0.1)',
    },
    emerald: {
      border: 'rgba(16, 185, 129, 0.4)',
      text: '#34d399',
      glow: 'rgba(16, 185, 129, 0.15)',
      badgeBg: 'rgba(16, 185, 129, 0.1)',
    },
  };

  const styleConfig = accentColorMap[project.accentColor];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: `1px solid ${styleConfig.border}`,
          boxShadow: `0 25px 60px rgba(0,0,0,0.8), 0 0 40px ${styleConfig.glow}`,
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '1.75rem 2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '9999px',
                  background: styleConfig.badgeBg,
                  color: styleConfig.text,
                  border: `1px solid ${styleConfig.border}`,
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {project.badge}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                {project.category}
              </span>
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#f8fafc', marginBottom: '0.25rem' }}>
              {project.title}
            </h2>
            <div style={{ color: '#94a3b8', fontSize: '0.925rem' }}>
              {project.subtitle}
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
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Overview */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#cbd5e1', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              System Overview
            </h4>
            <p style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: '0.95rem' }}>
              {project.overview}
            </p>
          </div>

          {/* Technology Stack Badges */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#cbd5e1', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Verified Technology Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tech-chip highlight"
                  style={{
                    borderColor: styleConfig.border,
                    color: styleConfig.text,
                    background: styleConfig.badgeBg,
                    fontSize: '0.8rem',
                    padding: '0.35rem 0.75rem',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Pipeline Flow Steps */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#cbd5e1', marginBottom: '1rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              End-to-End System Flow
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {project.systemFlow.map((flow) => (
                <div
                  key={flow.step}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '12px',
                    padding: '1rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: styleConfig.text,
                      fontWeight: 700,
                      marginBottom: '0.35rem',
                    }}
                  >
                    STEP {flow.step}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.4rem' }}>
                    {flow.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                    {flow.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Deep-Dive Highlights */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#cbd5e1', marginBottom: '1rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Key Architectural Decisions
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {project.architectureHighlights.map((arch) => (
                <div
                  key={arch.title}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderLeft: `3px solid ${styleConfig.text}`,
                    padding: '1rem 1.25rem',
                    borderRadius: '0 8px 8px 0',
                  }}
                >
                  <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.925rem', marginBottom: '0.35rem' }}>
                    {arch.title}
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {arch.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Capabilities Bullet Points */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#cbd5e1', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Capabilities & Impact
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {project.keyCapabilities.map((cap, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} color={styleConfig.text} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div
          style={{
            padding: '1.25rem 2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
            Real Engineering Artifact &middot; No Fabricated Metrics
          </div>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};

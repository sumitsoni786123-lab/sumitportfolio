import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="reveal-on-scroll">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient-cyan">academic foundation</span>.
          </h2>
          <p className="section-description">
            Current undergraduate degree in Computer Science Engineering with consistent academic performance.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div style={{ maxWidth: '850px' }}>
          {EDUCATION_DATA.map((edu, index) => (
            <div
              key={index}
              className="glass-card card-hover-lift"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Accent Strip */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #22d3ee, #a855f7)',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.45rem', color: '#f8fafc', marginBottom: '0.35rem' }}>
                    {edu.degree}
                  </h3>
                  <div style={{ fontSize: '1.1rem', color: '#22d3ee', fontWeight: 600 }}>
                    {edu.institution}
                  </div>
                </div>

                {/* CGPA Badge */}
                <div
                  style={{
                    background: 'rgba(34, 211, 238, 0.1)',
                    border: '1px solid rgba(34, 211, 238, 0.3)',
                    borderRadius: '12px',
                    padding: '0.6rem 1.25rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Current CGPA
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-mono)' }}>
                    {edu.cgpa}
                  </div>
                </div>
              </div>

              {/* Meta information tags */}
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  <Calendar size={15} color="#22d3ee" />
                  <span>{edu.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  <BookOpen size={15} color="#c084fc" />
                  <span>{edu.status}</span>
                </div>
              </div>

              {/* Highlights */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.25rem' }}>
                <div style={{ fontSize: '0.825rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                  Curriculum & Academic Focus
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <span style={{ color: '#22d3ee', marginTop: '0.1rem' }}>&bull;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="reveal-on-scroll" style={{ background: 'rgba(15, 20, 29, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Trophy size={14} color="#f59e0b" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="text-gradient-cyan">competitions</span>.
          </h2>
          <p className="section-description">
            Recognized performance in state-level hackathons and technical system building.
          </p>
        </div>

        {/* Featured Winner Card */}
        <div
          className="glass-card card-hover-lift"
          style={{
            padding: '2.5rem',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            background: 'linear-gradient(135deg, rgba(20, 26, 38, 0.9), rgba(30, 27, 20, 0.6))',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 35px rgba(245, 158, 11, 0.1)',
            marginBottom: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '14px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24',
                  flexShrink: 0,
                  boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)',
                }}
              >
                <Trophy size={28} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                      background: 'rgba(245, 158, 11, 0.15)',
                      color: '#fbbf24',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      fontWeight: 700,
                    }}
                  >
                    1ST PLACE WINNER
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    State-Level &middot; 2025
                  </span>
                </div>

                <h3 style={{ fontSize: '1.5rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                  Codictive 3.0 Hackathon Winner (2025)
                </h3>
                <div style={{ color: '#22d3ee', fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.75rem' }}>
                  Backend Developer &middot; Smart Rooftop Farming Project ("Urban Blooms")
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: 1.7, maxWidth: '750px' }}>
                  Clinched the 1st Place Trophy at the State-Level Codictive 3.0 Hackathon by engineering the backend architecture, real-time sensor ingestion API, and automated threshold alerts for the Urban Blooms smart rooftop agricultural management system.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Achievements Grid */}
        <div className="grid-2">
          {ACHIEVEMENTS_DATA.slice(1).map((item, index) => (
            <div
              key={index}
              className="glass-card card-hover-lift"
              style={{
                padding: '1.75rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <Award size={18} color="#22d3ee" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#22d3ee',
                    background: 'rgba(34, 211, 238, 0.1)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(34, 211, 238, 0.2)',
                  }}
                >
                  {item.badge}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginLeft: 'auto' }}>
                  {item.year}
                </span>
              </div>

              <h4 style={{ fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                {item.title}
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

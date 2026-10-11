import React, { useState } from 'react';
import { ArrowUpRight, FileText, Send, Terminal, CheckCircle2, Cpu, Globe2, ShieldCheck, Award, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LeetCodeIcon } from './LeetCodeIcon';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'terrasense' | 'sahayak' | 'urban'>('terrasense');

  return (
    <section style={{ paddingTop: '7.5rem', paddingBottom: '4.5rem', overflow: 'hidden' }}>
      <div className="container">
        {/* Availability Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              fontSize: '0.8rem',
              color: '#34d399',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
            <span>Available for Software Engineering Roles & Impactful Projects</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              fontSize: '0.8rem',
              color: '#c084fc',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Award size={14} color="#c084fc" />
            <span>State-Level Codictive 3.0 Winner</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.9fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          {/* Left Column: Headlines & Call to Actions */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  color: '#22d3ee',
                  letterSpacing: '0.04em',
                }}
              >
                Hi, I'm {PERSONAL_INFO.name}
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)',
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              I build software that turns{' '}
              <span className="text-gradient-cyan">complex problems</span> into{' '}
              <span className="text-gradient-accent">practical systems.</span>
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '580px',
              }}
            >
              {PERSONAL_INFO.title} studying at{' '}
              <strong style={{ color: '#f1f5f9', fontWeight: 600 }}>{PERSONAL_INFO.college}</strong>{' '}
              ({PERSONAL_INFO.graduationPeriod}, CGPA: {PERSONAL_INFO.cgpa}). Strongest in Java and object-oriented systems engineering, followed by Python for applied AI and backend services.
            </p>

            {/* Quick CTAs */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <a href="#projects" className="btn btn-primary">
                Explore Projects
                <ArrowUpRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary" style={{ fontFamily: 'var(--font-mono)' }}>
                <FileText size={17} color="#22d3ee" />
                Resume (.pdf)
              </button>

              <a href="#contact" className="btn btn-outline-cyan">
                <Send size={16} />
                Contact Me
              </a>
            </div>

            {/* Social & Coding Profile Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
              <span style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginRight: '0.2rem' }}>PROFILES:</span>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode: sumitsoni786"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 161, 22, 0.08)',
                  border: '1px solid rgba(255, 161, 22, 0.25)',
                  color: '#ffa116',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 161, 22, 0.16)';
                  e.currentTarget.style.borderColor = '#ffa116';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 161, 22, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 161, 22, 0.25)';
                }}
              >
                <LeetCodeIcon size={15} color="#ffa116" />
                <span>LeetCode</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <Github size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  background: 'rgba(14, 165, 233, 0.08)',
                  border: '1px solid rgba(14, 165, 233, 0.25)',
                  color: '#38bdf8',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.16)';
                  e.currentTarget.style.borderColor = '#38bdf8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.25)';
                }}
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Academic & Metric Quick Tags */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.5rem',
              }}
              className="hero-metrics"
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: '#f1f5f9' }}>
                  {PERSONAL_INFO.cgpa}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Current CGPA
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: '#22d3ee' }}>
                  3 Production
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  System Architectures
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: '#a855f7' }}>
                  1st Prize
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Codictive 3.0 State
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Console */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#0e131d',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 35px rgba(34, 211, 238, 0.08)',
              }}
            >
              {/* Terminal Title Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                  background: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#eab308' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22c55e' }}></span>
                  <span style={{ marginLeft: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748b' }}>
                    sumit-soni-core-systems.sh
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#22d3ee' }}>
                  <Terminal size={13} />
                  <span>LIVE ARCHITECTURE</span>
                </div>
              </div>

              {/* Console Tabs */}
              <div
                style={{
                  display: 'flex',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  background: 'rgba(0, 0, 0, 0.2)',
                }}
              >
                <button
                  onClick={() => setActiveTab('terrasense')}
                  style={{
                    flex: 1,
                    padding: '0.65rem 0.75rem',
                    background: activeTab === 'terrasense' ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
                    border: 'none',
                    borderBottom: activeTab === 'terrasense' ? '2px solid #22d3ee' : '2px solid transparent',
                    color: activeTab === 'terrasense' ? '#22d3ee' : '#64748b',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                >
                  TerraSense-X
                </button>
                <button
                  onClick={() => setActiveTab('sahayak')}
                  style={{
                    flex: 1,
                    padding: '0.65rem 0.75rem',
                    background: activeTab === 'sahayak' ? 'rgba(168, 85, 247, 0.1)' : 'transparent',
                    border: 'none',
                    borderBottom: activeTab === 'sahayak' ? '2px solid #a855f7' : '2px solid transparent',
                    color: activeTab === 'sahayak' ? '#c084fc' : '#64748b',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                >
                  Sahayak AI
                </button>
                <button
                  onClick={() => setActiveTab('urban')}
                  style={{
                    flex: 1,
                    padding: '0.65rem 0.75rem',
                    background: activeTab === 'urban' ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                    border: 'none',
                    borderBottom: activeTab === 'urban' ? '2px solid #10b981' : '2px solid transparent',
                    color: activeTab === 'urban' ? '#34d399' : '#64748b',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                >
                  Urban Blooms
                </button>
              </div>

              {/* Console Body */}
              <div style={{ padding: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', minHeight: '260px' }}>
                {activeTab === 'terrasense' && (
                  <div>
                    <div style={{ color: '#22d3ee', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Globe2 size={16} />
                      <span>$ init_remote_clip_faiss_pipeline --tiles=sentinel2</span>
                    </div>
                    <div style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.75rem' }}>
                      &gt; Vector Space: 512-dim RemoteCLIP Multimodal Index<br />
                      &gt; Index: FAISS IVF-PQ Euclidean & Cosine Distance<br />
                      &gt; Detection Engine: Multi-Temporal Spectral Delta & NDVI Masking<br />
                      &gt; Latency: &lt; 280ms sub-second tile retrieval
                    </div>
                    <div
                      style={{
                        background: 'rgba(34, 211, 238, 0.05)',
                        border: '1px solid rgba(34, 211, 238, 0.2)',
                        borderRadius: '8px',
                        padding: '0.75rem',
                        marginTop: '0.5rem',
                      }}
                    >
                      <div style={{ color: '#e2e8f0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Stack Verified:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {['Python', 'FastAPI', 'RemoteCLIP', 'FAISS', 'OpenCV', 'Sentinel-2'].map((t) => (
                          <span key={t} className="tech-chip highlight" style={{ fontSize: '0.7rem' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'sahayak' && (
                  <div>
                    <div style={{ color: '#c084fc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Cpu size={16} />
                      <span>$ start_civic_llm_dispatch --model=gemini-2.5-pro</span>
                    </div>
                    <div style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.75rem' }}>
                      &gt; Webhook Ingestion: Evolution API (WhatsApp Gateway)<br />
                      &gt; Reasoning Engine: Google Gemini 2.5 Pro Schema Extraction<br />
                      &gt; Anomaly Fusion: Real-time Precipitation & Weather APIs<br />
                      &gt; State Management: Supabase PostgreSQL Realtime Trigger
                    </div>
                    <div
                      style={{
                        background: 'rgba(168, 85, 247, 0.05)',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                        borderRadius: '8px',
                        padding: '0.75rem',
                        marginTop: '0.5rem',
                      }}
                    >
                      <div style={{ color: '#e2e8f0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Stack Verified:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {['Python Flask', 'Evolution API', 'Gemini 2.5 Pro', 'Supabase', 'Weather API'].map((t) => (
                          <span key={t} className="tech-chip" style={{ fontSize: '0.7rem', color: '#c084fc', borderColor: 'rgba(168,85,247,0.3)' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'urban' && (
                  <div>
                    <div style={{ color: '#34d399', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ShieldCheck size={16} />
                      <span>$ status_rooftop_telemetry --winner=codictive-3.0</span>
                    </div>
                    <div style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.75rem' }}>
                      &gt; Event: State-Level Codictive 3.0 Hackathon (2025)<br />
                      &gt; Award: 1st Place Winner (Backend Architecture)<br />
                      &gt; Telemetry: Soil moisture, ambient temp, humidity queues<br />
                      &gt; Optimization: Evaporative rate vs water valve automation
                    </div>
                    <div
                      style={{
                        background: 'rgba(16, 185, 129, 0.05)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        borderRadius: '8px',
                        padding: '0.75rem',
                        marginTop: '0.5rem',
                      }}
                    >
                      <div style={{ color: '#e2e8f0', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Stack Verified:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {['Python Backend', 'IoT Ingestion', 'REST APIs', 'Threshold Logic', 'Agronomic Advisory'].map((t) => (
                          <span key={t} className="tech-chip" style={{ fontSize: '0.7rem', color: '#34d399', borderColor: 'rgba(16,185,129,0.3)' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  background: 'rgba(0, 0, 0, 0.3)',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#64748b',
                }}
              >
                <span>Status: SYSTEM HEALTHY</span>
                <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <CheckCircle2 size={12} />
                  Production Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .hero-metrics {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

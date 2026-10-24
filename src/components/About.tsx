import React from 'react';
import { User, Database, Server, Compass, CheckCircle2, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="reveal-on-scroll" style={{ background: 'rgba(15, 20, 29, 0.4)' }}>
      <div className="container">
        <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <User size={14} />
            <span>Profile & Engineering Mindset</span>
          </div>
          <h2 className="section-title">
            Engineering software with <span className="text-gradient-cyan">clarity</span> and{' '}
            <span className="text-gradient-accent">architectural rigor</span>.
          </h2>
          <p className="section-description">
            A look into my background, core focus areas, and the principles guiding the software I design and build.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2.5rem', alignItems: 'stretch' }} className="about-grid">
          {/* Left Column: Narrative Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: '#f8fafc' }}>
                Bridging Theoretical Foundations with Production Realities
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.975rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                I am a Computer Science Engineering undergraduate at <strong style={{ color: '#f1f5f9' }}>{PERSONAL_INFO.college}</strong> (Batch of {PERSONAL_INFO.graduationPeriod}) maintaining a CGPA of <strong style={{ color: '#22d3ee' }}>{PERSONAL_INFO.cgpa}</strong>.
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.975rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                My engineering approach is centered on real-world utility: understanding what happens behind high-level abstractions—from Java object-oriented design and data structures to Python vector spaces in remote sensing imagery and asynchronous webhooks in civic communications. I prefer writing maintainable, well-structured code over superficial layers.
              </p>

              {/* Profiles Row */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', gap: '0.45rem' }}
                >
                  <Github size={15} />
                  <span>GitHub Profile</span>
                  <ExternalLink size={12} color="#64748b" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', gap: '0.45rem', borderColor: 'rgba(14, 165, 233, 0.3)' }}
                >
                  <Linkedin size={15} color="#38bdf8" />
                  <span style={{ color: '#38bdf8' }}>LinkedIn Profile</span>
                  <ExternalLink size={12} color="#64748b" />
                </a>
              </div>
            </div>

            {/* Quick Principles List */}
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
              className="principles-grid"
            >
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={16} color="#22d3ee" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e2e8f0' }}>Deterministic Systems</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Predictable outputs over fragile prompts</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={16} color="#a855f7" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e2e8f0' }}>Clean API Contracts</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Strict schemas & validated webhooks</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={16} color="#10b981" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e2e8f0' }}>Hackathon Tested</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>State-Level Codictive 3.0 Winner</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={16} color="#38bdf8" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e2e8f0' }}>Practical Engineering</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Solutions built for actual end users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Focus 1: Systems & Backend */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderLeft: '3px solid #22d3ee',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '8px',
                    background: 'rgba(34, 211, 238, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22d3ee',
                  }}
                >
                  <Server size={16} />
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#f8fafc' }}>Asynchronous Backend & Systems</h4>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Architecting robust backend services with Java and object-oriented principles, complemented by Python and FastAPI. Structuring reliable webhook ingestion pipelines, sensor telemetry, and relational database integrations.
              </p>
            </div>

            {/* Focus 2: Applied AI & Vector Search */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderLeft: '3px solid #a855f7',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '8px',
                    background: 'rgba(168, 85, 247, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c084fc',
                  }}
                >
                  <Database size={16} />
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#f8fafc' }}>Applied AI & Vector Embeddings</h4>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Engineering semantic search and retrieval systems using FAISS vector indexing, multimodal models like RemoteCLIP, and structured function calling with Google Gemini 2.5 Pro.
              </p>
            </div>

            {/* Focus 3: Geospatial & IoT Telemetry */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderLeft: '3px solid #10b981',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                  }}
                >
                  <Compass size={16} />
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#f8fafc' }}>Geospatial Vision & Sensor Telemetry</h4>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Processing Sentinel-2 multispectral imagery, spectral delta masking with OpenCV, and managing real-time sensor streams from IoT microcontrollers for environmental monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .principles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

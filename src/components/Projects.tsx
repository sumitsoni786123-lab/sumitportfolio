import React, { useState } from 'react';
import { Layers, ArrowRight, Cpu, Globe2, Radio } from 'lucide-react';
import { PROJECTS, ProjectCaseStudy } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Systems' },
    { id: 'Geospatial AI & Vector Retrieval', label: 'Geospatial & Vector AI' },
    { id: 'LLM Systems & Civic Tech', label: 'Civic LLM Pipelines' },
    { id: 'IoT Systems & Distributed Backend', label: 'IoT & Distributed Backend' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="reveal-on-scroll">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Layers size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Engineered systems designed for{' '}
            <span className="text-gradient-cyan">scale</span> and{' '}
            <span className="text-gradient-accent">reliability</span>.
          </h2>
          <p className="section-description">
            Three detailed project case studies demonstrating vector retrieval, cognitive LLM triage, and hackathon-winning backend architectures.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeFilter === tab.id ? 'rgba(34, 211, 238, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                border: activeFilter === tab.id ? '1px solid #22d3ee' : '1px solid rgba(255, 255, 255, 0.08)',
                color: activeFilter === tab.id ? '#22d3ee' : '#94a3b8',
                fontWeight: activeFilter === tab.id ? 600 : 400,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Case Studies Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {filteredProjects.map((project, index) => {
            const isCyan = project.accentColor === 'cyan';
            const isViolet = project.accentColor === 'violet';
            const isEmerald = project.accentColor === 'emerald';

            const accentTheme = isCyan
              ? { border: 'rgba(34, 211, 238, 0.3)', glow: 'rgba(34, 211, 238, 0.1)', text: '#22d3ee', badgeBg: 'rgba(34, 211, 238, 0.1)' }
              : isViolet
              ? { border: 'rgba(168, 85, 247, 0.3)', glow: 'rgba(168, 85, 247, 0.1)', text: '#c084fc', badgeBg: 'rgba(168, 85, 247, 0.1)' }
              : { border: 'rgba(16, 185, 129, 0.3)', glow: 'rgba(16, 185, 129, 0.1)', text: '#34d399', badgeBg: 'rgba(16, 185, 129, 0.1)' };

            return (
              <div
                key={project.id}
                className="glass-card card-hover-lift"
                style={{
                  padding: '2.5rem',
                  border: `1px solid ${accentTheme.border}`,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.4), 0 0 30px ${accentTheme.glow}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background Ambient Tint */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '320px',
                    height: '320px',
                    background: `radial-gradient(circle, ${accentTheme.glow} 0%, transparent 70%)`,
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: index % 2 === 0 ? '1.15fr 0.85fr' : '0.85fr 1.15fr',
                    gap: '2.5rem',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                  }}
                  className="project-row"
                >
                  {/* Text Column */}
                  <div style={{ order: index % 2 === 0 ? 1 : 2 }} className="project-text-col">
                    {/* Header Badges */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          background: accentTheme.badgeBg,
                          color: accentTheme.text,
                          border: `1px solid ${accentTheme.border}`,
                          fontWeight: 600,
                          textTransform: 'uppercase',
                        }}
                      >
                        {project.badge}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                        {project.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.85rem', color: '#f8fafc', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
                      {project.title}
                    </h3>

                    <div style={{ color: accentTheme.text, fontSize: '0.95rem', fontWeight: 500, marginBottom: '1.25rem' }}>
                      {project.subtitle}
                    </div>

                    <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      {project.overview}
                    </p>

                    {/* Technology Chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn btn-primary btn-sm"
                        style={{
                          background: isCyan
                            ? 'linear-gradient(135deg, #06b6d4, #0284c7)'
                            : isViolet
                            ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
                            : 'linear-gradient(135deg, #10b981, #059669)',
                        }}
                      >
                        System Architecture Deep Dive
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Architecture Diagram Visualization Column */}
                  <div style={{ order: index % 2 === 0 ? 2 : 1 }} className="project-diagram-col">
                    <div
                      style={{
                        background: '#090d14',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '16px',
                        padding: '1.75rem',
                        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.6)',
                        position: 'relative',
                      }}
                    >
                      {/* Diagram Title Bar */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                          paddingBottom: '0.75rem',
                          marginBottom: '1.25rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: accentTheme.text }}>
                          {isCyan && <Globe2 size={14} />}
                          {isViolet && <Cpu size={14} />}
                          {isEmerald && <Radio size={14} />}
                          <span>ARCHITECTURE SCHEMATIC</span>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                          v1.0.0
                        </span>
                      </div>

                      {/* Visual Diagram Representation */}
                      {isCyan && (
                        /* TerraSense-X Satellite Vector Pipeline */
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <div
                            style={{
                              background: 'rgba(34, 211, 238, 0.05)',
                              border: '1px solid rgba(34, 211, 238, 0.2)',
                              borderRadius: '8px',
                              padding: '0.75rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#cbd5e1' }}>
                              User Prompt
                            </span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#22d3ee' }}>
                              "coastal changes"
                            </span>
                          </div>

                          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.75rem' }}>
                            &darr; RemoteCLIP Multimodal Text Encoder (512-d)
                          </div>

                          <div
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '8px',
                              padding: '0.75rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <div>
                              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f1f5f9' }}>FAISS IVF-PQ Index</div>
                              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Sentinel-2 Vector Tile Database</div>
                            </div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#22d3ee', background: 'rgba(34, 211, 238, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                              &lt; 280ms
                            </span>
                          </div>

                          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.75rem' }}>
                            &darr; OpenCV Spectral Delta Masking
                          </div>

                          <div
                            style={{
                              background: 'rgba(34, 211, 238, 0.08)',
                              border: '1px dashed rgba(34, 211, 238, 0.4)',
                              borderRadius: '8px',
                              padding: '0.75rem',
                            }}
                          >
                            <div style={{ fontSize: '0.75rem', color: '#22d3ee', fontWeight: 600, marginBottom: '0.25rem' }}>
                              FastAPI Stream to Geospatial GIS Canvas
                            </div>
                            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                              Normalized Difference Vegetation Index (NDVI) + Temporal Segmentations
                            </div>
                          </div>
                        </div>
                      )}

                      {isViolet && (
                        /* Sahayak AI WhatsApp LLM Pipeline */
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <div
                            style={{
                              background: 'rgba(168, 85, 247, 0.05)',
                              border: '1px solid rgba(168, 85, 247, 0.2)',
                              borderRadius: '8px',
                              padding: '0.75rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#cbd5e1' }}>
                              WhatsApp Inbound Payload
                            </span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#c084fc' }}>
                              Voice / Text / Image
                            </span>
                          </div>

                          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.75rem' }}>
                            &darr; WhatsApp Webhook Gateway Ingestion
                          </div>

                          <div
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '8px',
                              padding: '0.75rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <div>
                              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f1f5f9' }}>Google Gemini 2.5 Pro</div>
                              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Intent Classification + Urgency Scoring</div>
                            </div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#c084fc', background: 'rgba(168, 85, 247, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                              JSON Schema
                            </span>
                          </div>

                          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.75rem' }}>
                            &darr; Real-Time Meteorological Context Fusion
                          </div>

                          <div
                            style={{
                              background: 'rgba(168, 85, 247, 0.08)',
                              border: '1px dashed rgba(168, 85, 247, 0.4)',
                              borderRadius: '8px',
                              padding: '0.75rem',
                            }}
                          >
                            <div style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 600, marginBottom: '0.25rem' }}>
                              Supabase Database State Machine
                            </div>
                            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                              Automated Dept Routing & Citizen WhatsApp Status Pings
                            </div>
                          </div>
                        </div>
                      )}

                      {isEmerald && (
                        /* Urban Blooms Hackathon Architecture */
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <div
                            style={{
                              background: 'rgba(16, 185, 129, 0.05)',
                              border: '1px solid rgba(16, 185, 129, 0.2)',
                              borderRadius: '8px',
                              padding: '0.75rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#cbd5e1' }}>
                              Rooftop Edge Sensors
                            </span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#34d399' }}>
                              Moisture / Temp / UV
                            </span>
                          </div>

                          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.75rem' }}>
                            &darr; High-Frequency Telemetry Ingestion
                          </div>

                          <div
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '8px',
                              padding: '0.75rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <div>
                              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f1f5f9' }}>Agronomic Advisory Engine</div>
                              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Dynamic Evapotranspiration Model</div>
                            </div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#34d399', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                              1st Place
                            </span>
                          </div>

                          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.75rem' }}>
                            &darr; Automated Irrigation Solenoid Triggers
                          </div>

                          <div
                            style={{
                              background: 'rgba(16, 185, 129, 0.08)',
                              border: '1px dashed rgba(16, 185, 129, 0.4)',
                              borderRadius: '8px',
                              padding: '0.75rem',
                            }}
                          >
                            <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 600, marginBottom: '0.25rem' }}>
                              Codictive 3.0 Hackathon Winner (2025)
                            </div>
                            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                              Backend Service & Sensor Telemetry Pipeline
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        @media (max-width: 960px) {
          .project-row {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .project-text-col {
            order: 1 !important;
          }
          .project-diagram-col {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
};

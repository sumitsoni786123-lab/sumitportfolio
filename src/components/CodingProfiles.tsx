import React from 'react';
import { Terminal, ExternalLink, Code2, CheckCircle2, ShieldCheck, Plus } from 'lucide-react';
import { CODING_PROFILES } from '../data/portfolioData';
import { LeetCodeIcon } from './LeetCodeIcon';

export const CodingProfiles: React.FC = () => {
  return (
    <section id="profiles" className="reveal-on-scroll" style={{ background: 'rgba(15, 20, 29, 0.35)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <Terminal size={14} />
            <span>Developer Dashboard</span>
          </div>
          <h2 className="section-title">
            Coding Profiles &amp; <span className="text-gradient-cyan">Problem Solving</span>.
          </h2>
          <p className="section-description">
            Verified algorithmic profiles and coding handles focusing on core data structures, algorithms, and technical problem solving.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
          }}
        >
          {CODING_PROFILES.map((profile) => {
            const isLeetCode = profile.iconType === 'leetcode';

            return (
              <div
                key={profile.id}
                className="glass-card card-hover-lift"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  background: 'linear-gradient(135deg, rgba(17, 24, 38, 0.95), rgba(13, 18, 28, 0.85))',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Subtle Ambient Light */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '180px',
                    height: '180px',
                    background: isLeetCode
                      ? 'radial-gradient(circle, rgba(255, 161, 22, 0.08) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Dashboard Card Header */}
                <div>
                  {/* Status Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                      paddingBottom: '0.85rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: '#10b981',
                          boxShadow: '0 0 8px #10b981',
                          display: 'inline-block',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: '#34d399',
                          letterSpacing: '0.04em',
                          fontWeight: 600,
                        }}
                      >
                        {profile.status || 'VERIFIED PROFILE'}
                      </span>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: '#64748b',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      HOST: leetcode.com
                    </span>
                  </div>

                  {/* Profile Identification */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '3.25rem',
                        height: '3.25rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 161, 22, 0.1)',
                        border: '1px solid rgba(255, 161, 22, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffa116',
                        flexShrink: 0,
                        boxShadow: '0 4px 16px rgba(255, 161, 22, 0.12)',
                      }}
                    >
                      {isLeetCode ? <LeetCodeIcon size={26} color="#ffa116" /> : <Code2 size={24} />}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', fontWeight: 700 }}>
                          {profile.platform}
                        </h3>
                        {profile.badge && (
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.7rem',
                              color: '#22d3ee',
                              background: 'rgba(34, 211, 238, 0.08)',
                              border: '1px solid rgba(34, 211, 238, 0.25)',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '9999px',
                            }}
                          >
                            {profile.badge}
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.825rem',
                          color: '#22d3ee',
                          marginTop: '0.15rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        <span>@</span>
                        <span style={{ fontWeight: 600 }}>{profile.username}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#cbd5e1',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {profile.description}
                  </p>

                  {/* Focus Topic Badges */}
                  {profile.topics && profile.topics.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      {profile.topics.map((topic) => (
                        <span
                          key={topic}
                          className="tech-chip"
                          style={{
                            fontSize: '0.72rem',
                            padding: '0.2rem 0.55rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dashboard Action Footer */}
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#64748b' }}>
                    <ShieldCheck size={14} color="#10b981" />
                    <span>Official Profile</span>
                  </div>

                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{
                      padding: '0.55rem 1.1rem',
                      fontSize: '0.825rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <span>View Profile</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Extensible Platform Slot Card */}
          <div
            className="glass-card card-hover-lift"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
              borderRadius: '16px',
              border: '1px dashed rgba(255, 255, 255, 0.12)',
              background: 'rgba(15, 20, 29, 0.4)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                  <Code2 size={13} color="#22d3ee" />
                  <span>EXTENSIBLE DASHBOARD</span>
                </div>
                <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                  READY FOR EXPANSION
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '12px',
                    background: 'rgba(34, 211, 238, 0.05)',
                    border: '1px dashed rgba(34, 211, 238, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22d3ee',
                    flexShrink: 0,
                  }}
                >
                  <Plus size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#e2e8f0', fontWeight: 600 }}>
                    Additional Handles
                  </h3>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    Competitive &amp; Practice Platforms
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1rem' }}>
                Engineered to seamlessly link future competitive coding profiles (e.g. CodeChef, Codeforces, HackerRank, GeeksforGeeks) via centralized configuration.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['Java DSA', 'Algorithmic Rounds', 'Competitive Contests'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: '#64748b',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                paddingTop: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#64748b' }}>
                <CheckCircle2 size={14} color="#22d3ee" />
                <span>Extensible Architecture</span>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#94a3b8',
                }}
              >
                Config-Driven
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, FileText, ExternalLink, Sparkles, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LeetCodeIcon } from './LeetCodeIcon';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="reveal-on-scroll">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <Mail size={14} />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="section-title">
            Let's connect &amp; <span className="text-gradient-cyan">discuss engineering</span>.
          </h2>
          <p className="section-description">
            Looking for a dedicated software engineer with strong foundations in Java, Python, and applied systems? Feel free to reach out directly via email.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.85fr',
            gap: '2rem',
            alignItems: 'stretch',
          }}
          className="contact-layout-grid"
        >
          {/* Main Email & Inquiries Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem',
              border: '1px solid rgba(34, 211, 238, 0.25)',
              background: 'linear-gradient(135deg, rgba(17, 24, 38, 0.95), rgba(12, 17, 26, 0.9))',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(34, 211, 238, 0.08)',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient Background Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div>
              {/* Status Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 10px #10b981',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#34d399',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                  }}
                >
                  Available for Opportunities &middot; Prompt Response
                </span>
              </div>

              <h3 style={{ fontSize: '1.65rem', color: '#f8fafc', marginBottom: '0.75rem', fontWeight: 700 }}>
                Start a Conversation
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Whether you have an inquiry regarding internships, entry-level software engineering roles, or want to review my technical projects, my inbox is always open.
              </p>

              {/* Email Me Primary Action Box */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Direct Email Address
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.15rem',
                    color: '#22d3ee',
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                    wordBreak: 'break-all',
                  }}
                >
                  {PERSONAL_INFO.email}
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                  {/* Clean Mailto Button */}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="btn btn-primary"
                    style={{
                      padding: '0.85rem 1.6rem',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      gap: '0.6rem',
                    }}
                  >
                    <Send size={16} />
                    <span>Email Me</span>
                  </a>

                  {/* Copy Button */}
                  <button
                    onClick={copyEmail}
                    className="btn btn-secondary"
                    style={{
                      padding: '0.85rem 1.4rem',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-mono)',
                      gap: '0.5rem',
                    }}
                  >
                    {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                    <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Contact Specs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22d3ee',
                  }}
                >
                  <Phone size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Phone</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    style={{ fontSize: '0.85rem', color: '#cbd5e1', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a855f7',
                  }}
                >
                  <MapPin size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards: Verified Profiles & Resume Access */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Resume Fast Link Card */}
            <div
              className="glass-card card-hover-lift"
              style={{
                padding: '1.75rem',
                borderRadius: '18px',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                background: 'linear-gradient(135deg, rgba(19, 26, 40, 0.85), rgba(14, 19, 30, 0.75))',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '8px',
                    background: 'rgba(34, 211, 238, 0.1)',
                    border: '1px solid rgba(34, 211, 238, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22d3ee',
                  }}
                >
                  <FileText size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 600 }}>
                    Official Resume
                  </h4>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    PDF FORMAT &middot; UPDATED 2026
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Directly access my verified curriculum vitae covering academic coursework, engineering projects, hackathon achievements, and certifications.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{
                    flex: 1,
                    padding: '0.65rem 1rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    justifyContent: 'center',
                  }}
                >
                  <ExternalLink size={14} color="#22d3ee" />
                  <span>Open PDF</span>
                </a>

                <a
                  href="/resume.pdf"
                  download="Sumit_Soni_Resume.pdf"
                  className="btn btn-primary btn-sm"
                  style={{
                    flex: 1,
                    padding: '0.65rem 1rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    justifyContent: 'center',
                  }}
                >
                  <FileText size={14} />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Verified Coding Handle Card */}
            <div
              className="glass-card card-hover-lift"
              style={{
                padding: '1.75rem',
                borderRadius: '18px',
                border: '1px solid rgba(255, 161, 22, 0.25)',
                background: 'linear-gradient(135deg, rgba(20, 24, 34, 0.85), rgba(15, 19, 27, 0.75))',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '2.25rem',
                      height: '2.25rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 161, 22, 0.12)',
                      border: '1px solid rgba(255, 161, 22, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LeetCodeIcon size={18} color="#ffa116" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 600 }}>
                      LeetCode Profile
                    </h4>
                    <div style={{ fontSize: '0.72rem', color: '#ffa116', fontFamily: 'var(--font-mono)' }}>
                      @sumitsoni786
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '9999px',
                  }}
                >
                  VERIFIED
                </span>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Explore my verified coding activity and algorithmic problem-solving practice in Java.
              </p>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{
                  padding: '0.65rem 1rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ffa116',
                  borderColor: 'rgba(255, 161, 22, 0.3)',
                  justifyContent: 'center',
                }}
              >
                <span>View LeetCode Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* GitHub & LinkedIn Profiles Card */}
            <div
              className="glass-card card-hover-lift"
              style={{
                padding: '1.75rem',
                borderRadius: '18px',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                background: 'linear-gradient(135deg, rgba(19, 26, 40, 0.85), rgba(14, 19, 30, 0.75))',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f8fafc',
                  }}
                >
                  <Github size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 600 }}>
                    Developer &amp; Professional Links
                  </h4>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    GITHUB &middot; LINKEDIN
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Explore open-source repositories and codebase history on GitHub, or connect directly on LinkedIn.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{
                    flex: 1,
                    padding: '0.65rem 1rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    justifyContent: 'center',
                    gap: '0.45rem',
                  }}
                >
                  <Github size={14} />
                  <span>GitHub</span>
                  <ExternalLink size={12} color="#64748b" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{
                    flex: 1,
                    padding: '0.65rem 1rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    borderColor: 'rgba(14, 165, 233, 0.3)',
                    color: '#38bdf8',
                    justifyContent: 'center',
                    gap: '0.45rem',
                  }}
                >
                  <Linkedin size={14} color="#38bdf8" />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} color="#64748b" />
                </a>
              </div>
            </div>

            {/* Quick Note Card */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px dashed rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <Sparkles size={18} color="#22d3ee" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                Direct email communication with zero third-party intermediaries. All messages delivered straight to Sumit Soni.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

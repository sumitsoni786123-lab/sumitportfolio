import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Profiles', href: '#profiles' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(10, 13, 18, 0.88)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Brand / Name */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: '#f8fafc',
          }}
        >
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2))',
              border: '1px solid rgba(34, 211, 238, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#22d3ee',
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)',
            }}
          >
            SS
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em' }}>
              {PERSONAL_INFO.name}
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              Software Engineer
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: '#94a3b8',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#22d3ee')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.65rem' }} className="desktop-actions">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub Profile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.25rem',
              height: '2.25rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#22d3ee';
              e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <Github size={16} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.25rem',
              height: '2.25rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#38bdf8';
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <Linkedin size={16} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
          >
            <FileText size={15} color="#22d3ee" />
            Resume
          </a>
          <a href="#contact" className="btn btn-primary btn-sm">
            <Send size={14} />
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#f8fafc',
            cursor: 'pointer',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(11, 15, 22, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#cbd5e1',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary btn-sm"
              style={{ flex: 1, justifyContent: 'center', gap: '0.4rem' }}
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary btn-sm"
              style={{ flex: 1, justifyContent: 'center', gap: '0.4rem' }}
            >
              <Linkedin size={14} color="#38bdf8" />
              LinkedIn
            </a>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary btn-sm"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <FileText size={15} color="#22d3ee" />
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary btn-sm"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <Send size={14} />
              Contact
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

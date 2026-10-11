import React, { useState } from 'react';
import { Code2, BrainCircuit, Server, Layers, Search, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={20} color="#22d3ee" />;
      case 'BrainCircuit':
        return <BrainCircuit size={20} color="#c084fc" />;
      case 'Server':
        return <Server size={20} color="#34d399" />;
      case 'Layers':
      default:
        return <Layers size={20} color="#38bdf8" />;
    }
  };

  return (
    <section id="skills" className="reveal-on-scroll" style={{ background: 'rgba(15, 20, 29, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div className="section-tag">
              <Terminal size={14} />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="section-title">
              Skills, frameworks & <span className="text-gradient-cyan">domain tooling</span>.
            </h2>
            <p className="section-description" style={{ marginBottom: 0 }}>
              Practical technologies I use to build scalable backends, deploy AI vector search, and run distributed systems. Java is my primary and strongest programming language, followed by Python for applied systems and ML.
            </p>
          </div>

          {/* Quick Search */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: '#121824',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              padding: '0.6rem 1rem',
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <Search size={16} color="#64748b" />
            <input
              type="text"
              placeholder="Filter technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#f8fafc',
                fontSize: '0.85rem',
                outline: 'none',
                width: '100%',
                fontFamily: 'var(--font-mono)',
              }}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid-2">
          {SKILL_CATEGORIES.map((category) => {
            const filteredSkills = category.skills.filter(s =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.level.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div
                key={category.title}
                className="glass-card card-hover-lift"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#f8fafc' }}>
                      {category.title}
                    </h3>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      {filteredSkills.length} Verified Technologies
                    </div>
                  </div>
                </div>

                {category.description && (
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                    {category.description}
                  </p>
                )}

                {/* Skills Badges Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        background: skill.highlight ? 'rgba(34, 211, 238, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                        border: skill.highlight ? '1px solid rgba(34, 211, 238, 0.25)' : '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '8px',
                        padding: '0.65rem 0.85rem',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: skill.highlight ? '#f1f5f9' : '#cbd5e1' }}>
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 8px #22d3ee' }}></span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                        {skill.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

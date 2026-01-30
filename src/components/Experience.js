import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import WorksModal from './WorksModal';
import './styles/Experience.css';

const getRoleType = (position) => {
  const p = (position || '').toLowerCase();
  if (p.includes('intern')) return 'Internship';
  if (p.includes('research')) return 'Research';
  if (p.includes('tutor')) return 'Teaching';
  return 'Work';
};

const Experience = () => {
  const [activeExp, setActiveExp] = useState(null);
  const experience = portfolioData.experience || [];

  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="experience-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="experience-header">
          <h2 className="experience-title">work experience</h2>
          <div className="experience-rule" aria-hidden="true" />
        </div>

        <div className="experience-grid">
          {experience.map((exp, idx) => {
            const firstResp = (exp.responsibilities || [])[0];
            return (
              <motion.article
                key={exp.id}
                className="experience-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <button
                  type="button"
                  className="experience-card-inner"
                  onClick={() => setActiveExp(exp)}
                  aria-label={`View details for ${exp.position} at ${exp.company}`}
                >
                  <div className="experience-card-top">
                    <div className="experience-card-logo">
                      <img src={exp.logo} alt="" />
                    </div>
                    <div className="experience-card-meta">
                      <span className="experience-card-type">{getRoleType(exp.position)}</span>
                      <span className="experience-card-dates">{exp.dates}</span>
                    </div>
                  </div>
                  <h3 className="experience-card-company">{exp.company}</h3>
                  <p className="experience-card-position">{exp.position}</p>
                  {exp.location && (
                    <p className="experience-card-location">{exp.location}</p>
                  )}
                  {firstResp && (
                    <p className="experience-card-preview">{firstResp}</p>
                  )}
                  <div className="experience-card-footer">
                    <span className="experience-card-cta">View details →</span>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      <WorksModal
        isOpen={activeExp != null}
        title={activeExp ? `${activeExp.position} · ${activeExp.company}` : ''}
        onClose={() => setActiveExp(null)}
      >
        {activeExp && (
          <div className="experience-modal">
            <div className="experience-meta">
              <div className="experience-metaLine">
                <span className="experience-metaStrong">{activeExp.company}</span>
                {activeExp.location ? (
                  <span className="experience-metaMuted"> · {activeExp.location}</span>
                ) : null}
              </div>
              <div className="experience-metaMuted">{activeExp.dates}</div>
            </div>
            <ul className="experience-modalList">
              {(activeExp.responsibilities || []).map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </WorksModal>
    </section>
  );
};

export default Experience;

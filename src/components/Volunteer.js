import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './styles/Volunteer.css';

const Volunteer = () => {
  const [openId, setOpenId] = useState(null);
  const volunteer = portfolioData.volunteer || [];

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="volunteer" className="volunteer-section">
      <motion.div
        className="volunteer-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="volunteer-header">
          <h2 className="volunteer-title">extracurriculars</h2>
          <div className="volunteer-rule" aria-hidden="true" />
        </div>

        <div className="volunteer-accordion" role="list">
          {volunteer.map((v) => {
            const isOpen = openId === v.id;
            return (
              <motion.div
                key={v.id}
                className={`volunteer-item ${isOpen ? 'volunteer-item--open' : ''}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35 }}
                role="listitem"
              >
                <button
                  type="button"
                  className="volunteer-trigger"
                  onClick={() => toggle(v.id)}
                  aria-expanded={isOpen}
                  aria-controls={`volunteer-content-${v.id}`}
                  id={`volunteer-trigger-${v.id}`}
                >
                  <div className="volunteer-trigger-left">
                    <div className="volunteer-trigger-logo">
                      <img src={v.logo} alt="" />
                    </div>
                    <div className="volunteer-trigger-meta">
                      <span className="volunteer-trigger-position">{v.position}</span>
                      {(v.company || v.location) && (
                        <span className="volunteer-trigger-sub">
                          {[v.company, v.location].filter(Boolean).join(' · ')}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="volunteer-trigger-right">
                    <span className="volunteer-trigger-dates">{v.dates}</span>
                    <FaChevronDown
                      className={`volunteer-trigger-icon ${isOpen ? 'volunteer-trigger-icon--open' : ''}`}
                      aria-hidden
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`volunteer-content-${v.id}`}
                      className="volunteer-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      aria-labelledby={`volunteer-trigger-${v.id}`}
                    >
                      <ul className="volunteer-list">
                        {(v.responsibilities || []).map((r, idx) => (
                          <li key={idx}>{r}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Volunteer;

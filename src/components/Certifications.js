import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './styles/Certifications.css';

const Certifications = () => {
  const [openId, setOpenId] = useState(null);
  const certifications = portfolioData.certifications || [];

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="certifications" className="cert-section">
      <motion.div
        className="cert-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="cert-header">
          <h2 className="cert-title">certifications</h2>
          <div className="cert-rule" aria-hidden="true" />
        </div>

        <div className="cert-accordion" role="list">
          {certifications.map((c) => {
            const isOpen = openId === c.id;
            return (
              <motion.div
                key={c.id}
                className={`cert-item ${isOpen ? 'cert-item--open' : ''}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35 }}
                role="listitem"
              >
                <button
                  type="button"
                  className="cert-trigger"
                  onClick={() => toggle(c.id)}
                  aria-expanded={isOpen}
                  aria-controls={`cert-content-${c.id}`}
                  id={`cert-trigger-${c.id}`}
                >
                  <div className="cert-trigger-left">
                    <div className="cert-trigger-logo">
                      <img src={c.logo} alt="" />
                    </div>
                    <div className="cert-trigger-meta">
                      <span className="cert-trigger-position">{c.title}</span>
                      {c.issuer && (
                        <span className="cert-trigger-sub">{c.issuer}</span>
                      )}
                    </div>
                  </div>
                  <div className="cert-trigger-right">
                    <span className="cert-trigger-dates">{c.date}</span>
                    <FaChevronDown
                      className={`cert-trigger-icon ${isOpen ? 'cert-trigger-icon--open' : ''}`}
                      aria-hidden
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`cert-content-${c.id}`}
                      className="cert-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      aria-labelledby={`cert-trigger-${c.id}`}
                    >
                      <ul className="cert-list">
                        {(c.description || []).map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                      {c.link && (
                        <a
                          className="cert-link"
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View certificate →
                        </a>
                      )}
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

export default Certifications;

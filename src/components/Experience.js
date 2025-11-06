import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './styles/Experience.css';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-decoration experience-decoration">
          <FaBriefcase />
        </div>
        <h2 className="section-title">Working Experience</h2>
        <div className="experience-list">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleExpand(exp.id)}
            >
              <div className="experience-header">
                <div className="experience-logo">
                  <img src={exp.logo} alt={`${exp.company} Logo`} />
                </div>
                <div className="experience-info">
                  <h3 className="experience-position">{exp.position}</h3>
                  <p className="experience-company">{exp.company}, {exp.location}</p>
                  <p className="experience-dates">{exp.dates}</p>
                </div>
              </div>
              <AnimatePresence>
                {expandedId === exp.id && (
                  <motion.div
                    className="experience-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
              {expandedId !== exp.id && (
                <div className="expand-hint">Click to expand</div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;


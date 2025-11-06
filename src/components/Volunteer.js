import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './styles/Volunteer.css';

const Volunteer = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="volunteer" className="volunteer-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-decoration volunteer-decoration">
          <FaHeart />
        </div>
        <h2 className="section-title">Volunteer Experience</h2>
        <div className="volunteer-list">
          {portfolioData.volunteer.map((vol, index) => (
            <motion.div
              key={vol.id}
              className="volunteer-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleExpand(vol.id)}
            >
              <div className="volunteer-header">
                <div className="volunteer-logo">
                  <img src={vol.logo} alt={vol.company || vol.position + " Logo"} />
                </div>
                <div className="volunteer-info">
                  <h3 className="volunteer-position">{vol.position}</h3>
                  {(vol.company || vol.location) && (
                    <p className="volunteer-company">
                      {vol.company}{vol.company && vol.location ? ', ' : ''}{vol.location}
                    </p>
                  )}
                  <p className="volunteer-dates">{vol.dates}</p>
                </div>
              </div>
              <AnimatePresence>
                {expandedId === vol.id && (
                  <motion.div
                    className="volunteer-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="responsibilities-list">
                      {vol.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
              {expandedId !== vol.id && (
                <div className="expand-hint">Click to expand</div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Volunteer;


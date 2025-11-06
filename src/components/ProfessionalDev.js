import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './styles/ProfessionalDev.css';

const ProfessionalDev = () => {
  return (
    <section id="profdev" className="profdev-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-decoration profdev-decoration">
          <FaStar />
        </div>
        <h2 className="section-title">Professional Development</h2>
        <div className="profdev-list">
          {portfolioData.professionalDev.map((item, index) => (
            <motion.div
              key={item.id}
              className="profdev-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="profdev-logo">
                <img src={item.logo} alt={`${item.company} Logo`} />
              </div>
              <div className="profdev-content">
                <h3 className="profdev-position">{item.position}</h3>
                <p className="profdev-company">{item.company}</p>
                <p className="profdev-dates">{item.dates}</p>
                <p className="profdev-description">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profdev-link"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalDev;


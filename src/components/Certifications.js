import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './styles/Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="sparkle-decoration">✨</div>
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certification-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            >
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <div className="cert-logo">
                <img src={cert.logo} alt={`${cert.issuer} Logo`} />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">Completed: {cert.date}</p>
                <ul className="cert-description">
                  {cert.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
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

export default Certifications;


import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-decoration education-decoration">
          <FaGraduationCap />
        </div>
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="education-logo">
            <img src={portfolioData.education.logo} alt="NJIT Logo" />
          </div>
          <div className="education-details">
            <h3 className="education-school">{portfolioData.education.school}</h3>
            <p className="education-degree">{portfolioData.education.degree}</p>
            <p className="education-gpa">GPA: <span className="highlight">{portfolioData.education.gpa}</span></p>
            
            <div className="education-info">
              <motion.div 
                className="info-section"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <strong>Relevant Coursework:</strong>
                <ul>
                  {portfolioData.education.coursework.map((course, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      {course}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className="info-section"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <strong>Honors & Awards:</strong>
                <ul>
                  {portfolioData.education.honors.map((honor, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      {honor}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;


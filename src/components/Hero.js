import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './styles/Hero.css';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            👋 Welcome
          </motion.div>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {portfolioData.personal.name}
          </motion.h1>
          <motion.p
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {portfolioData.personal.title}
          </motion.p>
          <motion.p
            className="hero-bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            dangerouslySetInnerHTML={{ __html: portfolioData.personal.bio }}
          />
          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <FaLinkedin />
            </a>
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
              <FaGithub />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} aria-label="Email" className="social-link">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-illustration">
            <div className="illustration-container">
              {/* Floating code brackets */}
              <div className="code-bracket bracket-left">{'{'}</div>
              <div className="code-bracket bracket-right">{'}'}</div>
              
              {/* Central icon - laptop/computer */}
              <div className="laptop-icon">
                <svg viewBox="0 0 100 100" className="laptop-svg">
                  <rect x="10" y="25" width="80" height="50" rx="3" fill="#3b82f6" opacity="0.2"/>
                  <rect x="15" y="30" width="70" height="40" rx="2" fill="#2563eb"/>
                  <rect x="20" y="35" width="60" height="30" rx="2" fill="#1e40af"/>
                  <line x1="25" y1="45" x2="75" y2="45" stroke="#dbeafe" strokeWidth="2"/>
                  <line x1="25" y1="55" x2="60" y2="55" stroke="#dbeafe" strokeWidth="2"/>
                  <rect x="25" y="75" width="50" height="5" rx="2" fill="#3b82f6" opacity="0.3"/>
                </svg>
              </div>
              
              {/* Floating dots */}
              <div className="floating-dot dot-1"></div>
              <div className="floating-dot dot-2"></div>
              <div className="floating-dot dot-3"></div>
              <div className="floating-dot dot-4"></div>
              <div className="floating-dot dot-5"></div>
              
              {/* Decorative shapes */}
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        onClick={scrollToNext}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;


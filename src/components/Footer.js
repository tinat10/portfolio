import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tina Thai</h3>
            <p>{portfolioData.personal.title}</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <FaEnvelope /> <a href={`mailto:${portfolioData.personal.email}`}>{portfolioData.personal.email}</a>
            </p>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Tina Thai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


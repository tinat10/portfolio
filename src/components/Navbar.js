import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import './styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'education', 'experience', 'projects', 'profdev', 'volunteer', 'certifications'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span>Tina Thai</span>
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className={activeSection === 'home' ? 'active' : ''}>
            Home
          </a>
          <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }} className={activeSection === 'education' ? 'active' : ''}>
            Education
          </a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className={activeSection === 'experience' ? 'active' : ''}>
            Experience
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className={activeSection === 'projects' ? 'active' : ''}>
            Projects
          </a>
          <a href="#profdev" onClick={(e) => { e.preventDefault(); scrollToSection('profdev'); }} className={activeSection === 'profdev' ? 'active' : ''}>
            Development
          </a>
          <a href="#volunteer" onClick={(e) => { e.preventDefault(); scrollToSection('volunteer'); }} className={activeSection === 'volunteer' ? 'active' : ''}>
            Volunteer
          </a>
          <a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }} className={activeSection === 'certifications' ? 'active' : ''}>
            Certifications
          </a>
        </div>

        <div className="nav-social">
          <a href="https://www.linkedin.com/in/thaitina/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tinat10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        <div className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


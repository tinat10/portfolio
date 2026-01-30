import React from 'react';
import ProfessionalDev from '../components/ProfessionalDev';
import Volunteer from '../components/Volunteer';
import Certifications from '../components/Certifications';
import './styles/PageShell.css';
import './styles/ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <div className="page">
      <div className="page-section projects-page">
        <header className="portfolio-header">
          <h1 className="portfolio-title">portfolio</h1>
          <p className="portfolio-blurb">
            This is everything about me that I do in my free time involving CS!
          </p>
        </header>
        <section className="projects-page-section">
          <ProfessionalDev />
        </section>
        <section className="projects-page-section">
          <Volunteer />
        </section>
        <section className="projects-page-section">
          <Certifications />
        </section>
      </div>
    </div>
  );
}


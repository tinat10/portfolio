import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import './styles/EducationPage.css';
import './styles/AboutPage.css';
import './styles/PageShell.css';

export default function AboutPage() {
  const edu = portfolioData.education;

  return (
    <div className="page">
      <div className="page-section about-page">
        <header className="about-header">
          <h1 className="about-title">about me</h1>
          <p className="about-subtitle">
            Education, experience, and everything I&apos;m building toward.
          </p>
        </header>

        {/* Education */}
        <section className="about-section" aria-label="Education">
          <div className="edu-grid">
            <section className="edu-card" aria-label="School and degree">
              <div className="edu-cardTop">
                <div className="edu-logoWrap" aria-hidden="true">
                  <img src={edu.logo} alt="" />
                </div>
                <div className="edu-cardText">
                  <h2 className="edu-school">{edu.school}</h2>
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-gpa">
                    <span className="edu-gpaLabel">GPA</span>{' '}
                    <span className="edu-gpaValue">{edu.gpa}</span>
                  </p>
                </div>
              </div>
              <div className="edu-highlights">
                <div className="edu-highlightsTitle">Highlights</div>
                <div className="edu-badges" aria-label="Honors and scholarships">
                  {(edu.honors || []).map((h) => (
                    <span key={h} className="edu-badge">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </section>
            <section className="edu-panel" aria-label="Coursework">
              <div className="edu-panelHeader">
                <h2 className="edu-panelTitle">Coursework</h2>
                <div className="edu-panelRule" aria-hidden="true" />
              </div>
              <ul className="edu-coursework">
                {(edu.coursework || []).map((c) => (
                  <li key={c} className="edu-course">
                    <span className="edu-courseDot" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        {/* Work */}
        <section className="about-section">
          <Experience />
        </section>

        {/* Projects */}
        <section className="about-section">
          <Projects />
        </section>
      </div>
    </div>
  );
}

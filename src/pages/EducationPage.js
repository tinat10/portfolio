import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './styles/EducationPage.css';
import './styles/PageShell.css';

export default function EducationPage() {
  const edu = portfolioData.education;

  return (
    <div className="page">
      <div className="page-section edu-page">
        <header className="edu-header">
          <h1 className="edu-title">education</h1>
          <p className="edu-subtitle">A quick snapshot of what I’m studying and the work I’m building toward.</p>
        </header>

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
                  <span className="edu-gpaLabel">GPA</span> <span className="edu-gpaValue">{edu.gpa}</span>
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
      </div>
    </div>
  );
}


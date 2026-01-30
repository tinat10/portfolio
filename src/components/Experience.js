import React from 'react';
import { portfolioData } from '../data/portfolioData';
import WorksListSection, { extractYear } from './WorksListSection';
import './styles/Experience.css';

const Experience = () => {
  return (
    <WorksListSection
      id="experience"
      title="work"
      subtleAnimation
      columns={{ title: 'TITLE', type: 'TYPE', year: 'YEAR' }}
      rows={portfolioData.experience}
      getRowKey={(exp) => exp.id}
      getRowTitle={(exp) => exp.position}
      getRowType={(exp) => {
        const p = (exp.position || '').toLowerCase();
        if (p.includes('intern')) return 'Internship';
        if (p.includes('research')) return 'Research';
        if (p.includes('tutor')) return 'Teaching';
        return 'Work';
      }}
      getRowYear={(exp) => extractYear(exp.dates)}
      renderTitleLeading={(exp) => <img src={exp.logo} alt="" />}
      renderModal={(exp) => (
        <div className="experience-modal">
          <div className="experience-meta">
            <div className="experience-metaLine">
              <span className="experience-metaStrong">{exp.company}</span>
              {exp.location ? <span className="experience-metaMuted"> · {exp.location}</span> : null}
            </div>
            <div className="experience-metaMuted">{exp.dates}</div>
          </div>
          <ul className="experience-modalList">
            {(exp.responsibilities || []).map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    />
  );
};

export default Experience;


import React from 'react';
import { portfolioData } from '../data/portfolioData';
import WorksListSection, { extractYear } from './WorksListSection';
import './styles/Projects.css';

const Projects = () => {
  return (
    <WorksListSection
      id="projects"
      title="projects"
      columns={{ title: 'TITLE', type: 'TYPE', year: 'YEAR' }}
      rows={portfolioData.projects}
      getRowKey={(p) => p.id}
      getRowTitle={(p) => p.title}
      getRowType={(p) => {
        const tech = (p.technologies || []).map((t) => String(t).toLowerCase());
        if (tech.some((t) => t.includes('android'))) return 'Mobile';
        if (tech.some((t) => t.includes('unity') || t.includes('steamvr'))) return 'Game/VR';
        if (tech.some((t) => t.includes('sql') || t.includes('php'))) return 'Web';
        return 'Software';
      }}
      getRowYear={(p) => extractYear(p.dates || p.date || '')}
      renderTitleLeading={(p) => <img src={p.logo} alt="" />}
      renderModal={(p) => (
        <div className="project-modal">
          <p className="project-modalDesc">{p.description}</p>

          {(p.technologies || []).length > 0 && (
            <div className="project-modalTech" aria-label="Technologies">
              {(p.technologies || []).map((t) => (
                <span className="project-modalTag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          )}

          {(p.details || []).length > 0 && (
            <ul className="project-modalList">
              {(p.details || []).map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          )}

          <div className="project-modalLinks">
            {p.github && (
              <a className="project-modalLink" href={p.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {p.demo && (
              <a className="project-modalLink" href={p.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default Projects;


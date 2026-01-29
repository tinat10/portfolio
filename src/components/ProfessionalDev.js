import React from 'react';
import { portfolioData } from '../data/portfolioData';
import WorksListSection, { extractYear } from './WorksListSection';
import './styles/ProfessionalDev.css';

const ProfessionalDev = () => {
  return (
    <WorksListSection
      id="profdev"
      title="development"
      columns={{ title: 'TITLE', type: 'TYPE', year: 'YEAR' }}
      rows={portfolioData.professionalDev}
      getRowKey={(i) => i.id}
      getRowTitle={(i) => i.company}
      getRowType={(i) => i.position}
      getRowYear={(i) => extractYear(i.dates)}
      renderTitleLeading={(i) => <img src={i.logo} alt="" />}
      renderModal={(i) => (
        <div className="profdev-modal">
          <div className="profdev-meta">
            <div className="profdev-metaStrong">{i.position}</div>
            <div className="profdev-metaMuted">{i.dates}</div>
          </div>
          <p className="profdev-modalDesc">{i.description}</p>
          <div className="profdev-modalLinks">
            {i.link && (
              <a className="profdev-modalLink" href={i.link} target="_blank" rel="noopener noreferrer">
                View certificate
              </a>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default ProfessionalDev;


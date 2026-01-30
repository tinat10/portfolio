import React from 'react';
import { portfolioData } from '../data/portfolioData';
import WorksListSection, { extractYear } from './WorksListSection';
import './styles/Certifications.css';

const Certifications = () => {
  return (
    <WorksListSection
      id="certifications"
      title="certifications"
      columns={{ title: 'TITLE', type: 'TYPE', year: 'YEAR' }}
      rows={portfolioData.certifications}
      getRowKey={(c) => c.id}
      getRowTitle={(c) => c.title}
      getRowType={(c) => c.issuer}
      getRowYear={(c) => extractYear(c.date)}
      renderTitleLeading={(c) => <img src={c.logo} alt="" />}
      renderModal={(c) => (
        <div className="cert-modal">
          <div className="cert-meta">
            <div className="cert-metaLine">
              <span className="cert-metaStrong">{c.issuer}</span>
              <span className="cert-metaMuted"> · {c.date}</span>
            </div>
          </div>
          <ul className="cert-modalList">
            {(c.description || []).map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
          <div className="cert-modalLinks">
            {c.link && (
              <a className="cert-modalLink" href={c.link} target="_blank" rel="noopener noreferrer">
                View certificate
              </a>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default Certifications;


import React from 'react';
import { portfolioData } from '../data/portfolioData';
import WorksListSection, { extractYear } from './WorksListSection';
import './styles/Volunteer.css';

const Volunteer = () => {
  return (
    <WorksListSection
      id="volunteer"
      title="volunteer"
      columns={{ title: 'TITLE', type: 'TYPE', year: 'YEAR' }}
      rows={portfolioData.volunteer}
      getRowKey={(v) => v.id}
      getRowTitle={(v) => v.position}
      getRowType={(v) => (v.company ? v.company : 'Organization')}
      getRowYear={(v) => extractYear(v.dates)}
      renderTitleLeading={(v) => <img src={v.logo} alt="" />}
      renderModal={(v) => (
        <div className="volunteer-modal">
          <div className="volunteer-meta">
            {(v.company || v.location) && (
              <div className="volunteer-metaLine">
                {v.company ? <span className="volunteer-metaStrong">{v.company}</span> : null}
                {v.company && v.location ? <span className="volunteer-metaMuted"> · {v.location}</span> : null}
                {!v.company && v.location ? <span className="volunteer-metaMuted">{v.location}</span> : null}
              </div>
            )}
            <div className="volunteer-metaMuted">{v.dates}</div>
          </div>
          <ul className="volunteer-modalList">
            {(v.responsibilities || []).map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    />
  );
};

export default Volunteer;


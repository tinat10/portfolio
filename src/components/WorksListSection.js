import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import WorksModal from './WorksModal';
import './styles/WorksList.css';

const yearRegex = /(19|20)\d{2}/g;

function extractYear(text) {
  if (!text) return '—';
  const matches = String(text).match(yearRegex);
  if (!matches || matches.length === 0) return '—';
  return matches[matches.length - 1];
}

export default function WorksListSection({
  id,
  title,
  columns = { title: 'TITLE', type: 'TYPE', year: 'YEAR' },
  rows,
  getRowKey,
  getRowTitle,
  getRowType,
  getRowYear,
  renderTitleLeading,
  renderModal,
}) {
  const [activeKey, setActiveKey] = useState(null);

  const activeRow = useMemo(() => {
    if (activeKey == null) return null;
    return rows.find((r) => String(getRowKey(r)) === String(activeKey)) || null;
  }, [activeKey, getRowKey, rows]);

  return (
    <section id={id} className="works-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.55 }}
      >
        <div className="works-header">
          <h2 className="works-title">{title}</h2>
          <div className="works-rule" aria-hidden="true" />
        </div>

        <div className="works-table" role="table" aria-label={title}>
          <div className="works-row works-row--header" role="row">
            <div className="works-cell works-cell--title" role="columnheader">
              {columns.title}
            </div>
            <div className="works-cell works-cell--type" role="columnheader">
              {columns.type}
            </div>
            <div className="works-cell works-cell--year" role="columnheader">
              {columns.year}
            </div>
          </div>

          {rows.map((row, idx) => {
            const key = getRowKey(row);
            const rowTitle = getRowTitle(row);
            const rowType = getRowType ? getRowType(row) : '—';
            const rowYear = getRowYear ? getRowYear(row) : extractYear(row?.dates || row?.date);

            return (
              <motion.button
                key={key}
                type="button"
                className="works-row works-row--button"
                role="row"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                onClick={() => setActiveKey(String(key))}
                aria-label={`Open details for ${rowTitle}`}
              >
                <div className="works-cell works-cell--title" role="cell">
                  <div className="works-titleCell">
                    <div className="works-leading" aria-hidden="true">
                      {renderTitleLeading ? renderTitleLeading(row) : null}
                    </div>
                    <div className="works-primary">{rowTitle}</div>
                  </div>
                </div>
                <div className="works-cell works-cell--type" role="cell">
                  {rowType}
                </div>
                <div className="works-cell works-cell--year" role="cell">
                  {rowYear}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      <WorksModal
        isOpen={activeRow != null}
        title={activeRow ? getRowTitle(activeRow) : ''}
        onClose={() => setActiveKey(null)}
      >
        {activeRow && renderModal ? renderModal(activeRow) : null}
      </WorksModal>
    </section>
  );
}

export { extractYear };


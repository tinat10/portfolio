import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './styles/Hero.css';

const Hero = () => {
  const [activeSpotlightId, setActiveSpotlightId] = useState(null);

  const spotlights = useMemo(() => {
    // Use the first 3 projects as "cover" tiles.
    return (portfolioData.projects || []).slice(0, 3);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="cover">
      <div className="cover-inner">
        <div className="cover-grid">
          <motion.div
            className="cover-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="desk-vignette" aria-hidden="true">
              <div className="desk-plant" />
              <div className="desk-lamp" />
              <div className="desk-books" />
            </div>
          </motion.div>

          <motion.div
            className="cover-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <h1 className="cover-headline">
              software engineer &<br />
              vintage-tech lover.
            </h1>
            <p
              className="cover-subcopy"
              dangerouslySetInnerHTML={{ __html: portfolioData.personal.bio }}
            />

            <div className="cover-tags" aria-label="Focus areas">
              <span className="cover-tag">software engineering</span>
              <span className="cover-tag">data analytics</span>
              <span className="cover-tag">research</span>
            </div>
          </motion.div>

          <motion.div
            className="cover-right"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            <p className="cover-now">
              Currently working on <span className="cover-now-highlight">new builds</span> and refining this portfolio.
            </p>
          </motion.div>
        </div>

        <div className="cover-featured">
          {spotlights.map((p, idx) => (
            <motion.button
              key={p.id}
              type="button"
              className="album-tile"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveSpotlightId(p.id)}
              aria-label={`Open ${p.title} spotlight`}
            >
              <div className="album-cover">
                <img className="album-image" src={p.logo} alt="" />
                <div className="album-sheen" aria-hidden="true" />
                <div className="album-meta">
                  <div className="album-title">{p.title}</div>
                  <div className="album-cta">
                    View <FaExternalLinkAlt />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Simple spotlight modal (classy + optional) */}
      {activeSpotlightId != null && (
        <div
          className="spotlight-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveSpotlightId(null)}
        >
          <div className="spotlight-modal" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const p = spotlights.find((x) => x.id === activeSpotlightId);
              if (!p) return null;
              return (
                <>
                  <div className="spotlight-header">
                    <div>
                      <div className="spotlight-kicker">Project spotlight</div>
                      <h3 className="spotlight-title">{p.title}</h3>
                      <p className="spotlight-desc">{p.description}</p>
                    </div>
                    <button className="spotlight-close" onClick={() => setActiveSpotlightId(null)} aria-label="Close">
                      ✕
                    </button>
                  </div>
                  <div className="spotlight-body">
                    <ul className="spotlight-list">
                      {(p.details || []).slice(0, 4).map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                    <div className="spotlight-links">
                      {p.github && (
                        <a className="spotlight-link" href={p.github} target="_blank" rel="noopener noreferrer">
                          GitHub <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      <motion.button
        type="button"
        className="cover-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <FaArrowDown />
      </motion.button>
    </section>
  );
};

export default Hero;


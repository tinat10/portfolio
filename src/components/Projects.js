import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import WorksModal from './WorksModal';
import './styles/Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const projects = portfolioData.projects || [];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="projects-header">
          <h2 className="projects-title">projects</h2>
          <div className="projects-rule" aria-hidden="true" />
        </div>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <button
                type="button"
                className="project-card-inner"
                onClick={() => setActiveProject(p)}
                aria-label={`View details for ${p.title}`}
              >
                <div className="project-card-image">
                  <img src={p.logo} alt="" />
                </div>
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-desc">{p.description}</p>
                {(p.technologies || []).length > 0 && (
                  <div className="project-card-tags" aria-label="Technologies">
                    {(p.technologies || []).map((t) => (
                      <span key={t} className="project-card-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </button>

              {(p.github || p.demo) && (
              <div className="project-card-actions">
                {p.github && (
                  <a
                    className="project-card-github"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub aria-hidden />
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a
                    className="project-card-demo"
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Demo
                  </a>
                )}
              </div>
            )}
            </motion.article>
          ))}
        </div>
      </motion.div>

      <WorksModal
        isOpen={activeProject != null}
        title={activeProject?.title ?? ''}
        onClose={() => setActiveProject(null)}
      >
        {activeProject && (
          <div className="project-modal">
            <p className="project-modalDesc">{activeProject.description}</p>

            {(activeProject.technologies || []).length > 0 && (
              <div className="project-modalTech" aria-label="Technologies">
                {(activeProject.technologies || []).map((t) => (
                  <span className="project-modalTag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            {(activeProject.details || []).length > 0 && (
              <ul className="project-modalList">
                {(activeProject.details || []).map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}

            <div className="project-modalLinks">
              {activeProject.github && (
                <a
                  className="project-modalLink"
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {activeProject.demo && (
                <a
                  className="project-modalLink"
                  href={activeProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        )}
      </WorksModal>
    </section>
  );
};

export default Projects;

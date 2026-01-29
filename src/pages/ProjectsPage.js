import React from 'react';
import Projects from '../components/Projects';
import './styles/PageShell.css';

export default function ProjectsPage() {
  return (
    <div className="page">
      <div className="page-section">
        <Projects />
      </div>
    </div>
  );
}


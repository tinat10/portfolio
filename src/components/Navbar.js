import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = useMemo(
    () => [
      { path: '/', label: 'Home' },
      { path: '/education', label: 'Education' },
      { path: '/work', label: 'Work' },
      { path: '/development', label: 'Development' },
      { path: '/projects', label: 'Projects' },
      { path: '/volunteer', label: 'Volunteer' },
      { path: '/certifications', label: 'Certifications' },
    ],
    []
  );

  const activePath = location.pathname || '/';

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const movePage = (direction) => {
    const idx = pages.findIndex((p) => p.path === activePath);
    const safeIdx = idx === -1 ? 0 : idx;
    const nextIdx = Math.min(pages.length - 1, Math.max(0, safeIdx + direction));
    const next = pages[nextIdx];
    if (next) goTo(next.path);
  };

  return (
    <nav className="navbar scrolled">
      <div className="nav-container">
        <button className="topbar-brand" type="button" onClick={() => goTo('/')} aria-label="Go to home">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-dot" />
          </span>
          <span className="brand-text">
            <span className="brand-name">Tina Thai</span>
            <span className="brand-subtitle">Computer Science Student</span>
          </span>
        </button>

        <div className="now-playing">
          <div className="now-playing-left">
            <span className="now-playing-label">Now Playing</span>
            <select
              className="now-playing-select"
              value={activePath}
              onChange={(e) => goTo(e.target.value)}
              aria-label="Jump to page"
            >
              {pages.map((p) => (
                <option key={p.path} value={p.path}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          <div className="now-playing-controls" aria-label="Page navigation controls">
            <button type="button" className="now-btn" onClick={() => movePage(-1)} aria-label="Previous page">
              <FaChevronLeft />
            </button>
            <button type="button" className="now-btn" onClick={() => movePage(1)} aria-label="Next page">
              <FaChevronRight />
            </button>
          </div>

          <div className="now-playing-social" aria-label="Social links">
            <a href="https://www.linkedin.com/in/thaitina/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tinat10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


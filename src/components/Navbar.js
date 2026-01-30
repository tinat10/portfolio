import React, { useMemo, useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const pages = useMemo(
    () => [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/portfolio', label: 'Portfolio' },
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
    let nextIdx = safeIdx + direction;
    if (nextIdx < 0) nextIdx = pages.length - 1;
    if (nextIdx >= pages.length) nextIdx = 0;
    const next = pages[nextIdx];
    if (next) goTo(next.path);
  };

  const activeLabel = pages.find((p) => p.path === activePath)?.label ?? 'Home';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          <div className="now-playing-left" ref={dropdownRef}>
            <span className="now-playing-label">Now Playing</span>
            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-dropdown-trigger"
                onClick={() => setDropdownOpen((o) => !o)}
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
                aria-label="Jump to page"
              >
                <span className="nav-dropdown-value">{activeLabel}</span>
                <FaChevronDown className={`nav-dropdown-chevron ${dropdownOpen ? 'nav-dropdown-chevron--open' : ''}`} aria-hidden />
              </button>
              {dropdownOpen && (
                <ul
                  className="nav-dropdown-menu"
                  role="listbox"
                  aria-label="Page navigation"
                >
                  {pages.map((p) => (
                    <li key={p.path} role="option" aria-selected={p.path === activePath}>
                      <button
                        type="button"
                        className={`nav-dropdown-item ${p.path === activePath ? 'nav-dropdown-item--active' : ''}`}
                        onClick={() => {
                          goTo(p.path);
                          setDropdownOpen(false);
                        }}
                      >
                        {p.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
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


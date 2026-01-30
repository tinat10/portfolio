import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import WorksModal from './WorksModal';
import './styles/ProfessionalDev.css';

const ProfessionalDev = () => {
  const items = portfolioData.professionalDev || [];
  const scrollRef = useRef(null);
  const lineRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const dragOccurredRef = useRef(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    const line = lineRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
    if (line) line.style.width = `${el.scrollWidth}px`;
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 320;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  const handleMouseDown = (e) => {
    if (!scrollRef.current || e.target.closest('a')) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: scrollRef.current.scrollLeft };
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!scrollRef.current) return;
      dragOccurredRef.current = true;
      const dx = e.clientX - dragStart.current.x;
      scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
      checkScroll();
    },
    [checkScroll]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => ro.disconnect();
  }, [checkScroll, items.length]);

  return (
    <section id="profdev" className="profdev-section">
      <div className="profdev-container">
        <div className="profdev-header">
          <h2 className="profdev-title">professional development</h2>
          <div className="profdev-rule" aria-hidden="true" />
        </div>

        <div className="profdev-scroll-wrap">
        <button
          type="button"
          className="profdev-arrow profdev-arrow--left"
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="profdev-arrow profdev-arrow--right"
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <FaChevronRight />
        </button>

        <div
          ref={scrollRef}
          className="profdev-timeline profdev-timeline--horizontal"
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          role="region"
          aria-label="Professional development timeline"
        >
          <div ref={lineRef} className="profdev-timeline-line" aria-hidden="true" />
          {items.map((item, idx) => (
            <motion.article
              key={item.id}
              className="profdev-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={(e) => {
                if (dragOccurredRef.current || e.target.closest('a')) return;
                setSelectedItem(item);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (!dragOccurredRef.current) setSelectedItem(item);
                }
              }}
              aria-label={`View details for ${item.company}`}
            >
              <div className="profdev-item-dot" aria-hidden="true" />
              <div className="profdev-item-content">
                <div className="profdev-item-header">
                  <div className="profdev-logo" aria-hidden="true">
                    <img src={item.logo} alt="" />
                  </div>
                  <div className="profdev-item-meta">
                    <h3 className="profdev-company">{item.company}</h3>
                    <span className="profdev-position">{item.position}</span>
                    <span className="profdev-dates">{item.dates}</span>
                  </div>
                </div>
                <p className="profdev-desc">{item.description}</p>
                {item.link && (
                  <a
                    className="profdev-link"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View certificate →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
        </div>
      </div>

      <WorksModal
        isOpen={!!selectedItem}
        title={selectedItem?.company ?? ''}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <div className="profdev-detail-modal">
            <div className="profdev-detail-header">
              <div className="profdev-detail-logo">
                <img src={selectedItem.logo} alt="" />
              </div>
              <div className="profdev-detail-meta">
                <span className="profdev-detail-position">{selectedItem.position}</span>
                <span className="profdev-detail-dates">{selectedItem.dates}</span>
              </div>
            </div>
            <p className="profdev-detail-desc">{selectedItem.description}</p>
            {selectedItem.link && (
              <a
                className="profdev-detail-link"
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View certificate →
              </a>
            )}
          </div>
        )}
      </WorksModal>
    </section>
  );
};

export default ProfessionalDev;

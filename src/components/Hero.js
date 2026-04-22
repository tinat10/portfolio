import React, { useMemo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowDown, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { carouselImages } from '../data/carouselImages';
import './styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const homeImages = carouselImages;
  const [photoIndex, setPhotoIndex] = useState(0);

  const [failedImages, setFailedImages] = useState(new Set());
  const onImageError = useCallback((src) => {
    setFailedImages((prev) => new Set(prev).add(src));
  }, []);

  const visiblePhotos = useMemo(() => {
    const len = homeImages.length;
    if (len <= 3) return homeImages;
    const idx = ((photoIndex % len) + len) % len;
            return [homeImages[idx], homeImages[(idx + 1) % len], homeImages[(idx + 2) % len]];
  }, [homeImages, photoIndex]);

  const canPrev = homeImages.length > 3;
  const canNext = homeImages.length > 3;

  const hobbies = portfolioData.personal.hobbies || [];
  const randomFacts = portfolioData.personal.randomFacts || [];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
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
            <motion.h1
              className="cover-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              hi everyone,<br />
              i'm tina!
            </motion.h1>
            <motion.p
              className="cover-subcopy"
              dangerouslySetInnerHTML={{ __html: portfolioData.personal.bio }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            <motion.button
              type="button"
              className="cover-know-me"
              onClick={() => navigate('/about')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="cover-know-me-text">
                get to know me
                <motion.span
                  className="cover-know-me-arrow"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden
                >
                  <FaArrowRight />
                </motion.span>
              </span>
              <span className="cover-know-me-hint">(click here to look at my CS experience!)</span>
            </motion.button>

            <div className="cover-tags" aria-label="Focus areas">
              {['software engineering', 'data analytics', 'research'].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="cover-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tag}
                </motion.span>
              ))}
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

        <div className="cover-featured-wrap">
          {(canPrev || canNext) && (
            <>
              <button
                type="button"
                className="cover-photo-btn cover-photo-prev"
                onClick={() => setPhotoIndex((i) => i - 1)}
                disabled={!canPrev}
                aria-label="Previous photos"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                className="cover-photo-btn cover-photo-next"
                onClick={() => setPhotoIndex((i) => i + 1)}
                disabled={!canNext}
                aria-label="Next photos"
              >
                <FaChevronRight />
              </button>
            </>
          )}
          <div className="cover-featured">
            {visiblePhotos.map((src, idx) => (
              <motion.div
                key={`${photoIndex}-${idx}`}
                className="home-image-tile"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="home-image-cover">
                  {failedImages.has(src) ? (
                    <div className="home-image-placeholder" aria-hidden="true">
                      <span>Photo unavailable</span>
                    </div>
                  ) : (
                    <img
                      className="home-image"
                      src={src}
                      alt={`Snapshot ${idx + 1}`}
                      onError={() => onImageError(src)}
                    />
                  )}
                  <div className="home-image-sheen" aria-hidden="true" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="cover-personality"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="personality-title"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            some info about me...
          </motion.h2>
          <div className="personality-grid">
            <motion.div
              className="personality-block"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.05 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="personality-heading">Hobbies</h3>
              <ul className="personality-list">
                {hobbies.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  >
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="personality-block"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="personality-heading">Random facts</h3>
              <ul className="personality-list">
                {randomFacts.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                  >
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="cover-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.25 },
          y: { duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 },
        }}
        onClick={scrollToContact}
        aria-label="Scroll to contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowDown />
      </motion.button>
    </section>
  );
};

export default Hero;


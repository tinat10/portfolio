import React, { useEffect, useRef, useState } from 'react';
import { galleryPhotos } from '../data/galleryData';
import './styles/PageShell.css';
import './styles/GalleryPage.css';

export default function GalleryPage() {
  const featuredRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const featuredPhotos = galleryPhotos.filter((photo) => photo.featured);
  const marqueePhotos = [...featuredPhotos, ...featuredPhotos];

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const cards = document.querySelectorAll('.gallery-photo-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [reduceMotion]);

  const handleFeaturedMouseMove = (event) => {
    if (reduceMotion || !featuredRef.current) return;
    const bounds = featuredRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
    featuredRef.current.style.setProperty('--parallax-x', `${x.toFixed(2)}px`);
    featuredRef.current.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
  };

  const resetFeaturedParallax = () => {
    if (!featuredRef.current) return;
    featuredRef.current.style.setProperty('--parallax-x', '0px');
    featuredRef.current.style.setProperty('--parallax-y', '0px');
  };

  return (
    <div className="page">
      <div className="page-section gallery-page">
        <header className="gallery-header">
          <h1 className="gallery-title">gallery</h1>
          <p className="gallery-subtitle">
            A living photo wall of my favorite snapshots. More photos coming soon.
          </p>
        </header>

        <section
          ref={featuredRef}
          className="gallery-featured"
          aria-label="Featured photos"
          onMouseMove={handleFeaturedMouseMove}
          onMouseLeave={resetFeaturedParallax}
        >
          <div className="gallery-marquee-track">
            {marqueePhotos.map((photo, index) => (
              <article
                key={`${photo.id}-${index}`}
                className="gallery-marquee-card"
                aria-label={photo.title}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-grid" aria-label="All photos">
          {galleryPhotos.map((photo, index) => (
            <article
              key={photo.id}
              className={`gallery-photo-card ${reduceMotion ? 'is-visible' : ''}`}
              style={{ '--card-delay': `${(index % 6) * 0.06}s` }}
            >
              <div className="gallery-photo-shell">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <div className="gallery-photo-overlay">
                  <h2>{photo.title}</h2>
                  <p>{photo.tags.join(' • ')}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}


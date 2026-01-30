import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import '../pages/styles/PageShell.css';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const el = document.getElementById('contact');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [location.state?.scrollToContact]);

  return (
    <div className="page">
      <Hero />
      <div className="page-section">
        <ContactForm />
      </div>
    </div>
  );
}


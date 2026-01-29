import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import '../pages/styles/PageShell.css';

export default function HomePage() {
  return (
    <div className="page">
      <Hero />
      <div className="page-section">
        <ContactForm />
      </div>
    </div>
  );
}


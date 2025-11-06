import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProfessionalDev from './components/ProfessionalDev';
import Volunteer from './components/Volunteer';
import Certifications from './components/Certifications';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <ProfessionalDev />
      <Volunteer />
      <Certifications />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

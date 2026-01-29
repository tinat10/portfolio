import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CertificationsPage from './pages/CertificationsPage';
import DevelopmentPage from './pages/DevelopmentPage';
import EducationPage from './pages/EducationPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import VolunteerPage from './pages/VolunteerPage';
import WorkPage from './pages/WorkPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

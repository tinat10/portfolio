import React from 'react';
import Volunteer from '../components/Volunteer';
import './styles/PageShell.css';

export default function VolunteerPage() {
  return (
    <div className="page">
      <div className="page-section">
        <Volunteer />
      </div>
    </div>
  );
}


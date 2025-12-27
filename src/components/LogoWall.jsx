import React from 'react';
import './LogoWall.css';

const LogoWall = () => {
  // Partner companies - using placeholder logos for demonstration
  const partners = [
    { name: 'Accenture', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Accenture' },
    { name: 'Deloitte', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Deloitte' },
    { name: 'PwC', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=PwC' },
    { name: 'KPMG', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=KPMG' },
    { name: 'EY', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=EY' },
    { name: 'McKinsey', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=McKinsey' },
    { name: 'BCG', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=BCG' },
    { name: 'Bain', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Bain' }
  ];

  return (
    <section className="logo-wall">
      <div className="container">
        <div className="logo-wall-header">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-description">
            We've partnered with companies across industries to deliver successful M&A outcomes.
          </p>
        </div>
      </div>

      <div className="separator"></div>

      <div className="logo-carousel-wrapper">
        <div className="logo-carousel">
          <div className="logo-track">
            {partners.map((partner, index) => (
              <div key={`partner-1-${index}`} className="logo-item">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`partner-2-${index}`} className="logo-item">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="separator"></div>
    </section>
  );
};

export default LogoWall;

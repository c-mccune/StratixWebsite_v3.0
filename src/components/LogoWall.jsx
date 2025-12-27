import React from 'react';
import './LogoWall.css';

const LogoWall = () => {
  // Partner companies - using placeholder logos for demonstration
  const partnersRow1 = [
    { name: 'Accenture', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Accenture' },
    { name: 'Deloitte', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Deloitte' },
    { name: 'PwC', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=PwC' },
    { name: 'KPMG', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=KPMG' },
    { name: 'EY', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=EY' },
    { name: 'McKinsey', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=McKinsey' },
    { name: 'BCG', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=BCG' },
    { name: 'Bain', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Bain' }
  ];

  const partnersRow2 = [
    { name: 'Goldman', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Goldman' },
    { name: 'Morgan Stanley', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Morgan+Stanley' },
    { name: 'JPMorgan', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=JPMorgan' },
    { name: 'Citi', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Citi' },
    { name: 'Blackstone', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Blackstone' },
    { name: 'KKR', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=KKR' },
    { name: 'Carlyle', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Carlyle' },
    { name: 'Apollo', logo: 'https://via.placeholder.com/150x60/1d1d1d/ffffff?text=Apollo' }
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
        {/* Row 1 - scrolls left */}
        <div className="logo-carousel">
          <div className="logo-track">
            {partnersRow1.map((partner, index) => (
              <div key={`row1-1-${index}`} className="logo-item">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
            {partnersRow1.map((partner, index) => (
              <div key={`row1-2-${index}`} className="logo-item">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right (reverse) */}
        <div className="logo-carousel">
          <div className="logo-track logo-track-reverse">
            {partnersRow2.map((partner, index) => (
              <div key={`row2-1-${index}`} className="logo-item">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
            {partnersRow2.map((partner, index) => (
              <div key={`row2-2-${index}`} className="logo-item">
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

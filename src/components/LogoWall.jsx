import React from 'react';
import './LogoWall.css';

// =============================================================================
// LOGO IMPORTS - Row 1 (scrolls left)
// =============================================================================
// Add your logo files to: src/assets/logos/
// Naming convention: row#-##-company-name.png (lowercase, hyphens for spaces)
// Recommended size: 150x60 pixels, PNG with transparent background
// =============================================================================
import logo_row1_01 from '../assets/logos/row1-01-liveflow.png';
import logo_row1_02 from '../assets/logos/row1-02-qed-investors.png';
import logo_row1_03 from '../assets/logos/row1-03-practicecfo.png';
import logo_row1_04 from '../assets/logos/row1-04-vestigo-ventures.png';
import logo_row1_05 from '../assets/logos/row1-05-arch.png';
import logo_row1_06 from '../assets/logos/row1-06-zamp.png';
import logo_row1_07 from '../assets/logos/row1-07-usaa.png';
import logo_row1_08 from '../assets/logos/row1-08-mucker-capital.png';

// =============================================================================
// LOGO IMPORTS - Row 2 (scrolls right)
// =============================================================================
import logo_row2_01 from '../assets/logos/row2-01-humanity-labs.png';
import logo_row2_02 from '../assets/logos/row2-02-commerce-ventures.png';
import logo_row2_03 from '../assets/logos/row2-03-testassure.png';
import logo_row2_04 from '../assets/logos/row2-04-redesign-health.png';
import logo_row2_05 from '../assets/logos/row2-05-oak-hcft.png';
import logo_row2_06 from '../assets/logos/row2-06-goreact.png';
import logo_row2_07 from '../assets/logos/row2-07-aquiline.png';
import logo_row2_08 from '../assets/logos/row2-08-motive-partners.png';

const LogoWall = () => {
  // Row 1 - scrolls left
  const partnersRow1 = [
    { name: 'LiveFlow', logo: logo_row1_01 },
    { name: 'QED Investors', logo: logo_row1_02 },
    { name: 'PracticeCFO', logo: logo_row1_03 },
    { name: 'Vestigo Ventures', logo: logo_row1_04 },
    { name: 'Arch', logo: logo_row1_05 },
    { name: 'Zamp', logo: logo_row1_06 },
    { name: 'USAA', logo: logo_row1_07 },
    { name: 'Mucker Capital', logo: logo_row1_08 },
  ];

  // Row 2 - scrolls right (reverse direction)
  const partnersRow2 = [
    { name: 'Humanity Labs', logo: logo_row2_01 },
    { name: 'Commerce Ventures', logo: logo_row2_02 },
    { name: 'TestAssure', logo: logo_row2_03 },
    { name: 'Redesign Health', logo: logo_row2_04 },
    { name: 'Oak HC/FT', logo: logo_row2_05 },
    { name: 'GoReact', logo: logo_row2_06 },
    { name: 'Aquiline', logo: logo_row2_07 },
    { name: 'Motive Partners', logo: logo_row2_08 },
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

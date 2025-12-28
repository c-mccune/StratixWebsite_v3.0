import React, { useState, useEffect, useRef } from 'react';
import './About.css';

// Import client logos (we'll use placeholder text for now)
const clientLogos = {
  fintech: ['APOLLO', 'Trumid', 'LSEG', 'FNZ'],
  software: ['BetaNXT', 'Constrafor', 'InvestCloud', 'HUMAN API'],
  business: ['ACCORDION', 'LERETA', 'Horizon Glass', 'CareVet']
};

const About = () => {
  const [openSector, setOpenSector] = useState('fintech');
  const [openStages, setOpenStages] = useState(['preseed', 'seed', 'seriesb', 'scale']);

  // Scroll animation refs
  const missionRef = useRef(null);
  const approachLeadinRef = useRef(null);
  const approachRef = useRef(null);
  const sectorRef = useRef(null);
  const stageRef = useRef(null);

  const [visibleSections, setVisibleSections] = useState({
    mission: false,
    approachLeadin: false,
    approach: false,
    sector: false,
    stage: false
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.section;
          setVisibleSections(prev => ({ ...prev, [sectionName]: true }));
        }
      });
    }, observerOptions);

    const refs = [
      { ref: missionRef, name: 'mission' },
      { ref: approachLeadinRef, name: 'approachLeadin' },
      { ref: approachRef, name: 'approach' },
      { ref: sectorRef, name: 'sector' },
      { ref: stageRef, name: 'stage' }
    ];

    refs.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.dataset.section = name;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleSector = (sector) => {
    setOpenSector(openSector === sector ? null : sector);
  };

  const toggleStage = (stage) => {
    setOpenStages(prev =>
      prev.includes(stage)
        ? prev.filter(s => s !== stage)
        : [...prev, stage]
    );
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page">
      {/* Our Mission Section */}
      <section
        className={`mission-section ${visibleSections.mission ? 'visible' : ''}`}
        ref={missionRef}
        id="mission"
      >
        <div className="mission-content">
          <h2 className="section-label">Our Mission</h2>

          <div className="mission-text-container">
            <p className="mission-text">
              Stratix offers a full lifecycle solution, from bookkeeping and accounting to strategic CFO
            </p>
            <p className="mission-text">
              to finally guiding clients through a transformational capital event through our broker dealer
            </p>
          </div>

          <div className="mission-visual">
            <div className="mission-services">
              <span className="service-item">Accounting</span>
              <span className="service-item">FP&A</span>
              <span className="service-item">Strategic Finance</span>
            </div>
            <div className="mission-plus">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M30 10V50M10 30H50" stroke="#90a29e" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="mission-broker">
              <span>Broker</span>
              <span>Dealer</span>
            </div>
            <div className="mission-equals">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M10 15H30M10 25H30" stroke="#90a29e" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="mission-solution">
              <span className="solution-label">Full Lifecycle</span>
              <span className="solution-value">Solution</span>
            </div>
          </div>

          <div className="mission-description">
            <p className="description-text">
              Our team of former VC, PE, and CFO professionals produces investor-ready work from day one,
            </p>
            <p className="description-text">
              measuring success by the quality of our execution and the outcomes we deliver for operators and investors
            </p>
          </div>
        </div>

        <a
          href="#approach-leadin"
          className="scroll-indicator"
          onClick={(e) => { e.preventDefault(); scrollToSection('approach-leadin'); }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* Approach Lead-in Section */}
      <section
        className={`approach-leadin-section ${visibleSections.approachLeadin ? 'visible' : ''}`}
        ref={approachLeadinRef}
        id="approach-leadin"
      >
        <div className="leadin-content">
          <h2 className="leadin-text">
            We embed into your organization and become an extension of your team
          </h2>
        </div>
        <a
          href="#approach"
          className="scroll-indicator"
          onClick={(e) => { e.preventDefault(); scrollToSection('approach'); }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* Our Approach Section */}
      <section
        className={`approach-section ${visibleSections.approach ? 'visible' : ''}`}
        ref={approachRef}
        id="approach"
      >
        <div className="container">
          <h2 className="section-title">Our Approach</h2>

          <div className="approach-cards">
            <div className="approach-card">
              <div className="card-header">
                <span className="brand-name">STRATIX</span>
                <span className="brand-divider">|</span>
                <span className="brand-type">Scaleprint</span>
              </div>
              <h3 className="card-title">Foundation</h3>
              <div className="card-divider"></div>
              <p className="card-description">Establish best in class financial operations</p>
            </div>

            <div className="approach-card">
              <div className="card-header">
                <span className="brand-name">STRATIX</span>
                <span className="brand-divider">|</span>
                <span className="brand-type">Advisory</span>
              </div>
              <h3 className="card-title">Translation</h3>
              <div className="card-divider"></div>
              <p className="card-description">Prepare reverse diligence proactively</p>
            </div>

            <div className="approach-card">
              <div className="card-header">
                <span className="brand-name">STRATIX</span>
                <span className="brand-divider">|</span>
                <span className="brand-type">Advisory</span>
              </div>
              <h3 className="card-title">Transformation</h3>
              <div className="card-divider"></div>
              <p className="card-description">Manage fundraising or M&A process</p>
            </div>
          </div>

          <div className="capital-tagline">
            <div className="capital-brand">
              <span className="brand-name">STRATIX</span>
              <span className="brand-divider">|</span>
              <span className="brand-type">Capital</span>
            </div>
            <div className="capital-divider-vertical"></div>
            <p className="capital-description">Align long-term incentives and support portfolio companies</p>
          </div>
        </div>

        <a
          href="#sector-expertise"
          className="scroll-indicator"
          onClick={(e) => { e.preventDefault(); scrollToSection('sector-expertise'); }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* Sector Expertise Section */}
      <section
        className={`sector-section ${visibleSections.sector ? 'visible' : ''}`}
        ref={sectorRef}
        id="sector-expertise"
      >
        <div className="container">
          <h2 className="section-title-large">Sector Expertise</h2>

          <div className="sector-accordions">
            {/* Fintech & Financial Services */}
            <div
              className={`sector-accordion ${openSector === 'fintech' ? 'open' : ''}`}
              onClick={() => toggleSector('fintech')}
            >
              <div className="accordion-header">
                <h3 className="accordion-title">Fintech & Financial Services</h3>
                <button className="accordion-toggle" aria-label="Toggle section">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={openSector === 'fintech' ? 'rotated' : ''}/>
                  </svg>
                </button>
              </div>
              {openSector === 'fintech' && (
                <div className="accordion-content">
                  <p className="sector-description">
                    Category leaders & start ups across wealth, insurance, capital markets, banking, and payments
                  </p>
                  <div className="client-logos">
                    {clientLogos.fintech.map((logo, index) => (
                      <div key={index} className="client-logo">
                        <span>{logo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Software & AI */}
            <div
              className={`sector-accordion ${openSector === 'software' ? 'open' : ''}`}
              onClick={() => toggleSector('software')}
            >
              <div className="accordion-header">
                <h3 className="accordion-title">Software & AI</h3>
                <button className="accordion-toggle" aria-label="Toggle section">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={openSector === 'software' ? 'rotated' : ''}/>
                  </svg>
                </button>
              </div>
              {openSector === 'software' && (
                <div className="accordion-content">
                  <p className="sector-description">
                    Vertical SaaS, data services, and on-prem vendors with AI intersecting it all
                  </p>
                  <div className="client-logos">
                    {clientLogos.software.map((logo, index) => (
                      <div key={index} className="client-logo">
                        <span>{logo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Business Services */}
            <div
              className={`sector-accordion ${openSector === 'business' ? 'open' : ''}`}
              onClick={() => toggleSector('business')}
            >
              <div className="accordion-header">
                <h3 className="accordion-title">Business Services</h3>
                <button className="accordion-toggle" aria-label="Toggle section">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={openSector === 'business' ? 'rotated' : ''}/>
                  </svg>
                </button>
              </div>
              {openSector === 'business' && (
                <div className="accordion-content">
                  <p className="sector-description">
                    Operational and inorganic levers to scale professional services firms
                  </p>
                  <div className="client-logos">
                    {clientLogos.business.map((logo, index) => (
                      <div key={index} className="client-logo">
                        <span>{logo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <a
          href="#stage-expertise"
          className="scroll-indicator"
          onClick={(e) => { e.preventDefault(); scrollToSection('stage-expertise'); }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* Stage Expertise Section */}
      <section
        className={`stage-section ${visibleSections.stage ? 'visible' : ''}`}
        ref={stageRef}
        id="stage-expertise"
      >
        <div className="container">
          <h2 className="stage-headline">
            We have supported businesses at each stage of their journey, from pre-seed to exit
          </h2>

          <div className="stage-list">
            {/* Idea / Pre-Seed */}
            <div className={`stage-item ${openStages.includes('preseed') ? 'open' : ''}`}>
              <div className="stage-header" onClick={() => toggleStage('preseed')}>
                <h3 className="stage-title">Idea / Pre-Seed</h3>
                <button className="stage-toggle" aria-label="Toggle stage details">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              {openStages.includes('preseed') && (
                <div className="stage-content">
                  <p className="focus-label">Focus Areas:</p>
                  <ul className="focus-list">
                    <li>0 to 1: Validate market and product</li>
                    <li>Phase MVP with design partners</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Seed / Series A */}
            <div className={`stage-item ${openStages.includes('seed') ? 'open' : ''}`}>
              <div className="stage-header" onClick={() => toggleStage('seed')}>
                <h3 className="stage-title">Seed / Series A</h3>
                <button className="stage-toggle" aria-label="Toggle stage details">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              {openStages.includes('seed') && (
                <div className="stage-content">
                  <p className="focus-label">Focus Areas:</p>
                  <ul className="focus-list">
                    <li>PMF: Manage GTM and pipeline</li>
                    <li>Institutionalize FinOps & reporting</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Series B+ */}
            <div className={`stage-item ${openStages.includes('seriesb') ? 'open' : ''}`}>
              <div className="stage-header" onClick={() => toggleStage('seriesb')}>
                <h3 className="stage-title">Series B+</h3>
                <button className="stage-toggle" aria-label="Toggle stage details">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              {openStages.includes('seriesb') && (
                <div className="stage-content">
                  <p className="focus-label">Focus Areas:</p>
                  <ul className="focus-list">
                    <li>Optimize unit economics & costs</li>
                    <li>Evaluate horizontal & vertical expansion</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Scale / Exit */}
            <div className={`stage-item ${openStages.includes('scale') ? 'open' : ''}`}>
              <div className="stage-header" onClick={() => toggleStage('scale')}>
                <h3 className="stage-title">Scale / Exit</h3>
                <button className="stage-toggle" aria-label="Toggle stage details">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              {openStages.includes('scale') && (
                <div className="stage-content">
                  <p className="focus-label">Focus Areas</p>
                  <ul className="focus-list">
                    <li>Assess exit competitiveness</li>
                    <li>Prepare for M&A and capital raise</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

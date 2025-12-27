import React, { useState, useEffect } from 'react';
import './Navigation.css';
import stratixLogo from '../assets/stratix-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          <a href="/" className="logo">
            <img 
              src={stratixLogo} 
              alt="Stratix" 
              className="logo-image"
            />
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="/" className="nav-link active">
              <span className="gradient-text">Home</span>
            </a>
            <a href="/about" className="nav-link">
              <span className="gradient-text">About</span>
            </a>
            <a href="/services" className="nav-link">
              <span className="gradient-text">Services</span>
            </a>
            <a href="/work-with-us" className="btn btn-primary">
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

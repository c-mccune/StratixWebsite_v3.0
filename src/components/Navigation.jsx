import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import stratixLogo from '../assets/stratix-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <img
              src={stratixLogo}
              alt="Stratix"
              className="logo-image"
            />
          </Link>

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
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              <span className="gradient-text">Home</span>
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              <span className="gradient-text">About</span>
            </Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              <span className="gradient-text">Services</span>
            </Link>
            <Link to="/work-with-us" className="btn btn-primary">
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

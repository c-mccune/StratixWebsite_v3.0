import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="separator"></div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Logo and Description */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <svg width="130" height="24" viewBox="0 0 745 133" fill="none">
                  <text
                    x="0"
                    y="100"
                    fontFamily="DM Sans, sans-serif"
                    fontSize="120"
                    fontWeight="500"
                    fill="white"
                    letterSpacing="-2"
                  >
                    STRATIX
                  </text>
                </svg>
              </Link>
              <p className="footer-tagline">
                Building Tomorrow's Exits Today.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="footer-links">
              <div className="footer-column">
                <h3 className="footer-column-title">Company</h3>
                <ul className="footer-nav">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/work-with-us">Work With Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-column-title">Resources</h3>
                <ul className="footer-nav">
                  <li><Link to="/insights">Insights</Link></li>
                  <li><Link to="/case-studies">Case Studies</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-column-title">Legal</h3>
                <ul className="footer-nav">
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="separator-vertical"></div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; {currentYear} Stratix Advisory. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              Certain members of Stratix Advisory, LLC are Registered Representatives of Ceiba Financial, LLC. Member FINRA/SIPC. Securities are offered through Ceiba Financial, LLC. Please refer to <a href="https://brokercheck.finra.org/" target="_blank" rel="noopener noreferrer">BrokerCheck</a> for more information about Ceiba Financial, LLC. Stratix Advisory, LLC and Ceiba Financial, LLC are separate and unaffiliated entities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
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
              <a href="/" className="footer-logo">
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
              </a>
              <p className="footer-tagline">
                Building Tomorrow's Exits Today.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="footer-links">
              <div className="footer-column">
                <h3 className="footer-column-title">Company</h3>
                <ul className="footer-nav">
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/work-with-us">Work With Us</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-column-title">Resources</h3>
                <ul className="footer-nav">
                  <li><a href="/insights">Insights</a></li>
                  <li><a href="/case-studies">Case Studies</a></li>
                  <li><a href="/faq">FAQ</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-column-title">Legal</h3>
                <ul className="footer-nav">
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/terms">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="separator-vertical"></div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} Stratix Advisory. All rights reserved.
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

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
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

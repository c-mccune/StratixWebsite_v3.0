import React from 'react';
import { Link } from 'react-router-dom';
import { HalftoneDots } from '@paper-design/shaders-react';
import './Hero.css';

/**
 * From Paper
 * https://app.paper.design/file/01KMVT6MF41NQAF8PJYDEZTESD?page=01KMVT6MF4J3XBWHVETFQ6R893&node=U-0
 */
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background" aria-hidden="true">
        <HalftoneDots
          contrast={0.4}
          originalColors={false}
          inverted={false}
          grid="hex"
          radius={1.25}
          size={0.5}
          scale={1}
          image="https://paper.design/flowers.webp"
          grainMixer={0.2}
          grainOverlay={0.2}
          grainSize={0.5}
          type="gooey"
          fit="cover"
          colorFront="#3D8B7A"
          colorBack="#00000000"
          className="hero-halftone"
          style={{
            backgroundColor: '#F2F1E8',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.5s' }}>
              Building Tomorrow's<br />Exits Today.
            </h1>
            <p className="hero-description fade-in-up" style={{ animationDelay: '0.7s' }}>
              We guide ambitious founders and management teams through transformative capital events, providing tech-enabled end-to-end infrastructure from bookkeeping to transaction advisory
            </p>
            <div className="hero-buttons fade-in-up" style={{ animationDelay: '1.1s' }}>
              <Link to="/work-with-us" className="btn btn-primary">
                Work With Us
              </Link>
              <Link to="/about" className="btn btn-ghost">
                What is Stratix?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

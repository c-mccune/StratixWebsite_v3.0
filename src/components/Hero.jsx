import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070',
      alt: 'San Francisco Golden Gate Bridge'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2044',
      alt: 'Chicago Skyline'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070',
      alt: 'London Eye'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094',
      alt: 'Tokyo Tower'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070',
      alt: 'New York Flatiron Building'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-overlay"></div>
          </div>
        ))}
      </div>

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

      <div className="carousel-controls">
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="carousel-pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

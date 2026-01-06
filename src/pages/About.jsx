import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <section className="page-hero about-hero">
          <div className="container">
            <span className="section-tag">Our Story</span>
            <h1 className="page-title">About Buddha Bath</h1>
            <p className="page-subtitle">Redefining personal hygiene through intelligent design and Japanese precision engineering.</p>
          </div>
        </section>

        <section className="about-story">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2 className="story-title">The Future of Personal Hygiene</h2>
                <p>Buddha Bath was founded on a simple truth: the intelligent toilet represents one of the most significant advances in personal hygiene since indoor plumbing.</p>
                <p>We are exclusive distributors of Japan's finest bathroom technology—intelligent toilets, advanced bidet systems, and premium fixtures that have been standard in Japanese homes for decades. Now, we bring this elevated experience to discerning clients worldwide.</p>
                <p>Each product in our collection represents the pinnacle of engineering: self-cleaning surfaces, heated seats, precision water control, and intuitive automation that transforms a daily necessity into a moment of genuine comfort.</p>
              </div>
              <div className="story-image">
                <img src="/product1.png" alt="Buddha Bath Philosophy" />
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2 className="values-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <span className="value-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <path d="M9 9h.01M15 9h.01"/>
                  </svg>
                </span>
                <h3>Sustainability</h3>
                <p>Water conservation and eco-friendly materials in every design.</p>
              </div>
              <div className="value-card">
                <span className="value-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </span>
                <h3>Excellence</h3>
                <p>Only the finest products meet our exacting standards.</p>
              </div>
              <div className="value-card">
                <span className="value-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </span>
                <h3>Mindfulness</h3>
                <p>Designing experiences that promote well-being and serenity.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

import React from 'react';
import Navbar from '../components/Navbar';
import { Droplets, Zap, Sparkles, Wind, CloudRain, Sun } from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      name: 'WASHLET® Technology',
      description: 'The ultimate in comfort and hygiene, featuring adjustable warm water sprays, integrated air drying, and heated seats.',
      icon: Droplets
    },
    {
      name: 'EWATER+',
      description: 'Electrolyzed water naturally cleans the wand and bowl after every use, reducing the need for harsh chemicals.',
      icon: Zap
    },
    {
      name: 'CEFIONTECT®',
      description: 'Ultra-smooth ceramic glaze that prevents debris and mold from sticking to ceramic surfaces.',
      icon: Sparkles
    },
    {
      name: 'TORNADO FLUSH®',
      description: 'Powerful dual-nozzle flushing system that creates a whirlpool to thoroughly clean the bowl.',
      icon: Wind
    },
    {
      name: 'PREMIST®',
      description: 'Automatic misting system that wets the bowl before use, preventing waste from adhering to surfaces.',
      icon: CloudRain
    },
    {
      name: 'ACTILIGHT®',
      description: 'UV light technology combined with photocatalyst coating that breaks down waste and keeps the bowl clean.',
      icon: Sun
    }
  ];

  return (
    <>
      <Navbar />
      <main className="page-content">
        <section className="page-hero tech-hero">
          <div className="container">
            <span className="section-tag">Innovation</span>
            <h1 className="page-title">Technology</h1>
            <p className="page-subtitle">Decades of Japanese engineering excellence, pushing the boundaries of comfort, hygiene, and sustainability.</p>
          </div>
        </section>

        <section className="tech-grid-section">
          <div className="container">
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-icon">
                    <tech.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="tech-name">{tech.name}</h3>
                  <p className="tech-description">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tech-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Years of Innovation</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50M+</span>
                <span className="stat-label">WASHLET® Units Sold</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4,500+</span>
                <span className="stat-label">Patents Worldwide</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Technology;

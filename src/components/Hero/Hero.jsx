import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="badge">EST. 2026</span>
          <h1>
            Taste the <br />
            <span className="gold-text">Extraordinary</span>
          </h1>
          <p>
            Experience culinary perfection where tradition meets innovation. 
            Every dish tells a story of passion, flavor, and elegance.
          </p>
          <button className="cta-btn">View Menu</button>
        </div>
        <div className="hero-image-wrapper">
          <div className="gold-frame"></div>
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" 
            alt="Signature Dish" 
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
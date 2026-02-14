import React from 'react';
import './Story.css';

const Story = () => {
  return (
    <section className="story-section" id="story">
      <div className="story-container">
        <div className="story-content">
          <span className="subtitle">Our Heritage</span>
          <h2>A Legacy of <span className="gold-text">Excellence</span></h2>
          <p>
            Founded in 1998, Golden Fork began with a singular vision: to create a dining experience that transcends the ordinary.
            What started as a humble passion for authentic flavors has evolved into a sanctuary for culinary artistry.
          </p>
          <p>
            Our chefs meticulously source the finest ingredients from around the globe, ensuring that every plate served is a testament to quality and innovation.
            We believe that food is not just sustenance, but a journey of the senses.
          </p>
          <div className="signature">
            <p>Chef Alexander Sterling</p>
          </div>
        </div>
        <div className="story-image">
           <div className="image-frame"></div>
           <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" 
            alt="Chef plating a dish" 
            loading="lazy"
           />
        </div>
      </div>
    </section>
  );
};

export default Story;
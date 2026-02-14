import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-container">
        <div className="quote-icon">“</div>
        <blockquote>
          An absolute masterpiece of dining. The atmosphere, the service, and above all, the food, creates an experience that transcends the ordinary.
        </blockquote>
        <div className="stars">★★★★★</div>
        <cite>— Jonathan Gold, Food Critic</cite>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      id: 1,
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role'),
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=200&auto=format&fit=crop",
      text: t('testimonials.1.text'),
      rating: 5
    },
    {
      id: 2,
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      text: t('testimonials.2.text'),
      rating: 5
    },
    {
      id: 3,
      name: t('testimonials.3.name'),
      role: t('testimonials.3.role'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      text: t('testimonials.3.text'),
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleFlip();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleFlip = () => {
    setIsFlipping(true);

    // Change content halfway through the animation
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 300);

    // End animation
    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials">
      <div className={`testimonial-card ${isFlipping ? 'flipping' : ''}`}>
        <div className="quote-icon">“</div>
        <blockquote>
          {current.text}
        </blockquote>
        <div className="stars">
          {[...Array(current.rating)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <div className="customer-profile">
          <img src={current.image} alt={current.name} className="profile-img" />
          <div className="profile-info">
            <cite>{current.name}</cite>
            <span className="role">{current.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
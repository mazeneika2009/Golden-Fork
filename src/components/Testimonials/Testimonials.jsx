import React from 'react';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonials">
      <div className="testimonial-container">
        <div className="quote-icon">“</div>
        <blockquote>
          {t('testimonials.quote')}
        </blockquote>
        <div className="stars">★★★★★</div>
        <cite>{t('testimonials.cite')}</cite>
      </div>
    </section>
  );
};

export default Testimonials;
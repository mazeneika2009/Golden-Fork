import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="badge">{t('hero.badge')}</span>
          <h1>
            <Trans i18nKey="hero.title">
              Taste the <br /><span className="gold-text">Extraordinary</span>
            </Trans>
          </h1>
          <p>
            {t('hero.description')}
          </p>
          <button className="cta-btn">{t('hero.cta')}</button>
        </div>
        <div className="hero-image-wrapper">
          <div className="gold-frame"></div>
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" 
            alt={t('hero.imageAlt')} 
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
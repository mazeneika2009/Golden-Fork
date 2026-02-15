import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './Story.css';

const Story = () => {
  const { t } = useTranslation();

  return (
    <section className="story-section" id="story">
      <div className="story-container">
        <div className="story-content">
          <span className="subtitle">{t('story.subtitle')}</span>
          <h2>
            <Trans i18nKey="story.title">
              A Legacy of <span className="gold-text">Excellence</span>
            </Trans>
          </h2>
          <p>
            {t('story.p1')}
          </p>
          <p>
            {t('story.p2')}
          </p>
          <div className="signature">
            <p>{t('story.signature')}</p>
          </div>
        </div>
        <div className="story-image">
           <div className="image-frame"></div>
           <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" 
            alt={t('story.imageAlt')} 
            loading="lazy"
           />
        </div>
      </div>
    </section>
  );
};

export default Story;
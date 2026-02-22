import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="contact">
      < div className="footer-container">
        <div className="footer-col">
          <h4>{t('footer.brand')}</h4>
          <p>{t('footer.tagline')}</p>
        </div>
        <div className="footer-col">
          <h4>{t('footer.contactTitle')}</h4>
          <p>{t('footer.address')}</p>
          <p>+1 (212) 555-0199</p>
          <p>{t('footer.email')}</p>
        </div>
        <div className="footer-col">
          <h4>{t('footer.hoursTitle')}</h4>
          <p>{t('footer.hours')}</p>
          <p>{t('footer.happyHour')}</p>
        </div>
        <div className="footer-col">
          <h4>{t('footer.staff')}</h4>
          <p><Link to="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>{t('footer.admin')}</Link></p>
          <p><Link to="/kitchen" style={{ color: 'inherit', textDecoration: 'none' }}>{t('footer.kitchen')}</Link></p>
          <p><Link to="/cashier" style={{ color: 'inherit', textDecoration: 'none' }}>{t('footer.cashier')}</Link></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = ({ onReserve, cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [bump, setBump] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (cartCount === 0) return;
      setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [cartCount]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">{t('nav.logo')}</div>
        
        {/* Hamburger Icon */}
        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Mobile Menu Wrapper */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#menu" onClick={closeMenu}>{t('nav.menu')}</a></li>
            <li><a href="#story" onClick={closeMenu}>{t('nav.story')}</a></li>
            <li><a href="#contact" onClick={closeMenu}>{t('nav.contact')}</a></li>
          </ul>
          <div className="nav-buttons">
          <button className="lang-btn" onClick={toggleLanguage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            {i18n.language === 'ar' ? 'EN' : 'AR'}
          </button>
          <button className="cart-btn" onClick={() => { onOpenCart(); closeMenu(); }}>
            <div className="cart-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cart-icon">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartCount > 0 && <span key={cartCount} className={`cart-badge ${bump ? 'bump' : ''}`}>{cartCount}</span>}
            </div>
            {t('nav.cart')}
          </button>
          <button className="reserve-btn" onClick={() => { onReserve(); closeMenu(); }}>{t('nav.reserve')}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
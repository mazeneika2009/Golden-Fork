import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-col">
          <h4>Golden Fork</h4>
          <p>Luxury Dining Experience</p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>123 Culinary Ave, New York, NY</p>
          <p>+1 (212) 555-0199</p>
          <p>reservations@goldenfork.com</p>
        </div>
        <div className="footer-col">
          <h4>Hours</h4>
          <p>Mon-Sun: 5pm - 11pm</p>
          <p>Happy Hour: 5pm - 7pm</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Golden Fork. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
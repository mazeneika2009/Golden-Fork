import React from 'react';
import { useTranslation } from 'react-i18next';
import './ReservationModal.css';

const ReservationModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the API call here
    alert(t('reservation.successMessage'));
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{t('reservation.title')}</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-input" placeholder={t('reservation.fullName')} required />
          </div>
          <div className="form-group">
            <input type="email" className="form-input" placeholder={t('reservation.email')} required />
          </div>
          <div className="form-group">
            <input type="tel" className="form-input" placeholder={t('reservation.phone')} required />
          </div>
          <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="input-wrapper">
              <label htmlFor="date" className="form-label">{t('reservation.date')}</label>
              <input type="date" id="date" className="form-input" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="time" className="form-label">{t('reservation.time')}</label>
              <input type="time" id="time" className="form-input" required />
            </div>
          </div>
          <div className="form-group">
            <input type="number" className="form-input" placeholder={t('reservation.guests')} min="1" max="20" required />
          </div>
          <button type="submit" className="submit-btn">{t('reservation.confirm')}</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
import React from 'react';
import './ReservationModal.css';

const ReservationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the API call here
    alert('Thank you! Your reservation request has been received.');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Reserve a Table</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-input" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="tel" className="form-input" placeholder="Phone Number" required />
          </div>
          <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="input-wrapper">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" id="date" className="form-input" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="time" className="form-label">Time</label>
              <input type="time" id="time" className="form-input" required />
            </div>
          </div>
          <div className="form-group">
            <input type="number" className="form-input" placeholder="Number of Guests" min="1" max="20" required />
          </div>
          <button type="submit" className="submit-btn">Confirm Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
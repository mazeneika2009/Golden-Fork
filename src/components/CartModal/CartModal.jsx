import React from 'react';
import { useTranslation } from 'react-i18next';
import './CartModal.css';

const CartModal = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{t('cart.title')}</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">{t('cart.empty')}</p>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p>{item.price}</p>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>&times;</button>
              </div>
            ))}
          </div>
        )}
        <div className="cart-footer">
            <div className="cart-total">
                <span>{t('cart.total')}:</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" disabled={cartItems.length === 0}>{t('cart.checkout')}</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
import React from 'react';
import './CartModal.css';

const CartModal = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Your Order</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
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
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" disabled={cartItems.length === 0}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
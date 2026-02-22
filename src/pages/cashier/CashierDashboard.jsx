// c:\Users\PC\Desktop\ALL PROJECTS\Golden Fork\src\pages\cashier\CashierDashboard.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CashierDashboard.css';

const MENU_ITEMS = [
  { id: 1, name: 'Burger', price: 12.00 },
  { id: 2, name: 'Pizza', price: 15.00 },
  { id: 3, name: 'Salad', price: 10.00 },
  { id: 4, name: 'Fries', price: 5.00 },
  { id: 5, name: 'Steak', price: 25.00 },
  { id: 6, name: 'Coke', price: 2.00 },
  { id: 7, name: 'Tiramisu', price: 8.00 },
];

export default function CashierDashboard() {
  const [cart, setCart] = useState([]);

  const addToOrder = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromOrder = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cashier-dashboard">
      {/* Sidebar / Navigation */}
      <div className="cashier-sidebar">
        <h1>POS System</h1>
        <nav>
          <button className="sidebar-button-active">New Order</button>
          <Link to="/cashier/history" className="sidebar-link">History</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="main-grid">
          {/* Menu Grid */}
          <div className="menu-grid-container">
            <h2>Menu</h2>
            <div className="menu-items-grid">
              {MENU_ITEMS.map((item) => (
                <div key={item.id} className="menu-item" onClick={() => addToOrder(item)}>
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Order */}
          <div className="current-order-container">
            <h2>Current Order</h2>
            <div className="order-items-list">
              {cart.length === 0 ? (
                <p className="no-items-text">No items added</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="order-item"
                  >
                    <span className="order-item-name">
                      {item.quantity}x {item.name}
                    </span>
                    <div className="order-item-right">
                      <span className="order-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                      <button 
                        className="delete-item-button"
                        onClick={() => removeFromOrder(item.id)}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="total-container">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// c:/Users/PC/Desktop/ALL PROJECTS/Golden Fork/src/pages/kitchen/KitchenDisplay.jsx
import React, { useState } from 'react';
import './KitchenDisplay.css';

export default function KitchenDisplay() {
  const [orders, setOrders] = useState([
    {
      id: 101,
      time: '12:30 PM',
      items: [
        { name: 'Cheese Burger', quantity: 2 },
        { name: 'French Fries', quantity: 1 }
      ]
    },
    {
      id: 102,
      time: '12:32 PM',
      items: [
        { name: 'Pepperoni Pizza', quantity: 1 },
        { name: 'Coke', quantity: 2 }
      ]
    },
    {
      id: 103,
      time: '12:35 PM',
      items: [
        { name: 'Caesar Salad', quantity: 1 },
        { name: 'Grilled Chicken', quantity: 1 },
        { name: 'Water', quantity: 1 }
      ]
    },
    {
      id: 104,
      time: '12:38 PM',
      items: [
        { name: 'Tacos', quantity: 3 },
        { name: 'Nachos', quantity: 1 }
      ]
    }
  ]);

  const handleMarkReady = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div className="kitchen-display">
      <header className="kitchen-header">
        <h1>Kitchen Display System (KDS)</h1>
        <span className="live-badge">Live</span>
      </header>
      
      <div className="orders-grid">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-card-header">
              <span className="order-id">Order #{order.id}</span>
              <span className="order-time">{order.time}</span>
            </div>
            <ul className="order-items">
              {order.items.map((item, index) => (
                <li key={index}>
                  <span>{item.quantity}x {item.name}</span>
                </li>
              ))}
            </ul>
            <button 
              className="mark-ready-button"
              onClick={() => handleMarkReady(order.id)}
            >
              Mark Ready
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

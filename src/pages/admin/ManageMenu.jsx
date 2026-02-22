// c:/Users/PC/Desktop/ALL PROJECTS/Golden Fork/src/pages/admin/ManageMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../cashier/SubPage.css';

const FAKE_MENU_ITEMS = [
  { id: 1, name: 'Classic Burger', price: 12.50, category: 'Mains' },
  { id: 2, name: 'Margherita Pizza', price: 15.00, category: 'Mains' },
  { id: 3, name: 'Caesar Salad', price: 10.00, category: 'Appetizers' },
  { id: 4, name: 'French Fries', price: 5.00, category: 'Sides' },
  { id: 5, name: 'Ribeye Steak', price: 28.00, category: 'Mains' },
  { id: 6, name: 'Coca-Cola', price: 2.50, category: 'Drinks' },
  { id: 7, name: 'Tiramisu', price: 8.00, category: 'Desserts' },
];

export default function ManageMenu() {
  const [menuItems, setMenuItems] = useState(FAKE_MENU_ITEMS);

  const handleDelete = (itemId) => {
    setMenuItems(menuItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="subpage-container">
      <div className="back-link-container">
        <Link to="/admin" className="back-link">&larr; Back to Dashboard</Link>
      </div>
      <h1>Manage Menu</h1>
      <div className="content-box">
        <div className="menu-form-container">
          <h3>Add New Item</h3>
          <form className="menu-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Item Name</label>
                <input type="text" id="name" placeholder="e.g., Classic Burger" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" placeholder="e.g., 12.50" step="0.01" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category">
                  <option>Mains</option>
                  <option>Appetizers</option>
                  <option>Sides</option>
                  <option>Drinks</option>
                  <option>Desserts</option>
                </select>
              </div>
            </div>
            <button type="submit" className="form-submit-btn">Add Item</button>
          </form>
        </div>

        <table className="transaction-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">Edit</button>
                    <button className="action-btn delete" onClick={() => handleDelete(item.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// c:/Users/PC/Desktop/ALL PROJECTS/Golden Fork/src/pages/admin/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-grid">
        <Link to="/admin/menu" className="dashboard-card">
          <h2 className="menu-link">Manage Menu</h2>
          <p>Add, update, or remove items from the menu.</p>
        </Link>
        <Link to="/admin/orders" className="dashboard-card">
          <h2 className="orders-link">Order History</h2>
          <p>View all past orders and analytics.</p>
        </Link>
      </div>
    </div>
  );
}

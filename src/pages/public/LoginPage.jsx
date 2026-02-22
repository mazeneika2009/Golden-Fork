// c:\Users\PC\Desktop\ALL PROJECTS\Golden Fork\src\pages\public\LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  const [role, setRole] = useState('admin');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple demo login logic
    if (role === 'admin') navigate('/admin');
    else if (role === 'kitchen') navigate('/kitchen');
    else if (role === 'cashier') navigate('/cashier');
  };

  return (
    <div className="login-page-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>
        <div className="form-group">
          <label>Select Role (Demo)</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="kitchen">Kitchen</option>
            <option value="cashier">Cashier</option>
          </select>
        </div>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './src/i18n';

// Public Pages
import HomePage from './src/pages/public/HomePage';
import LoginPage from './src/pages/public/LoginPage';

// Admin Pages
import AdminDashboard from './src/pages/admin/AdminDashboard';
import ManageMenu from './src/pages/admin/ManageMenu';
import AllOrders from './src/pages/admin/AllOrders';

// Kitchen Pages
import KitchenDisplay from './src/pages/Kitchen/KitchenDisplay';

// Cashier Pages
import CashierDashboard from './src/pages/cashier/CashierDashboard.jsx';
import TransactionHistory from './src/pages/cashier/TransactionHistory';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/menu" element={<ManageMenu />} />
      <Route path="/admin/orders" element={<AllOrders />} />

      {/* Kitchen Routes */}
      <Route path="/kitchen" element={<KitchenDisplay />} />

      {/* Cashier Routes */}
      <Route path="/cashier" element={<CashierDashboard />} />
      <Route path="/cashier/history" element={<TransactionHistory />} />

    
    </Routes>
  );
}

export default App;

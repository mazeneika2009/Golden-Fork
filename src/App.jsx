import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18n';

// Public Pages
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/public/LoginPage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageMenu from './pages/admin/ManageMenu';
import AllOrders from './pages/admin/AllOrders';

// Kitchen Pages
import KitchenDisplay from './pages/Kitchen/KitchenDisplay';

// Cashier Pages
import CashierDashboard from './pages/Cashier/CashierDashboard';
import TransactionHistory from './pages/Cashier/TransactionHistory';

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

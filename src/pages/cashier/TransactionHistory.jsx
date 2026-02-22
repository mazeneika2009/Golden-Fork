// c:\Users\PC\Desktop\ALL PROJECTS\Golden Fork\src\pages\cashier\TransactionHistory.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './SubPage.css';

const FAKE_TRANSACTIONS = [
  { id: 'TXN-001', time: '10:30 AM', total: 24.00, items: '2x Burger', status: 'Completed' },
  { id: 'TXN-002', time: '11:15 AM', total: 15.00, items: '1x Pizza', status: 'Completed' },
  { id: 'TXN-003', time: '12:45 PM', total: 35.00, items: '1x Steak, 1x Salad', status: 'Completed' },
  { id: 'TXN-004', time: '01:20 PM', total: 12.00, items: '1x Burger', status: 'Refunded' },
  { id: 'TXN-005', time: '02:00 PM', total: 8.00, items: '1x Tiramisu', status: 'Completed' },
];

export default function TransactionHistory() {
  return (
    <div className="subpage-container">
      <div className="back-link-container">
        <Link to="/cashier" className="back-link">&larr; Back to POS</Link>
      </div>
      <h1>Transaction History</h1>
      <div className="content-box">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Time</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {FAKE_TRANSACTIONS.map((txn) => (
              <tr key={txn.id}>
                <td>{txn.id}</td>
                <td>{txn.time}</td>
                <td>{txn.items}</td>
                <td>${txn.total.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${txn.status.toLowerCase()}`}>
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// c:/Users/PC/Desktop/ALL PROJECTS/Golden Fork/src/pages/admin/AllOrders.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../cashier/SubPage.css";

const FAKE_ORDERS = [
  {
    id: "ORD-001",
    date: new Date(),
    customer: "John Doe",
    total: 45.5,
    status: "Completed",
  },
  {
    id: "ORD-002",
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    customer: "Jane Smith",
    total: 22.0,
    status: "Completed",
  },
  {
    id: "ORD-003",
    date: new Date(new Date().setDate(new Date().getDate() - 5)),
    customer: "Peter Jones",
    total: 18.75,
    status: "Completed",
  },
  {
    id: "ORD-004",
    date: new Date(new Date().setDate(new Date().getDate() - 10)),
    customer: "Mary Brown",
    total: 55.0,
    status: "Completed",
  },
  {
    id: "ORD-005",
    date: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    customer: "Chris Green",
    total: 32.25,
    status: "Refunded",
  },
  {
    id: "ORD-006",
    date: new Date(new Date().setMonth(new Date().getMonth() - 2)),
    customer: "Patricia White",
    total: 19.0,
    status: "Completed",
  },
  {
    id: "ORD-007",
    date: new Date(),
    customer: "Sam Wilson",
    total: 8.0,
    status: "Completed",
  },
];

export default function AllOrders() {
  const [filter, setFilter] = useState("all");
  const [filteredOrders, setFilteredOrders] = useState(FAKE_ORDERS);

  useEffect(() => {
    const now = new Date();
    let filtered;

    switch (filter) {
      case "day":
        filtered = FAKE_ORDERS.filter((order) => {
          const orderDate = new Date(order.date);
          return (
            orderDate.getDate() === now.getDate() &&
            orderDate.getMonth() === now.getMonth() &&
            orderDate.getFullYear() === now.getFullYear()
          );
        });
        break;
      case "week":
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        oneWeekAgo.setHours(0, 0, 0, 0);
        filtered = FAKE_ORDERS.filter(
          (order) => new Date(order.date) >= oneWeekAgo,
        );
        break;
      case "month":
        filtered = FAKE_ORDERS.filter((order) => {
          const orderDate = new Date(order.date);
          return (
            orderDate.getMonth() === now.getMonth() &&
            orderDate.getFullYear() === now.getFullYear()
          );
        });
        break;
      default: // 'all'
        filtered = FAKE_ORDERS;
        break;
    }
    setFilteredOrders(filtered);
  }, [filter]);

  return (
    <div className="subpage-container">
      <div className="back-link-container">
        <Link to="/admin" className="back-link">
          &larr; Back to Dashboard
        </Link>
      </div>
      <h1>All Orders</h1>
      <div className="content-box">
        <div className="filter-controls">
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => setFilter("day")}
            className={filter === "day" ? "active" : ""}
          >
            Today
          </button>
          <button
            onClick={() => setFilter("week")}
            className={filter === "week" ? "active" : ""}
          >
            This Week
          </button>
          <button
            onClick={() => setFilter("month")}
            className={filter === "month" ? "active" : ""}
          >
            This Month
          </button>
        </div>
        {filteredOrders.length > 0 ? (
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>{order.customer}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <span
                      className={`status-badge ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders found for this period.</p>
        )}
      </div>
    </div>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

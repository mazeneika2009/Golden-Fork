import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./CartContext"; // ✅ IMPORT THIS
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* ✅ WRAP HERE */}
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './context/CartContext';
import router from './router';
import { BrowserRouter } from 'react-router-dom'; // ✅ ADD THIS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter basename="/ecommerce-app"> {/* ✅ Wrap with this */}
        <RouterProvider router={router} />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

import { RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './context/CartContext';
import router from './router'; // ✅ router.jsx ko import kara




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
<RouterProvider router={router} />
      
    </CartProvider>
  </React.StrictMode>
);



import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from "./context/AuthContext";

import './index.css';
import HomePage from './Landing_page/home/HomePage';
import SignUp from './Landing_page/signup/SignUp';
import Login from './Landing_page/login/Login';          
import AboutPage from './Landing_page/about/AboutPage';
import ProductPage from './Landing_page/products/ProductPage';
import PricingPage from './Landing_page/pricing/PricingPage';
import SupportPage from './Landing_page/support/SupportPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';


function Dashboard() {
  return <h2 style={{ padding: 20 }}>Welcome to your Dashboard!</h2>;
}


function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);
  if (!token) {
    // Not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        
        {/* Protected dashboard route */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AuthProvider>
);

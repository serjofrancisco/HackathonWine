import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import CompraFeita from './pages/CompraFeita';

export default function RoutePaths() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/loja" element={<StorePage />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/finalizada" element={<CompraFeita />} />
    </Routes>
  );
}

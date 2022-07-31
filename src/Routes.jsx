import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';

import Checkout from './pages/Checkout';
import CompraFeita from './pages/CompraFeita';

import PaginaConstrucao from './components/paginaConstrucao';


export default function RoutePaths() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/loja" element={<StorePage />} />
      <Route exact path="/cart" element={<CartPage />} />

      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/finalizada" element={<CompraFeita />} />

      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="/clube" element={<PaginaConstrucao />} />
      <Route exact path="/produtores" element={<PaginaConstrucao />} />
      <Route exact path="/ofertas" element={<PaginaConstrucao />} />

    </Routes>
  );
}

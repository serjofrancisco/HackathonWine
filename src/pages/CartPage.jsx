import React from 'react';
import { mapWines } from '../helpers/helpersWines';
import WineCard from '../components/WineCard';
export default function CartPage() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));

  return <div>{mapWines(cartItems, WineCard, 100, true)}</div>;
}

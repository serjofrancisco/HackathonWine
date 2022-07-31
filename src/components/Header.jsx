import React from 'react';
import './styles/Header.css';
import wineLogo from '../images/wine.svg';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import wineCart from '../images/wine-cart.svg';
import cartFull from '../images/cart-full.png';

function Header() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  return (
    <header className="container-geral-header" data-testid="header">
      <div className="header-left">
        <Link to="/">
          <img className="header-logo-wine" alt="Wine" src={wineLogo} />
        </Link>
        <Link to="/clube">
          <span>Clube</span>
        </Link>
        <Link to="/loja">
          <span>Loja</span>
        </Link>
        <Link to="/">
          <span>Produtores</span>
        </Link>
        <Link to="/">
          <span>Ofertas</span>
        </Link>
      </div>
      <div className="header-rigth">
        <BsSearch />
        <Link to="/carrinho">
          <img alt="carrinho" src={cartItems ? cartFull : wineCart} className="cart-icon" />
        </Link>
        <button className="btn-login">Login</button>
      </div>
    </header>
  );
}

export default Header;
